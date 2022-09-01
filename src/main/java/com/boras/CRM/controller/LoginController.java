package com.boras.CRM.controller;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.boras.CRM.services.BlockIdService;
import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.LoginService;
import com.boras.CRM.services.LogsService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.BlockHelper;
import com.boras.CRM.util.HashHelper;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.UserVO;

@Controller
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private LogsService logsService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	BlockIdService blockIdService;
	
	HashHelper hashHelper = new HashHelper();
	
	/**
	 * 로그인 페이지
	 */
	@GetMapping(value = "/login")
	public String login(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "login/login";
		
		if(PermissionHelper.checkUserSession(req)) {
			result = "redirect:/dashboard";
		}
    	
		return result;
	}
	
	/**
	 * 로그인 확인
	 */
	@PostMapping(value = "/login/check")
	public String loginCheck(Model model, HttpServletRequest req, HttpServletResponse resp
			, @ModelAttribute("userVO")UserVO userVO, RedirectAttributes redirectAttributes, @RequestParam(value="idSave", required=false) String idSave) {
		String result = "redirect:/login";
		
		int iResult = -1;
		
		String bfSaltPw = userVO.getUserPw();
		
		if(PermissionHelper.checkUserSession(req)) {
			result = "redirect:/";
		}else {
			if(userVO.getUserId().isEmpty() || userVO.getUserPw().isEmpty()) {
				iResult = 2;
			}else {
				logger.info("[ User ID : " + userVO.getUserId() + " ] Tried Login");
				
				int iCheck = 0;
				
				try {
					iCheck = userService.checkUserId(userVO);
				} catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : DB_checkUserId");
					logger.error(e.getMessage());
				}
				
				if(iCheck == 1) {
					boolean blockFlag = BlockHelper.isBlockId(blockIdService, req, resp, userVO.getUserId());
					
					if(blockFlag) {
						iResult = 4;
					}else {
						BlockHelper.setBlockId(blockIdService, req, resp, userVO.getUserId());
						
						String salt = null;
						
						try {
							salt = loginService.selectUserSalt(userVO);
						} catch (Exception e) {
							logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : DB_selectUserSalt");
							logger.error(e.getMessage());
						}
						
						if(salt != null) {
							try {
								userVO.setUserPw(new HashHelper().sha512(userVO.getUserPw(), salt));
							} catch (NoSuchAlgorithmException e) {
								logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : Hashing PW");
								logger.error(e.getMessage());
								
								iResult = 3;
							}
							
							if(iResult != 3) {
								iResult = loginService.login(userVO);
							}
						}
					}
				}else {
					iResult = 0;
				}
				
			}
			
			// 로그인 결과 여부
			switch (iResult) {
			case -1:
				logger.error("[ Login Result : " + iResult + " ] Login DB Connet Error!");
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS002", "[ Tried Login : " + userDTO.getUserId() + " ] Login DB Connet Error!", PermissionHelper.getIP(req));
				redirectAttributes.addFlashAttribute("errorMsg", "[ 서버 오류 ] 관리자에게 문의해주세요.");
				break;
			case 0:
				logger.warn("[ Login Result : " + iResult + " ] Not Exist ID or Password!");
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS002", "[ Tried Login : " + userDTO.getUserId() + " ] 등록되지 않은 아이디 또는 잘못된 비밀번호입니다", PermissionHelper.getIP(req));
				redirectAttributes.addFlashAttribute("errorMsg", "등록되지 않은 아이디 또는 잘못된 비밀번호입니다.");
				break;
			case 1:
				logger.info("[ ID : " + userVO.getUserId() + ", Login Result : " + iResult + " ] Login Success!");
				BlockHelper.resetBlockId(userVO.getUserId());
				
				// 마지막 로그인 정보
				userVO.setUserLastAccessIp(req.getRemoteAddr());
				try {
					loginService.loginDateUpdate(userVO);
				}catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : DB_loginDateUpdate ");
					logger.error(e.getMessage());
				}
				
				// 계정 정보 조회
				try {
					userVO = userService.selectUserInfo(userVO);
				}catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : DB_selectUserInfo ");
					logger.error(e.getMessage());
				}
				
				PermissionHelper.setLoginSession(req, userVO);
					
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS001", "", PermissionHelper.getIP(req));
				
				//idSave
				if(idSave != null) {
					Cookie cookie = new Cookie("userId", userVO.getUserId());
					cookie.setPath("/");
					cookie.setSecure(true);
					cookie.setMaxAge(60*60*60*24*30);
					resp.addCookie(cookie);
				}
				
				if(bfSaltPw.equals("boras1234!")) {
					result = "redirect:/change/password";
				}else {
					result = "redirect:/dashboard";
				}
				
				break;
			case 2:
				logger.warn("[ Login Result : " + iResult + " ] No Required ID or PW!");
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS002", "[ Tried Login : " + userDTO.getUserId() + " ] No Required ID or PW!", PermissionHelper.getIP(req));
				break;
			case 3:
				logger.error("[ Login Result : " + iResult + " ] ERROR : Hashing PW");
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS002", "[ Tried Login : " + userDTO.getUserId() + " ] ERROR : Hashing PW", PermissionHelper.getIP(req));
				redirectAttributes.addFlashAttribute("errorMsg", "[ 서버 오류 ] 관리자에게 문의해주세요.");
				break;
			case 4:
				logger.error("[ Login Result : " + iResult + " ] Blocked ID");
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS002", "[ Tried Login : " + userDTO.getUserId() + " ] ERROR : Hashing PW", PermissionHelper.getIP(req));
				redirectAttributes.addFlashAttribute("errorMsg", "차단된 계정입니다.\\n관리자에게 문의해주세요.");
				break;
			default:
				logger.error("[ Login Result : " + iResult + " ] Login DB Connet Error!");
				//LogHelper.insertLog(req, logsService, "LOG001", "LA004", "LS002", "[ Tried Login : " + userDTO.getUserId() + " ] ERROR : Login DB_Connet Error!", PermissionHelper.getIP(req));
				redirectAttributes.addFlashAttribute("errorMsg", "[ 서버 오류 ] 관리자에게 문의해주세요.");
				break;
			}
		}
		
		return result;
	}
	
	/**
	 * 로그아웃
	 */
	@GetMapping(value = "/logout")
	public String logout(HttpServletRequest req, HttpServletResponse resp) {
		// 계정 로그아웃
		if(PermissionHelper.checkUserSession(req)) {
			logger.info("[ Logout User ID : " + PermissionHelper.getSessionUserId(req) + " ]");
			//LogHelper.insertLog(req, logsService, "LOG001", "LA005", "LS001", "", PermissionHelper.getIP(req));
		}
		
		//로그아웃 유저 삭제
	    synchronized(WebSessionListener.userList){
	    	WebSessionListener.userList.remove(PermissionHelper.getSessionUserId(req));
	    }
	    
	    req.getSession().invalidate();
	    
		return "redirect:/login";
	}
	
	/**
	 * 비밀번호 찾기 페이지
	 */
	@GetMapping(value = "/find/password")
	public String findPassword(HttpServletRequest req, HttpServletResponse resp) {
		String result = "login/find-password";
	    
		return result;
	}
	
	/**
	 * 초기 비밀번호 변경 페이지
	 */
	@GetMapping(value = "/change/password")
	public String changePassword(HttpServletRequest req, HttpServletResponse resp) {
		String result = "login/change-password";
	    
		return result;
	}
	
	/**
	 * 초기 비밀번호 변경 완료
	 */
	@PostMapping(value = "/change/password/ok")
	public String changePasswordOk(HttpServletRequest req, HttpServletResponse resp
			, @RequestParam(value="userPw") String userPw, @RequestParam(value="userPwCheck") String userPwCheck) {
		String result = "redirect:/dashboard";
		
		if(userPw.equals(userPwCheck)) {
			UserVO userVO = new UserVO();
			userVO.setUserId(PermissionHelper.getSessionUserId(req));
			
			try {
				userVO = userService.selectUserInfo(userVO);
				
				userVO.setUserPw(hashHelper.sha512(userPw, userVO.getUserSalt()));
				
				userService.changeUserPw(userVO);
			} catch (Exception e) {
				logger.error(e.getMessage());
				result = "redirect:/logout";
			}
			
		}else {
			result = "redirect:/logout";
		}
	    
		return result;
	}
	
	/**
	 * 회원가입 페이지
	 */
	@GetMapping(value = "/singup")
	public String signup(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "login/signup";
		
		List<CodeVO> businessCodeList = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		
		// 금융사
		codeVO.setCodeParentId(5000);
		try {
			businessCodeList = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : businessCodeList ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("businessCodeList", businessCodeList);
	    
		return result;
	}
	
	/**
	 * 회원가입 완료
	 */
	@PostMapping(value = "/signup/ok")
	public String signupOk(Model model, HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
		String result = "redirect:/signup/done";
		
		userVO.setUserPermissionCd(0);
		userVO.setUserCodeCompanyCd(2001);
		
		try {
			String salt = hashHelper.makeSalt();
			
			userVO.setUserSalt(salt);
			userVO.setUserPw(hashHelper.sha512(userVO.getUserPw(), salt));
			
			userService.insertUser(userVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : insertUser ]");
			logger.error(e.getMessage());
		}
	    
		return result;
	}
	
	/**
	 * 회원가입 완료 페이지
	 */
	@GetMapping(value = "/signup/done")
	public String signupDone(HttpServletRequest req, HttpServletResponse resp) {
		String result = "login/signup-done";
	    
		return result;
	}
}