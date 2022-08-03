package com.boras.CRM.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalculateController {

	private static final Logger logger = LoggerFactory.getLogger(CalculateController.class);
	
	/*
	 * main page
	 */
	@GetMapping(value = "/calc/dashboard")
	public String calcDashboard(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "calculate/dashboard";
		
		try {
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
}
