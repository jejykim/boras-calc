package com.boras.CRM.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.boras.CRM.session.WebSessionListener;

@Controller
public class DashboardController {

	private static final Logger logger = LoggerFactory.getLogger(DashboardController.class);
	
	/*
	 * main page
	 */
	@GetMapping(value = "/")
	public String index(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "redirect:/dashboard";
		
		try {
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
	
	/*
	 * main page
	 */
	@GetMapping(value = "/dashboard")
	public String dashboard(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "dashboard/dashboard";
		
		try {
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
}
