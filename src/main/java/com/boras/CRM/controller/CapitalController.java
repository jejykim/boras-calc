package com.boras.CRM.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CapitalController {
	
	private static final Logger logger = LoggerFactory.getLogger(CapitalController.class);
	
	/*
	 * main page
	 */
	@GetMapping(value = "/capital/ledger/list")
	public String captialLedgerList(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "capital/ledger-list";
		
		try {
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
	
	/*
	 * main page
	 */
	@GetMapping(value = "/capital/ledger/mg/list")
	public String captialLedgerMgList(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "capital/ledger-list-mg";
		
		try {
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
}
