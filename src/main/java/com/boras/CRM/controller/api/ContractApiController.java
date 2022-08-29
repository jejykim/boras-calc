package com.boras.CRM.controller.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.ContractService;
import com.boras.CRM.services.FormulaService;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FormulaVO;
import com.boras.CRM.vo.LedgerVO;

@RestController
@RequestMapping("/v1/api/contract")
public class ContractApiController {

	private static final Logger logger = LoggerFactory.getLogger(ContractApiController.class);
	
	
	@Autowired
	private ContractService contractService;
	
	@Autowired
	private FormulaService formulaService;
	
	/**
	 * 계출 상세
	 */
	@GetMapping(value = "/info/{contractSeq}")
	public Map<String, Object> contractInfo(HttpServletRequest req, HttpServletResponse resp, @PathVariable("contractSeq") int contractSeq) {
	    Map<String, Object> rvt = new HashMap<>();
	    try {
	    	ContractVO contractVO = new ContractVO();
	    	contractVO.setContractSeq(contractSeq);
	    	
	    	contractVO = contractService.selectContractInfo(contractVO);
	    	
	    	//FormulaVO formulaVO = new FormulaVO();
	    	List<FormulaVO> list = formulaService.selectFormulaList();
		   
		    if(contractVO.getContractLedgerSeq() > 0) {	
		    	rvt.put("info", contractVO);
		    	rvt.put("formulaList", list);
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
	@PostMapping(value = "/update/{contractSeq}")
	public Map<String, Object> updateContract(HttpServletRequest req, HttpServletResponse resp, @PathVariable("contractSeq") int contractSeq, ContractVO contractVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    try {
	    	System.out.println(ToStringBuilder.reflectionToString(contractVO));
	    	
	    	contractVO.setContractSeq(contractSeq);
	    	
	    	int cnt = contractService.updateContract(contractVO);
		   
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
