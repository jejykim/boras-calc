package com.boras.CRM.controller.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.InquiryService;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.InquiryVO;

@RestController
@RequestMapping("/v1/api/inquiry")
public class InquiryApiController {

	private static final Logger logger = LoggerFactory.getLogger(InquiryApiController.class);
	
	
	@Autowired
	private InquiryService inquiryService;
	
	/**
	 * 문의 등록
	 */
	@PostMapping(value = "/insert/to")
	public Map<String, Object> insertInquiryByTo(HttpServletRequest req, HttpServletResponse resp, @RequestBody InquiryVO inquiryVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = inquiryService.insertInquiryByTo(inquiryVO);
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
	 * 문의 답변
	 */
	@PostMapping(value = "/insert/from")
	public Map<String, Object> insertInquiryByFrom(HttpServletRequest req, HttpServletResponse resp, @RequestBody InquiryVO inquiryVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = inquiryService.insertInquiryByFrom(inquiryVO);
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
	 * 원장 기준 문의 조회
	 */
	@PostMapping(value = "/select/ledger")
	public Map<String, Object> selectParentCodeList(HttpServletRequest req, HttpServletResponse resp, InquiryVO inquiryVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<InquiryVO> list = inquiryService.selectInquiryListForLedger(inquiryVO);
	    	
		    if(list.size()>0) {
		    	List<InquiryVO> tempList = new ArrayList<>();
		    	
		    	for(InquiryVO vo : list) {
		    		if(vo.getInquiryFromUserId().equals(PermissionHelper.getSessionUserId(req))) {
		    			vo.setIsMine("Y");
		    		}
		    		
		    		tempList.add(vo);
		    	}
		    	
		    	rvt.put("list", tempList);
		    	
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
	 * 사용자 기준 몬의 조회
	 */
	@PostMapping(value = "/select/user")
	public Map<String, Object> selectCodeList(HttpServletRequest req, HttpServletResponse resp, @RequestBody InquiryVO inquiryVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<InquiryVO> list = inquiryService.selectInquiryListForUser(inquiryVO);
		    if(list.size()>0) {
		    	rvt.put("list", list);
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
	 * 문의 상세 조회
	 */
	@PostMapping(value = "/info")
	public Map<String, Object> selectInquiryInfo(HttpServletRequest req, HttpServletResponse resp, @RequestBody InquiryVO inquiryVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    JSONObject jobj = new JSONObject();
	    try {
	    	inquiryVO = inquiryService.selectInquiryInfo(inquiryVO);
		    if(inquiryVO !=null) {
		    	jobj.put("inquirySeq", inquiryVO.getInquirySeq());
		    	jobj.put("inquiryLedgerSeq", inquiryVO.getInquiryLedgerSeq());
		    	jobj.put("inquiryType", inquiryVO.getInquiryType());
		    	jobj.put("inquiryContent", inquiryVO.getInquiryContent());
		    	jobj.put("inquiryFromUserId", inquiryVO.getInquiryFromUserId());
		    	jobj.put("inquiryToUserId", inquiryVO.getInquiryToUserId());
		    	jobj.put("inquiryCreateDate", inquiryVO.getInquiryCreateDate());
		    	
		    	rvt.put("inquiryInfo", jobj);
		    	
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
	 * 문의 수정
	 */
	@PostMapping(value = "/update")
	public Map<String, Object> inquiryService(HttpServletRequest req, HttpServletResponse resp, @RequestBody InquiryVO inquiryVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = inquiryService.updateInquiry(inquiryVO);
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
	 * 문의 삭제
	 */
	@PostMapping(value = "/delete")
	public Map<String, Object> deleteInquiry(HttpServletRequest req, HttpServletResponse resp, @RequestBody InquiryVO inquiryVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = inquiryService.deleteInquiry(inquiryVO);
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
	
}
