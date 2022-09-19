package com.boras.CRM.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.InquiryService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.InquiryHelper;
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.InquiryVO;
import com.boras.CRM.vo.PagingVO;
import com.boras.CRM.vo.UserVO;

@Controller
public class InquiryController {

	private static final Logger logger = LoggerFactory.getLogger(InquiryController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private InquiryService inquiryService;
	
	@Autowired
	private CodeService codeService;
	
	/*
	 * AG 문의 내역 페이지
	 */
	@GetMapping(value = "/ag/inquiry/list")
	public String agInquiryList(Model model, HttpServletRequest req, HttpServletResponse resp, InquiryVO inquiryVO) {
		String result = "inquiry/inquiry-list";
		
		if(inquiryVO.getNowPage() != 1) {
			inquiryVO.setPage((inquiryVO.getNowPage()-1)*inquiryVO.getPagePerRows());
		}
    	
		List<InquiryVO> list = new ArrayList<>();
		int listCount = 0;
		
		inquiryVO.setInquiryFromUserId(PermissionHelper.getSessionUserId(req));
		
		switch (inquiryVO.getInquiryTeb()) {
			case "all":
				try {
					List<InquiryVO> tempList = inquiryService.selectInquiryListForAg(inquiryVO);
					
					for(InquiryVO vo : tempList) {
						boolean isRead = InquiryHelper.isNotReadInquiry(inquiryService, PermissionHelper.getSessionUserId(req), vo.getInquiryLedgerSeq());
						
						vo.setIsRead(isRead ? "N" : "Y");
						
						list.add(vo);
					}
				} catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + " , ERROR : selectInquiryListForAg ]");
					logger.error(e.getMessage());
				}
				
				try {
					listCount = inquiryService.selectInquiryListForAgCount(inquiryVO);
				}catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectInquiryListForAgCount ]");
					logger.error(e.getMessage());
				}
				break;
			case "notRead":
				list = InquiryHelper.reloadNewList(inquiryService, PermissionHelper.getSessionUserId(req));
				listCount = list.size();
				break;
			default:
				break;
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, inquiryVO.getNowPage(), inquiryVO.getPagePerRows());
		
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
		model.addAttribute("inquiryVO", inquiryVO);
		
		return result;
	}
	
	/*
	 * 관리자 문의 내역 페이지
	 */
	@GetMapping(value = "/admin/inquiry/list")
	public String adminInquiryList(Model model, HttpServletRequest req, HttpServletResponse resp, InquiryVO inquiryVO) {
		String result = "inquiry-admin/inquiry-list";
		
		if(inquiryVO.getNowPage() != 1) {
			inquiryVO.setPage((inquiryVO.getNowPage()-1)*inquiryVO.getPagePerRows());
		}
    	
		List<InquiryVO> list = new ArrayList<>();
		int listCount = 0;
		
		inquiryVO.setInquiryFromUserId(PermissionHelper.getSessionUserId(req));
		
		switch (inquiryVO.getInquiryTeb()) {
			case "all":
				try {
					List<InquiryVO> tempList = inquiryService.selectInquiryListForAdmin(inquiryVO);
					
					for(InquiryVO vo : tempList) {
						boolean isRead = InquiryHelper.isNotReadInquiry(inquiryService, PermissionHelper.getSessionUserId(req), vo.getInquiryLedgerSeq());
						
						vo.setIsRead(isRead ? "N" : "Y");
						
						list.add(vo);
					}
				} catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + " , ERROR : selectInquiryListForAdmin ]");
					logger.error(e.getMessage());
				}
				
				try {
					listCount = inquiryService.selectInquiryListForAdminCount(inquiryVO);
				}catch (Exception e) {
					logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectInquiryListForAdminCount ]");
					logger.error(e.getMessage());
				}
				break;
			case "notRead":
				list = InquiryHelper.reloadNewList(inquiryService, PermissionHelper.getSessionUserId(req));
				listCount = list.size();
				break;
			default:
				break;
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, inquiryVO.getNowPage(), inquiryVO.getPagePerRows());
		
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
		model.addAttribute("inquiryVO", inquiryVO);
		
		return result;
	}
	
}
