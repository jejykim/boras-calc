package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.ContractMapper;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FeeByFinancialVO;


@Service
public class ContractService implements ContractMapper {

	@Autowired
	ContractMapper contractMapper;

	
	@Override
	public List<FeeByFinancialVO> selectFeeByFinancialList(FeeByFinancialVO feeByFinancialVO) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public int insertFeeByFinancial(ContractVO contractVO) {
		// TODO Auto-generated method stub
		return 0;
	}

}
