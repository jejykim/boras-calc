package com.boras.CRM.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.CalculateFinanicalCompanyVO;
import com.boras.CRM.vo.ContractVO;

@Mapper
public interface CalculateFinanicalCompanyMapper {
	
	/**
	 * 금융사별 정산 등록
	 * @param CalculateFinanicalCompanyVO
	 * @return int
	 * 
	 */
	public int insertCalculate(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO);
	
	/**
	 * 금융사별 정산 수정
	 * @param CalculateFinanicalCompanyVO
	 * @return int
	 * 
	 */
	public int updateCalculate(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO);
	
	/**
	 * 등록 유무 확인
	 * @param CalculateFinanicalCompanyVO
	 * @return int
	 * 
	 */
	public int isExistCalculate(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO);
	
	/**
	 * 금융사별 정산 목록 조회(월별)
	 * @param CalculateFinanicalCompanyVO
	 * @return List<CalculateFinanicalCompanyVO>
	 */
	public List<CalculateFinanicalCompanyVO> selectCalculateList(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO);
	
	/**
	 * 등록 년 조회
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectCalculateYear();
	
	/**
	 * 금융사별 계출 목록 조회 (금월)
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> calculateFinancialCompany(ContractVO contractVO);
	
	/**
	 * 금융사별 계출 ag별 목록 조회
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> calculateFinancialCompanyForUser(ContractVO contractVO);
	
	/**
	 * 금융사별 계출 ag 사업자 구분 count
	 * @param 
	 * @return Map<String, Object>
	 */
	public Map<String, Object> calculateFinancialCompanyAgCount(ContractVO contractVO);
	
}
