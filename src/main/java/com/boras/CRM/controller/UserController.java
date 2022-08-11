package com.boras.CRM.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.boras.CRM.services.UserService;
import com.boras.CRM.util.PermissionHelper;

@Controller
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	/*
	 * root page
	 */
	@GetMapping(value = "/fesdfe")
	public String index(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "redirect:/login";
    	
    	if(PermissionHelper.checkUserSession(req)) {
			result = "redirect:/dashboard";
		}
    	
		return result;
	}
	
	
}
