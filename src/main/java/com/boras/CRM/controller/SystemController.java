package com.boras.CRM.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.LedgerExcelService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.FIleDownloadHelper;
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.LedgerExcelVO;
import com.boras.CRM.vo.PagingVO;
import com.boras.CRM.vo.UserVO;

@Controller
public class SystemController extends FIleDownloadHelper {

	private static final Logger logger = LoggerFactory.getLogger(SystemController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private LedgerExcelService ledgerExcelService;
	
	@Value("classpath:static/data/통합엑셀sample.xlsx")
	Resource sampleCommonExcelFile;
	
	/*
	 * 원장 excel 설정 목록
	 */
	@GetMapping(value = "/system/ledger/excel/list")
	public String settingLedgerExcelList(Model model, HttpServletRequest req, HttpServletResponse resp, LedgerExcelVO ledgerExcelVO) {
		String result = "system/ledger-excel-list";
		
		List<LedgerExcelVO> list = new ArrayList<>();
		
    	try {
			list = ledgerExcelService.selectLedgerExcelList(ledgerExcelVO);
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + " , ERROR : selectLedgerExcelList ]");
			logger.error(e.getMessage());
		}
    	
    	List<CodeVO> financialCompanyCodelist = new ArrayList<>();
		List<CodeVO> financialBranchCodelist = new ArrayList<>();
		List<CodeVO> financialProductCodelist = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		codeVO.setCodeParentId(3000);
		
		try {
			financialCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		codeVO.setCodeParentId(3200);
		
		try {
			financialBranchCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		codeVO.setCodeParentId(3100);
		
		try {
			financialProductCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
    	model.addAttribute("list", list);
    	model.addAttribute("ledgerExcelVO", ledgerExcelVO);
    	model.addAttribute("financialCompanyCodelist", financialCompanyCodelist);
    	model.addAttribute("financialBranchCodelist", financialBranchCodelist);
    	model.addAttribute("financialProductCodelist", financialProductCodelist);
    	
		return result;
	}
	
	/*
	 * 통합 excel 다운로드
	 */
	@GetMapping(value = "/system/ledger/excel/dl/common")
	public void settingLedgerExcelDlCommon(Model model, HttpServletRequest req, HttpServletResponse resp) {
		//String result = "redirect:/system/ledger/excel/list";
		
		Map<String,Object> map = new HashMap<>();
		
		boolean flag = false;
		try {
			map.put("downloadFile", sampleCommonExcelFile.getFile());
			map.put("fileName", sampleCommonExcelFile.getFilename());
			flag = true;
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		if(flag) {
			try {
				renderMergedOutputModel(map, req, resp);
			}catch(Exception e) {
				logger.error("sectorplanViewDownload filedownload error");
			}
		}
		
		//return result;
	}
	
}
