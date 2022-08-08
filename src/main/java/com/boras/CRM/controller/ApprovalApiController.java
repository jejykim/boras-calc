package com.boras.CRM.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.ApprovalService;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.ApprovalVO;

@RestController
@RequestMapping("/v1/api/approval")
public class ApprovalApiController {

	private static final Logger logger = LoggerFactory.getLogger(ApprovalApiController.class);
	
	
	@Autowired
	private ApprovalService approvalService;
	
	/**
	 * 승인요청 - ag사
	 */
	@PostMapping(value = "/request")
	public boolean requestApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody ApprovalVO approvalVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    boolean flag = false;
	    
	    try {
		    int cnt = approvalService.requestApproval(approvalVO);
		    if(cnt>0) {
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
			flag = false;
		}
	   
		return flag;
	}
	
	/**
	 * 승인 - 관리자
	 */
	@PostMapping(value = "/confrim")
	public boolean confrimApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody ApprovalVO approvalVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    boolean flag = false;
	    
	    try {
		    int cnt = approvalService.confirmApproval(approvalVO);
		    if(cnt>0) {
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
			flag = false;
		}
	   
		return flag;
	}
	
}
