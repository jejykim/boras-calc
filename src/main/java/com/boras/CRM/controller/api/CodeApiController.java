package com.boras.CRM.controller.api;

import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.CodeService;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.CodeVO;

@RestController
@RequestMapping("/v1/api/code")
public class CodeApiController {

	private static final Logger logger = LoggerFactory.getLogger(CodeApiController.class);
	
	
	@Autowired
	private CodeService codeService;
	
	/**
	 * 대분류 코드등록
	 */
	@PostMapping(value = "/parent/insert")
	public Map<String, Object> insertParentCode(HttpServletRequest req, HttpServletResponse resp, @RequestBody CodeVO codeVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = codeService.insertParentCode(codeVO);
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
	 * 대분류&소분류 코드등록
	 * 대분류일 경우 codeParentId=0
	 */
	@PostMapping(value = "/insert")
	public Map<String, Object> insertCode(HttpServletRequest req, HttpServletResponse resp, @RequestBody CodeVO codeVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = codeService.insertParentCode(codeVO);
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
	 * 대분류 코드조회
	 */
	@GetMapping(value = "/parent/select")
	public Map<String, Object> selectParentCodeList(HttpServletRequest req, HttpServletResponse resp) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<CodeVO> list = codeService.selectParentCodeList();
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
	 * 소분류 코드조회
	 */
	@PostMapping(value = "/select")
	public Map<String, Object> selectCodeList(HttpServletRequest req, HttpServletResponse resp, @RequestBody CodeVO codeVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<CodeVO> list = codeService.selectCodeList(codeVO);
		    if(list.size()>0) {
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
	 * 대분류&소분류 코드조회
	 */
	@GetMapping(value = "/integration/select")
	public Map<String, Object> selectIntegrationCodeList(HttpServletRequest req, HttpServletResponse resp) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
	    	List<CodeVO> list = codeService.selectParentCodeList();
		    if(list.size()>0) {
		    	
		    	JSONArray jarray = new JSONArray();
		    	for(int i=0; i<list.size(); i++) {
		    		JSONObject parentObj = new JSONObject();
		    		
		    		parentObj.put("ParentCodeID", list.get(i).getCodeId());
		    		parentObj.put("ParentCodeName", list.get(i).getCodeName());
		    		parentObj.put("ParentCodeDescription", list.get(i).getCodeDescription());
		    		parentObj.put("ParentCodeUseYn", list.get(i).getCodeUseYn());
		    		parentObj.put("ParentCodeCreateDate", list.get(i).getCodeCreateDate());
		    		parentObj.put("ParentCodeUpdateDate", list.get(i).getCodeUpdateDate());
		    		
		    		CodeVO codeVO = new CodeVO();
		    		codeVO.setCodeParentId(list.get(i).getCodeId());
		    		List<CodeVO> list2 = codeService.selectCodeList(codeVO);
		    		JSONArray parentJarray = new JSONArray();
		    		for(int j=0; j<list2.size(); j++) {
			    		JSONObject codeObj = new JSONObject();
			    		codeObj.put("codeId", list2.get(j).getCodeId());
			    		codeObj.put("codeName", list2.get(j).getCodeName());
			    		codeObj.put("codeParentId", list2.get(j).getCodeParentId());
			    		codeObj.put("codeDescription", list2.get(j).getCodeDescription());
			    		codeObj.put("codeUseYn", list2.get(j).getCodeUseYn());
			    		codeObj.put("codeCreateDate", list2.get(j).getCodeCreateDate());
			    		codeObj.put("codeUpdateDate", list2.get(j).getCodeUpdateDate());
			    		parentJarray.add(codeObj);
			    		parentObj.put("codeList", parentJarray);
		    		}
		    		jarray.add(parentObj);
		    	}
		    	rvt.put("integrationCodeList", jarray);
		    	
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
	 * 코드 상세 조회
	 */
	@PostMapping(value = "/info")
	public Map<String, Object> selectCodeInfo(HttpServletRequest req, HttpServletResponse resp, @RequestBody CodeVO codeVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    JSONObject jobj = new JSONObject();
	    try {
	    	codeVO = codeService.selectCodeInfo(codeVO);
		    if(codeVO !=null) {
		    	jobj.put("codeId", codeVO.getCodeId());
		    	jobj.put("codeName", codeVO.getCodeName());
		    	jobj.put("codeParentId", codeVO.getCodeParentId());
		    	jobj.put("codeDescription", codeVO.getCodeDescription());
		    	jobj.put("codeUseYn", codeVO.getCodeUseYn());
		    	jobj.put("codeCreateDate", codeVO.getCodeCreateDate());
		    	jobj.put("codeUpdateDate", codeVO.getCodeUpdateDate());
		    	
		    	rvt.put("codeInfo", jobj);
		    	
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
	 * 코드 수정
	 */
	@PostMapping(value = "/update")
	public Map<String, Object> updateCode(HttpServletRequest req, HttpServletResponse resp, @RequestBody CodeVO codeVO) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    try {
		    int cnt = codeService.updateCode(codeVO);
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
