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
import org.springframework.web.bind.annotation.PostMapping;

import com.boras.CRM.services.LedgerService;
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.vo.LedgerVO;
import com.boras.CRM.vo.PagingVO;

@Controller
public class LedgerController {

	private static final Logger logger = LoggerFactory.getLogger(LedgerController.class);
	
	@Autowired
	private LedgerService ledgerService;
	
	/*
	 * 원장 목록 페이지 (AG용)
	 */
	@GetMapping(value = "/ag/ledger/list")
	public String agLedgerList(Model model, HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
		String result = "ledger/ledger-list";
    	
		List<LedgerVO> list = new ArrayList<>();
		
		try {
			list = ledgerService.selectLedgerListForAg(ledgerVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerListForAg ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("list", list);
		model.addAttribute("ledgerVO", ledgerVO);
    	
		return result;
	}
	
	/*
	 * 원장 목록 페이지 (관리자용)
	 */
	@GetMapping(value = "/admin/ledger/list")
	public String adminLedgerList(Model model, HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
		String result = "ledger-admin/ledger-list";
    	
		if(ledgerVO.getNowPage() != 1) {
			ledgerVO.setPage((ledgerVO.getNowPage()-1)*ledgerVO.getPagePerRows());
		}
		
		List<LedgerVO> list = new ArrayList<>();
		int listCount = 0;
		
		try {
			list = ledgerService.selectLedgerList(ledgerVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerList ]");
			logger.error(e.getMessage());
		}
		
		try {
			listCount = ledgerService.selectLedgerListCount(ledgerVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerListCount ]");
			logger.error(e.getMessage());
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, ledgerVO.getNowPage(), ledgerVO.getPagePerRows());
		
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
		model.addAttribute("ledgerVO", ledgerVO);
    	
		return result;
	}
}
