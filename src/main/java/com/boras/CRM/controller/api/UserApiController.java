package com.boras.CRM.controller.api;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.LoginService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.util.EmailHelper;
import com.boras.CRM.util.HashHelper;
import com.boras.CRM.util.NonceHelper;
import com.boras.CRM.util.PasswordRole;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.UserVO;

@RestController
@RequestMapping("/v1/api/user")
public class UserApiController {

	private static final Logger logger = LoggerFactory.getLogger(UserApiController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private JavaMailSenderImpl mailSender;
	
	@Autowired
	private LoginService loginService;
	
	HashHelper hashHelper = new HashHelper();
	
	NonceHelper nonceHelper = new NonceHelper();
	
	EmailHelper emailHelper = new EmailHelper();
	
	@Value("${spring.mail.username}")
	String smtpId;
	
	@Value("${spring.mail.password}")
	String smtpPw;
	
	@Value("${spring.mail.host}")
	String smtpIp;
	
	@Value("${spring.mail.port}")
	String smtpPort;
	
	/**
	 * ????????? ??????
	 */
	@PostMapping(value = "/insert")
	public Map<String, Object> userInsert(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    userVO.setUserUseYn("Y");
	    userVO.setUserSalt(hashHelper.makeSalt());
	    
	    try {
			userVO.setUserPw(hashHelper.sha512("boras1234!", userVO.getUserSalt()));
		} catch (NoSuchAlgorithmException e1) {
			logger.error(e1.getMessage());
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
	    
	    if(userVO.getUserPw() != null) {
	    	try {
	    		userService.insertUser(userVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	} catch (Exception e) {
	    		logger.error(e.getMessage());
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    	}
	    }
		
		return rvt;
	}
	
	/**
	 * ????????? ??????
	 */
	@PostMapping(value = "/update")
	public Map<String, Object> userUpdate(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	userService.updateUser(userVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
	
	/**
	 * ????????? ????????????
	 */
	@PostMapping(value = "/disable")
	public Map<String, Object> userDisable(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	userService.updateUserUseN(userVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
	
	/**
	 * ????????? ????????????
	 */
	@GetMapping(value = "/check/id/{id}")
	public Map<String, Object> userCheckId(HttpServletRequest req, HttpServletResponse resp, @PathVariable("id") String id) {
	    Map<String, Object> rvt = new HashMap<>();
	    UserVO userVO = new UserVO();
	    userVO.setUserId(id);
	    
	    try {
	    	int i = userService.checkUserId(userVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
    		rvt.put("isExist", i > 0 ? "Y" : "N");
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
	
	/**
	 * ????????? ???????????? ??????
	 */
	@PostMapping(value = "/update/pw")
	public Map<String, Object> userUpdatePw(HttpServletRequest req, HttpServletResponse resp, UserVO userVO
			, @RequestParam("nowPw")String nowPw, @RequestParam("newPw")String newPw, @RequestParam("newPwCheck")String newPwCheck) { 
	    Map<String, Object> rvt = new HashMap<>();
	    
	    userVO.setUserId(PermissionHelper.getSessionUserId(req));
	    
	    // ???????????? ????????? ??????
	    Map<String, Object> passwordMap = PasswordRole.checkPassword(newPw, userVO.getUserId());
	    if((boolean) passwordMap.get("flag")) {
	    	// ?????? ???????????? ??????
	    	String salt = null;
	    	
	    	try {
	    		salt = loginService.selectUserSalt(userVO);
	    	} catch (Exception e) {
	    		logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : DB_selectUserSalt");
	    		logger.error(e.getMessage());
	    	}
	    	
	    	if(salt != null) {
	    		try {
	    			userVO.setUserPw(new HashHelper().sha512(nowPw, salt));
	    		} catch (NoSuchAlgorithmException e) {
	    			logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : Hashing PW");
	    			logger.error(e.getMessage());
	    		}
	    	}
	    	
	    	int loginCheck = 0;
	    	try {
	    		loginCheck = loginService.login(userVO);
	    	} catch (Exception e) {
	    		logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : login");
	    		logger.error(e.getMessage());
	    	}
	    	
	    	if(loginCheck == 1) {
	    		try {
	    			userVO.setUserPw(new HashHelper().sha512(newPw, salt));
	    		} catch (NoSuchAlgorithmException e) {
	    			logger.error("[ URL : " + req.getRequestURI() + " ] ERROR : Hashing PW");
	    			logger.error(e.getMessage());
	    		}
	    		
	    		try {
	    			userService.changeUserPw(userVO);
	    			
	    			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    		} catch (Exception e) {
	    			logger.error(e.getMessage());
	    			
	    			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    		}
	    	}else {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
    			rvt.put("msg", "?????? ??????????????? ????????????");
	    	}
	    }else {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10003));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10003));
			rvt.put("msg", passwordMap.get("msg").toString());
	    }
		
		return rvt;
	}
	
	/**
	 * ?????? ????????? ??????
	 */
	@GetMapping(value = "/list/new")
	public Map<String, Object> userListNew(HttpServletRequest req, HttpServletResponse resp) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<UserVO> list = userService.selectUserListNew();
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
    		rvt.put("list", list);
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
	
	/**
	 * ?????? ?????? ??????
	 */
	@GetMapping(value = "/permission/list/{value}")
	public Map<String, Object> permissionList(HttpServletRequest req, HttpServletResponse resp, @PathVariable("value") String value) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    CodeVO codeVO = new CodeVO();
	    codeVO.setCodeParentId(1000);
	    
	    List<CodeVO> codeList = new ArrayList<>();
	    
	    try {
	    	List<CodeVO> list = codeService.selectCodeList(codeVO);
		    if(list.size()>0) {
		    	//rvt.put("list", list);
		    	
		    	if(value.equals("ag")) {
		    		for(CodeVO vo : list) {
		    			if(vo.getCodeId() >= 1200 && vo.getCodeId() <= 1299) {
		    				codeList.add(vo);
		    			}
		    		}
		    	}else if(value.equals("admin")) {
		    		for(CodeVO vo : list) {
		    			if(vo.getCodeId() >= 1100 && vo.getCodeId() <= 1199) {
		    				codeList.add(vo);
		    			}
		    		}
		    	}
		    	
		    	rvt.put("list", codeList);
		    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		    }else {
		    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
		    }
		    	
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * ????????? ?????? ??????
	 */
	@GetMapping(value = "/info/{userId}")
	public Map<String, Object> getUserInfo(HttpServletRequest req, HttpServletResponse resp, @PathVariable("userId") String userId) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    
	    try {
	    	UserVO userVO = new UserVO();
	    	userVO.setUserId(userId);
	    	userVO = userService.selectUserInfo(userVO);
		   
		    if(userVO.getUserName() != "" || userVO.getUserName() != null) {	
		    	rvt.put("info", userVO);
		    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		    }else {
		    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
		    }
		    	
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * AG??? ??????
	 */
	@PostMapping(value = "/list/ag")
	public Map<String, Object> userListAg(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<UserVO> list = userService.selectUserListAg(userVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
    		rvt.put("list", list);
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
	
	/**
	 * ?????????????????? ??????
	 */
	@PostMapping(value = "/send/imsi/password")
	public Map<String, Object> sendImsiPassword(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
			userVO = userService.selectUserInfoForImsiPw(userVO);
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
	    
	    if(userVO != null) {
	    	mailSender.setUsername(smtpId);
			mailSender.setPassword(smtpPw);
			mailSender.setHost(smtpIp);
			mailSender.setPort(Integer.parseInt(smtpPort));
		
	    	String imsiPw = nonceHelper.makeImsiPassword();
	    	
	    	try {
	    		userVO.setUserPw(hashHelper.sha512(imsiPw, userVO.getUserSalt()));
	    		userService.changeUserPw(userVO);
	    		
	    		Map<String, Object> param = new HashMap<>();
	    		param.put("imsiPw", imsiPw);
	    		
	    		// ?????? ??????
	    		emailHelper.SendForEmail(mailSender, userVO, "imsiPw", param);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	} catch (Exception e) {
	    		logger.error(e.getMessage());
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    	}
	    }else {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
	    }
		
		return rvt;
	}
}
