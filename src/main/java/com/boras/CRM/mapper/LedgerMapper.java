package com.boras.CRM.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.ApprovalVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.LedgerVO;

@Mapper
public interface LedgerMapper {

	/**
	 * 원장 등록
	 * @param ledgerVO
	 * @return
	 */
	public int insertLedger(LedgerVO ledgerVO);
	
	/**
	 * 원장 수정
	 * @param ledgerVO
	 * @return
	 */
	public int updateLedger(LedgerVO ledgerVO);
	
	/**
	 * 원장 상세 조회
	 * @param ledgerVO
	 * @return
	 */
	public LedgerVO selectLedgerDetail(LedgerVO ledgerVO);
	
	/**
	 * 원장 목록
	 * @param ledgerVO
	 * @return
	 */
	public List<LedgerVO> selectLedgerList(LedgerVO ledgerVO);
	
	/**
	 * 원장 목록 count
	 * @param ledgerVO
	 * @return
	 */
	public int selectLedgerListCount(LedgerVO ledgerVO);
	
	/**
	 * 원장 목록 (AG용)
	 * @param ledgerVO
	 * @return
	 */
	public List<LedgerVO> selectLedgerListForAg(LedgerVO ledgerVO);
	
	/**
	 * 원장 목록 (AG용) - 금월 승인 요청 완료 목록
	 * @param ledgerVO
	 * @return
	 */
	public List<LedgerVO> selectLedgerListForAgDone(LedgerVO ledgerVO);
	
	/**
	 * 등록 년 조회
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectLedgerYear();
	
	/**
	 * 금융사 원장 합계 표시
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectSumCost(LedgerVO ledgerVO);
	
	/**
	 * 승인 처리 완료 여부
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectCountOfApprovalThisMonth(ApprovalVO approvalVO);
	
	/**
	 * 원장 승인 여부 확인 (삭제 확인 용)
	 * @param approvalVO
	 * @return
	 */
	public int isApprovalYCount(ApprovalVO approvalVO);
	
	/**
	 * 원장 승인 삭제 (삭제 용)
	 * @param approvalVO
	 * @return
	 */
	public int deleteApproval(ApprovalVO approvalVO);
	
	/**
	 * 계출 정산 여부 확인 (삭제 확인 용)
	 * @param contractVO
	 * @return
	 */
	public int isCalculateCount(ContractVO contractVO);
	
	/**
	 * 계출 삭제 (삭제 용)
	 * @param contractVO
	 * @return
	 */
	public int deleteContract(ContractVO contractVO);
	
	/**
	 * 원장 삭제
	 * @param ledgerVO
	 * @return
	 */
	public int deleteLedger(LedgerVO ledgerVO);
}
