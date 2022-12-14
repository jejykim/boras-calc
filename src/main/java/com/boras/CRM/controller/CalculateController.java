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

import com.boras.CRM.services.CalculateService;
import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.ContractService;
import com.boras.CRM.util.FIleDownloadHelper;
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CalculateVO;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.PagingVO;

@Controller
public class CalculateController extends FIleDownloadHelper{

	private static final Logger logger = LoggerFactory.getLogger(CalculateController.class);
	
	@Autowired
	private CalculateService calculateService;
	
	@Autowired
	private ContractService contractService;
	
	@Autowired
	private CodeService codeService;
	
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
		CalculateVO CalAgVO = new CalculateVO(); 
		
		if(calculateVO.getSearchText()==null && calculateVO.getLedgerFinancialCompanyCd()==0 && calculateVO.getLedgerFinancialBranchCd()==0
				&& calculateVO.getLedgerFinancialProductCd()==0 && calculateVO.getLedgerDealerBrandCd()==0 && calculateVO.getLedgerDealerCompanyCd()==0) {
			try {
				CalAgVO = calculateService.selectCalculateForAg(calculateVO);
			} catch (Exception e) {
				logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateForAg ]");
				logger.error(e.getMessage());
			}
		}else {
			try {
				System.out.println(calculateVO.toString());
				CalAgVO = calculateService.selectCalculateForAgAndFilter(calculateVO);
			} catch (Exception e) {
				logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateForAgAndFilter ]");
				logger.error(e.getMessage());
			}
		}
		
		List<CalculateVO> list = new ArrayList<>();
		int listCount = 0;
		
		try {
			list = calculateService.selectCalculateList(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateList ]");
			logger.error(e.getMessage());
		}
		
		try {
			listCount = calculateService.selectCalculateListCount(calculateVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateListCount ]");
			logger.error(e.getMessage());
		}
		
		List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialProductCodelist = new ArrayList<>();
		List<CodeVO> dealerBrandCodeList = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		
		// 금융사
		codeVO.setCodeParentId(3000);
		try {
			financialCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		
		// 금융상품
		codeVO.setCodeParentId(3100);
		try {
			financialProductCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		// 딜러사 브랜드
		codeVO.setCodeParentId(4000);
		try {
			dealerBrandCodeList = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, calculateVO.getNowPage(), calculateVO.getPagePerRows());
		
		
		model.addAttribute("calculateVO", CalAgVO);
		model.addAttribute("calculateVO0", calculateVO);
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		
		model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
		model.addAttribute("financialProductCodelist", financialProductCodelist);
		model.addAttribute("dealerBrandCodeList", dealerBrandCodeList);
		
		model.addAttribute("pagingVO", pagingVO);
		
		return result;
	}
	
	
	/*
	 * main page
	 */
	@GetMapping(value = "admin/calc/list")
	public String adminCalculateList(Model model, HttpServletRequest req, HttpServletResponse resp, CalculateVO calculateVO) {
		String result = "calculate-admin/calculate-admin";
		
		if(calculateVO.getNowPage() != 1) {
			calculateVO.setPage((calculateVO.getNowPage()-1)*calculateVO.getPagePerRows());
		}
		calculateVO.setCalculateUserId(PermissionHelper.getSessionUserId(req));
		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		if(calculateVO.getCalculateYear()==0) {
			calculateVO.setCalculateYear(thisYear);
		}
		if(calculateVO.getCalculateMonth()==0) {
			calculateVO.setCalculateMonth(thisMonth);
		}
		// 등록 년
		List<Map<String, Object>> yearList = new ArrayList<>();
		
		try {
			yearList = contractService.selectContractYear();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerYear ]");
			logger.error(e.getMessage());
		}
		
		CalculateVO calAdminVO = new CalculateVO();
		
		try {
			calAdminVO = calculateService.selectCalculateSumByAdmin(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateForAg ]");
			logger.error(e.getMessage());
		}
		
		List<CalculateVO> list = new ArrayList<>();
		
		try {
			list = calculateService.selectCalculateListByAdmin(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateList ]");
			logger.error(e.getMessage());
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(list.size(), calculateVO.getNowPage(), calculateVO.getPagePerRows());
		
		
		model.addAttribute("calculateVO", calculateVO);
		model.addAttribute("calAdminVO", calAdminVO);
		model.addAttribute("list", list);
		model.addAttribute("listCount", list.size());
		
		model.addAttribute("yearList", yearList);
		model.addAttribute("thisYear", thisYear);
		model.addAttribute("thisMonth", thisMonth);
		
		model.addAttribute("pagingVO", pagingVO);
		
		return result;
	}
	
	/*
	 * 정산상세-관리자용
	 */
	@GetMapping(value = "/calculate/info/{calculateSeq}")
	public String selectCalculateInfo(Model model, HttpServletRequest req, HttpServletResponse resp, @PathVariable("calculateSeq") int calculateSeq, CalculateVO calculateVO) {
		String result = "calculate-admin/calculate-info";
		
		calculateVO.setCalculateSeq(calculateSeq);
		
		List<CalculateVO> list = new ArrayList<>();
		try {
			list = calculateService.selectCalculateInfoListByAdmin(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateInfo ]");
			logger.error(e.getMessage());
		}
		
		CalculateVO calculateUserInfo = new CalculateVO();
		CalculateVO calculateSumInfo = new CalculateVO();
		try {
			calculateUserInfo = calculateService.selectCalculateUserInfoByAdmin(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateInfo ]");
			logger.error(e.getMessage());
		}
		
		try {
			calculateSumInfo = calculateService.selectCalculateSumInfoByAdmin(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateInfo ]");
			logger.error(e.getMessage());
		}
		
		List<CalculateVO> financialList = new ArrayList<>();
		try {
			financialList = calculateService.selectCalculateInfoForFinancialList(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateInfo ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("calculateVO", calculateVO);
		model.addAttribute("list", list);
		model.addAttribute("calculateUserInfo", calculateUserInfo);
		model.addAttribute("calculateSumInfo", calculateSumInfo);
		model.addAttribute("financialList", financialList);
		
		return result;
	}
	
	/*
	 * 정산상세-관리자용
	 */
	@GetMapping(value = "/calculate/info/excel/download/{calculateUserId}")
	public void excelDownload(Model model, HttpServletRequest req, HttpServletResponse resp, @PathVariable("calculateUserId") String calculateUserId) {
		
		CalculateVO calculateVO = new CalculateVO();
		calculateVO.setCalculateUserId(calculateUserId);
		
		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		calculateVO.setCalculateYear(thisYear);
		calculateVO.setCalculateMonth(thisMonth);
		
		calculateVO.setPagePerRows(9999);
		calculateVO.setPage(1);
		
		List<CalculateVO> list = new ArrayList<>();
		try {
			list = calculateService.selectCalculateList(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateList ]");
			logger.error(e.getMessage());
		}
		
		CalculateVO calAgVO = new CalculateVO();
		try {
			calAgVO = calculateService.selectCalculateForAg(calculateVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCalculateList ]");
			logger.error(e.getMessage());
		}
		
		excelDownForAgCalculate(list, calAgVO, "AG정산", resp, req);
		
	}
}
