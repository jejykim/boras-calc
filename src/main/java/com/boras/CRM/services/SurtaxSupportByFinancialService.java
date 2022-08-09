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
	public List<SurtaxSupportByFinancialVO> selectFeeByFinancialList() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
