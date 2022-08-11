package com.boras.CRM.vo;

public class BlockIdVO {

	// seq
	private int blockIdSeq;
	
	// 차단 ID
	private String blockId;
	
	// 차단 횟수
	private int blockIdCount;
	
	// IP 주소
	private String blockIdIp;
	
	// 사용 유무
	private String blockIdUseYn;
	
	// 마지막 일자
	private String blockIdLastDate;
	
	// 생성일자
	private String blockIdCreateDate;

	public int getBlockIdSeq() {
		return blockIdSeq;
	}

	public void setBlockIdSeq(int blockIdSeq) {
		this.blockIdSeq = blockIdSeq;
	}

	public String getBlockId() {
		return blockId;
	}

	public void setBlockId(String blockId) {
		this.blockId = blockId;
	}

	public int getBlockIdCount() {
		return blockIdCount;
	}

	public void setBlockIdCount(int blockIdCount) {
		this.blockIdCount = blockIdCount;
	}

	public String getBlockIdIp() {
		return blockIdIp;
	}

	public void setBlockIdIp(String blockIdIp) {
		this.blockIdIp = blockIdIp;
	}

	public String getBlockIdUseYn() {
		return blockIdUseYn;
	}

	public void setBlockIdUseYn(String blockIdUseYn) {
		this.blockIdUseYn = blockIdUseYn;
	}

	public String getBlockIdLastDate() {
		return blockIdLastDate;
	}

	public void setBlockIdLastDate(String blockIdLastDate) {
		this.blockIdLastDate = blockIdLastDate;
	}

	public String getBlockIdCreateDate() {
		return blockIdCreateDate;
	}

	public void setBlockIdCreateDate(String blockIdCreateDate) {
		this.blockIdCreateDate = blockIdCreateDate;
	}
	
}
