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
	public List<SurtaxSupportByFinancialVO> selectFeeByFinancialList();
	
}
