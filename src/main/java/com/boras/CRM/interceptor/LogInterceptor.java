package com.boras.CRM.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.boras.CRM.services.BlockIpService;
import com.boras.CRM.util.BlockHelper;
import com.boras.CRM.util.PermissionHelper;

@Component
public class LogInterceptor implements HandlerInterceptor {

	private static final Logger logger = LoggerFactory.getLogger(LogInterceptor.class);
	
	@Autowired
	private BlockIpService blockIpService;
	
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		boolean flag = true;
		
        String uri = request.getRequestURI();
        String ip = request.getRemoteHost();
        
        response.setContentType("text/html; charset=UTF-8");
        
        if(BlockHelper.setBlockIp(blockIpService, request, response)) {
        	if(!PermissionHelper.checkPermission(response, request, uri)) {
        		//response.sendRedirect("/");	//페이지 이동 
        		logger.warn("[ URL : " + uri + " , IP : " + ip + " ] There is No Permission");
        		flag = false;
        	}else {
        		if(!uri.contains("checkId") && !uri.contains("common/modal") && !uri.contains("toast") && !uri.contains("/v1/api/common/inquiry/list") && !uri.contains("/v1/api/inquiry/select/ledger")) {
        			logger.info("[ URL : " + uri + " , IP : " + ip + " ]");
        		}
        	}
        }else {
        	flag = false;
        }
        
        return flag;
    }
 
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        // TODO Auto-generated method stub
        
    }
 
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        // TODO Auto-generated method stub
        
    }
}