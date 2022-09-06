package com.boras.CRM.util;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordRole {

	// 비밀번호 유효성 검사
	public static Map<String, Object> checkPassword(String password, String id) {
		Map<String, Object> rvt = new HashMap<>();
		
		Pattern passPattern1 = Pattern.compile("^(?=.*[a-zA-Z]).{8,20}$");
		Matcher passMatcher1 = passPattern1.matcher(password);
		
		if(!passMatcher1.find()){
			rvt.put("flag", false);
			rvt.put("msg", "비밀번호는 영문 포함 8자 이상 20자 이하여야 합니다.");
			return rvt;
		}
		
		if(compareToId(password, id)) {
			rvt.put("flag", false);
			rvt.put("msg", "아이디와 비밀번호는 4자리 이상 같을 수 없습니다.");
			return rvt;
		}
		
		int i = 0;
		
		// 대분자
		Pattern passPattern2 = Pattern.compile("^(?=.*[A-Z])");
		Matcher passMatcher2 = passPattern2.matcher(password);
		
		if(passMatcher2.find()){
			i = i + 1;
		}
		
		// 소문자
		Pattern passPattern3 = Pattern.compile("^(?=.*[a-z])");
		Matcher passMatcher3 = passPattern3.matcher(password);
		
		if(passMatcher3.find()){
			i = i + 1;
		}
		
		// 숫자
		Pattern passPattern4 = Pattern.compile("^(?=.*\\d)");
		Matcher passMatcher4 = passPattern4.matcher(password);
		
		if(passMatcher4.find()){
			i = i + 1;
		}
		
		// 특수문자
		Pattern passPattern5 = Pattern.compile("^(?=.*\\W)");
		Matcher passMatcher5 = passPattern5.matcher(password);
		
		if(passMatcher5.find()){
			i = i + 1;
		}
		
		if(i > 2) {
			Pattern passPattern6 = Pattern.compile("(\\w)\\1\\1\\1");
			Matcher passMatcher6 = passPattern6.matcher(password);
			
			if(passMatcher6.find()) {
				rvt.put("flag", false);
				rvt.put("msg", "비밀번호에 동일한 숫자 또는 문자를 4자리 이상 사용할 수 없습니다.");
			}else {
				if(continuousPwd(password)) {
					rvt.put("flag", false);
					rvt.put("msg", "비밀번호에 연속된 숫자 또는 문자를 4자리 이상 사용할 수 없습니다.");
				}else {
					rvt.put("flag", true);
				}
			}
		}else {
			rvt.put("flag", false);
			rvt.put("msg", "비밀번호는 영문 대문자, 소문자, 특수문자, 숫자중 3종류를 포함하여야 합니다.");
		}
		
		return rvt;
	}
	
	// 비밀번호 연속된 숫자 또는 문자 4자리 이상
	public static boolean continuousPwd(String pwd) {
		int o = 0;
		int d = 0;
		int p = 0;
		int n = 0;  
		int limit = 4;
		  
		for(int i=0; i<pwd.length(); i++) {
			char tempVal = pwd.charAt(i);
			if(i > 0 && (p = o - tempVal) > -2 && (n = p == d ? n + 1 :0) > limit -3) {
				return true;
			}
			d = p;
			o = tempVal;
		}
		return false;
	}
	
	// 아이디와 동일문자 4자리 체크
	public static boolean compareToId(String pwd, String id) {
		for(int i=0; i<pwd.length()-3; i++) {
			if(id.contains(pwd.substring(i, i+3))) {
				return true;
			}
		}
		return false;
	}
}
