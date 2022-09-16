package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.ContractService;
import com.boras.CRM.services.LedgerService;
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
		
		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		if(contractVO.getContractCreateYear() == 0) {
			contractVO.setContractCreateYear(thisYear);
		}
		
		if(contractVO.getContractCreateMonth() == 0) {
			contractVO.setContractCreateMonth(thisMonth);
		}
		
		List<ContractVO> list = new ArrayList<>();
		
		List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialProductCodelist = new ArrayList<>();
		
		// 등록 년
		List<Map<String, Object>> yearList = new ArrayList<>();
		
		try {
			yearList = contractService.selectContractYear();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerYear ]");
			logger.error(e.getMessage());
		}
		
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
		UserVO userVO = new UserVO();
		List<UserVO> userAglist = new ArrayList<>();
		//ag사
		try {
			userAglist = userService.selectUserListAg(userVO);
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
		int listCount = 0;
		try {
			listCount = contractService.selectContractListCount(contractVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectContractListCount ]");
			logger.error(e.getMessage());
		}
		model.addAttribute("list",list);
		model.addAttribute("listCount",listCount);
		
		model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
		model.addAttribute("financialProductCodelist", financialProductCodelist);
		model.addAttribute("userAglist", userAglist);
		model.addAttribute("contractVO", contractVO);
		
		model.addAttribute("yearList", yearList);
		model.addAttribute("thisYear", thisYear);
		model.addAttribute("thisMonth", thisMonth);
		
		return result;
	}
	
	/*
	 * main page
	 */
	@GetMapping(value = "/contract/info/{contractSeq}")
	public String contractInfo(Model model, HttpServletRequest req, HttpServletResponse resp, @PathVariable("contractSeq") int contractSeq) {
		String result = "contract/contract-info";
		
		ContractVO contractVO = new ContractVO();
		contractVO.setContractSeq(contractSeq);
		try {
			contractVO = contractService.selectContractInfo(contractVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerYear ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("contractVO", contractVO);
		
		return result;
	}
}
