package com.boras.CRM.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.boras.CRM.services.BlockIdService;
import com.boras.CRM.services.BlockIpService;
import com.boras.CRM.vo.BlockIdVO;
import com.boras.CRM.vo.BlockIpVO;

public class BlockHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(BlockHelper.class);

	private static JSONObject blockIpList = new JSONObject();
	
	private static JSONObject blockIdList = new JSONObject();
	
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
				printwriter.print("<script>alert('접근이 차단되었습니다.\\n관리자에게 문의해주세요.'); location.href='/';</script>");
				printwriter.flush();
				printwriter.close();
			} catch (IOException e) {
				logger.error(e.getMessage());
			}
		}
		
		return flag;
	}
	
	/**
	 * 계정 차단 유무
	 * @param blockIdService
	 * @param req
	 * @param resp
	 * @param id
	 * @return
	 */
	public static boolean isBlockId(BlockIdService blockIdService, HttpServletRequest req, HttpServletResponse resp, String id) {
		boolean flag = true;
		
		BlockIdVO vo = new BlockIdVO();
		vo.setBlockId(id);
		
		try {
			int i = blockIdService.isBlockId(vo);
			
			if(i > 0) {
				vo = blockIdService.selectBlockId(vo);
				
				if(vo.getBlockIdUseYn().equals("N")) {
					flag = false;
				}
			}else {
				flag = false;
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		return flag;
	}
	
	/**
	 * 계정 차단
	 */
	public static void setBlockId(BlockIdService blockIdService, HttpServletRequest req, HttpServletResponse resp, String id) {
		
		if(blockIdList.containsKey(id)) {
			int count = (int) blockIdList.get(id);
			
			if(!(count > 5)) {
				count = count + 1;
				
				if(count > 4) {
					BlockIdVO vo = new BlockIdVO();
					vo.setBlockId(id);
					
					try {
						int i = blockIdService.isBlockId(vo);
						
						if(i > 0) {
							vo = blockIdService.selectBlockId(vo);
							vo.setBlockIdIp(req.getRemoteHost());
							vo.setBlockIdCount(vo.getBlockIdCount() + 1);
							
							blockIdService.updateBlockId(vo);
						}else {
							vo.setBlockIdIp(req.getRemoteHost());
							
							blockIdService.insertBlockId(vo);
						}
					} catch (Exception e) {
						logger.error(e.getMessage());
					}
				}
			}
		}
		
	}
	
	/**
	 * 계정 차단 static 초기화
	 */
	public static void resetBlockId(String id) {
		if(blockIdList.containsKey(id)) {
			blockIdList.remove(id);
		}
	}
}