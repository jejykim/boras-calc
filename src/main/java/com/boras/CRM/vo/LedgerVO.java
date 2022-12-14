package com.boras.CRM.vo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class LedgerVO extends PagingVO {
	
	// 원장 seq
	private int ledgerSeq = 0;
	
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
	private BigDecimal ledgerCarPrice;
	
	// 취득원가
	private BigDecimal ledgerAcquisitionCost;
	
	// 총fee-%
	private double ledgerTotalFeePercent;
	
	// 총fee-합계
	private BigDecimal ledgerTotalFeeSum;
	
	// 총fee-공급가
	private BigDecimal ledgerTotalFeeSupplyPrice;
	
	// 총fee-부가세
	private BigDecimal ledgerTotalFeeSurtax;
	
	// 슬라이딩-%
	private double ledgerSlidingPercent;
	
	// 슬라이딩-합계
	private BigDecimal ledgerSlidingSum;
	
	// 슬라이딩-공급각
	private BigDecimal ledgerSlidingSupplyPrice;
	
	// 슬라이딩-부가세
	private BigDecimal ledgerSlidingSurtax;
	
	// 추가프로모션
	private double ledgerAddPromotion;
	
	// 추가프로모션 수기 작성
	private String ledgerPromotionMemo;
	
	// 등록년
	private int ledgerCreateYear = 0;
	
	// 등록월
	private int ledgerCreateMonth = 0;
	
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
	
	// 요청 중복 여부
	private String multiRequestYn = "";
	
	// 맵핑 AG id
	private String agUserId = "";
	
	// 맵핑 AG 명
	private String agUserName = "";
	
	// 맵핑 AG count
	private int cnt = 0;
	
	// 검색 구분 리스트
	private List<Integer> sLedgerTypeCd = new ArrayList<>();
	
	// 검색 금융사 리스트
	private List<Integer> sLedgerFinancialCompanyCd = new ArrayList<>();
	
	// 검색 금융지점 리스트
	private List<Integer> sLedgerFinancialBranchCd = new ArrayList<>();
	
	// 검색 금융상품 리스트
	private List<Integer> sLedgerFinancialProductCd = new ArrayList<>();
	
	// 승인 요청 아이디
	private String approvalUserId = "";
	
	// 승인 상태
	private String approvalState;
	
	private int approvalSeq;

	public int getLedgerSeq() {
		return ledgerSeq;
	}

	public void setLedgerSeq(int ledgerSeq) {
		this.ledgerSeq = ledgerSeq;
	}

	public MultipartFile getLedgerExcelFile() {
		return ledgerExcelFile;
	}

	public void setLedgerExcelFile(MultipartFile ledgerExcelFile) {
		this.ledgerExcelFile = ledgerExcelFile;
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

	public String getLedgerTypeCdName() {
		return ledgerTypeCdName;
	}

	public void setLedgerTypeCdName(String ledgerTypeCdName) {
		this.ledgerTypeCdName = ledgerTypeCdName;
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

	public String getLedgerDealerBrandCdName() {
		return ledgerDealerBrandCdName;
	}

	public void setLedgerDealerBrandCdName(String ledgerDealerBrandCdName) {
		this.ledgerDealerBrandCdName = ledgerDealerBrandCdName;
	}

	public int getLedgerDealerCompanyCd() {
		return ledgerDealerCompanyCd;
	}

	public void setLedgerDealerCompanyCd(int ledgerDealerCompanyCd) {
		this.ledgerDealerCompanyCd = ledgerDealerCompanyCd;
	}

	public String getLedgerDealerCompanyCdName() {
		return ledgerDealerCompanyCdName;
	}

	public void setLedgerDealerCompanyCdName(String ledgerDealerCompanyCdName) {
		this.ledgerDealerCompanyCdName = ledgerDealerCompanyCdName;
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

	public BigDecimal getLedgerCarPrice() {
		return ledgerCarPrice;
	}

	public void setLedgerCarPrice(BigDecimal ledgerCarPrice) {
		this.ledgerCarPrice = ledgerCarPrice;
	}

	public BigDecimal getLedgerAcquisitionCost() {
		return ledgerAcquisitionCost;
	}

	public void setLedgerAcquisitionCost(BigDecimal ledgerAcquisitionCost) {
		this.ledgerAcquisitionCost = ledgerAcquisitionCost;
	}

	public double getLedgerTotalFeePercent() {
		return ledgerTotalFeePercent;
	}

	public void setLedgerTotalFeePercent(double ledgerTotalFeePercent) {
		this.ledgerTotalFeePercent = ledgerTotalFeePercent;
	}

	public BigDecimal getLedgerTotalFeeSum() {
		return ledgerTotalFeeSum;
	}

	public void setLedgerTotalFeeSum(BigDecimal ledgerTotalFeeSum) {
		this.ledgerTotalFeeSum = ledgerTotalFeeSum;
	}

	public BigDecimal getLedgerTotalFeeSupplyPrice() {
		return ledgerTotalFeeSupplyPrice;
	}

	public void setLedgerTotalFeeSupplyPrice(BigDecimal ledgerTotalFeeSupplyPrice) {
		this.ledgerTotalFeeSupplyPrice = ledgerTotalFeeSupplyPrice;
	}

	public BigDecimal getLedgerTotalFeeSurtax() {
		return ledgerTotalFeeSurtax;
	}

	public void setLedgerTotalFeeSurtax(BigDecimal ledgerTotalFeeSurtax) {
		this.ledgerTotalFeeSurtax = ledgerTotalFeeSurtax;
	}

	public double getLedgerSlidingPercent() {
		return ledgerSlidingPercent;
	}

	public void setLedgerSlidingPercent(double ledgerSlidingPercent) {
		this.ledgerSlidingPercent = ledgerSlidingPercent;
	}

	public BigDecimal getLedgerSlidingSum() {
		return ledgerSlidingSum;
	}

	public void setLedgerSlidingSum(BigDecimal ledgerSlidingSum) {
		this.ledgerSlidingSum = ledgerSlidingSum;
	}

	public BigDecimal getLedgerSlidingSupplyPrice() {
		return ledgerSlidingSupplyPrice;
	}

	public void setLedgerSlidingSupplyPrice(BigDecimal ledgerSlidingSupplyPrice) {
		this.ledgerSlidingSupplyPrice = ledgerSlidingSupplyPrice;
	}

	public BigDecimal getLedgerSlidingSurtax() {
		return ledgerSlidingSurtax;
	}

	public void setLedgerSlidingSurtax(BigDecimal ledgerSlidingSurtax) {
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

	public String getMultiRequestYn() {
		return multiRequestYn;
	}

	public void setMultiRequestYn(String multiRequestYn) {
		this.multiRequestYn = multiRequestYn;
	}

	public String getAgUserId() {
		return agUserId;
	}

	public void setAgUserId(String agUserId) {
		this.agUserId = agUserId;
	}

	public String getAgUserName() {
		return agUserName;
	}

	public void setAgUserName(String agUserName) {
		this.agUserName = agUserName;
	}

	public int getCnt() {
		return cnt;
	}

	public void setCnt(int cnt) {
		this.cnt = cnt;
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

	public String getApprovalUserId() {
		return approvalUserId;
	}

	public void setApprovalUserId(String approvalUserId) {
		this.approvalUserId = approvalUserId;
	}

	public String getApprovalState() {
		return approvalState;
	}

	public void setApprovalState(String approvalState) {
		this.approvalState = approvalState;
	}

	public int getApprovalSeq() {
		return approvalSeq;
	}

	public void setApprovalSeq(int approvalSeq) {
		this.approvalSeq = approvalSeq;
	}
	
}
