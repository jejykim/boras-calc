package com.boras.CRM.vo;

import org.springframework.web.multipart.MultipartFile;

public class LedgerExcelVO {

	// 원장 엑셀 seq
	private int ledgerExcelSeq;
	
	// 원장 엑셀 file
	private MultipartFile ledgerExcelFile;
	
	// 원장 엑셀 file 명
	private String ledgerExcelFileName;
	
	// 원장 엑셀 file path
	private String ledgerExcelFilePath;
	
	// 원장 excel 사용여부 (수기로 입력하는 금융사 전용)
	private String ledgerExcelUseYn;
	
	// 원장 excel 사용 sheet
	private String ledgerExcelSheet;
	
	// 구분(성문/올카) 코드
	private int ledgerTypeCd;
	
	// 구분(성문/올카) 코드명
	private int ledgerTypeCdName;
	
	// 금융사 코드
	private int ledgerFinancialCompanyCd;
	
	// 금융사 코드명
	private int ledgerFinancialCompanyCdName;
	
	// 금융지점 코드
	private int ledgerFinancialBranchCd;
	
	// 금융지점 코드명
	private int ledgerFinancialBranchCdName;
	
	// 금융상품 코드
	private int ledgerFinancialProductCd;
	
	// 금융상품 코드명
	private int ledgerFinancialProductCdName;
	
	// 인도일
	private String ledgerDeliveryDate;
	
	// 고객명
	private String ledgerCustomerName;
	
	// 딜러브랜드 코드
	private int ledgerDealerBrandCd;
	
	// 딜러브랜드 코드명
	private int ledgerDealerBrandCdName;
	
	// 딜러사 코드
	private int ledgerDealerCompanyCd;
	
	// 딜러사 코드명
	private int ledgerDealerCompanyCdName;
	
	// 차량명
	private String ledgerCarName;
	
	// 차량번호
	private String ledgerCarNumber;
	
	// 차량가
	private String ledgerCarPrice;
	
	// 취득원가
	private String ledgerAcquisitionCost;
	
	// 총fee-%
	private String ledgerTotalFeePercent;
	
	// 총fee-합계
	private String ledgerTotalFeeSum;
	
	// 총fee-공급가
	private String ledgerTotalFeeSupplyPrice;
	
	// 총fee-부가세
	private String ledgerTotalFeeSurtax;
	
	// 슬라이딩-%
	private String ledgerSlidingPercent;
	
	// 슬라이딩-합계
	private String ledgerSlidingSum;
	
	// 슬라이딩-공급각
	private String ledgerSlidingSupplyPrice;
	
	// 슬라이딩-부가세
	private String ledgerSlidingSurtax;
	
	// 추가프로모션
	private String ledgerAddPromotion;
	
	// 추가프로모션 수기 작성
	private String ledgerPromotionMemo;
	
	// 생성일
	private String ledgerExcelCreateDate;
	
	// 생성자 ID
	private String ledgerExcelCreateId;
	
	// 수정일
	private String ledgerExcelUpdateDate;
	
	// 수정자 ID
	private String ledgerExcelUpdateId;
	
	// 엑셀 header row
	private String ledgerExcelHeaderRow;

	public int getLedgerExcelSeq() {
		return ledgerExcelSeq;
	}

	public void setLedgerExcelSeq(int ledgerExcelSeq) {
		this.ledgerExcelSeq = ledgerExcelSeq;
	}

	public String getLedgerExcelFileName() {
		return ledgerExcelFileName;
	}

	public void setLedgerExcelFileName(String ledgerExcelFileName) {
		this.ledgerExcelFileName = ledgerExcelFileName;
	}

	public String getLedgerExcelFilePath() {
		return ledgerExcelFilePath;
	}

	public void setLedgerExcelFilePath(String ledgerExcelFilePath) {
		this.ledgerExcelFilePath = ledgerExcelFilePath;
	}

	public String getLedgerExcelUseYn() {
		return ledgerExcelUseYn;
	}

	public void setLedgerExcelUseYn(String ledgerExcelUseYn) {
		this.ledgerExcelUseYn = ledgerExcelUseYn;
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

	public String getLedgerCarPrice() {
		return ledgerCarPrice;
	}

	public void setLedgerCarPrice(String ledgerCarPrice) {
		this.ledgerCarPrice = ledgerCarPrice;
	}

	public String getLedgerAcquisitionCost() {
		return ledgerAcquisitionCost;
	}

	public void setLedgerAcquisitionCost(String ledgerAcquisitionCost) {
		this.ledgerAcquisitionCost = ledgerAcquisitionCost;
	}

	public String getLedgerTotalFeePercent() {
		return ledgerTotalFeePercent;
	}

	public void setLedgerTotalFeePercent(String ledgerTotalFeePercent) {
		this.ledgerTotalFeePercent = ledgerTotalFeePercent;
	}

	public String getLedgerTotalFeeSum() {
		return ledgerTotalFeeSum;
	}

	public void setLedgerTotalFeeSum(String ledgerTotalFeeSum) {
		this.ledgerTotalFeeSum = ledgerTotalFeeSum;
	}

	public String getLedgerTotalFeeSupplyPrice() {
		return ledgerTotalFeeSupplyPrice;
	}

	public void setLedgerTotalFeeSupplyPrice(String ledgerTotalFeeSupplyPrice) {
		this.ledgerTotalFeeSupplyPrice = ledgerTotalFeeSupplyPrice;
	}

	public String getLedgerTotalFeeSurtax() {
		return ledgerTotalFeeSurtax;
	}

	public void setLedgerTotalFeeSurtax(String ledgerTotalFeeSurtax) {
		this.ledgerTotalFeeSurtax = ledgerTotalFeeSurtax;
	}

	public String getLedgerSlidingPercent() {
		return ledgerSlidingPercent;
	}

	public void setLedgerSlidingPercent(String ledgerSlidingPercent) {
		this.ledgerSlidingPercent = ledgerSlidingPercent;
	}

	public String getLedgerSlidingSum() {
		return ledgerSlidingSum;
	}

	public void setLedgerSlidingSum(String ledgerSlidingSum) {
		this.ledgerSlidingSum = ledgerSlidingSum;
	}

	public String getLedgerSlidingSupplyPrice() {
		return ledgerSlidingSupplyPrice;
	}

	public void setLedgerSlidingSupplyPrice(String ledgerSlidingSupplyPrice) {
		this.ledgerSlidingSupplyPrice = ledgerSlidingSupplyPrice;
	}

	public String getLedgerSlidingSurtax() {
		return ledgerSlidingSurtax;
	}

	public void setLedgerSlidingSurtax(String ledgerSlidingSurtax) {
		this.ledgerSlidingSurtax = ledgerSlidingSurtax;
	}

	public String getLedgerAddPromotion() {
		return ledgerAddPromotion;
	}

	public void setLedgerAddPromotion(String ledgerAddPromotion) {
		this.ledgerAddPromotion = ledgerAddPromotion;
	}

	public String getLedgerPromotionMemo() {
		return ledgerPromotionMemo;
	}

	public void setLedgerPromotionMemo(String ledgerPromotionMemo) {
		this.ledgerPromotionMemo = ledgerPromotionMemo;
	}

	public String getLedgerExcelSheet() {
		return ledgerExcelSheet;
	}

	public void setLedgerExcelSheet(String ledgerExcelSheet) {
		this.ledgerExcelSheet = ledgerExcelSheet;
	}

	public int getLedgerTypeCdName() {
		return ledgerTypeCdName;
	}

	public void setLedgerTypeCdName(int ledgerTypeCdName) {
		this.ledgerTypeCdName = ledgerTypeCdName;
	}

	public int getLedgerFinancialCompanyCdName() {
		return ledgerFinancialCompanyCdName;
	}

	public void setLedgerFinancialCompanyCdName(int ledgerFinancialCompanyCdName) {
		this.ledgerFinancialCompanyCdName = ledgerFinancialCompanyCdName;
	}

	public int getLedgerFinancialBranchCdName() {
		return ledgerFinancialBranchCdName;
	}

	public void setLedgerFinancialBranchCdName(int ledgerFinancialBranchCdName) {
		this.ledgerFinancialBranchCdName = ledgerFinancialBranchCdName;
	}

	public int getLedgerFinancialProductCdName() {
		return ledgerFinancialProductCdName;
	}

	public void setLedgerFinancialProductCdName(int ledgerFinancialProductCdName) {
		this.ledgerFinancialProductCdName = ledgerFinancialProductCdName;
	}

	public int getLedgerDealerBrandCdName() {
		return ledgerDealerBrandCdName;
	}

	public void setLedgerDealerBrandCdName(int ledgerDealerBrandCdName) {
		this.ledgerDealerBrandCdName = ledgerDealerBrandCdName;
	}

	public int getLedgerDealerCompanyCdName() {
		return ledgerDealerCompanyCdName;
	}

	public void setLedgerDealerCompanyCdName(int ledgerDealerCompanyCdName) {
		this.ledgerDealerCompanyCdName = ledgerDealerCompanyCdName;
	}

	public String getLedgerExcelCreateDate() {
		return ledgerExcelCreateDate;
	}

	public void setLedgerExcelCreateDate(String ledgerExcelCreateDate) {
		this.ledgerExcelCreateDate = ledgerExcelCreateDate;
	}

	public String getLedgerExcelCreateId() {
		return ledgerExcelCreateId;
	}

	public void setLedgerExcelCreateId(String ledgerExcelCreateId) {
		this.ledgerExcelCreateId = ledgerExcelCreateId;
	}

	public String getLedgerExcelUpdateDate() {
		return ledgerExcelUpdateDate;
	}

	public void setLedgerExcelUpdateDate(String ledgerExcelUpdateDate) {
		this.ledgerExcelUpdateDate = ledgerExcelUpdateDate;
	}

	public String getLedgerExcelUpdateId() {
		return ledgerExcelUpdateId;
	}

	public void setLedgerExcelUpdateId(String ledgerExcelUpdateId) {
		this.ledgerExcelUpdateId = ledgerExcelUpdateId;
	}

	public MultipartFile getLedgerExcelFile() {
		return ledgerExcelFile;
	}

	public void setLedgerExcelFile(MultipartFile ledgerExcelFile) {
		this.ledgerExcelFile = ledgerExcelFile;
	}

	public String getLedgerExcelHeaderRow() {
		return ledgerExcelHeaderRow;
	}

	public void setLedgerExcelHeaderRow(String ledgerExcelHeaderRow) {
		this.ledgerExcelHeaderRow = ledgerExcelHeaderRow;
	}

}
