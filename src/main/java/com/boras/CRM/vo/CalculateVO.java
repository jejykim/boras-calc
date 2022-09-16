package com.boras.CRM.vo;

import java.math.BigDecimal;

public class CalculateVO extends PagingVO {
	private String calculateUserId;
	private int calculateSeq;
	private int calculateYear;
	private int calculateMonth;
	private BigDecimal calculateAgFeeSum;
	private BigDecimal calculateSlidingSum;
	private BigDecimal calculateAddFeeSum;
	private BigDecimal calculateSupplySum;
	private BigDecimal calculateSurtaxSum;
	private BigDecimal calculatePersonalAgSum;
	private BigDecimal calculateBusinessSum;
	private BigDecimal calculateTotalSum;
	private String calculateCreateDate;
	private BigDecimal calculateFeeSum;
	private BigDecimal calculatePromotion;
	private String searchText;
	
	/* 원장 */
	// 원장Seq
	private int ledgerSeq;
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
	// 고객명
	private String ledgerCustomerName;
	// 차량가
	private BigDecimal ledgerCarPrice;
	// 취득원가
	private BigDecimal ledgerAcquisitionCost;	
	// 인도일
	private String ledgerDeliveryDate;
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
	private BigDecimal ledgerAddPromotion;
	// 추가프로모션 수기 작성
	private String ledgerPromotionMemo;
	// 기타사항
	private String ledgerOther;
	
	/* 계출 */
	private int contractSeq;
	private double contractNomalTotalFeePercent;
	private BigDecimal contractNomalTotalFeeSum;
	private double contractNomalAgFeePercent;
	private BigDecimal contractNomalAgFeeSum;
	private double contractNomalDpFeePercent;
	private BigDecimal contractNomalDpFeeSum;
	private BigDecimal contractAddTotalFeeSum;
	private BigDecimal contractAddAgFeeSum;
	private BigDecimal contractAddDpFeeSum;
	private double contractTotalSlidingPercent;
	private BigDecimal contractTotalSlidingSum;
	private double contractAgSlidingPercent;
	private BigDecimal contractAgSlidingSum;
	private double contractDpSlidingPercent;
	private BigDecimal contractDpSlidingSum;
	private int contractCreateYear;
	private int contractCreateMonth;
	private String contractUserId;
	public String getCalculateUserId() {
		return calculateUserId;
	}
	public void setCalculateUserId(String calculateUserId) {
		this.calculateUserId = calculateUserId;
	}
	public int getCalculateSeq() {
		return calculateSeq;
	}
	public void setCalculateSeq(int calculateSeq) {
		this.calculateSeq = calculateSeq;
	}
	public int getCalculateYear() {
		return calculateYear;
	}
	public void setCalculateYear(int calculateYear) {
		this.calculateYear = calculateYear;
	}
	public int getCalculateMonth() {
		return calculateMonth;
	}
	public void setCalculateMonth(int calculateMonth) {
		this.calculateMonth = calculateMonth;
	}
	public BigDecimal getCalculateAgFeeSum() {
		return calculateAgFeeSum;
	}
	public void setCalculateAgFeeSum(BigDecimal calculateAgFeeSum) {
		this.calculateAgFeeSum = calculateAgFeeSum;
	}
	public BigDecimal getCalculateSlidingSum() {
		return calculateSlidingSum;
	}
	public void setCalculateSlidingSum(BigDecimal calculateSlidingSum) {
		this.calculateSlidingSum = calculateSlidingSum;
	}
	public BigDecimal getCalculateAddFeeSum() {
		return calculateAddFeeSum;
	}
	public void setCalculateAddFeeSum(BigDecimal calculateAddFeeSum) {
		this.calculateAddFeeSum = calculateAddFeeSum;
	}
	public BigDecimal getCalculateSupplySum() {
		return calculateSupplySum;
	}
	public void setCalculateSupplySum(BigDecimal calculateSupplySum) {
		this.calculateSupplySum = calculateSupplySum;
	}
	public BigDecimal getCalculateSurtaxSum() {
		return calculateSurtaxSum;
	}
	public void setCalculateSurtaxSum(BigDecimal calculateSurtaxSum) {
		this.calculateSurtaxSum = calculateSurtaxSum;
	}
	public BigDecimal getCalculatePersonalAgSum() {
		return calculatePersonalAgSum;
	}
	public void setCalculatePersonalAgSum(BigDecimal calculatePersonalAgSum) {
		this.calculatePersonalAgSum = calculatePersonalAgSum;
	}
	public BigDecimal getCalculateBusinessSum() {
		return calculateBusinessSum;
	}
	public void setCalculateBusinessSum(BigDecimal calculateBusinessSum) {
		this.calculateBusinessSum = calculateBusinessSum;
	}
	public BigDecimal getCalculateTotalSum() {
		return calculateTotalSum;
	}
	public void setCalculateTotalSum(BigDecimal calculateTotalSum) {
		this.calculateTotalSum = calculateTotalSum;
	}
	public String getCalculateCreateDate() {
		return calculateCreateDate;
	}
	public void setCalculateCreateDate(String calculateCreateDate) {
		this.calculateCreateDate = calculateCreateDate;
	}
	public BigDecimal getCalculateFeeSum() {
		return calculateFeeSum;
	}
	public void setCalculateFeeSum(BigDecimal calculateFeeSum) {
		this.calculateFeeSum = calculateFeeSum;
	}
	public BigDecimal getCalculatePromotion() {
		return calculatePromotion;
	}
	public void setCalculatePromotion(BigDecimal calculatePromotion) {
		this.calculatePromotion = calculatePromotion;
	}
	public int getLedgerSeq() {
		return ledgerSeq;
	}
	public void setLedgerSeq(int ledgerSeq) {
		this.ledgerSeq = ledgerSeq;
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
	public String getLedgerDeliveryDate() {
		return ledgerDeliveryDate;
	}
	public void setLedgerDeliveryDate(String ledgerDeliveryDate) {
		this.ledgerDeliveryDate = ledgerDeliveryDate;
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
	public BigDecimal getLedgerAddPromotion() {
		return ledgerAddPromotion;
	}
	public void setLedgerAddPromotion(BigDecimal ledgerAddPromotion) {
		this.ledgerAddPromotion = ledgerAddPromotion;
	}
	public String getLedgerPromotionMemo() {
		return ledgerPromotionMemo;
	}
	public void setLedgerPromotionMemo(String ledgerPromotionMemo) {
		this.ledgerPromotionMemo = ledgerPromotionMemo;
	}
	public String getLedgerOther() {
		return ledgerOther;
	}
	public void setLedgerOther(String ledgerOther) {
		this.ledgerOther = ledgerOther;
	}
	public int getContractSeq() {
		return contractSeq;
	}
	public void setContractSeq(int contractSeq) {
		this.contractSeq = contractSeq;
	}
	public double getContractNomalTotalFeePercent() {
		return contractNomalTotalFeePercent;
	}
	public void setContractNomalTotalFeePercent(double contractNomalTotalFeePercent) {
		this.contractNomalTotalFeePercent = contractNomalTotalFeePercent;
	}
	public BigDecimal getContractNomalTotalFeeSum() {
		return contractNomalTotalFeeSum;
	}
	public void setContractNomalTotalFeeSum(BigDecimal contractNomalTotalFeeSum) {
		this.contractNomalTotalFeeSum = contractNomalTotalFeeSum;
	}
	public double getContractNomalAgFeePercent() {
		return contractNomalAgFeePercent;
	}
	public void setContractNomalAgFeePercent(double contractNomalAgFeePercent) {
		this.contractNomalAgFeePercent = contractNomalAgFeePercent;
	}
	public BigDecimal getContractNomalAgFeeSum() {
		return contractNomalAgFeeSum;
	}
	public void setContractNomalAgFeeSum(BigDecimal contractNomalAgFeeSum) {
		this.contractNomalAgFeeSum = contractNomalAgFeeSum;
	}
	public double getContractNomalDpFeePercent() {
		return contractNomalDpFeePercent;
	}
	public void setContractNomalDpFeePercent(double contractNomalDpFeePercent) {
		this.contractNomalDpFeePercent = contractNomalDpFeePercent;
	}
	public BigDecimal getContractNomalDpFeeSum() {
		return contractNomalDpFeeSum;
	}
	public void setContractNomalDpFeeSum(BigDecimal contractNomalDpFeeSum) {
		this.contractNomalDpFeeSum = contractNomalDpFeeSum;
	}
	public BigDecimal getContractAddTotalFeeSum() {
		return contractAddTotalFeeSum;
	}
	public void setContractAddTotalFeeSum(BigDecimal contractAddTotalFeeSum) {
		this.contractAddTotalFeeSum = contractAddTotalFeeSum;
	}
	public BigDecimal getContractAddAgFeeSum() {
		return contractAddAgFeeSum;
	}
	public void setContractAddAgFeeSum(BigDecimal contractAddAgFeeSum) {
		this.contractAddAgFeeSum = contractAddAgFeeSum;
	}
	public BigDecimal getContractAddDpFeeSum() {
		return contractAddDpFeeSum;
	}
	public void setContractAddDpFeeSum(BigDecimal contractAddDpFeeSum) {
		this.contractAddDpFeeSum = contractAddDpFeeSum;
	}
	public double getContractTotalSlidingPercent() {
		return contractTotalSlidingPercent;
	}
	public void setContractTotalSlidingPercent(double contractTotalSlidingPercent) {
		this.contractTotalSlidingPercent = contractTotalSlidingPercent;
	}
	public BigDecimal getContractTotalSlidingSum() {
		return contractTotalSlidingSum;
	}
	public void setContractTotalSlidingSum(BigDecimal contractTotalSlidingSum) {
		this.contractTotalSlidingSum = contractTotalSlidingSum;
	}
	public double getContractAgSlidingPercent() {
		return contractAgSlidingPercent;
	}
	public void setContractAgSlidingPercent(double contractAgSlidingPercent) {
		this.contractAgSlidingPercent = contractAgSlidingPercent;
	}
	public BigDecimal getContractAgSlidingSum() {
		return contractAgSlidingSum;
	}
	public void setContractAgSlidingSum(BigDecimal contractAgSlidingSum) {
		this.contractAgSlidingSum = contractAgSlidingSum;
	}
	public double getContractDpSlidingPercent() {
		return contractDpSlidingPercent;
	}
	public void setContractDpSlidingPercent(double contractDpSlidingPercent) {
		this.contractDpSlidingPercent = contractDpSlidingPercent;
	}
	public BigDecimal getContractDpSlidingSum() {
		return contractDpSlidingSum;
	}
	public void setContractDpSlidingSum(BigDecimal contractDpSlidingSum) {
		this.contractDpSlidingSum = contractDpSlidingSum;
	}
	public int getContractCreateYear() {
		return contractCreateYear;
	}
	public void setContractCreateYear(int contractCreateYear) {
		this.contractCreateYear = contractCreateYear;
	}
	public int getContractCreateMonth() {
		return contractCreateMonth;
	}
	public void setContractCreateMonth(int contractCreateMonth) {
		this.contractCreateMonth = contractCreateMonth;
	}
	public String getContractUserId() {
		return contractUserId;
	}
	public void setContractUserId(String contractUserId) {
		this.contractUserId = contractUserId;
	}
	@Override
	public String toString() {
		return "CalculateVO [calculateUserId=" + calculateUserId + ", calculateSeq=" + calculateSeq + ", calculateYear="
				+ calculateYear + ", calculateMonth=" + calculateMonth + ", calculateAgFeeSum=" + calculateAgFeeSum
				+ ", calculateSlidingSum=" + calculateSlidingSum + ", calculateAddFeeSum=" + calculateAddFeeSum
				+ ", calculateSupplySum=" + calculateSupplySum + ", calculateSurtaxSum=" + calculateSurtaxSum
				+ ", calculatePersonalAgSum=" + calculatePersonalAgSum + ", calculateBusinessSum="
				+ calculateBusinessSum + ", calculateTotalSum=" + calculateTotalSum + ", calculateCreateDate="
				+ calculateCreateDate + ", calculateFeeSum=" + calculateFeeSum + ", calculatePromotion="
				+ calculatePromotion + ", ledgerSeq=" + ledgerSeq + ", ledgerFinancialCompanyCd="
				+ ledgerFinancialCompanyCd + ", ledgerFinancialCompanyCdName=" + ledgerFinancialCompanyCdName
				+ ", ledgerFinancialBranchCd=" + ledgerFinancialBranchCd + ", ledgerFinancialBranchCdName="
				+ ledgerFinancialBranchCdName + ", ledgerFinancialProductCd=" + ledgerFinancialProductCd
				+ ", ledgerFinancialProductCdName=" + ledgerFinancialProductCdName + ", ledgerCustomerName="
				+ ledgerCustomerName + ", ledgerCarPrice=" + ledgerCarPrice + ", ledgerAcquisitionCost="
				+ ledgerAcquisitionCost + ", ledgerDeliveryDate=" + ledgerDeliveryDate + ", ledgerDealerBrandCd="
				+ ledgerDealerBrandCd + ", ledgerDealerBrandCdName=" + ledgerDealerBrandCdName
				+ ", ledgerDealerCompanyCd=" + ledgerDealerCompanyCd + ", ledgerDealerCompanyCdName="
				+ ledgerDealerCompanyCdName + ", ledgerCarName=" + ledgerCarName + ", ledgerCarNumber="
				+ ledgerCarNumber + ", ledgerTotalFeePercent=" + ledgerTotalFeePercent + ", ledgerTotalFeeSum="
				+ ledgerTotalFeeSum + ", ledgerTotalFeeSupplyPrice=" + ledgerTotalFeeSupplyPrice
				+ ", ledgerTotalFeeSurtax=" + ledgerTotalFeeSurtax + ", ledgerSlidingPercent=" + ledgerSlidingPercent
				+ ", ledgerSlidingSum=" + ledgerSlidingSum + ", ledgerSlidingSupplyPrice=" + ledgerSlidingSupplyPrice
				+ ", ledgerSlidingSurtax=" + ledgerSlidingSurtax + ", ledgerAddPromotion=" + ledgerAddPromotion
				+ ", ledgerPromotionMemo=" + ledgerPromotionMemo + ", ledgerOther=" + ledgerOther + ", contractSeq="
				+ contractSeq + ", contractNomalTotalFeePercent=" + contractNomalTotalFeePercent
				+ ", contractNomalTotalFeeSum=" + contractNomalTotalFeeSum + ", contractNomalAgFeePercent="
				+ contractNomalAgFeePercent + ", contractNomalAgFeeSum=" + contractNomalAgFeeSum
				+ ", contractNomalDpFeePercent=" + contractNomalDpFeePercent + ", contractNomalDpFeeSum="
				+ contractNomalDpFeeSum + ", contractAddTotalFeeSum=" + contractAddTotalFeeSum
				+ ", contractAddAgFeeSum=" + contractAddAgFeeSum + ", contractAddDpFeeSum=" + contractAddDpFeeSum
				+ ", contractTotalSlidingPercent=" + contractTotalSlidingPercent + ", contractTotalSlidingSum="
				+ contractTotalSlidingSum + ", contractAgSlidingPercent=" + contractAgSlidingPercent
				+ ", contractAgSlidingSum=" + contractAgSlidingSum + ", contractDpSlidingPercent="
				+ contractDpSlidingPercent + ", contractDpSlidingSum=" + contractDpSlidingSum + ", contractCreateYear="
				+ contractCreateYear + ", contractCreateMonth=" + contractCreateMonth + ", contractUserId="
				+ contractUserId + "]";
	}
	public String getSearchText() {
		return searchText;
	}
	public void setSearchText(String searchText) {
		this.searchText = searchText;
	}
	
}
