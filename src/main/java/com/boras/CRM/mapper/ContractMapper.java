package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FeeByFinancialVO;
import com.boras.CRM.vo.UserVO;

@Mapper
public interface ContractMapper {
	
	/**
	 * 금융사 별 fee 목록 조회
	 * @param 
	 * @return List<FeeByFinancialVO>
	 */
	public List<FeeByFinancialVO> selectFeeByFinancialList(FeeByFinancialVO feeByFinancialVO);
	
	/**
	 * 초기 계출 자동등록
	 * @param 
	 * @return int
	 * 
	 */
	public int insertFeeByFinancial(ContractVO contractVO);
	
	

}
