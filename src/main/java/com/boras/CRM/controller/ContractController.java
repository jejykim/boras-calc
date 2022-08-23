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
import com.boras.CRM.vo.SurtaxSupportByFinancialVO;
import com.boras.CRM.vo.LedgerVO;

@Controller
public class ContractController {

	private static final Logger logger = LoggerFactory.getLogger(ContractController.class);
	
	
	@Autowired
	private ContractService contractService;
	
	/*
	 * main page
	 */
	@GetMapping(value = "/contract/list")
	public String contractList(Model model, HttpServletRequest req, HttpServletResponse resp, ContractVO contractVO) {
		String result = "contract/list";
		
		List<ContractVO> list = new ArrayList<>();
		
		try {
			list = contractService.selectContractList(contractVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectContractList ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("list",list);
		model.addAttribute("contractVO",contractVO);
		
		return result;
	}
}
