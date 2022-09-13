package com.boras.CRM.controller.api;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
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

import com.boras.CRM.services.ContractService;
import com.boras.CRM.services.FormulaService;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FormulaVO;

@RestController
@RequestMapping("/v1/api/calculate")
public class CalculateApiController {

	private static final Logger logger = LoggerFactory.getLogger(CalculateApiController.class);
	
	
	@Autowired
	private ContractService contractService;
	
	
	/**
	 * 정산 하기
	 */
	@GetMapping(value = "/proceed")
	public Map<String, Object> calculateProceed(HttpServletRequest req, HttpServletResponse resp) {
	    Map<String, Object> rvt = new HashMap<>();
	    try {
	    	//정산할 년월 가져오기
			Calendar cal = Calendar.getInstance();
			int thisYear = cal.get(Calendar.YEAR);
			int thisMonth = cal.get(Calendar.MONTH) + 1;
	    	
	    	ContractVO contractVO = new ContractVO();
	    	contractVO.setContractCreateYear(thisYear);
	    	contractVO.setContractCreateMonth(thisMonth);
	    	
	    	contractVO = contractService.selectContractInfo(contractVO);
	    	
		   
		    if(contractVO.getContractLedgerSeq() > 0) {	
		    	rvt.put("info", contractVO);
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
