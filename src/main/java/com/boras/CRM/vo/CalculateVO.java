package com.boras.CRM.vo;

public class CalculateVO extends PagingVO {
	private String calculateUserId;
	private int calculateSeq;
	private int calculateYear;
	private int calculateMonth;
	private double calculateAgFeeSum;
	private double calculateSlidingSum;
	private double calculateAddFeeSum;
	private double calculateSupplySum;
	private double calculateSurtaxSum;
	private double calculatePersonalAgSum;
	private double calculateBusinessSum;
	private double calculateTotalSum;
	private String calculateCreateDate;
	private double calculateFeeSum;
	
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
	private double ledgerCarPrice;
	// 취득원가
	private double ledgerAcquisitionCost;	
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
	
	
	/* 계출 */
	private double contractNomalTotalFeePercent;
	private double contractNomalTotalFeeSum;
	private double contractNomalAgFeePercent;
	private double contractNomalAgFeeSum;
	private double contractNomalDpFeePercent;
	private double contractNomalDpFeeSum;
	private double contractAddTotalFeeSum;
	private double contractAddAgFeeSum;
	private double contractAddDpFeeSum;
	private double contractTotalSlidingPercent;
	private double contractTotalSlidingSum;
	private double contractAgSlidingPercent;
	private double contractAgSlidingSum;
	private double contractDpSlidingPercent;
	private double contractDpSlidingSum;
	
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
	public double getCalculateAgFeeSum() {
		return calculateAgFeeSum;
	}
	public void setCalculateAgFeeSum(double calculateAgFeeSum) {
		this.calculateAgFeeSum = calculateAgFeeSum;
	}
	public double getCalculateSlidingSum() {
		return calculateSlidingSum;
	}
	public void setCalculateSlidingSum(double calculateSlidingSum) {
		this.calculateSlidingSum = calculateSlidingSum;
	}
	public double getCalculateAdd_feeSum() {
		return calculateAddFeeSum;
	}
	public void setCalculateAddFeeSum(double calculateAddFeeSum) {
		this.calculateAddFeeSum = calculateAddFeeSum;
	}
	public double getCalculateSupplySum() {
		return calculateSupplySum;
	}
	public void setCalculateSupplySum(double calculateSupplySum) {
		this.calculateSupplySum = calculateSupplySum;
	}
	public double getCalculateSurtaxSum() {
		return calculateSurtaxSum;
	}
	public void setCalculateSurtaxSum(double calculateSurtaxSum) {
		this.calculateSurtaxSum = calculateSurtaxSum;
	}
	public double getCalculatePersonalAgSum() {
		return calculatePersonalAgSum;
	}
	public void setCalculatePersonalAgSum(double calculatePersonalAgSum) {
		this.calculatePersonalAgSum = calculatePersonalAgSum;
	}
	public double getCalculateBusinessSum() {
		return calculateBusinessSum;
	}
	public void setCalculateBusinessSum(double calculateBusinessSum) {
		this.calculateBusinessSum = calculateBusinessSum;
	}
	public double getCalculateTotalSum() {
		return calculateTotalSum;
	}
	public void setCalculateTotalSum(double calculateTotalSum) {
		this.calculateTotalSum = calculateTotalSum;
	}
	public String getCalculateCreateDate() {
		return calculateCreateDate;
	}
	public void setCalculateCreateDate(String calculateCreateDate) {
		this.calculateCreateDate = calculateCreateDate;
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
	public double getContractNomalTotalFeePercent() {
		return contractNomalTotalFeePercent;
	}
	public void setContractNomalTotalFeePercent(double contractNomalTotalFeePercent) {
		this.contractNomalTotalFeePercent = contractNomalTotalFeePercent;
	}
	public double getContractNomalTotalFeeSum() {
		return contractNomalTotalFeeSum;
	}
	public void setContractNomalTotalFeeSum(double contractNomalTotalFeeSum) {
		this.contractNomalTotalFeeSum = contractNomalTotalFeeSum;
	}
	public double getContractNomalAgFeePercent() {
		return contractNomalAgFeePercent;
	}
	public void setContractNomalAgFeePercent(double contractNomalAgFeePercent) {
		this.contractNomalAgFeePercent = contractNomalAgFeePercent;
	}
	public double getContractNomalAgFeeSum() {
		return contractNomalAgFeeSum;
	}
	public void setContractNomalAgFeeSum(double contractNomalAgFeeSum) {
		this.contractNomalAgFeeSum = contractNomalAgFeeSum;
	}
	public double getContractNomalDpFeePercent() {
		return contractNomalDpFeePercent;
	}
	public void setContractNomalDpFeePercent(double contractNomalDpFeePercent) {
		this.contractNomalDpFeePercent = contractNomalDpFeePercent;
	}
	public double getContractNomalDpFeeSum() {
		return contractNomalDpFeeSum;
	}
	public void setContractNomalDpFeeSum(double contractNomalDpFeeSum) {
		this.contractNomalDpFeeSum = contractNomalDpFeeSum;
	}
	public double getContractAddTotalFeeSum() {
		return contractAddTotalFeeSum;
	}
	public void setContractAddTotalFeeSum(double contractAddTotalFeeSum) {
		this.contractAddTotalFeeSum = contractAddTotalFeeSum;
	}
	public double getContractAddAgFeeSum() {
		return contractAddAgFeeSum;
	}
	public void setContractAddAgFeeSum(double contractAddAgFeeSum) {
		this.contractAddAgFeeSum = contractAddAgFeeSum;
	}
	public double getContractAddDpFeeSum() {
		return contractAddDpFeeSum;
	}
	public void setContractAddDpFeeSum(double contractAddDpFeeSum) {
		this.contractAddDpFeeSum = contractAddDpFeeSum;
	}
	public double getContractTotalSlidingPercent() {
		return contractTotalSlidingPercent;
	}
	public void setContractTotalSlidingPercent(double contractTotalSlidingPercent) {
		this.contractTotalSlidingPercent = contractTotalSlidingPercent;
	}
	public double getContractTotalSlidingSum() {
		return contractTotalSlidingSum;
	}
	public void setContractTotalSlidingSum(double contractTotalSlidingSum) {
		this.contractTotalSlidingSum = contractTotalSlidingSum;
	}
	public double getContractAgSlidingPercent() {
		return contractAgSlidingPercent;
	}
	public void setContractAgSlidingPercent(double contractAgSlidingPercent) {
		this.contractAgSlidingPercent = contractAgSlidingPercent;
	}
	public double getContractAgSlidingSum() {
		return contractAgSlidingSum;
	}
	public void setContractAgSlidingSum(double contractAgSlidingSum) {
		this.contractAgSlidingSum = contractAgSlidingSum;
	}
	public double getContractDpSlidingPercent() {
		return contractDpSlidingPercent;
	}
	public void setContractDpSlidingPercent(double contractDpSlidingPercent) {
		this.contractDpSlidingPercent = contractDpSlidingPercent;
	}
	public double getContractDpSlidingSum() {
		return contractDpSlidingSum;
	}
	public void setContractDpSlidingSum(double contractDpSlidingSum) {
		this.contractDpSlidingSum = contractDpSlidingSum;
	}
	public double getCalculateAddFeeSum() {
		return calculateAddFeeSum;
	}
	public int getLedgerSeq() {
		return ledgerSeq;
	}
	public void setLedgerSeq(int ledgerSeq) {
		this.ledgerSeq = ledgerSeq;
	}
	public double getCalculateFeeSum() {
		return calculateFeeSum;
	}
	public void setCalculateFeeSum(double calculateFeeSum) {
		this.calculateFeeSum = calculateFeeSum;
	}
	
	
}
