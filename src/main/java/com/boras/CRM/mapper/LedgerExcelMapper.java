package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.LedgerExcelVO;

@Mapper
public interface LedgerExcelMapper {

	/**
	 * 원장 엑셀 설정 등록
	 * @param ledgerExcelVO
	 * @return
	 */
	public int insertLedgerExcelSetting(LedgerExcelVO ledgerExcelVO);
	
	/**
	 * 원장 엑셀 설정 상세 조회
	 * @param ledgerExcelVO
	 * @return
	 */
	public LedgerExcelVO selectLedgerExcelDetail(LedgerExcelVO ledgerExcelVO);
	
	/**
	 * 원장 엑셀 설정 상세 조회 (유효성 검사용)
	 * @param ledgerExcelVO
	 * @return
	 */
	public LedgerExcelVO selectLedgerExcelDetailForValidation(LedgerExcelVO ledgerExcelVO);
	
	/**
	 * 캐피탈 원장 엑셀 등록 목록
	 * @return
	 */
	public List<LedgerExcelVO> selectLedgerExcelList();
	
	/**
	 * 원장 엑셀 설정 수정
	 * @param ledgerExcelVO
	 * @return
	 */
	public int updateLedgerExcelSetting(LedgerExcelVO ledgerExcelVO);
	
	/**
	 * 원장 엑셀 중복 체크
	 * @param ledgerExcelVO
	 * @return
	 */
	public int isExcelExist(LedgerExcelVO ledgerExcelVO);
	
}
