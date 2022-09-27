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

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.SurtaxSupportByFinancialService;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.SurtaxSupportByFinancialVO;

@Controller
public class SurtaxSupportByFinancialController {

	private static final Logger logger = LoggerFactory.getLogger(SurtaxSupportByFinancialController.class);
	
	@Autowired
	private SurtaxSupportByFinancialService ssService;
	
	@Autowired
	private CodeService codeService;
	
	/*
	 * 금융사별 부가세 지원 여부 세팅
	 */
	@GetMapping(value = "/surtax")
	public String settingSurtaxSupport(Model model, HttpServletRequest req, HttpServletResponse resp) {
		String result = "surtax/surtax";
		
		List<SurtaxSupportByFinancialVO> list = new ArrayList<>();
		SurtaxSupportByFinancialVO surtaxSupportByFinancialVO = new SurtaxSupportByFinancialVO();
		List<CodeVO> financialList = new ArrayList<>();
		List<CodeVO> financialProductList = new ArrayList<>();
		
		try {
			list = ssService.selectSurtaxSupportByFinancialList();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectSurtaxSupportByFinancialList ]");
			logger.error(e.getMessage());
		}
		
		
		surtaxSupportByFinancialVO.setSurtaxSupportByFinancialSeq(list.get(0).getSurtaxSupportByFinancialSeq());
		try {
			surtaxSupportByFinancialVO = ssService.selectSurtaxSupportByFinancialInfo(surtaxSupportByFinancialVO);	
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectSurtaxSupportByFinancialInfo ]");
			logger.error(e.getMessage());
		}
		
		CodeVO codeVO = new CodeVO();
		codeVO.setCodeParentId(3000);
		
		try {
			financialList = codeService.selectCodeList(codeVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectSurtaxSupportByFinancialList ]");
			logger.error(e.getMessage());
		}
		
		codeVO.setCodeParentId(3100);
		
		try {
			financialProductList = codeService.selectCodeList(codeVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectSurtaxSupportByFinancialList ]");
			logger.error(e.getMessage());
		}
		
		
		model.addAttribute("list",list);
		model.addAttribute("listCount",list.size());
		model.addAttribute("surtaxSupportByFinancialVO",surtaxSupportByFinancialVO);
		model.addAttribute("surtaxSupportByFinancial",surtaxSupportByFinancialVO.toString());
		model.addAttribute("financialList",financialList);
		model.addAttribute("financialProductList",financialProductList);
		
		return result;
	}
	
}
