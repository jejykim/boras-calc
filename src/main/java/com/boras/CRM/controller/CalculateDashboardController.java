package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.boras.CRM.services.CalculateFinanicalCompanyService;
import com.boras.CRM.services.CalculateService;
import com.boras.CRM.util.CalculateDashboardHelper;
import com.boras.CRM.vo.CalculateFinanicalCompanyVO;
import com.boras.CRM.vo.CalculateVO;

@Controller
public class CalculateDashboardController {

	private static final Logger logger = LoggerFactory.getLogger(CalculateDashboardController.class);
	
	@Autowired
	private CalculateFinanicalCompanyService calculateFinanicalCompanyService;
	
	/*
	 * 정산 대시보드 페이지
	 */
	@GetMapping(value = "/calc/dashboard")
	public String calcDashboard(Model model, HttpServletRequest req, HttpServletResponse resp, CalculateFinanicalCompanyVO calculateFinanicalCompanyVO) {
		String result = "calculate/dashboard";
		
		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		if(calculateFinanicalCompanyVO.getCalculateFinanicalCompanyYear() == 0) {
			calculateFinanicalCompanyVO.setCalculateFinanicalCompanyYear(thisYear);
		}
		
		if(calculateFinanicalCompanyVO.getCalculateFinanicalCompanyMonth() == 0) {
			calculateFinanicalCompanyVO.setCalculateFinanicalCompanyMonth(thisMonth);
		}
		
		// 등록 년
		List<Map<String, Object>> yearList = new ArrayList<>();
		
		try {
			yearList = calculateFinanicalCompanyService.selectCalculateYear();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateYear ]");
			logger.error(e.getMessage());
		}
		
		// 정산 대시보드 목록
		List<CalculateFinanicalCompanyVO> list = new ArrayList<>();
		
		try {
			list = calculateFinanicalCompanyService.selectCalculateList(calculateFinanicalCompanyVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateList ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("calculateFinanicalCompanyVO", calculateFinanicalCompanyVO);
		model.addAttribute("yearList", yearList);
		model.addAttribute("thisYear", thisYear);
		model.addAttribute("thisMonth", thisMonth);
    	
		model.addAttribute("list", list);
		
		return result;
	}
	
	/*
	 * 정산 대시보드 상세 페이지
	 */
	@GetMapping(value = "/calc/dashboard/{financialCompanyCd}/{year}/{month}")
	public String calcDashboardInfo(Model model, HttpServletRequest req, HttpServletResponse resp
			, @PathVariable("financialCompanyCd") int financialCompanyCd
			, @PathVariable("year") int year
			, @PathVariable("month") int month) {
		String result = "calculate/dashboard-info";
		
		
		return result;
	}
	
	
	// 테스트 정산
	@GetMapping(value = "/calc/dashboard/test")
	public String calcDashboardTest(HttpServletRequest req, HttpServletResponse resp) {
		
		CalculateDashboardHelper cdh = new CalculateDashboardHelper();
		cdh.calculateFinancialCompany(req, calculateFinanicalCompanyService, 2022, 9, 0);
		
		return "redirect:/calc/dashboard";
	}
}
