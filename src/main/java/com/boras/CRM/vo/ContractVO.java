package com.boras.CRM.vo;

public class ContractVO extends PagingVO {
	private int contractLedgerSeq;
	private String contractUserId;
	private int contractSeq;
	private int contractCalculateSeq;
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
	// 금융상품 코드
	private int ledgerFinancialProductCd;
	// 차량명
	private String ledgerCarName;
	
	/* 사용자 */
	//이름
	private String userName;
	
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
	public int getLedgerFinancialProductCd() {
		return ledgerFinancialProductCd;
	}
	public void setLedgerFinancialProductCd(int ledgerFinancialProductCd) {
		this.ledgerFinancialProductCd = ledgerFinancialProductCd;
	}
	public String getLedgerCarName() {
		return ledgerCarName;
	}
	public void setLedgerCarName(String ledgerCarName) {
		this.ledgerCarName = ledgerCarName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
				+ ", ledgerFinancialProductCd=" + ledgerFinancialProductCd + ", ledgerCarName=" + ledgerCarName
				+ ", userName=" + userName + "]";
	}
	
	
}
