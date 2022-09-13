package com.boras.CRM.mapper;

import java.util.List;
import java.util.Map;

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
	 * 등록 년 조회
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectContractYear();
	
	/**
	 * 계출 목록 조회
	 * @param ContractVO
	 * @return
	 */
	public List<ContractVO> selectContractList(ContractVO contractVO);
	
	/**
	 * 계출 목록 카운트 조회
	 * @param ContractVO
	 * @return
	 */
	public int selectContractListCount(ContractVO contractVO);
	
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
	
	/**
	 * 승인완료되어 ag사 매칭
	 * @param ContractVO
	 * @return int
	 * 
	 */
	public int updateContractByApproval(ContractVO contractVO);
	
	/**
	 * 계출 seq로 원장 seq가져오기 
	 * @param ContractVO
	 * @return ContractVO
	 */
	public ContractVO selectContractSeqByLedgerSeq(ContractVO contractVO);
}
