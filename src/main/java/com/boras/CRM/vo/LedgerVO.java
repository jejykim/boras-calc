package com.boras.CRM.vo;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class LedgerVO extends PagingVO {
	
	// 원장 seq
	private int ledgerSeq;
	
	// 원장 엑셀 file
	private MultipartFile ledgerExcelFile;
	
	// 기타사항
	private String ledgerOther;
	
	// 구분(성문/올카) 코드
	private int ledgerTypeCd;
	
	// 구분(성문/올카) 코드 명
	private String ledgerTypeCdName;
	
	// 금융사 코드
	private int ledgerFinancialCompanyCd;
	
	// 금융사 코드명
	private String ledgerFinancialCompanyCdName;

	// 금융지점 코드
	private int ledgerFinancialBranchCd;
	
	// 금융지점 코드명
	private String ledgerFinancialBranchCdName;
	
	// 금융상품 코드
	private int ledgerFinancialProductCd;
	
	// 금융상품 코드명
	private String ledgerFinancialProductCdName;
	
	// 인도일
	private String ledgerDeliveryDate;
	
	// 고객명
	private String ledgerCustomerName;
	
	// 딜러브랜드 코드
	private int ledgerDealerBrandCd;
	
	// 딜러브랜드 코드명
	private String ledgerDealerBrandCdName;
	
	// 딜러사 코드
	private int ledgerDealerCompanyCd;
	
	// 딜러사 코드명
	private String ledgerDealerCompanyCdName;
	
	// 차량명
	private String ledgerCarName;
	
	// 차량번호
	private String ledgerCarNumber;
	
	// 차량가
	private double ledgerCarPrice;
	
	// 취득원가
	private double ledgerAcquisitionCost;
	
	// 총fee-%
	private double ledgerTotalFeePercent;
	
	// 총fee-합계
	private double ledgerTotalFeeSum;
	
	// 총fee-공급가
	private double ledgerTotalFeeSupplyPrice;
	
	// 총fee-부가세
	private double ledgerTotalFeeSurtax;
	
	// 슬라이딩-%
	private double ledgerSlidingPercent;
	
	// 슬라이딩-합계
	private double ledgerSlidingSum;
	
	// 슬라이딩-공급각
	private double ledgerSlidingSupplyPrice;
	
	// 슬라이딩-부가세
	private double ledgerSlidingSurtax;
	
	// 추가프로모션
	private double ledgerAddPromotion;
	
	// 추가프로모션 수기 작성
	private String ledgerPromotionMemo;
	
	// 등록년
	private int ledgerCreateYear;
	
	// 등록월
	private int ledgerCreateMonth;
	
	// 등록년월일
	private String ledgerCreateDate;
	
	// 작성자
	private String ledgerCreateUserId;
	
	// 수정자
	private String ledgerUpdateUserId;
	
	// 수정일
	private String ledgerUpdateDate;
	
	// 검색 input
	private String searchText = "";
	
	// 검색 탭 상태
	private String stateType = "all";
	
	// 검색 구분 리스트
	private List<Integer> sLedgerTypeCd;
	
	// 검색 금융사 리스트
	private List<Integer> sLedgerFinancialCompanyCd;
	
	// 검색 금융지점 리스트
	private List<Integer> sLedgerFinancialBranchCd;
	
	// 검색 금융상품 리스트
	private List<Integer> sLedgerFinancialProductCd;
	
	public int getLedgerSeq() {
		return ledgerSeq;
	}

	public void setLedgerSeq(int ledgerSeq) {
		this.ledgerSeq = ledgerSeq;
	}

	public String getLedgerOther() {
		return ledgerOther;
	}

	public void setLedgerOther(String ledgerOther) {
		this.ledgerOther = ledgerOther;
	}

	public int getLedgerTypeCd() {
		return ledgerTypeCd;
	}

	public void setLedgerTypeCd(int ledgerTypeCd) {
		this.ledgerTypeCd = ledgerTypeCd;
	}

	public int getLedgerFinancialCompanyCd() {
		return ledgerFinancialCompanyCd;
	}

	public void setLedgerFinancialCompanyCd(int ledgerFinancialCompanyCd) {
		this.ledgerFinancialCompanyCd = ledgerFinancialCompanyCd;
	}

	public int getLedgerFinancialBranchCd() {
		return ledgerFinancialBranchCd;
	}

	public void setLedgerFinancialBranchCd(int ledgerFinancialBranchCd) {
		this.ledgerFinancialBranchCd = ledgerFinancialBranchCd;
	}

	public int getLedgerFinancialProductCd() {
		return ledgerFinancialProductCd;
	}

	public void setLedgerFinancialProductCd(int ledgerFinancialProductCd) {
		this.ledgerFinancialProductCd = ledgerFinancialProductCd;
	}

	public String getLedgerDeliveryDate() {
		return ledgerDeliveryDate;
	}

	public void setLedgerDeliveryDate(String ledgerDeliveryDate) {
		this.ledgerDeliveryDate = ledgerDeliveryDate;
	}

	public String getLedgerCustomerName() {
		return ledgerCustomerName;
	}

	public void setLedgerCustomerName(String ledgerCustomerName) {
		this.ledgerCustomerName = ledgerCustomerName;
	}

	public int getLedgerDealerBrandCd() {
		return ledgerDealerBrandCd;
	}

	public void setLedgerDealerBrandCd(int ledgerDealerBrandCd) {
		this.ledgerDealerBrandCd = ledgerDealerBrandCd;
	}

	public int getLedgerDealerCompanyCd() {
		return ledgerDealerCompanyCd;
	}

	public void setLedgerDealerCompanyCd(int ledgerDealerCompanyCd) {
		this.ledgerDealerCompanyCd = ledgerDealerCompanyCd;
	}

	public String getLedgerCarName() {
		return ledgerCarName;
	}

	public void setLedgerCarName(String ledgerCarName) {
		this.ledgerCarName = ledgerCarName;
	}

	public String getLedgerCarNumber() {
		return ledgerCarNumber;
	}

	public void setLedgerCarNumber(String ledgerCarNumber) {
		this.ledgerCarNumber = ledgerCarNumber;
	}

	public double getLedgerCarPrice() {
		return ledgerCarPrice;
	}

	public void setLedgerCarPrice(double ledgerCarPrice) {
		this.ledgerCarPrice = ledgerCarPrice;
	}

	public double getLedgerAcquisitionCost() {
		return ledgerAcquisitionCost;
	}

	public void setLedgerAcquisitionCost(double ledgerAcquisitionCost) {
		this.ledgerAcquisitionCost = ledgerAcquisitionCost;
	}

	public double getLedgerTotalFeePercent() {
		return ledgerTotalFeePercent;
	}

	public void setLedgerTotalFeePercent(double ledgerTotalFeePercent) {
		this.ledgerTotalFeePercent = ledgerTotalFeePercent;
	}

	public double getLedgerTotalFeeSum() {
		return ledgerTotalFeeSum;
	}

	public void setLedgerTotalFeeSum(double ledgerTotalFeeSum) {
		this.ledgerTotalFeeSum = ledgerTotalFeeSum;
	}

	public double getLedgerTotalFeeSupplyPrice() {
		return ledgerTotalFeeSupplyPrice;
	}

	public void setLedgerTotalFeeSupplyPrice(double ledgerTotalFeeSupplyPrice) {
		this.ledgerTotalFeeSupplyPrice = ledgerTotalFeeSupplyPrice;
	}

	public double getLedgerTotalFeeSurtax() {
		return ledgerTotalFeeSurtax;
	}

	public void setLedgerTotalFeeSurtax(double ledgerTotalFeeSurtax) {
		this.ledgerTotalFeeSurtax = ledgerTotalFeeSurtax;
	}

	public double getLedgerSlidingPercent() {
		return ledgerSlidingPercent;
	}

	public void setLedgerSlidingPercent(double ledgerSlidingPercent) {
		this.ledgerSlidingPercent = ledgerSlidingPercent;
	}

	public double getLedgerSlidingSum() {
		return ledgerSlidingSum;
	}

	public void setLedgerSlidingSum(double ledgerSlidingSum) {
		this.ledgerSlidingSum = ledgerSlidingSum;
	}

	public double getLedgerSlidingSupplyPrice() {
		return ledgerSlidingSupplyPrice;
	}

	public void setLedgerSlidingSupplyPrice(double ledgerSlidingSupplyPrice) {
		this.ledgerSlidingSupplyPrice = ledgerSlidingSupplyPrice;
	}

	public double getLedgerSlidingSurtax() {
		return ledgerSlidingSurtax;
	}

	public void setLedgerSlidingSurtax(double ledgerSlidingSurtax) {
		this.ledgerSlidingSurtax = ledgerSlidingSurtax;
	}

	public double getLedgerAddPromotion() {
		return ledgerAddPromotion;
	}

	public void setLedgerAddPromotion(double ledgerAddPromotion) {
		this.ledgerAddPromotion = ledgerAddPromotion;
	}

	public String getLedgerPromotionMemo() {
		return ledgerPromotionMemo;
	}

	public void setLedgerPromotionMemo(String ledgerPromotionMemo) {
		this.ledgerPromotionMemo = ledgerPromotionMemo;
	}

	public int getLedgerCreateYear() {
		return ledgerCreateYear;
	}

	public void setLedgerCreateYear(int ledgerCreateYear) {
		this.ledgerCreateYear = ledgerCreateYear;
	}

	public int getLedgerCreateMonth() {
		return ledgerCreateMonth;
	}

	public void setLedgerCreateMonth(int ledgerCreateMonth) {
		this.ledgerCreateMonth = ledgerCreateMonth;
	}

	public String getLedgerCreateDate() {
		return ledgerCreateDate;
	}

	public void setLedgerCreateDate(String ledgerCreateDate) {
		this.ledgerCreateDate = ledgerCreateDate;
	}

	public String getLedgerCreateUserId() {
		return ledgerCreateUserId;
	}

	public void setLedgerCreateUserId(String ledgerCreateUserId) {
		this.ledgerCreateUserId = ledgerCreateUserId;
	}

	public String getLedgerUpdateUserId() {
		return ledgerUpdateUserId;
	}

	public void setLedgerUpdateUserId(String ledgerUpdateUserId) {
		this.ledgerUpdateUserId = ledgerUpdateUserId;
	}

	public String getLedgerFinancialCompanyCdName() {
		return ledgerFinancialCompanyCdName;
	}

	public void setLedgerFinancialCompanyCdName(String ledgerFinancialCompanyCdName) {
		this.ledgerFinancialCompanyCdName = ledgerFinancialCompanyCdName;
	}

	public String getLedgerFinancialBranchCdName() {
		return ledgerFinancialBranchCdName;
	}

	public void setLedgerFinancialBranchCdName(String ledgerFinancialBranchCdName) {
		this.ledgerFinancialBranchCdName = ledgerFinancialBranchCdName;
	}

	public String getLedgerFinancialProductCdName() {
		return ledgerFinancialProductCdName;
	}

	public void setLedgerFinancialProductCdName(String ledgerFinancialProductCdName) {
		this.ledgerFinancialProductCdName = ledgerFinancialProductCdName;
	}

	public String getLedgerDealerBrandCdName() {
		return ledgerDealerBrandCdName;
	}

	public void setLedgerDealerBrandCdName(String ledgerDealerBrandCdName) {
		this.ledgerDealerBrandCdName = ledgerDealerBrandCdName;
	}

	public String getLedgerDealerCompanyCdName() {
		return ledgerDealerCompanyCdName;
	}

	public void setLedgerDealerCompanyCdName(String ledgerDealerCompanyCdName) {
		this.ledgerDealerCompanyCdName = ledgerDealerCompanyCdName;
	}

	public MultipartFile getLedgerExcelFile() {
		return ledgerExcelFile;
	}

	public void setLedgerExcelFile(MultipartFile ledgerExcelFile) {
		this.ledgerExcelFile = ledgerExcelFile;
	}

	public String getLedgerUpdateDate() {
		return ledgerUpdateDate;
	}

	public void setLedgerUpdateDate(String ledgerUpdateDate) {
		this.ledgerUpdateDate = ledgerUpdateDate;
	}

	public String getSearchText() {
		return searchText;
	}

	public void setSearchText(String searchText) {
		this.searchText = searchText;
	}

	public String getStateType() {
		return stateType;
	}

	public void setStateType(String stateType) {
		this.stateType = stateType;
	}

	public String getLedgerTypeCdName() {
		return ledgerTypeCdName;
	}

	public void setLedgerTypeCdName(String ledgerTypeCdName) {
		this.ledgerTypeCdName = ledgerTypeCdName;
	}

	public List<Integer> getsLedgerTypeCd() {
		return sLedgerTypeCd;
	}

	public void setsLedgerTypeCd(List<Integer> sLedgerTypeCd) {
		this.sLedgerTypeCd = sLedgerTypeCd;
	}

	public List<Integer> getsLedgerFinancialCompanyCd() {
		return sLedgerFinancialCompanyCd;
	}

	public void setsLedgerFinancialCompanyCd(List<Integer> sLedgerFinancialCompanyCd) {
		this.sLedgerFinancialCompanyCd = sLedgerFinancialCompanyCd;
	}

	public List<Integer> getsLedgerFinancialBranchCd() {
		return sLedgerFinancialBranchCd;
	}

	public void setsLedgerFinancialBranchCd(List<Integer> sLedgerFinancialBranchCd) {
		this.sLedgerFinancialBranchCd = sLedgerFinancialBranchCd;
	}

	public List<Integer> getsLedgerFinancialProductCd() {
		return sLedgerFinancialProductCd;
	}

	public void setsLedgerFinancialProductCd(List<Integer> sLedgerFinancialProductCd) {
		this.sLedgerFinancialProductCd = sLedgerFinancialProductCd;
	}
	
}
