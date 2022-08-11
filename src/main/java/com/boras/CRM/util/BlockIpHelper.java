package com.boras.CRM.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.boras.CRM.services.BlockIdService;
import com.boras.CRM.services.BlockIpService;
import com.boras.CRM.vo.BlockIpVO;

public class BlockIpHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(BlockIpHelper.class);

	private static JSONObject blockIpList = new JSONObject();
	
	/**
	 * 프로젝트 init 차단 IP 조회 및 선언
	 * @param blockIpService
	 */
	public static void setInitBlockIpList(BlockIpService blockIpService) {
		try {
			blockIpList = new JSONObject();
			
			List<BlockIpVO> allBlockList = blockIpService.selectBlockIpList();
			
			for(BlockIpVO vo : allBlockList) {
				if(vo.getBlockIpUseYn().equals("Y")) {
					LocalDateTime dateTime = LocalDateTime.now();
					String timeStamp = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(dateTime);
					
					JSONObject ipDetail = new JSONObject();
					
					ipDetail.put("date", timeStamp);
					ipDetail.put("count", 0);
					ipDetail.put("blockYn", vo.getBlockIpUseYn());
					
					blockIpList.put(vo.getBlockIp(), ipDetail);
					
				}
			}
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
	}
	
	/**
	 * IP 차단
	 * @param blockIpService
	 */
	public static boolean setBlockIp(BlockIpService blockIpService, HttpServletRequest req, HttpServletResponse resp) {
		boolean flag = false;
		
		String ip = req.getRemoteHost();
		BlockIpVO vo = new BlockIpVO();
		vo.setBlockIp(ip);
		
		try {
			if(blockIpList.containsKey(ip)) {
				JSONObject jobj = (JSONObject) blockIpList.get(ip);
				
				if(jobj.get("blockYn").toString().equals("N")) {
					String oldTimeStamp = jobj.get("date").toString();
					
					LocalDateTime dateTime = LocalDateTime.now();
					String timeStamp = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(dateTime);
					
					jobj.put("date", timeStamp);
					
					int count = (int) jobj.get("count");
					
					if(timeStamp.equals(oldTimeStamp)) {
						count = count + 1;
						jobj.put("count", count);
						logger.warn("[CONNECTION IP : " + ip + ", COUNT : " + count + " ]");
					}else {
						jobj.put("count", 0);
					}
					
					if(count > 4) {
						jobj.put("blockYn", "Y");
						logger.warn("[CONNECTION IP : " + ip + ", COUNT : " + count + " ] BLOCKED");
						
						int i = blockIpService.isBlockIp(vo);
						
						if(i > 0) {
							vo = blockIpService.selectBlockIp(vo);
							
							vo.setBlockIpCount(vo.getBlockIpCount() + 1);
							vo.setBlockIpId(PermissionHelper.getSessionUserId(req));
							
							blockIpService.updateBlockIp(vo);
						}else {
							vo.setBlockIp(ip);
							vo.setBlockIpCount(1);
							vo.setBlockIpId(PermissionHelper.getSessionUserId(req));
							
							blockIpService.insertBlockIp(vo);
						}
					}else {
						flag = true;
					}
					
					blockIpList.put(ip, jobj);
				}else {
					vo = blockIpService.selectBlockIp(vo);
					
					LocalDateTime dateTime = LocalDateTime.now();
					String timeStamp = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(dateTime);
						
					if(vo == null) {
						jobj.put("date", timeStamp);
						jobj.put("count", 0);
						jobj.put("blockYn", "N");
						
						blockIpList.put(ip, jobj);
						flag = true;
					}else if(vo.getBlockIpUseYn().equals("N")) {
						jobj.put("date", timeStamp);
						jobj.put("count", 0);
						jobj.put("blockYn", "N");
						
						blockIpList.put(ip, jobj);
						flag = true;
					}
				}
				
			}else {
				LocalDateTime dateTime = LocalDateTime.now();
				String timeStamp = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(dateTime);
				
				JSONObject ipDetail = new JSONObject();
				
				ipDetail.put("date", timeStamp);
				ipDetail.put("count", 0);
				ipDetail.put("blockYn", "N");
				
				blockIpList.put(ip, ipDetail);
				flag = true;
			}
			
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		if(!flag) {
			try {
				PrintWriter printwriter = resp.getWriter();
				printwriter.print("<script>alert('접근이 차단되었습니다.\\n관리자에게 문의해주세요.'); history.back();</script>");
				printwriter.flush();
				printwriter.close();
			} catch (IOException e) {
				logger.error(e.getMessage());
			}
		}
		
		return flag;
	}
	
	public static boolean isBlockId(BlockIdService blockIdService, HttpServletRequest req, HttpServletResponse resp) {
		boolean flag = false;
		
		
		
		return flag;
	}
}
