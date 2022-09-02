package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.FormulaMapper;
import com.boras.CRM.vo.FormulaVO;


@Service
public class FormulaService implements FormulaMapper {

	@Autowired
	FormulaMapper formulaMapper;
	
	@Override
	public List<FormulaVO> selectFormulaList() {
		return formulaMapper.selectFormulaList();
	}
	
	@Override
	public List<FormulaVO> selectFormulaListByFinancial(FormulaVO formulaVO) {
		return formulaMapper.selectFormulaListByFinancial(formulaVO);
	}
}
