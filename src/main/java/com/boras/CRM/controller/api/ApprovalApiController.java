package com.boras.CRM.controller.api;

import java.util.ArrayList;
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
	public Map<String, Object> requestApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody int[] arrledgerSeq) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	if(arrledgerSeq.length>0) {
	    		ApprovalVO approvalVO = new ApprovalVO();
	    		for(int i=0; i<arrledgerSeq.length; i++) {
	    			approvalVO.setApprovalSeq(arrledgerSeq[i]);
				    int cnt = approvalService.requestApproval(approvalVO);
				    if(cnt>0) {
				    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
		    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
				    }else {
				    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
		    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
				    }
	    		}
	    	}else {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00008));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00008));
	    	}
		    	
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 승인요청 - 관리자용
	 */
	@PostMapping(value = "/insert")
	public Map<String, Object> insertApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody int[] arrledgerSeq) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	if(arrledgerSeq.length>0) {
	    		ApprovalVO approvalVO = new ApprovalVO();
	    		for(int i=0; i<arrledgerSeq.length; i++) {
	    			approvalVO.setApprovalSeq(arrledgerSeq[i]);
	    			approvalVO.setApprovalYn("Y");
	    			
				    int cnt = approvalService.insertApproval(approvalVO);
				    if(cnt>0) {
				    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
		    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
				    }else {
				    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
		    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
				    }
	    		}
	    	}else {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00008));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00008));
	    	}
		    	
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 승인 - 관리자
	 */
	@PostMapping(value = "/confrim")
	public Map<String, Object> confrimApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody int[] arrledgerSeq) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	if(arrledgerSeq.length>0) {
	    	
	    		ApprovalVO approvalVO = new ApprovalVO();
	    		for(int i=0; i<arrledgerSeq.length; i++) {
	    			approvalVO.setApprovalSeq(arrledgerSeq[i]);
	    			
	    			int cntApprovalLedgerSeq = approvalService.cntApprovalLedgerSeq(approvalVO);
	    			
	    			//승인요청건이 2건 미만(중복요청건이 없는경우)
	    			if(cntApprovalLedgerSeq<2) {
					    int cnt = approvalService.confirmApproval(approvalVO);
					    if(cnt>0) {
					    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
					    }else {
					    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
					    }
	    			}
	    		}
	    	}else {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00008));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00008));
	    	}
		    	
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 승인 - 관리자
	 */
	@PostMapping(value = "/delete/request")
	public Map<String, Object> deleteRequestApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody ApprovalVO approvalVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = approvalService.deleteRequestApproval(approvalVO);
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
		}
	   
		return rvt;
	}
	
	/**
	 * 중복승인처리 - 관리자
	 */
	@PostMapping(value = "/deduplication")
	public Map<String, Object> deduplicationApproval(HttpServletRequest req, HttpServletResponse resp, @RequestBody ApprovalVO approvalVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	
	    	//승인된 ag사 id는 승인처리
	    	int cnt1 = approvalService.confirmApprovalForDuplication(approvalVO);
	    	if(cnt1>0) {
		    	//승인외건 거부 처리
		    	int cnt2 = approvalService.refusalApproval(approvalVO);
		    	
		    	if(cnt1>0 && cnt2>0) {
			    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
			    }else {
			    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
	    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
			    }
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
	
}
