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
	// 금융상품 코드
	private int ledgerFinancialProductCd;
	// 금융상품 코드명
	private String ledgerFinancialProductCdName;
	// 차량명
	private String ledgerCarName;
	// 고객명
	private String ledgerCustomerName;
	// 차량가
	private BigDecimal ledgerCarPrice;
	// 취득원가
	private BigDecimal ledgerAcquisitionCost;
	
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
	public String getLedgerCarName() {
		return ledgerCarName;
	}
	public void setLedgerCarName(String ledgerCarName) {
		this.ledgerCarName = ledgerCarName;
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
				+ ", ledgerFinancialCompanyCdName=" + ledgerFinancialCompanyCdName + ", ledgerFinancialProductCd="
				+ ledgerFinancialProductCd + ", ledgerFinancialProductCdName=" + ledgerFinancialProductCdName
				+ ", ledgerCarName=" + ledgerCarName + ", ledgerCustomerName=" + ledgerCustomerName
				+ ", ledgerCarPrice=" + ledgerCarPrice + ", ledgerAcquisitionCost=" + ledgerAcquisitionCost
				+ ", userName=" + userName + ", userId=" + userId + ", getContractLedgerSeq()=" + getContractLedgerSeq()
				+ ", getContractUserId()=" + getContractUserId() + ", getContractSeq()=" + getContractSeq()
				+ ", getContractCalculateSeq()=" + getContractCalculateSeq() + ", getContractNomalTotalFeePercent()="
				+ getContractNomalTotalFeePercent() + ", getContractNomalTotalFeeSum()=" + getContractNomalTotalFeeSum()
				+ ", getContractNomalAgFeePercent()=" + getContractNomalAgFeePercent() + ", getContractNomalAgFeeSum()="
				+ getContractNomalAgFeeSum() + ", getContractNomalDpFeePercent()=" + getContractNomalDpFeePercent()
				+ ", getContractNomalDpFeeSum()=" + getContractNomalDpFeeSum() + ", getContractAddTotalFeeSum()="
				+ getContractAddTotalFeeSum() + ", getContractAddAgFeeSum()=" + getContractAddAgFeeSum()
				+ ", getContractAddDpFeeSum()=" + getContractAddDpFeeSum() + ", getContractTotalSlidingPercent()="
				+ getContractTotalSlidingPercent() + ", getContractTotalSlidingSum()=" + getContractTotalSlidingSum()
				+ ", getContractAgSlidingPercent()=" + getContractAgSlidingPercent() + ", getContractAgSlidingSum()="
				+ getContractAgSlidingSum() + ", getContractDpSlidingPercent()=" + getContractDpSlidingPercent()
				+ ", getContractDpSlidingSum()=" + getContractDpSlidingSum() + ", getContractAgFeeSurtaxSupportYn()="
				+ getContractAgFeeSurtaxSupportYn() + ", getContractSlidingSurtaxSupportYn()="
				+ getContractSlidingSurtaxSupportYn() + ", getContractAddFeeSurtaxSupportYn()="
				+ getContractAddFeeSurtaxSupportYn() + ", getContractCreateYear()=" + getContractCreateYear()
				+ ", getContractCreateMonth()=" + getContractCreateMonth() + ", getContractCreateUserId()="
				+ getContractCreateUserId() + ", getContractCreateDate()=" + getContractCreateDate()
				+ ", getContractUpdateUserId()=" + getContractUpdateUserId() + ", getContractUpdateDate()="
				+ getContractUpdateDate() + ", getSearchFilter()=" + getSearchFilter() + ", getSearchText()="
				+ getSearchText() + ", getLedgerFinancialCompanyCd()=" + getLedgerFinancialCompanyCd()
				+ ", getLedgerFinancialCompanyCdName()=" + getLedgerFinancialCompanyCdName()
				+ ", getLedgerFinancialProductCd()=" + getLedgerFinancialProductCd()
				+ ", getLedgerFinancialProductCdName()=" + getLedgerFinancialProductCdName() + ", getLedgerCarName()="
				+ getLedgerCarName() + ", getLedgerCustomerName()=" + getLedgerCustomerName() + ", getLedgerCarPrice()="
				+ getLedgerCarPrice() + ", getLedgerAcquisitionCost()=" + getLedgerAcquisitionCost()
				+ ", getUserName()=" + getUserName() + ", getUserId()=" + getUserId() + ", getPage()=" + getPage()
				+ ", getNowPage()=" + getNowPage() + ", getPrePage()=" + getPrePage() + ", getNextPage()="
				+ getNextPage() + ", getTotalCount()=" + getTotalCount() + ", getPagePerRows()=" + getPagePerRows()
				+ ", getStartPage()=" + getStartPage() + ", getEndPage()=" + getEndPage() + ", getFirstPage()="
				+ getFirstPage() + ", getLastPage()=" + getLastPage() + ", getNum()=" + getNum() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
