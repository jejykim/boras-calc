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
	public String adminInquiryList(Model model, HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
		String result = "user/user-list";
		
		if(userVO.getNowPage() != 1) {
			userVO.setPage((userVO.getNowPage()-1)*userVO.getPagePerRows());
		}
    	
		List<UserVO> list = new ArrayList<>();
		int listCount = 0;
		
		try {
			list = userService.selectUserList(userVO);
			
			for(UserVO vo : list) {
				if(WebSessionListener.userList.containsKey(vo.getUserId())) {
					vo.setSessionLive("Y");
				}else {
					vo.setSessionLive("N");
				}
			}
		} catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + " , ERROR : selectUserList ]");
			logger.error(e.getMessage());
		}
		
		try {
			listCount = userService.selectUserListCount(userVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectUserListCount ]");
			logger.error(e.getMessage());
		}
		
		List<CodeVO> permissionCodelist = new ArrayList<>();
		List<CodeVO> businessCodelist = new ArrayList<>();
		List<CodeVO> codeCompanyCodelist = new ArrayList<>();
		CodeVO codeVO = new CodeVO();
		codeVO.setCodeParentId(1000);
		
		try {
			permissionCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		codeVO.setCodeParentId(5000);
		
		try {
			businessCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		codeVO.setCodeParentId(2000);
		
		try {
			codeCompanyCodelist = codeService.selectCodeList(codeVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectCodeList ]");
			logger.error(e.getMessage());
		}
		
		List<Map<String, Object>> accountCountList = new ArrayList<>();
		
		try {
			accountCountList = userService.selectUserAgNewAdminCount();
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectUserAgNewAdminCount ]");
			logger.error(e.getMessage());
		}
		
		int agCount = 0;
		int adminCount = 0;
		int newCount = 0;
		
		for(Map<String, Object> map : accountCountList) {
			if(map.get("name").toString().equals("admin")) {
				adminCount = Integer.parseInt(map.get("count").toString());
			}else if(map.get("name").toString().equals("ag")) {
				agCount = Integer.parseInt(map.get("count").toString());
			}else if(map.get("name").toString().equals("new")) {
				newCount = Integer.parseInt(map.get("count").toString());
			}
		}
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, userVO.getNowPage(), userVO.getPagePerRows());
		
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
		model.addAttribute("userVO", userVO);
		model.addAttribute("permissionCodelist", permissionCodelist);
		model.addAttribute("businessCodelist", businessCodelist);
		model.addAttribute("codeCompanyCodelist", codeCompanyCodelist);
		model.addAttribute("agCount", agCount);
		model.addAttribute("adminCount", adminCount);
		model.addAttribute("newCount", newCount);
    	
		return result;
	}
	
}
