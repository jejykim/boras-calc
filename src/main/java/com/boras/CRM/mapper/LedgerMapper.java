package com.boras.CRM.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

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
	 * 등록 년 조회
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectLedgerYear();
	
}
