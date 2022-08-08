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
	
	private static final String[] ROOT_PERMISSON_URL_LIST = { "/user", "/code","/smtp", "/logs" };
			
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
	
	// 테스트 로그인 세션 설정
	public static void setTestLoginSession(HttpServletRequest req) {
		req.getSession().setAttribute(USER_ID, "dev");
		req.getSession().setAttribute(USER_NAME, "임시테스트");
		req.getSession().setAttribute(PERMISSION_LEVEL, 9999);
		req.getSession().setAttribute(LOGIN_YN, "Y");
		
		JSONObject detailJobj = new JSONObject();
		
		detailJobj.put(USER_NAME, "임시테스트");
		detailJobj.put(PERMISSION_LEVEL, "0000");
		
		WebSessionListener.userList.put("dev", detailJobj);
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
		int permissionLevel = 0;
		
		try {
			if(checkUserSession(req)) {
				permissionLevel = (int) req.getSession().getAttribute(PERMISSION_LEVEL);
			}
		} catch (Exception e) {
			permissionLevel = 0;
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
			if(uri.equals("/") || uri.contains("login")) {
				bRetval = true;
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
		if(getSessionUserPermissionLevel(req) > 0) {
			// 권한별 페이지 표기 추가해야함
			bRetval = true;
			for(String str : ROOT_PERMISSON_URL_LIST) {
				if(uri.contains(str)) {
					if(getSessionUserPermissionLevel(req) == 1) {
						bRetval = true;
					}
					break;
				}
			}
		}
		
		return bRetval;
	}
	
	//권한별 메뉴 다르게
}