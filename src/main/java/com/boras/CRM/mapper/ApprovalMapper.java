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
	 * 승인요청-관리자
	 * @param 
	 * @return int
	 * 
	 */
	public int insertApproval(ApprovalVO approvalVO);
	
	/**
	 * 승인-관리자
	 * @param 
	 * @return int
	 * 
	 */
	public int confirmApproval(ApprovalVO approvalVO);
	
	/**
	 * 승인 요청 삭제-ag사용
	 * @param 
	 * @return int
	 * 
	 */
	public int deleteRequestApproval(ApprovalVO approvalVO);
	
	/**
	 * 중복승인요청된 건인지 확인
	 * @param 
	 * @return int
	 * 
	 */
	public int cntApprovalLedgerSeq(ApprovalVO approvalVO);
	
	/**
	 * 중복승인처리 - 승인외건 거부 처리
	 * @param 
	 * @return int
	 * 
	 */
	public int refusalApproval(ApprovalVO approvalVO);
	
	/**
	 * 중복승인처리 - 승인 컨펌
	 * @param 
	 * @return int
	 * 
	 */
	public int confirmApprovalForDuplication(ApprovalVO approvalVO);
	
	/**
	 * 승인요청 목록 조회
	 * @param 
	 * @return int
	 * 
	 */
	public List<ApprovalVO> selectRequestApprovalList(ApprovalVO approvalVO);
	
	/**
	 * 승인완료 상세 조회 (원장 SEQ)
	 * @param 
	 * @return int
	 * 
	 */
	public ApprovalVO selectCompeleteApprovalInfo(ApprovalVO approvalVO);
	
	/**
	 * 원장 & 사용자 ID 요청건 유무 확인
	 * @param 
	 * @return int
	 * 
	 */
	public ApprovalVO selectApprovalInfoByUserId(ApprovalVO approvalVO);
}
