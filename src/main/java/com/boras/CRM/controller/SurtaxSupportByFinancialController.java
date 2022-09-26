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
		
		try {
			list = ssService.selectSurtaxSupportByFinancialList();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectSurtaxSupportByFinancialList ]");
			logger.error(e.getMessage());
		}
		
		try {
			surtaxSupportByFinancialVO = ssService.selectSurtaxSupportByFinancialInfo();	
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
		
		
		model.addAttribute("list",list);
		model.addAttribute("surtaxSupportByFinancialVO",surtaxSupportByFinancialVO);
		model.addAttribute("financialList",financialList);
		
		return result;
	}
	
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
	public Map<String, Object> listSurtaxSupport(Model model, HttpServletRequest req, HttpServletResponse resp) {
		Map<String, Object> rvt = new HashMap<>();
		
		List<SurtaxSupportByFinancialVO> list = new ArrayList<>();
		
		try {
			list = ssService.selectSurtaxSupportByFinancialList();
			
			rvt.put("list", list);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
    	
		return rvt;
	}
	
}
