package com.boras.CRM.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.boras.CRM.util.PermissionHelper;

@Component
public class LogInterceptor implements HandlerInterceptor {

	private static final Logger logger = LoggerFactory.getLogger(LogInterceptor.class);
	
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String uri = request.getRequestURI();
        
        response.setContentType("text/html; charset=UTF-8");
        
    	if(!PermissionHelper.checkPermission(response, request, uri)) {
        	//response.sendRedirect("/");	//페이지 이동 
        	logger.warn("[ URL : " + uri + " , IP : " + request.getRemoteHost() + " ] There is No Permission");
        }else {
        	if(!uri.contains("checkId") && !uri.contains("common/modal") && !uri.contains("toast")) {
        		logger.info("[ URL : " + uri + " , IP : " + request.getRemoteHost() + " ]");
        	}
        }
        
        return true;
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