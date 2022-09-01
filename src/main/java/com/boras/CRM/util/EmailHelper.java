package com.boras.CRM.util;

import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;

import com.boras.CRM.vo.UserVO;

public class EmailHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(EmailHelper.class);

	/**
	 * java mail sender
	 * @throws MessagingException 
	 * */
	public boolean SendForEmail(JavaMailSenderImpl mailSender, UserVO userVO, String msgType, Map<String, Object> param) throws MessagingException {
		boolean flag = false;
		try {
			final MimeMessagePreparator preparator = new MimeMessagePreparator() {
				@Override public void prepare(MimeMessage mimeMessage) throws Exception {
					final MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
						helper.setTo(userVO.getUserEmail());
						helper.setSubject(getTitle(msgType));
						helper.setText(getMsg(msgType, userVO, param), true);
				}
			};
			
			mailSender.send(preparator);
			
			logger.info("[ SendForEmail ] ID : " + userVO.getUserId() + ", EMAIL : " + userVO.getUserEmail());
			
			flag = true;
		} catch (Exception e) {
			logger.error(e.getMessage());
			flag = false;
		}
			
		return flag;
	}
	
	public String getMsg(String msgType, UserVO userVO, Map<String, Object> param) {
		String rvt = "";
		
		switch (msgType) {
			case "imsiPw":
				String title = "[BORAS] 정산 시스템 임시비밀번호 발송";
				
				rvt = "<body style=\"margin: 0;padding: 0\">\r\n" + 
					"    <table border=\"0\" width=\"600px\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse;\">\r\n" + 
					"        <tr bgcolor=\"#282a3c\">\r\n" + 
					"            <td style=\"padding:10px;padding-top: 18px;color: white;text-align: center; font-size: 25px;font-weight: bold;\">\r\n" + 
					"                " + title + " \r\n" + 
					"            </td>\r\n" + 
					"        </tr>\r\n" + 
					"        <tr>\r\n" + 
					"            <td style=\"padding: 40px;margin: 0 auto\">\r\n" + 
					"                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n" + 
					"                    <tr>\r\n" + 
					"                        <td style=\"text-align: center;padding-top: 20px;padding-bottom: 30px;font-size: 14px;text-align: 18px;\">\r\n" + 
					"						<b>ID</b>  :  "+userVO.getUserId()+ 
					"                        </td>\r\n" + 
					"                    </tr>\r\n" +
					"                    <tr>\r\n" + 
					"                        <td style=\"text-align: center;padding-top: 20px;padding-bottom: 30px;font-size: 14px;text-align: 18px;\">\r\n" + 
					"						<b>임시 비밀번호</b>  :  " +param.get("imsiPw").toString()+
					"                        </td>\r\n" + 
					"                    </tr>\r\n" +
					"                    <tr>\r\n" + 
					"                        <td style=\"text-align: center;padding-top: 20px;padding-bottom: 30px;font-size: 14px;text-align: 18px;\">\r\n" + 
					"						<a href=\"https://www.naver.com\" style=\"background: #0d6efd;color: #ffffff;margin: 0;padding: 0.5rem 1rem;font-size: 1rem;font-weight: 400;text-align: center;text-decoration: none;border: none;border-radius: 4px;display: inline-block;width: auto;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);transition: 0.5s;\">BORAS 정산 시스템 이동</a>" +
					"                        </td>\r\n" + 
					"                    </tr>\r\n" +
					"                    <tr>\r\n" + 
					"                        <td style=\"border-bottom: 1.3px solid #d6d6d6;padding: 10px;\"></td>\r\n" + 
					"                    </tr>\r\n" + 
					"                </table>\r\n" + 
					"            </td>\r\n" + 
					"        </tr>\r\n" + 
					"        <tr>\r\n" + 
					"            <td bgcolor=\"#f2f3f8\" style=\"padding: 40px;margin: 0 auto\">\r\n" + 
					"                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n" + 
					"                    <tr>\r\n" + 
					"                        <td style=\"text-align: center;font-size: 12px;line-height: 18px;color: #222222;\">\r\n" + 
					"                            [BORAS] 인천시 남동구 선수촌공원로27 보미프라자 5층<br>\r\n" + 
					"                            <br>\r\n" + 
					"                            <span style=\"font-size: 10px;color: #565656\">COPYRIGHT© 2022 BORAS. ALL RIGHTS RESERVED.</span>\r\n" + 
					"                        </td>\r\n" + 
					"                    </tr>\r\n" + 
					"                </table>\r\n" + 
					"            </td>\r\n" + 
					"        </tr>\r\n" + 
					"    </table>\r\n" + 
					"</body>";
				break;
	
			default:
				break;
		}
		
		return rvt;
	}
	
	public String getTitle(String msgType) {
		String rvt = "";
		
		switch (msgType) {
			case "imsiPw":
				rvt = "[BORAS] 정산 시스템 임시비밀번호 발송";
				break;
	
			default:
				break;
		}
		
		return rvt;
	}
}
