package com.boras.CRM.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CodeController {

	private static final Logger logger = LoggerFactory.getLogger(CodeController.class);
	
	/*
	 * 코드 관리 페이지
	 */
	@GetMapping(value = "/code")
	public String codeList(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "code/code";
    	
		return result;
	}
}
