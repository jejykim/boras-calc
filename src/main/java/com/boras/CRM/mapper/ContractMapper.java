package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.ContractVO;

@Mapper
public interface ContractMapper {
	
	/**
	 * 관리자 승인시 초기 계출 등록
	 * @param ContractVO
	 * @return int
	 * 
	 */
	public int insertContract(ContractVO contractVO);
	
	/**
	 * 계출 목록 조회
	 * @param ContractVO
	 * @return
	 */
	public List<ContractVO> selectContractList(ContractVO contractVO);
	
	/**
	 * 계출 수정 
	 * @param ContractVO
	 * @return int
	 * 
	 */
	public int updateContract(ContractVO contractVO);
	
	/**
	 * 계출 상세 조회
	 * @param ContractVO
	 * @return ContractVO
	 */
	public ContractVO selectContractInfo(ContractVO contractVO);
	

}
