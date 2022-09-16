package com.boras.CRM.vo;

public class InquiryVO extends PagingVO {

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
	
	// 최근 답변일자
	private String inquiryLastDate;
	
	// 원장 금융사 코드
	private int ledgerFinancialCompanyCd;
	
	// 원장 금융사명
	private String ledgerFinancialCompanyCdName;
	
	// 원장 금융지점 코드
	private int ledgerFinancialBranchCd;
	
	// 원장 금융지점명
	private String ledgerFinancialBranchCdName;
	
	// 원장 금융상품 코드
	private int ledgerFinancialProductCd;
	
	// 원장 금융상품명
	private String ledgerFinancialProductCdName;
	
	// 원장 고객명
	private String ledgerCustomerName;
	
	// 원장 차량가
	private long ledgerCarPrice;
	
	// 원장 취득원가
	private long ledgerAcquisitionCost;
	
	// 검색 input
	private String searchText = "";
	
	// 문의 내역 탭
	private String inquiryTeb = "all";
	
	// 확인 여부
	private String isRead = "Y";
	
	// 본인 문의 내역 여부
	private String isMine = "N";

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

	public String getInquiryLastDate() {
		return inquiryLastDate;
	}

	public void setInquiryLastDate(String inquiryLastDate) {
		this.inquiryLastDate = inquiryLastDate;
	}

	public int getLedgerFinancialCompanyCd() {
		return ledgerFinancialCompanyCd;
	}

	public void setLedgerFinancialCompanyCd(int ledgerFinancialCompanyCd) {
		this.ledgerFinancialCompanyCd = ledgerFinancialCompanyCd;
	}

	public String getLedgerFinancialCompanyCdName() {
		return ledgerFinancialCompanyCdName;
	}

	public void setLedgerFinancialCompanyCdName(String ledgerFinancialCompanyCdName) {
		this.ledgerFinancialCompanyCdName = ledgerFinancialCompanyCdName;
	}

	public int getLedgerFinancialBranchCd() {
		return ledgerFinancialBranchCd;
	}

	public void setLedgerFinancialBranchCd(int ledgerFinancialBranchCd) {
		this.ledgerFinancialBranchCd = ledgerFinancialBranchCd;
	}

	public String getLedgerFinancialBranchCdName() {
		return ledgerFinancialBranchCdName;
	}

	public void setLedgerFinancialBranchCdName(String ledgerFinancialBranchCdName) {
		this.ledgerFinancialBranchCdName = ledgerFinancialBranchCdName;
	}

	public int getLedgerFinancialProductCd() {
		return ledgerFinancialProductCd;
	}

	public void setLedgerFinancialProductCd(int ledgerFinancialProductCd) {
		this.ledgerFinancialProductCd = ledgerFinancialProductCd;
	}

	public String getLedgerFinancialProductCdName() {
		return ledgerFinancialProductCdName;
	}

	public void setLedgerFinancialProductCdName(String ledgerFinancialProductCdName) {
		this.ledgerFinancialProductCdName = ledgerFinancialProductCdName;
	}

	public String getLedgerCustomerName() {
		return ledgerCustomerName;
	}

	public void setLedgerCustomerName(String ledgerCustomerName) {
		this.ledgerCustomerName = ledgerCustomerName;
	}

	public long getLedgerCarPrice() {
		return ledgerCarPrice;
	}

	public void setLedgerCarPrice(long ledgerCarPrice) {
		this.ledgerCarPrice = ledgerCarPrice;
	}

	public long getLedgerAcquisitionCost() {
		return ledgerAcquisitionCost;
	}

	public void setLedgerAcquisitionCost(long ledgerAcquisitionCost) {
		this.ledgerAcquisitionCost = ledgerAcquisitionCost;
	}

	public String getSearchText() {
		return searchText;
	}

	public void setSearchText(String searchText) {
		this.searchText = searchText;
	}

	public String getInquiryTeb() {
		return inquiryTeb;
	}

	public void setInquiryTeb(String inquiryTeb) {
		this.inquiryTeb = inquiryTeb;
	}

	public String getIsRead() {
		return isRead;
	}

	public void setIsRead(String isRead) {
		this.isRead = isRead;
	}

	public String getIsMine() {
		return isMine;
	}

	public void setIsMine(String isMine) {
		this.isMine = isMine;
	}
	
}
