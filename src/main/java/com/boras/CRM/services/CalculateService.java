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

}
