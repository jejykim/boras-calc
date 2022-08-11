package com.boras.CRM.vo;

public class InquiryVO {

	// 문의seq
	private int inquirySeq;
	
	// 원장seq
	private int inquiryLedgerSeq;
	
	// 구분
	private String inquiryType;
	
	// 받는사람
	private String inquiryToUserId;
	
	// 보낸사람
	private String inquiryFromUserId;
		
	// 작성내용
	private String inquiryContent;
	
	// 작성일
	private String inquiryCreateDate;

	public int getInquirySeq() {
		return inquirySeq;
	}

	public void setInquirySeq(int inquirySeq) {
		this.inquirySeq = inquirySeq;
	}

	public int getInquiryLedgerSeq() {
		return inquiryLedgerSeq;
	}

	public void setInquiryLedgerSeq(int inquiryLedgerSeq) {
		this.inquiryLedgerSeq = inquiryLedgerSeq;
	}

	public String getInquiryType() {
		return inquiryType;
	}

	public void setInquiryType(String inquiryType) {
		this.inquiryType = inquiryType;
	}

	public String getInquiryToUserId() {
		return inquiryToUserId;
	}

	public void setInquiryToUserId(String inquiryToUserId) {
		this.inquiryToUserId = inquiryToUserId;
	}

	public String getInquiryFromUserId() {
		return inquiryFromUserId;
	}

	public void setInquiryFromUserId(String inquiryFromUserId) {
		this.inquiryFromUserId = inquiryFromUserId;
	}

	public String getInquiryContent() {
		return inquiryContent;
	}

	public void setInquiryContent(String inquiryContent) {
		this.inquiryContent = inquiryContent;
	}

	public String getInquiryCreateDate() {
		return inquiryCreateDate;
	}

	public void setInquiryCreateDate(String inquiryCreateDate) {
		this.inquiryCreateDate = inquiryCreateDate;
	}
	
	
}
