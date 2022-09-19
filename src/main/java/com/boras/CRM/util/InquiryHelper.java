package com.boras.CRM.util;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.boras.CRM.services.InquiryService;
import com.boras.CRM.vo.InquiryVO;

public class InquiryHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(InquiryHelper.class);
	
	private static JSONObject inquiryList = new JSONObject();
	
	/**
	 * 초기 문의 목록 세팅
	 * @param inquiryService
	 */
	public static void setInitInquiryList(InquiryService inquiryService) {
		
		// 전체 문의 내역 조회
		List<InquiryVO> list = new ArrayList<>();
		
		try {
			list = inquiryService.selectAllInquiryList();
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		if(list.size() > 0) {
			for(InquiryVO vo : list) {
				JSONObject tempJobj = new JSONObject();
				
				// ag 용
				if(inquiryList.containsKey(vo.getInquiryFromUserId())) {
					tempJobj = (JSONObject) inquiryList.get(vo.getInquiryFromUserId());
					
					if(tempJobj.containsKey(vo.getInquiryLedgerSeq() + "")) {
						if(Integer.parseInt(tempJobj.get(vo.getInquiryLedgerSeq() + "").toString()) < vo.getInquirySeq()) {
							tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
						}
					}else {
						tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
					}
				}else if(inquiryList.containsKey(vo.getInquiryToUserId())) {
					tempJobj = (JSONObject) inquiryList.get(vo.getInquiryToUserId());
					
					if(tempJobj.containsKey(vo.getInquiryLedgerSeq() + "")) {
						if(Integer.parseInt(tempJobj.get(vo.getInquiryLedgerSeq() + "").toString()) < vo.getInquirySeq()) {
							tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
						}
					}else {
						tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
					}
				}else {
					tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
				}
				
				inquiryList.put(vo.getInquiryFromUserId(), tempJobj);
				
				// 관리자 용
				if(vo.getInquiryFromUserId() != null && vo.getInquiryToUserId() != null) {
					if(inquiryList.containsKey(vo.getInquiryFromUserId())) {
						tempJobj = (JSONObject) inquiryList.get(vo.getInquiryFromUserId());
						
						if(tempJobj.containsKey(vo.getInquiryLedgerSeq() + "")) {
							if(Integer.parseInt(tempJobj.get(vo.getInquiryLedgerSeq() + "").toString()) < vo.getInquirySeq()) {
								tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
							}
						}else {
							tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
						}
					}else {
						tempJobj.put(vo.getInquiryLedgerSeq() + "", vo.getInquirySeq());
					}
					
					inquiryList.put(vo.getInquiryFromUserId(), tempJobj);
				}
			}
			
			logger.info("[init inquiry] " + inquiryList.toJSONString());
			
			/*
			//테스트용
			inquiryList = new JSONObject();
			JSONObject testJobj = new JSONObject();
			testJobj.put("698", 1);
			inquiryList.put("test", testJobj);
			*/
		}
	}
	
	/**
	 * 신규 문의 내역 목록 조회
	 * @param inquiryService
	 * @param id
	 * @return
	 */
	public static List<InquiryVO> reloadNewList(InquiryService inquiryService, String id) {
		List<InquiryVO> list = new ArrayList<>();
		
		// 전체 문의 내역 조회
		List<InquiryVO> inquiryTempList = new ArrayList<>();
		
		try {
			inquiryTempList = inquiryService.selectAllInquiryList();
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		if(inquiryTempList.size() > 0) {
			for(InquiryVO vo : inquiryTempList) {
				if(vo.getInquiryToUserId() != null) {
					if(vo.getInquiryToUserId().equals(id)) {
						JSONObject tempJobj = (JSONObject) inquiryList.get(id);
						
						int bfInquirySeq = Integer.parseInt(tempJobj.get(vo.getInquiryLedgerSeq() + "").toString());
						if(bfInquirySeq < vo.getInquirySeq()) {
							vo.setIsRead("N");
							list.add(vo);
						}
					}
				}
			}
		}
		
		return list;
	}
	
	/**
	 * 목록 읽었는지 (존재하는지) 여부
	 * @param id
	 * @param ledgerSeq
	 * @return
	 */
	public static boolean isNotReadInquiry(InquiryService inquiryService, String id, int ledgerSeq) {
		boolean flag = false;
		List<InquiryVO> list = reloadNewList(inquiryService, id);
		
		for(InquiryVO vo : list) {
			if(vo.getInquiryLedgerSeq() == ledgerSeq) {
				flag = true;
				break;
			}
		}
		
		return flag;
	}
	
	/**
	 * 문의 읽기 처리
	 * @param id
	 * @param ledgerSeq
	 * @param lastInquirySeq
	 */
	public static void readInquiry(String id, int ledgerSeq, int lastInquirySeq) {
		JSONObject tempJobj = new JSONObject();
		if(inquiryList.containsKey(id)) {
			tempJobj = (JSONObject) inquiryList.get(id);
			tempJobj.put(ledgerSeq + "", lastInquirySeq);
		}else {
			tempJobj.put(ledgerSeq + "", lastInquirySeq);
		}
		
		inquiryList.put(id, tempJobj);
		logger.info("[set inquiry] " + inquiryList.toJSONString());
	}
}
