package com.boras.CRM.vo;

import java.math.BigDecimal;

public class ContractVO extends PagingVO {
	private int contractLedgerSeq;
	private String contractUserId;
	private int contractSeq;
	private int contractCalculateSeq;
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
	private String contractAgFeeSurtaxSupportYn;
	private String contractSlidingSurtaxSupportYn;
	private String contractAddFeeSurtaxSupportYn;
	private int contractCreateYear;
	private int contractCreateMonth;
	private String contractCreateUserId;
	private String contractCreateDate;
	private String contractUpdateUserId;
	private String contractUpdateDate;
	private String searchFilter;
	private String searchText;
	
	/* 원장 */
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
	// 고객명
	private String ledgerCustomerName;
	// 차량가
	private BigDecimal ledgerCarPrice;
	// 취득원가
	private BigDecimal ledgerAcquisitionCost;
	// 기타사항
	private String ledgerOther;
	/* 사용자(ag) */
	//이름
	private String userName;
	//id
	private String userId;
	
	public int getContractLedgerSeq() {
		return contractLedgerSeq;
	}
	public void setContractLedgerSeq(int contractLedgerSeq) {
		this.contractLedgerSeq = contractLedgerSeq;
	}
	public String getContractUserId() {
		return contractUserId;
	}
	public void setContractUserId(String contractUserId) {
		this.contractUserId = contractUserId;
	}
	public int getContractSeq() {
		return contractSeq;
	}
	public void setContractSeq(int contractSeq) {
		this.contractSeq = contractSeq;
	}
	public int getContractCalculateSeq() {
		return contractCalculateSeq;
	}
	public void setContractCalculateSeq(int contractCalculateSeq) {
		this.contractCalculateSeq = contractCalculateSeq;
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
	public String getContractAgFeeSurtaxSupportYn() {
		return contractAgFeeSurtaxSupportYn;
	}
	public void setContractAgFeeSurtaxSupportYn(String contractAgFeeSurtaxSupportYn) {
		this.contractAgFeeSurtaxSupportYn = contractAgFeeSurtaxSupportYn;
	}
	public String getContractSlidingSurtaxSupportYn() {
		return contractSlidingSurtaxSupportYn;
	}
	public void setContractSlidingSurtaxSupportYn(String contractSlidingSurtaxSupportYn) {
		this.contractSlidingSurtaxSupportYn = contractSlidingSurtaxSupportYn;
	}
	public String getContractAddFeeSurtaxSupportYn() {
		return contractAddFeeSurtaxSupportYn;
	}
	public void setContractAddFeeSurtaxSupportYn(String contractAddFeeSurtaxSupportYn) {
		this.contractAddFeeSurtaxSupportYn = contractAddFeeSurtaxSupportYn;
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
	public String getContractCreateUserId() {
		return contractCreateUserId;
	}
	public void setContractCreateUserId(String contractCreateUserId) {
		this.contractCreateUserId = contractCreateUserId;
	}
	public String getContractCreateDate() {
		return contractCreateDate;
	}
	public void setContractCreateDate(String contractCreateDate) {
		this.contractCreateDate = contractCreateDate;
	}
	public String getContractUpdateUserId() {
		return contractUpdateUserId;
	}
	public void setContractUpdateUserId(String contractUpdateUserId) {
		this.contractUpdateUserId = contractUpdateUserId;
	}
	public String getContractUpdateDate() {
		return contractUpdateDate;
	}
	public void setContractUpdateDate(String contractUpdateDate) {
		this.contractUpdateDate = contractUpdateDate;
	}
	public String getSearchFilter() {
		return searchFilter;
	}
	public void setSearchFilter(String searchFilter) {
		this.searchFilter = searchFilter;
	}
	public String getSearchText() {
		return searchText;
	}
	public void setSearchText(String searchText) {
		this.searchText = searchText;
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
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	@Override
	public String toString() {
		return "ContractVO [contractLedgerSeq=" + contractLedgerSeq + ", contractUserId=" + contractUserId
				+ ", contractSeq=" + contractSeq + ", contractCalculateSeq=" + contractCalculateSeq
				+ ", contractNomalTotalFeePercent=" + contractNomalTotalFeePercent + ", contractNomalTotalFeeSum="
				+ contractNomalTotalFeeSum + ", contractNomalAgFeePercent=" + contractNomalAgFeePercent
				+ ", contractNomalAgFeeSum=" + contractNomalAgFeeSum + ", contractNomalDpFeePercent="
				+ contractNomalDpFeePercent + ", contractNomalDpFeeSum=" + contractNomalDpFeeSum
				+ ", contractAddTotalFeeSum=" + contractAddTotalFeeSum + ", contractAddAgFeeSum=" + contractAddAgFeeSum
				+ ", contractAddDpFeeSum=" + contractAddDpFeeSum + ", contractTotalSlidingPercent="
				+ contractTotalSlidingPercent + ", contractTotalSlidingSum=" + contractTotalSlidingSum
				+ ", contractAgSlidingPercent=" + contractAgSlidingPercent + ", contractAgSlidingSum="
				+ contractAgSlidingSum + ", contractDpSlidingPercent=" + contractDpSlidingPercent
				+ ", contractDpSlidingSum=" + contractDpSlidingSum + ", contractAgFeeSurtaxSupportYn="
				+ contractAgFeeSurtaxSupportYn + ", contractSlidingSurtaxSupportYn=" + contractSlidingSurtaxSupportYn
				+ ", contractAddFeeSurtaxSupportYn=" + contractAddFeeSurtaxSupportYn + ", contractCreateYear="
				+ contractCreateYear + ", contractCreateMonth=" + contractCreateMonth + ", contractCreateUserId="
				+ contractCreateUserId + ", contractCreateDate=" + contractCreateDate + ", contractUpdateUserId="
				+ contractUpdateUserId + ", contractUpdateDate=" + contractUpdateDate + ", searchFilter=" + searchFilter
				+ ", searchText=" + searchText + ", ledgerFinancialCompanyCd=" + ledgerFinancialCompanyCd
				+ ", ledgerFinancialCompanyCdName=" + ledgerFinancialCompanyCdName + ", ledgerFinancialBranchCd="
				+ ledgerFinancialBranchCd + ", ledgerFinancialBranchCdName=" + ledgerFinancialBranchCdName
				+ ", ledgerFinancialProductCd=" + ledgerFinancialProductCd + ", ledgerFinancialProductCdName="
				+ ledgerFinancialProductCdName + ", ledgerDeliveryDate=" + ledgerDeliveryDate + ", ledgerDealerBrandCd="
				+ ledgerDealerBrandCd + ", ledgerDealerBrandCdName=" + ledgerDealerBrandCdName
				+ ", ledgerDealerCompanyCd=" + ledgerDealerCompanyCd + ", ledgerDealerCompanyCdName="
				+ ledgerDealerCompanyCdName + ", ledgerCarName=" + ledgerCarName + ", ledgerCarNumber="
				+ ledgerCarNumber + ", ledgerCustomerName=" + ledgerCustomerName + ", ledgerCarPrice=" + ledgerCarPrice
				+ ", ledgerAcquisitionCost=" + ledgerAcquisitionCost + ", userName=" + userName + ", userId=" + userId
				+ "]";
	}
	public String getLedgerOther() {
		return ledgerOther;
	}
	public void setLedgerOther(String ledgerOther) {
		this.ledgerOther = ledgerOther;
	}
	
	
}
