package com.boras.CRM.util;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class NonceHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(NonceHelper.class);

	private static final int SHORT_ID_LENGTH = 10;
	
	// 임시 비밀번호 생성
	public String makeImsiPassword() {
		StringBuffer temp = new StringBuffer();
		Random rnd = null;
		
		try {
			rnd = SecureRandom.getInstance("SHA1PRNG");
		} catch (NoSuchAlgorithmException e) {
			logger.error("makeImsiPassword Error");
			logger.error(e.getMessage());
		}
		
		StringBuffer sc = new StringBuffer("!@#$%^&*()_-+=[];:,.?/\"\'{}|<>~₩");
		if(rnd != null) {
			for (int i = 0; i < SHORT_ID_LENGTH; i++) {
				int rIndex = rnd.nextInt(4);
				switch (rIndex) {
				case 0:
					// a-z
					int small = rnd.nextInt(26);
					int smallSum = small + 97;
					temp.append((char) smallSum);
					break;
				case 1:
					// A-Z
					int big = rnd.nextInt(26);
					int bigSum = big + 65;
					temp.append((char) bigSum);
					break;
				case 2:
					// 0-9
					temp.append((rnd.nextInt(10)));
					break;
				case 3:
					// 특수문자
					temp.append(sc.charAt(rnd.nextInt(12)));
					break;
				default:
					logger.error("ERROR : makeImsiPassword");
					break;
				}
			}
		}
		
		return temp.toString();
	}
	
	// otp 번호 생성 6자리
	public String makeOtpNum() {
		Random random = null;
		try {
			random = SecureRandom.getInstance("SHA1PRNG");
		} catch (NoSuchAlgorithmException e) {
			logger.error("makeImsiPassword Error");
			logger.error(e.getMessage());
		}
		StringBuffer opt = new StringBuffer();
		if(random != null) {
			for(int i = 0; i < 6; i++) {
				int x = random.nextInt(9);
				opt.append(x);
			}
		}
		
		return opt.toString();
	}
	
	// 비밀번호 유효성 검사
	public Map<String, Object> checkPassword(String password, String id) {
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
	public boolean continuousPwd(String pwd) {
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
	
	// 아이디 유효성 검사
	public boolean checkStr(String str) {
		Map<String, Object> rvt = new HashMap<>();
		boolean flag = false;
		Pattern passPattern = Pattern.compile("[a-zA-Z0-9]");
		Matcher passMatcher = passPattern.matcher(str);
		if(passMatcher != null) {
			if(passMatcher.find()){
				flag = true;
			}
		}
		
		return flag;
	}
	
	// 아이디와 동일문자 4자리 체크
	public boolean compareToId(String pwd, String id) {
		for(int i=0; i<pwd.length()-3; i++) {
			if(id.contains(pwd.substring(i, i+3))) {
				return true;
			}
		}
		return false;
	}
	
	// 사번 유효성 검사
	public boolean checkNum(String num) {
		Map<String, Object> rvt = new HashMap<>();
		boolean flag = false;
		Pattern passPattern = Pattern.compile("[0-9]");
		Matcher passMatcher = passPattern.matcher(num);
			
		if(passMatcher.find()){
			flag = true;
		}
			
		return flag;
	}
}