package com.boras.CRM.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

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

import com.boras.CRM.services.UserService;
import com.boras.CRM.session.WebSessionListener;
import com.boras.CRM.util.PagingControl;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.vo.PagingVO;
import com.boras.CRM.vo.UserVO;

@Controller
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	/*
	 * 사용자 목록 페이지
	 */
	@GetMapping(value = "/user/list")
	public String userList(Model model, HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
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
		
		PagingControl pc = new PagingControl();
		PagingVO pagingVO = pc.paging(listCount, userVO.getNowPage(), userVO.getPagePerRows());
		
		model.addAttribute("list", list);
		model.addAttribute("listCount", listCount);
		model.addAttribute("pagingVO", pagingVO);
		model.addAttribute("userVO", userVO);
    	
		return result;
	}
	
	/*
	 * 사용자 정보 수정 페이지 (상세)
	 */
	@PostMapping(value = "/user/change")
	public String userChange(Model model, HttpServletRequest req, HttpServletResponse resp, UserVO userVO) {
		String result = "user/change";
		
		try {
			userVO = userService.selectUserInfo(userVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : selectUserInfo ]");
			logger.error(e.getMessage());
		}
		
		// AG 본인 페이지만 호출
		if(userVO.getUserPermissionCd() >= 1200) {
			if(!PermissionHelper.getSessionUserId(req).equals(userVO.getUserId())) {
				logger.warn("잘못된 서비스 시도 IP : " + req.getRemoteHost());
				
				try {
					PrintWriter printwriter = resp.getWriter();
					printwriter.print("<script>alert('잘못된 접근입니다.\\n반복 시도시 서비스 차단됩니다.'); location.href='/';</script>");
					printwriter.flush();
					printwriter.close();
				} catch (IOException e) {
					logger.error(e.getMessage());
				}
			}
		}else {
			model.addAttribute("userVO", userVO);
		}
    	
		return result;
	}
	
	/*
	 * 사용자 정보 수정 완료
	 */
	@PostMapping(value = "/user/change/ok")
	public String userChangeOk(Model model, HttpServletRequest req, HttpServletResponse resp, UserVO userVO, RedirectAttributes ra) {
		String result = "redirect:/user/change";
		
		try {
			userService.updateUser(userVO);
		}catch (Exception e) {
			logger.error("[ URL : " + req.getRequestURI() + ", ERROR : updateUser ]");
			logger.error(e.getMessage());
		}
		
		ra.addFlashAttribute(userVO);
    	
		return result;
	}
}
