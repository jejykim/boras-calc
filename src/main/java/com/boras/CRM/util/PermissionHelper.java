package com.boras.CRM.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.boras.CRM.controller.LoginController;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.vo.UserVO;

@Component
public class PermissionHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(PermissionHelper.class);
	
	private static final String LOGIN_YN = "loginYn";
	private static final String USER_ID = "userId";
	private static final String USER_NAME = "userName";
	private static final String PERMISSION_LEVEL = "permissionLevel";
	
	private static final String[] AG_LEVEL_3_PERMISSON_URL_LIST = {
			"/ag/ledger/list"
			, "/ag/calc/list"
			, "/v1/api/ledger/financial/"
			, "/v1/api/approval/request"
			, "/v1/api/code/select"
			, "/v1/api/ledger/dealer/update"
			};
	private static final String[] AG_LEVEL_2_PERMISSON_URL_LIST = {
			"/ag/ledger/list"
			, "/ag/calc/list"
			, "/v1/api/ledger/financial/"
			, "/v1/api/approval/request"
			, "/v1/api/code/select"
			, "/v1/api/ledger/dealer/update"
			};
	private static final String[] AG_LEVEL_1_PERMISSON_URL_LIST = {
			"/ag/calc/list"
			};
	
	private static final String[] ADMIN_NORMAL_PERMISSON_URL_LIST = { "/" };
	
	// 로그인 세션 설정
	public static void setLoginSession(HttpServletRequest req, UserVO userVO) {
		req.getSession().setAttribute(USER_ID, userVO.getUserId());
		req.getSession().setAttribute(USER_NAME, userVO.getUserName());
		req.getSession().setAttribute(PERMISSION_LEVEL, userVO.getUserPermissionCd());
		req.getSession().setAttribute(LOGIN_YN, "Y");
		
		JSONObject detailJobj = new JSONObject();
		
		detailJobj.put(USER_NAME, userVO.getUserName());
		detailJobj.put(PERMISSION_LEVEL, userVO.getUserPermissionCd());
		
		WebSessionListener.userList.put(userVO.getUserId(), detailJobj);
	}
	
	// 세션 확인
	public static boolean checkUserSession(HttpServletRequest req) {
		boolean flag = false;
		
		try {
			String loginYn = req.getSession().getAttribute(LOGIN_YN).toString();
			if(!loginYn.isEmpty()) {
				if(loginYn.equalsIgnoreCase("Y")) {
					flag = true;
				}
			}
		}catch (Exception e) {
			flag = false;
		}
		
		return flag;
	}
	
	// 세션 사용자 ID 추출
	public static String getSessionUserId(HttpServletRequest req) {
		String userId = "";
		
		try {
			if(checkUserSession(req)) {
				userId = req.getSession().getAttribute(USER_ID).toString();
			}
		} catch (Exception e) {
			userId = "";
		}
		
		return userId;
	}
	
	// 세션 사용자 이름 추출
	public static String getSessionUserName(HttpServletRequest req) {
		String userName = "";
		
		try {
			if(checkUserSession(req)) {
				userName = req.getSession().getAttribute(USER_NAME).toString();
			}
		} catch (Exception e) {
			userName = "";
		}
		
		return userName;
	}
	
	// 세션 사용자 권한 레벨 추출
	public static int getSessionUserPermissionLevel(HttpServletRequest req) {
		int permissionLevel = -1;
		
		try {
			if(checkUserSession(req)) {
				permissionLevel = (int) req.getSession().getAttribute(PERMISSION_LEVEL);
			}
		} catch (Exception e) {
			permissionLevel = -1;
		}
		
		return permissionLevel;
	}
	
	// IP 추출
	public static String getIP(HttpServletRequest request) {
		try {
			return request.getRemoteAddr();
		} catch(Exception e) {
			 
			return "";
		}
	}
	
	// 로컬 접속
	public static boolean isLocalhost(HttpServletRequest request) {
		String[] arr = {"0:0:0:0:0:0:0:1", "127.0.0.1", "localhost"};
		boolean bRetval = false;
		String myIP = getIP(request);
		
		for(int i = 0; i<arr.length; i++) {
			if(arr[i].equals(myIP)) {
				bRetval = true;
				break;
			}
		}
		
		return bRetval;
	}
	
	// 접속 권한 check (total)
	public static boolean checkPermission(HttpServletResponse resp, HttpServletRequest req, String uri) {
		boolean bRetval = false;
		PrintWriter printwriter;
		if(isLocalhost(req)) {
			bRetval = true;
		}else{
			if(uri.equals("/") || uri.contains("login") || uri.contains("logout") || uri.contains("find/password") || uri.contains("singup")) {
				bRetval = true;
			}else if(getSessionUserPermissionLevel(req) == 0) {
				req.getSession().invalidate();
				try {
					printwriter = resp.getWriter();
					printwriter.print("<script>alert('신규 가입자는 관리자 승인 후 이용 가능합니다.\\n일정 기간동안 미승인일 경우 관리자에게 문의 부탁드립니다.'); location.href='/';</script>");
					printwriter.flush();
					printwriter.close();
				} catch (IOException e) {
					logger.error(e.getMessage());
				}
			}else {
				if(checkUserSession(req)) {
					if(checkPermissionLevel(req, uri)) {
						bRetval = true;
					}else {
						try {
							printwriter = resp.getWriter();
							printwriter.print("<script>alert('접근 권한이 없습니다.'); history.back();</script>");
							printwriter.flush();
							printwriter.close();
						} catch (IOException e) {
							logger.error(e.getMessage());
						}
					}
				}else {
					req.getSession().invalidate();
					try {
						printwriter = resp.getWriter();
						printwriter.print("<script>alert('로그인이 필요한 서비스 입니다.'); location.href='/';</script>");
						printwriter.flush();
						printwriter.close();
					} catch (IOException e) {
						logger.error(e.getMessage());
					}
				}
			}
		}
		return bRetval;
	}
	
	// 권한 level check
	public static boolean checkPermissionLevel(HttpServletRequest req, String uri) {
		boolean bRetval = false;
		
		int iPermissionLevel = getSessionUserPermissionLevel(req);
		
		switch (iPermissionLevel) {
			// 슈퍼관리자
			case 1100:
				bRetval = true;
				break;
			// 일반관리자
			case 1101:
				for(String strUri : ADMIN_NORMAL_PERMISSON_URL_LIST) {
					if(uri.contains(strUri)) {
						bRetval = true;
						break;
					}
				}
				break;
			// level1AG - 최하위
			case 1200:
				for(String strUri : AG_LEVEL_1_PERMISSON_URL_LIST) {
					if(uri.contains(strUri)) {
						bRetval = true;
						break;
					}
				}
				break;
			// level2AG - 중간
			case 1201:
				for(String strUri : AG_LEVEL_2_PERMISSON_URL_LIST) {
					if(uri.contains(strUri)) {
						bRetval = true;
						break;
					}
				}
				break;
			// level3AG - 최상위
			case 1202:
				for(String strUri : AG_LEVEL_3_PERMISSON_URL_LIST) {
					if(uri.contains(strUri)) {
						bRetval = true;
						break;
					}
				}
				break;
			default:
				bRetval = false;
				break;
		}
		
		return bRetval;
	}
	
	// 관리자 유무
	public static boolean isAdmin(HttpServletRequest req) {
		return getSessionUserPermissionLevel(req) == 1100 || getSessionUserPermissionLevel(req) == 1101 ? true : false;
	}
	
	// 일반관리자 유무
	public static boolean isNormalAdmin(HttpServletRequest req) {
		return getSessionUserPermissionLevel(req) == 1101 ? true : false;
	}
	
	// level1AG 유무
	public static boolean isLevel1AG(HttpServletRequest req) {
		return getSessionUserPermissionLevel(req) == 1200 ? true : false;
	}
	
	// level2AG 유무
	public static boolean isLevel2AG(HttpServletRequest req) {
		return getSessionUserPermissionLevel(req) == 1201 ? true : false;
	}
	
	// level3AG 유무
	public static boolean isLevel3AG(HttpServletRequest req) {
		return getSessionUserPermissionLevel(req) == 1202 ? true : false;
	}
}