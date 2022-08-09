package com.boras.CRM.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.ContractMapper;
import com.boras.CRM.vo.ContractVO;


@Service
public class ContractService implements ContractMapper {

	@Autowired
	ContractMapper contractMapper;

	@Override
	public int insertContract(ContractVO contractVO) {
		// TODO Auto-generated method stub
		return 0;
	}

}
