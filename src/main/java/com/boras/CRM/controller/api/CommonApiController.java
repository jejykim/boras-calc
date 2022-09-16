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

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.InquiryService;
import com.boras.CRM.util.InquiryHelper;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.InquiryVO;

@RestController
@RequestMapping("/v1/api/common")
public class CommonApiController {

	private static final Logger logger = LoggerFactory.getLogger(CommonApiController.class);
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private InquiryService inquiryService;
	
	/**
	 * 신규 문의 목록 조회
	 */
	@GetMapping(value = "/inquiry/list")
	public Map<String, Object> inquiryList(HttpServletRequest req, HttpServletResponse resp) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    List<InquiryVO> list = new ArrayList<>();
	    
	    try {
	    	list = InquiryHelper.reloadNewList(inquiryService, PermissionHelper.getSessionUserId(req));
	    	
	    	rvt.put("list", list);
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
}
