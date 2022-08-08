package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.boras.CRM.services.ContractService;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FeeByFinancialVO;
import com.boras.CRM.vo.LedgerVO;

@Controller
public class ContractController {

	private static final Logger logger = LoggerFactory.getLogger(ContractController.class);
	
	
	@Autowired
	private ContractService contractService;
	
	/*
	 * main page
	 */
	@GetMapping(value = "/contract")
	public String contractInsert(Model model, HttpServletRequest req, HttpServletResponse resp, @RequestBody LedgerVO ledgerVO) {
		String result = "contract/insert";
		
		try {
			FeeByFinancialVO feeByFinancialVO = new FeeByFinancialVO();
			feeByFinancialVO.setFeeByFinancialCompanyCd(ledgerVO.getLedgerFinancialCompanyCd());
			
			List<FeeByFinancialVO> feeByFinancialList = new ArrayList<>();
			
			feeByFinancialList=contractService.selectFeeByFinancialList(feeByFinancialVO);
			
			for(FeeByFinancialVO fbf : feeByFinancialList) {
				ContractVO contractVO = new ContractVO();
				contractVO.setContractLedgerSeq(ledgerVO.getLedgerSeq());
				//contractVO.setContractUserId(ledgerVO.getuser)
				
				contractService.insertFeeByFinancial(contractVO);
			}
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
}
