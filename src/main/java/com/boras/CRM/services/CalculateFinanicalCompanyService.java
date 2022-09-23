package com.boras.CRM.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.CalculateFinanicalCompanyMapper;
import com.boras.CRM.vo.CalculateFinanicalCompanyVO;
import com.boras.CRM.vo.ContractVO;



@Service
public class CalculateFinanicalCompanyService implements CalculateFinanicalCompanyMapper {

	@Autowired
	CalculateFinanicalCompanyMapper calculateFinanicalCompanyMapper;

	@Override
	public int insertCalculate(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO) {
		return calculateFinanicalCompanyMapper.insertCalculate(calculateFinanicalCompanyVO);
	}

	@Override
	public int updateCalculate(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO) {
		return calculateFinanicalCompanyMapper.updateCalculate(calculateFinanicalCompanyVO);
	}

	@Override
	public List<CalculateFinanicalCompanyVO> selectCalculateList(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO) {
		return calculateFinanicalCompanyMapper.selectCalculateList(calculateFinanicalCompanyVO);
	}

	@Override
	public List<Map<String, Object>> selectCalculateYear() {
		return calculateFinanicalCompanyMapper.selectCalculateYear();
	}

	@Override
	public List<Map<String, Object>> calculateFinancialCompany(ContractVO contractVO) {
		return calculateFinanicalCompanyMapper.calculateFinancialCompany(contractVO);
	}
	
	@Override
	public int isExistCalculate(CalculateFinanicalCompanyVO calculateFinanicalCompanyVO) {
		return calculateFinanicalCompanyMapper.isExistCalculate(calculateFinanicalCompanyVO);
	}

	@Override
	public List<Map<String, Object>> calculateFinancialCompanyForUser(ContractVO contractVO) {
		return calculateFinanicalCompanyMapper.calculateFinancialCompanyForUser(contractVO);
	}

	@Override
	public Map<String, Object> calculateFinancialCompanyAgCount(ContractVO contractVO) {
		return calculateFinanicalCompanyMapper.calculateFinancialCompanyAgCount(contractVO);
	}

}
