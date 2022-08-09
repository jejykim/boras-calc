package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.map.PassiveExpiringMap.ConstantTimeToLiveExpirationPolicy;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.SurtaxSupportByFinancialService;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.SurtaxSupportByFinancialVO;

@RestController
public class SurtaxSupportByFinancialController {

	private static final Logger logger = LoggerFactory.getLogger(SurtaxSupportByFinancialController.class);
	
	@Autowired
	private SurtaxSupportByFinancialService ssService;
	

	/*
	 * 금융사별 부가세 지원 여부 등록
	 */
	@PostMapping(value = "/surtaxsupport")
	public String insertSurtaxSupport(Model model, HttpServletRequest req, HttpServletResponse resp, @ModelAttribute("surtaxSupportByFinancialVO")SurtaxSupportByFinancialVO surtaxSupportByFinancialVO) {
		String result = "";
		
		try {
			int cnt = ssService.insertSurtaxSupportByFinancial(surtaxSupportByFinancialVO);
			if(cnt>0) {
				result = "surtaxsupport/insert";
			}else {
				result = "cnt0이하";
			}
			logger.info("cnt: " +cnt);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return result;
	}
	
	/*
	 * 금융사별 부가세 지원 여부 조회
	 */
	@GetMapping(value = "/surtaxsupport/list")
	public Model listSurtaxSupport(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "surtaxsupport/list";
		
		List<SurtaxSupportByFinancialVO> list = new ArrayList<>();
		
		try {
			Map<String, Object> map = new HashMap<>();
			
			list = ssService.selectSurtaxSupportByFinancialList();
			
		
			
			model.addAttribute("list", list);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return model;
	}
	
}
