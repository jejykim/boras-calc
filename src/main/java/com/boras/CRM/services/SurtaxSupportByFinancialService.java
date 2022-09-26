package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.SurtaxSupportByFinancialMapper;
import com.boras.CRM.vo.SurtaxSupportByFinancialVO;


@Service
public class SurtaxSupportByFinancialService implements SurtaxSupportByFinancialMapper {

	@Autowired
	SurtaxSupportByFinancialMapper surtaxSupportByFinancialMapper;

	
	@Override
	public List<SurtaxSupportByFinancialVO> selectSurtaxSupportByFinancialList() {
		return surtaxSupportByFinancialMapper.selectSurtaxSupportByFinancialList();
	}
	
	@Override
	public SurtaxSupportByFinancialVO selectSurtaxSupportByFinancialInfo(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO) {
		return surtaxSupportByFinancialMapper.selectSurtaxSupportByFinancialInfo(surtaxSupportByFinancialVO);
	}
	
	@Override
	public int insertSurtaxSupportByFinancial(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO) {
		return surtaxSupportByFinancialMapper.insertSurtaxSupportByFinancial(surtaxSupportByFinancialVO);
	}
	
	@Override
	public int updateSurtaxSupportByFinancial(SurtaxSupportByFinancialVO surtaxSupportByFinancialVO) {
		return surtaxSupportByFinancialMapper.updateSurtaxSupportByFinancial(surtaxSupportByFinancialVO);
	}

}
