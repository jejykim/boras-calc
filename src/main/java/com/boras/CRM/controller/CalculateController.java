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

import com.boras.CRM.services.CalculateService;
import com.boras.CRM.vo.CalculateVO;

@Controller
public class CalculateController {

	private static final Logger logger = LoggerFactory.getLogger(CalculateController.class);
	
	@Autowired
	private CalculateService calculateService;
	
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
	
	/*
	 * main page
	 */
	@GetMapping(value = "ag/calc/list")
	public String agCalculateList(Model model, HttpServletRequest req, HttpServletResponse resp, CalculateVO calculateVO) {
		String result = "calculate/calculate";
		
		List<CalculateVO> list = new ArrayList<>();
		
		try {
			list = calculateService.selectCalculateList(calculateVO);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		model.addAttribute("list", list);
    	
		return result;
	}
}
