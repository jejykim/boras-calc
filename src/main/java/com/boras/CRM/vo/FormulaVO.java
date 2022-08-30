package com.boras.CRM.vo;

public class FormulaVO {

	// 계출 공식 seq
	private int formulaSeq;
	
	// type(총fee,agfee,dpdee,총슬,ag슬)
	private String formulaType;
	
	// 금융상품
	private String formulaFinancialProductCd;
	
	// 금융사
	private String formulaFinancialCompanyCd;
	
	// 금융상품명                                   
	private String formulaFinancialProductCdName;     
	                                              
	// 금융사명                                        
	private String formulaFinancialCompanyCdName;     
	
	// 공식1
	private String formula1;
	
	// 공식2
	private String formula2;
	
	// 공식3
	private String formula3;
	
	// 공식4
	private String formula4;
	
	// 공식5
	private String formula5;
	
	// 사용여부
	private String formulaUseYn;
	
	// 생성일
	private String formulaCreateDate;
	
	// 수정일
	private String formulaUpdateDate;

	public int getFormulaSeq() {
		return formulaSeq;
	}

	public void setFormulaSeq(int formulaSeq) {
		this.formulaSeq = formulaSeq;
	}

	public String getFormulaType() {
		return formulaType;
	}

	public void setFormulaType(String formulaType) {
		this.formulaType = formulaType;
	}

	public String getFormulaFinancialProductCd() {
		return formulaFinancialProductCd;
	}

	public void setFormulaFinancialProductCd(String formulaFinancialProductCd) {
		this.formulaFinancialProductCd = formulaFinancialProductCd;
	}

	public String getFormulaFinancialCompanyCd() {
		return formulaFinancialCompanyCd;
	}

	public void setFormulaFinancialCompanyCd(String formulaFinancialCompanyCd) {
		this.formulaFinancialCompanyCd = formulaFinancialCompanyCd;
	}
	
	public String getFormulaFinancialProductCdName() {
		return formulaFinancialProductCdName;
	}

	public void setFormulaFinancialProductCdName(String formulaFinancialProductCdName) {
		this.formulaFinancialProductCdName = formulaFinancialProductCdName;
	}

	public String getFormulaFinancialCompanyCdName() {
		return formulaFinancialCompanyCdName;
	}

	public void setFormulaFinancialCompanyCdName(String formulaFinancialCompanyCdName) {
		this.formulaFinancialCompanyCdName = formulaFinancialCompanyCdName;
	}

	public String getFormula1() {
		return formula1;
	}

	public void setFormula1(String formula1) {
		this.formula1 = formula1;
	}

	public String getFormula2() {
		return formula2;
	}

	public void setFormula2(String formula2) {
		this.formula2 = formula2;
	}

	public String getFormula3() {
		return formula3;
	}

	public void setFormula3(String formula3) {
		this.formula3 = formula3;
	}

	public String getFormula4() {
		return formula4;
	}

	public void setFormula4(String formula4) {
		this.formula4 = formula4;
	}

	public String getFormula5() {
		return formula5;
	}

	public void setFormula5(String formula5) {
		this.formula5 = formula5;
	}

	public String getFormulaUseYn() {
		return formulaUseYn;
	}

	public void setFormulaUseYn(String formulaUseYn) {
		this.formulaUseYn = formulaUseYn;
	}

	public String getFormulaCreateDate() {
		return formulaCreateDate;
	}

	public void setFormulaCreateDate(String formulaCreateDate) {
		this.formulaCreateDate = formulaCreateDate;
	}

	public String getFormulaUpdateDate() {
		return formulaUpdateDate;
	}

	public void setFormulaUpdateDate(String formulaUpdateDate) {
		this.formulaUpdateDate = formulaUpdateDate;
	}
	
}
