package com.boras.CRM.services;

import java.util.List;

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
		return contractMapper.insertContract(contractVO);
	}
	
	@Override
	public List<ContractVO> selectContractList(ContractVO contractVO) {
		return contractMapper.selectContractList(contractVO);
	}

}
