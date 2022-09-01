package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.CalculateVO;
import com.boras.CRM.vo.ContractVO;

@Mapper
public interface CalculateMapper {
	
	/**
	 * 정산 등록
	 * @param CalculateVO
	 * @return int
	 * 
	 */
	public int insertCalculate(CalculateVO calculateVO);
	
	/**
	 * 정산 된 계출목록 조회
	 * @param CalculateVO
	 * @return
	 */
	public List<CalculateVO> selectCalculateList(CalculateVO calculateVO);
	
}
