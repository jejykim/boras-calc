package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.ApprovalVO;

@Mapper
public interface ApprovalMapper {
	
	/**
	 * 승인요청-ag사
	 * @param 
	 * @return int
	 */
	public int requestApproval(ApprovalVO approvalVO);
	
	/**
	 * 승인-관리자
	 * @param 
	 * @return int
	 * 
	 */
	public int confirmApproval(ApprovalVO approvalVO);
	
	

}
