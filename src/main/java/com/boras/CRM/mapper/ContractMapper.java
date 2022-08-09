package com.boras.CRM.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.ContractVO;

@Mapper
public interface ContractMapper {
	
	/**
	 * 관리자 승인시 초기 계출 등록
	 * @param 
	 * @return int
	 * 
	 */
	public int insertContract(ContractVO contractVO);
	
	

}
