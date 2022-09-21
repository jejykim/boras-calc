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
import com.boras.CRM.services.CodeService;
import com.boras.CRM.util.CalculateDashboardHelper;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CalculateFinanicalCompanyVO;
import com.boras.CRM.vo.CalculateVO;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.ContractVO;

@Controller
public class CalculateDashboardController {

	private static final Logger logger = LoggerFactory.getLogger(CalculateDashboardController.class);
	
	@Autowired
	private CalculateFinanicalCompanyService calculateFinanicalCompanyService;
	
	@Autowired
	private CodeService codeService;
	
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
	public String calcDashboardInfo(Model model, HttpServletRequest req, HttpServletResponse resp, ContractVO contractVO
			, @PathVariable("financialCompanyCd") int financialCompanyCd
			, @PathVariable("year") int year
			, @PathVariable("month") int month) {
		String result = "calculate/dashboard-info";
		
		contractVO.setLedgerFinancialCompanyCd(financialCompanyCd);
		contractVO.setContractCreateYear(year);
		contractVO.setContractCreateMonth(month);
		
		CalculateFinanicalCompanyVO calculateFinanicalCompanyVO = new CalculateFinanicalCompanyVO();
		
		if(calculateFinanicalCompanyVO.getCalculateFinanicalCompanyYear() == 0) {
			calculateFinanicalCompanyVO.setCalculateFinanicalCompanyYear(year);
		}
		
		if(calculateFinanicalCompanyVO.getCalculateFinanicalCompanyMonth() == 0) {
			calculateFinanicalCompanyVO.setCalculateFinanicalCompanyMonth(month);
		}
		
		// 등록 년
		List<Map<String, Object>> yearList = new ArrayList<>();
		
		try {
			yearList = calculateFinanicalCompanyService.selectCalculateYear();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateYear ]");
			logger.error(e.getMessage());
		}
		
		// 금융사 조회
		CodeVO financialCompanyCodeVO = new CodeVO();
		financialCompanyCodeVO.setCodeId(financialCompanyCd);
		
		try {
			financialCompanyCodeVO = codeService.selectCodeInfo(financialCompanyCodeVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateYear ]");
			logger.error(e.getMessage());
		}
		
		// 금융사별 계출 합계 조회
		List<Map<String, Object>> contractList = new ArrayList<>();
		
		try {
			contractList = calculateFinanicalCompanyService.calculateFinancialCompany(contractVO);
		} catch (Exception e) {
			logger.error("[ERROR : calculateFinancialCompany ]");
			logger.error(e.getMessage());
		}
		
		for(Map<String, Object> map : contractList) {
			long totalFee = Long.parseLong(map.get("total_fee") == null ? "0" : map.get("total_fee").toString());
			long agPersonalFee = Long.parseLong(map.get("ag_personal_fee") == null ? "0" : map.get("ag_personal_fee").toString());
			long agCompanyFee = Long.parseLong(map.get("ag_company_fee") == null ? "0" : map.get("ag_company_fee").toString());
			long dpFee = Long.parseLong(map.get("dp_fee") == null ? "0" : map.get("dp_fee").toString());
			
			if(totalFee == agPersonalFee + agCompanyFee + dpFee) {
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyBillSum(agCompanyFee);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyPersonalSum(agPersonalFee);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyProfitSum(dpFee);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyCd(financialCompanyCd);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyCdName(map.get("ledger_financial_company_cd_name").toString());
				
				// 개인지급 공급가
				long pSupplySum = (long) (agPersonalFee / 1.1);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyPersonalSupplySum(pSupplySum);
				
				// 개인지급 부가세
				long pSurtaxSum = agPersonalFee - pSupplySum;
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyPersonalSurtaxSum(pSurtaxSum);
				
				// 개인지급 3.3% 공제
				long withdholdingTaxSum = (long) (pSupplySum * 0.033);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyWithholdingTaxSum(withdholdingTaxSum);
				
				// 사업소득 (공급가 - 3.3% 공제액)
				long businessIncome = pSupplySum - withdholdingTaxSum;
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyBusinessIncomeSum(businessIncome);
			}
		}
		
		// 금융사별 계출 합계 조회
		List<Map<String, Object>> list = new ArrayList<>();
		
		try {
			list = calculateFinanicalCompanyService.calculateFinancialCompanyForUser(contractVO);
		} catch (Exception e) {
			logger.error("[ERROR : calculateFinancialCompanyForUser ]");
			logger.error(e.getMessage());
		}
		
		for(Map<String, Object> map : list) {
			long totalFee = Long.parseLong(map.get("total_fee") == null ? "0" : map.get("total_fee").toString());
			long agPersonalFee = Long.parseLong(map.get("ag_personal_fee") == null ? "0" : map.get("ag_personal_fee").toString());
			long agCompanyFee = Long.parseLong(map.get("ag_company_fee") == null ? "0" : map.get("ag_company_fee").toString());
			long dpFee = Long.parseLong(map.get("dp_fee") == null ? "0" : map.get("dp_fee").toString());
			
			// 개인지급 공급가
			long pSupplySum = (long) (agPersonalFee / 1.1);
			
			// 개인지급 부가세
			long pSurtaxSum = agPersonalFee - pSupplySum;
			
			// 개인지급 3.3% 공제
			long withdholdingTaxSum = (long) (pSupplySum * 0.033);
			
			// 사업소득 (공급가 - 3.3% 공제액)
			long businessIncome = pSupplySum - withdholdingTaxSum;
				
			map.put("pSupplySum", pSupplySum);
			map.put("pSurtaxSum", pSurtaxSum);
			map.put("withdholdingTaxSum", withdholdingTaxSum);
			map.put("businessIncome", businessIncome);
			map.put("agCompanyFee", agCompanyFee);
			map.put("agPersonalFee", agPersonalFee);
		}
		
		model.addAttribute("yearList", yearList);
		model.addAttribute("financialCompanyCodeVO", financialCompanyCodeVO);
		model.addAttribute("calculateFinanicalCompanyVO", calculateFinanicalCompanyVO);
		model.addAttribute("contractVO", contractVO);
		model.addAttribute("list", list);
		
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
