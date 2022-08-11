package com.boras.CRM.vo;

public class CodeVO {

	// 코드 부모 ID
	private int codeParentId;
	
	// 코드 ID
	private int codeId;
	
	// 코드 명
	private String codeName;
	
	// 코드 설명
	private String codeDescription;
	
	// 코드 사용여부
	private String codeUseYn;
	
	// 코드 생성일
	private String codeCreateDate;
	
	// 코드 수정일
	private String codeUpdateDate;

	public int getCodeParentId() {
		return codeParentId;
	}

	public void setCodeParentId(int codeParentId) {
		this.codeParentId = codeParentId;
	}

	public int getCodeId() {
		return codeId;
	}

	public void setCodeId(int codeId) {
		this.codeId = codeId;
	}

	public String getCodeName() {
		return codeName;
	}

	public void setCodeName(String codeName) {
		this.codeName = codeName;
	}

	public String getCodeDescription() {
		return codeDescription;
	}

	public void setCodeDescription(String codeDescription) {
		this.codeDescription = codeDescription;
	}

	public String getCodeUseYn() {
		return codeUseYn;
	}

	public void setCodeUseYn(String codeUseYn) {
		this.codeUseYn = codeUseYn;
	}

	public String getCodeCreateDate() {
		return codeCreateDate;
	}

	public void setCodeCreateDate(String codeCreateDate) {
		this.codeCreateDate = codeCreateDate;
	}

	public String getCodeUpdateDate() {
		return codeUpdateDate;
	}

	public void setCodeUpdateDate(String codeUpdateDate) {
		this.codeUpdateDate = codeUpdateDate;
	}
	
}
