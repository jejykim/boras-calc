package com.boras.CRM.controller.api;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.UserService;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.UserVO;

@RestController
@RequestMapping("/v1/api/user")
public class UserApiController {

	private static final Logger logger = LoggerFactory.getLogger(UserApiController.class);
	
	@Autowired
	private UserService userService;
	
	/**
	 * 사용자 등록
	 */
	@PostMapping(value = "/insert")
	public Map<String, Object> userInsert(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	userService.insertUser(userVO);
			
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
	 * 사용자 수정
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
	 * 사용자 비활성화
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
	 * 사용자 비활성화
	 */
	@PostMapping(value = "/check/id")
	public Map<String, Object> userCheckId(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
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
	 * 사용자 비밀번호 변경
	 */
	@PostMapping(value = "/update/pw")
	public Map<String, Object> userUpdatePw(HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	userService.changeUserPw(userVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		} catch (Exception e) {
			logger.error(e.getMessage());
	    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
}
