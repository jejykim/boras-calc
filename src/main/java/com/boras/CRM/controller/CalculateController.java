package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.Calendar;
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
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CalculateVO;
import com.boras.CRM.vo.PagingVO;

@Controller
public class CalculateController {

	private static final Logger logger = LoggerFactory.getLogger(CalculateController.class);
	
	@Autowired
	private CalculateService calculateService;
	
	
	/*
	 * main page
	 */
	@GetMapping(value = "ag/calc/list")
	public String agCalculateList(Model model, HttpServletRequest req, HttpServletResponse resp, CalculateVO calculateVO) {
		String result = "calculate/calculate";
		if(calculateVO.getNowPage() != 1) {
			calculateVO.setPage((calculateVO.getNowPage()-1)*calculateVO.getPagePerRows());
		}
		
		calculateVO.setCalculateUserId(PermissionHelper.getSessionUserId(req));

		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		calculateVO.setCalculateYear(thisYear);
		calculateVO.setCalculateMonth(thisMonth);
		
		try {
			calculateVO = calculateService.selectCalculateForAg(calculateVO);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		List<CalculateVO> list = new ArrayList<>();
		int listCount = 0;
		
		try {
			list = calculateService.selectCalculateList(calculateVO);
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		try {
			listCount = calculateService.selectCalculateListCount(calculateVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateListCount ]");
			logger.error(e.getMessage());
		}
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, calculateVO.getNowPage(), calculateVO.getPagePerRows());

		model.addAttribute("calculateVO", calculateVO);
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
    	
		return result;
	}
}
