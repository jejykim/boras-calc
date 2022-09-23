package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.CalculateMapper;
import com.boras.CRM.vo.CalculateVO;


@Service
public class CalculateService implements CalculateMapper {

	@Autowired
	CalculateMapper calculateMapper;

	@Override
	public int insertCalculate(CalculateVO calculateVO) {
		return calculateMapper.insertCalculate(calculateVO);
	}
	
	@Override
	public List<CalculateVO> selectCalculateList(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateList(calculateVO);
	}
	
	@Override
	public int selectCalculateListCount(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateListCount(calculateVO);
	}

	@Override
	public CalculateVO selectCalculateForAg(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateForAg(calculateVO);
	}
	
	@Override
	public CalculateVO selectCalculateInfo(int contractSeq) {
		return calculateMapper.selectCalculateInfo(contractSeq);
	}
	
	@Override
	public CalculateVO selectCalculateForAgAndFilter(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateForAgAndFilter(calculateVO);
	}
	
	@Override
	public List<CalculateVO> selectCalculateListByAdmin(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateListByAdmin(calculateVO);
	}
	
	@Override
	public CalculateVO selectCalculateSumByAdmin(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateSumByAdmin(calculateVO);
	}
	
	@Override
	public List<CalculateVO> selectCalculateInfoListByAdmin(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateInfoListByAdmin(calculateVO);
	}
	
	@Override
	public CalculateVO selectCalculateUserInfoByAdmin(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateUserInfoByAdmin(calculateVO);
	}
	
	@Override
	public CalculateVO selectCalculateSumInfoByAdmin(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateSumInfoByAdmin(calculateVO);
	}
	
	@Override
	public List<CalculateVO> selectCalculateInfoForFinancialList(CalculateVO calculateVO) {
		return calculateMapper.selectCalculateInfoForFinancialList(calculateVO);
	}
}
