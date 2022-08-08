package com.boras.CRM.mapper;

import java.util.List;

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
	 * 원장 상세 조회
	 * @param ledgerVO
	 * @return
	 */
	public LedgerVO selectLedgerDetail(LedgerVO ledgerVO);
	
}
