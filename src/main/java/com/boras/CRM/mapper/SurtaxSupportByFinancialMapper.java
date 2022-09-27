package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.SurtaxSupportByFinancialVO;

@Mapper
public interface SurtaxSupportByFinancialMapper {
	
	/**
	 * 금융사 별 부가세지원여부 목록 조회
	 * @param 
	 * @return List<SurtaxSupportByFinancialVO>
	 */
	public List<SurtaxSupportByFinancialVO> selectSurtaxSupportByFinancialList();
	
	/**
	 * 금융사 별 부가세지원여부 상세 조회
	 * @param 
	 * @return SurtaxSupportByFinancialVO
	 */
	public SurtaxSupportByFinancialVO selectSurtaxSupportByFinancialInfo(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO);
	
	/**
	 * 금융사 별 부가세지원여부 등록
	 * @param 
	 * @return int
	 */
	public int insertSurtaxSupportByFinancial(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO);
	
	/**
	 * 금융사 별 부가세지원여부 수정
	 * @param 
	 * @return int
	 */
	public int updateSurtaxSupportByFinancial(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO);
	
	/**
	 * 금융사 별 부가세지원여부 중복체크
	 * @param 
	 * @return int
	 */
	public int duplicateCheckForSurtaxSupportInsert(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO);
}
