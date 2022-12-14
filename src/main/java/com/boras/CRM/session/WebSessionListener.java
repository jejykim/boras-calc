package com.boras.CRM.session;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class WebSessionListener implements HttpSessionListener {

	@Value("${server.servlet.session.timeout}")
	private int sessionTime;
	
	public static JSONObject userList = new JSONObject();
	
	/**
	 * session 이 소멸되는 시점에 실행, 기본 단위는 초(1분 미만은 설정할 수 없음)
	 * @param httpSessionEvent
	 */
	@Override
	public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
	    HttpSession session = httpSessionEvent.getSession();

	    String userId = (String) session.getAttribute("userId");
	    
	    //로그아웃 유저 삭제
	    synchronized(userList){
	    	userList.remove(userId);
	    }

	}
	
	public void sessionCreated(HttpSessionEvent se) {
		se.getSession().setMaxInactiveInterval(sessionTime);
	}
	
}