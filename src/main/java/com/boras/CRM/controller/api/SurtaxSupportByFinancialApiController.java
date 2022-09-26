package com.boras.CRM.controller.api;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.SurtaxSupportByFinancialService;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.SurtaxSupportByFinancialVO;

@RestController
@RequestMapping("/v1/api/surtax")
public class SurtaxSupportByFinancialApiController {

	private static final Logger logger = LoggerFactory.getLogger(SurtaxSupportByFinancialApiController.class);
	
	
	@Autowired
	private SurtaxSupportByFinancialService ssService;
	
	
	/**
	 * 코드 상세 조회
	 */
	@GetMapping(value = "/info/{surtaxSeq}")
	public Map<String, Object> selectCodeInfo(HttpServletRequest req, HttpServletResponse resp, @PathVariable("surtaxSeq") int surtaxSeq) {
		
	    Map<String, Object> rvt = new HashMap<>();
	    
	    SurtaxSupportByFinancialVO surtaxSupportByFinancialVO = new SurtaxSupportByFinancialVO();
	    surtaxSupportByFinancialVO.setSurtaxSupportByFinancialSeq(surtaxSeq);
	    
	    try {
	    	surtaxSupportByFinancialVO = ssService.selectSurtaxSupportByFinancialInfo(surtaxSupportByFinancialVO);
		    if(surtaxSupportByFinancialVO !=null) {
		    	rvt.put("surtaxSupportByFinancialInfo", surtaxSupportByFinancialVO);
		    	
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
	 * 계출 수정
	 */
	@PostMapping(value = "/update")
	public Map<String, Object> updateContract(HttpServletRequest req, HttpServletResponse resp, SurtaxSupportByFinancialVO surtaxSupportByFinancialVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    try {
	    	
	    	int cnt = ssService.updateSurtaxSupportByFinancial(surtaxSupportByFinancialVO);
		   
		    if(cnt > 0) {	
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
