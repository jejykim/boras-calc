package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.PermissionHelper;

@Controller
public class DashboardController {

	private static final Logger logger = LoggerFactory.getLogger(DashboardController.class);
	
	/*
	 * root page
	 */
	@GetMapping(value = "/")
	public String index(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "redirect:/login";
    	
    	if(PermissionHelper.checkUserSession(req)) {
			result = "redirect:/dashboard";
		}
    	
		return result;
	}
	
	/*
	 * 대시보드
	 */
	@GetMapping(value = "/dashboard")
	public String dashboard(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "dashboard/dashboard";
		
		List<Map<String, Object>> list = new ArrayList<>();
		
		try {
			Map<String, Object> map = new HashMap<>();
			
			for(int i=0; i < 10; i++) {
				map = new HashMap<>();
				map.put("name", "ag" + i);
				map.put("money", "000" + i);
				list.add(map);
			}
			
			model.addAttribute("list", list);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
	
	/*
	 * 대시보드
	 */
	@PostMapping(value = "/dashboard/api")
	public Map<String, Object> dashboardapi(HttpServletRequest req, HttpServletResponse resp) {
		Map<String, Object> rvt = new HashMap<>();
		
		List<Map<String, Object>> list = new ArrayList<>();
		try {
			Map<String, Object> map = new HashMap<>();
			
			for(int i=0; i < 10; i++) {
				map = new HashMap<>();
				map.put("name", "ag" + i);
				list.add(map);
			}
			
			rvt.put("list", list);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return rvt;
	}
}
