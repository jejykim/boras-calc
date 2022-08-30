package com.boras.CRM.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
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
import org.springframework.web.bind.annotation.PostMapping;

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.LedgerService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.ApprovalVO;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.LedgerVO;
import com.boras.CRM.vo.PagingVO;
import com.boras.CRM.vo.UserVO;

@Controller
public class LedgerController {

	private static final Logger logger = LoggerFactory.getLogger(LedgerController.class);
	
	@Autowired
	private LedgerService ledgerService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private UserService userService;
	
	/*
	 * 원장 목록 페이지 (AG용)
	 */
	@GetMapping(value = "/ag/ledger/list")
	public String agLedgerList(Model model, HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
		String result = "ledger/ledger-list";
    	
		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		if(ledgerVO.getLedgerCreateYear() == 0) {
			ledgerVO.setLedgerCreateYear(thisYear);
		}
		
		if(ledgerVO.getLedgerCreateMonth() == 0) {
			ledgerVO.setLedgerCreateMonth(thisMonth);
		}
		
		ApprovalVO approvalVO = new ApprovalVO();
		approvalVO.setApprovalUserId(PermissionHelper.getSessionUserId(req));
		ledgerVO.setApprovalUserId(PermissionHelper.getSessionUserId(req));
		
		// AG 승인 여부 체크
		List<Map<String, Object>> approvalCount = new ArrayList<>();
		
		try {
			approvalCount = ledgerService.selectCountOfApprovalThisMonth(approvalVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCountOfApprovalThisMonth ]");
			logger.error(e.getMessage());
		}
		
		int totalCount = 0;
		int requestCount = 0;
		
		for(Map<String, Object> map : approvalCount) {
			if(map.get("approval_state").toString().equals("전체")) {
				totalCount = Integer.parseInt(map.get("cnt").toString());
			}else if(map.get("approval_state").toString().equals("요청")) {
				requestCount = Integer.parseInt(map.get("cnt").toString());
			}
		}
		
		List<LedgerVO> list = new ArrayList<>();
		
		if(totalCount > 0 && !(requestCount > 0)) {
			try {
				list = ledgerService.selectLedgerListForAgDone(ledgerVO);
			} catch (Exception e) {
				logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerListForAgDone ]");
				logger.error(e.getMessage());
			}
		}else {
			try {
				list = ledgerService.selectLedgerListForAg(ledgerVO);
			} catch (Exception e) {
				logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerListForAg ]");
				logger.error(e.getMessage());
			}
		}
		
		List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialBranchCodelist = new ArrayList<>();
		List<CodeVO> financialBranchCodelist2 = new ArrayList<>();
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
		
		for(int fcCode : ledgerVO.getsLedgerFinancialCompanyCd()) {
			// 금융지점
			codeVO.setCodeParentId(fcCode);
			try {
				financialBranchCodelist = codeService.selectCodeList(codeVO);
			}catch (Exception e) {
				logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
				logger.error(e.getMessage());
			}
		}
		
		// 금융지점
		codeVO.setCodeParentId(3200);
		try {
			financialBranchCodelist2 = codeService.selectCodeList(codeVO);
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
		
		model.addAttribute("list", list);
		model.addAttribute("ledgerVO", ledgerVO);
		
		model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
		model.addAttribute("financialBranchCodelist", financialBranchCodelist);
		model.addAttribute("financialBranchCodelist2", financialBranchCodelist2);
		model.addAttribute("financialProductCodelist", financialProductCodelist);
		model.addAttribute("dealerBrandCodeList", dealerBrandCodeList);
		
		model.addAttribute("thisYear", thisYear);
		model.addAttribute("thisMonth", thisMonth);
    	
		return result;
	}
	
	/*
	 * 원장 목록 페이지 (관리자용)
	 */
	@GetMapping(value = "/admin/ledger/list")
	public String adminLedgerList(Model model, HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
		String result = "ledger-admin/ledger-list";
    	
		if(ledgerVO.getNowPage() != 1) {
			ledgerVO.setPage((ledgerVO.getNowPage()-1)*ledgerVO.getPagePerRows());
		}
		
		// 현재 년, 월
		Calendar cal = Calendar.getInstance();
		int thisYear = cal.get(Calendar.YEAR);
		int thisMonth = cal.get(Calendar.MONTH) + 1;
		
		if(ledgerVO.getLedgerCreateYear() == 0) {
			ledgerVO.setLedgerCreateYear(thisYear);
		}
		
		if(ledgerVO.getLedgerCreateMonth() == 0) {
			ledgerVO.setLedgerCreateMonth(thisMonth);
		}
		
		// 원장 목록
		List<LedgerVO> list = new ArrayList<>();
		int listCount = 0;
		
		try {
			list = ledgerService.selectLedgerList(ledgerVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerList ]");
			logger.error(e.getMessage());
		}
		
		try {
			listCount = ledgerService.selectLedgerListCount(ledgerVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerListCount ]");
			logger.error(e.getMessage());
		}
		
		// 등록 년
		List<Map<String, Object>> yearList = new ArrayList<>();
		
		try {
			yearList = ledgerService.selectLedgerYear();
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerYear ]");
			logger.error(e.getMessage());
		}
		
		// 금융사 원장 합계 표시
		List<Map<String, Object>> sumCostList = new ArrayList<>();
		
		try {
			sumCostList = ledgerService.selectSumCost(ledgerVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectLedgerYear ]");
			logger.error(e.getMessage());
		}
		
		List<CodeVO> codeCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialBranchCodelist = new ArrayList<>();
		List<CodeVO> financialBranchCodelist2 = new ArrayList<>();
		List<CodeVO> financialProductCodelist = new ArrayList<>();
		List<CodeVO> dealerBrandCodeList = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		
		// 코드사
		codeVO.setCodeParentId(2000);
		try {
			codeCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		// 금융사
		codeVO.setCodeParentId(3000);
		try {
			financialCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		for(int fcCode : ledgerVO.getsLedgerFinancialCompanyCd()) {
			// 금융지점
			codeVO.setCodeParentId(fcCode);
			try {
				financialBranchCodelist = codeService.selectCodeList(codeVO);
			}catch (Exception e) {
				logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
				logger.error(e.getMessage());
			}
		}
		
		// 금융지점
		codeVO.setCodeParentId(3200);
		try {
			financialBranchCodelist2 = codeService.selectCodeList(codeVO);
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
		
		List<UserVO> agList = new ArrayList<>();
		UserVO userVO = new UserVO();
		
		try {
			agList = userService.selectUserListAg(userVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, ledgerVO.getNowPage(), ledgerVO.getPagePerRows());
		
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
		model.addAttribute("ledgerVO", ledgerVO);
		model.addAttribute("yearList", yearList);
		model.addAttribute("thisYear", thisYear);
		model.addAttribute("thisMonth", thisMonth);
		
		model.addAttribute("codeCompanyCodelist", codeCompanyCodelist);
		model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
		model.addAttribute("financialBranchCodelist", financialBranchCodelist);
		model.addAttribute("financialBranchCodelist2", financialBranchCodelist2);
		model.addAttribute("financialProductCodelist", financialProductCodelist);
		model.addAttribute("dealerBrandCodeList", dealerBrandCodeList);
		model.addAttribute("agList", agList);
		
		model.addAttribute("sumCostList", sumCostList);
    	
		return result;
	}
	
	/*
	 * 원장 등록 페이지
	 */
	@GetMapping(value = "/admin/ledger/add")
	public String adminLedgerAdd(Model model, HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
		String result = "ledger-admin/ledger-add";
    	
		List<CodeVO> codeCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialProductCodelist = new ArrayList<>();
		List<CodeVO> dealerBrandCodelist = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		
		// 코드사
		codeVO.setCodeParentId(2000);
		try {
			codeCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
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
		
		// 딜러브랜드
		codeVO.setCodeParentId(4000);
		try {
			dealerBrandCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		model.addAttribute("codeCompanyCodelist", codeCompanyCodelist);
		model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
		model.addAttribute("financialProductCodelist", financialProductCodelist);
		model.addAttribute("dealerBrandCodelist", dealerBrandCodelist);
    	
		return result;
	}
}
