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

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.ContractService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.UserVO;

@Controller
public class ContractController {

	private static final Logger logger = LoggerFactory.getLogger(ContractController.class);
	
	
	@Autowired
	private ContractService contractService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private UserService userService;
	
	/*
	 * main page
	 */
	@GetMapping(value = "/contract/list")
	public String contractList(Model model, HttpServletRequest req, HttpServletResponse resp, ContractVO contractVO) {
		String result = "contract/contract";
		
		List<ContractVO> list = new ArrayList<>();
		
		List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialProductCodelist = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		// 금융사
		codeVO.setCodeParentId(3000);
		try {
			financialCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		
		// 금융상품
		codeVO.setCodeParentId(3100);
		try {
			financialProductCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		List<UserVO> userAglist = new ArrayList<>();
		//ag사
		try {
			userAglist = userService.selectUserListAg();
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectUserListAg ]");
			logger.error(e.getMessage());
		}
		
		
		
		// 계출목록
		try {
			list = contractService.selectContractList(contractVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectContractList ]");
			logger.error(e.getMessage());
		}
		model.addAttribute("list",list);
		model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
		model.addAttribute("financialProductCodelist", financialProductCodelist);
		model.addAttribute("userAglist", userAglist);
		
		
		System.out.println("contractVOToString : " + contractVO.toString());
		return result;
	}
}
