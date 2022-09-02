package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.FormulaVO;

@Mapper
public interface FormulaMapper {
	
	/**
	 * 계출 공식 목록 조회(타입별)
	 * @param FormulaVO
	 * @return
	 */
	public List<FormulaVO> selectFormulaList();
	
	/**
	 * 계출 공식 조회(타입별)
	 * @param FormulaVO
	 * @return
	 */
	public List<FormulaVO> selectFormulaListByFinancial(FormulaVO formulaVO);
	
}
