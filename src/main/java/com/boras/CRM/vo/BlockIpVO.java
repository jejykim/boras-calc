package com.boras.CRM.vo;

public class BlockIpVO {

	// seq
	private int blockIpSeq;
	
	// 차단 IP
	private String blockIp;
	
	// 차단 횟수
	private int blockIpCount;
	
	// ID
	private String blockIpId;
	
	// 사용 유무
	private String blockIpUseYn;
	
	// 마지막 일자
	private String blockIpLastDate;
	
	// 생성일자
	private String blockIpCreateDate;

	public int getBlockIpSeq() {
		return blockIpSeq;
	}

	public void setBlockIpSeq(int blockIpSeq) {
		this.blockIpSeq = blockIpSeq;
	}

	public String getBlockIp() {
		return blockIp;
	}

	public void setBlockIp(String blockIp) {
		this.blockIp = blockIp;
	}

	public int getBlockIpCount() {
		return blockIpCount;
	}

	public void setBlockIpCount(int blockIpCount) {
		this.blockIpCount = blockIpCount;
	}

	public String getBlockIpId() {
		return blockIpId;
	}

	public void setBlockIpId(String blockIpId) {
		this.blockIpId = blockIpId;
	}

	public String getBlockIpUseYn() {
		return blockIpUseYn;
	}

	public void setBlockIpUseYn(String blockIpUseYn) {
		this.blockIpUseYn = blockIpUseYn;
	}

	public String getBlockIpLastDate() {
		return blockIpLastDate;
	}

	public void setBlockIpLastDate(String blockIpLastDate) {
		this.blockIpLastDate = blockIpLastDate;
	}

	public String getBlockIpCreateDate() {
		return blockIpCreateDate;
	}

	public void setBlockIpCreateDate(String blockIpCreateDate) {
		this.blockIpCreateDate = blockIpCreateDate;
	}
	
}
