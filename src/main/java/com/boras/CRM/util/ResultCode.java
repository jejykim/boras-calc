package com.boras.CRM.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResultCode {
	
	private static final Logger logger = LoggerFactory.getLogger(ResultCode.class);
	
	public static final String RESULT_CODE = "resultCode";
	public static final String RESULT_MSG = "resultMsg";

	public enum ResultNum {
		success
		, fail
		, e_00001
		, e_00002
		, e_00003
		, e_00004
		, e_00005
		, e_10001
		, e_10002
		, e_10003
		, e_10004
		, e_10005
		, e_20001
		, e_30001
		, e_40001
		, e_40002
		, e_40003
		, e_40004
		, e_50001
	}
	
	public static String resultNum(ResultNum resultNum) {
		String rvt = "";
		
		switch (resultNum) {
		case success:
			rvt = "00000";
			break;
		case fail:
			rvt = "00009";
			break;
		case e_00001:
			rvt = "00001";
			break;
		case e_00002:
			rvt = "00002";
			break;
		case e_00003:
			rvt = "00003";
			break;
		case e_00004:
			rvt = "00004";
			break;
		case e_00005:
			rvt = "00005";
			break;
		case e_10001:
			rvt = "10001";
			break;
		case e_10002:
			rvt = "10002";
			break;
		case e_10003:
			rvt = "10003";
			break;
		case e_10004:
			rvt = "10004";
			break;
		case e_10005:
			rvt = "10005";
			break;
		case e_20001:
			rvt = "20001";
			break;
		case e_30001:
			rvt = "30001";
			break;
		case e_40001:
			rvt = "40001";
			break;
		case e_40002:
			rvt = "40002";
			break;
		case e_40003:
			rvt = "40003";
			break;
		case e_40004:
			rvt = "40004";
			break;
		case e_50001:
			rvt = "50001";
			break;
		default:
			logger.error("ERROR : resultNum");
			break;
		}
		
		return rvt;
	}
	
	public static String resultMsg(ResultNum resultNum) {
		String rvt = "";
		
		switch (resultNum) {
		case success:
			rvt = "success";
			break;
		case fail:
			rvt = "fail";
			//rvt = "서비스가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.";
			break;
		case e_00001:
			rvt = "[Hashing PW error]";
			break;
		case e_00002:
			rvt = "[Database error]";
			//rvt = "서비스가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.";
			break;
		case e_00003:
			rvt = "[Already exist]";
			break;
		case e_00004:
			rvt = "[Server system error]";
			break;
		case e_00005:
			rvt = "[file validation error]";
			break;
		case e_10001:
			rvt = "[Not exist ID or Password]";
			//rvt = "로그인에 실패하였습니다.";
			break;
		case e_10002:
			rvt = "[There is no match data]";
			break;
		case e_10003:
			rvt = "[Different password regularity]";
			break;
		case e_10004:
			rvt = "[ID Blocked - 10min]";
			//rvt = "비밀번호 입력 횟수를 초과했습니다. 잠시 후 시도해주세요";
			break;
		case e_10005:
			rvt = "[OTP Blocked - 10min]";
			break;
		case e_20001:
			rvt = "[Token generation error]";
			break;
		case e_30001:
			rvt = "[File Save Error]";
			break;
		case e_40001:
			rvt = "[otp unregistered user]";
			break;
		case e_40002:
			rvt = "[otp validation error]";
			break;
		case e_40003:
			rvt = "[otp time out]";
			break;
		case e_40004:
			rvt = "[otp not valid]";
			break;
		case e_50001:
			rvt = "[permission error]";
			break;
		default:
			logger.error("ERROR : resultMsg");
			break;
		}
		
		return rvt;
	}
}