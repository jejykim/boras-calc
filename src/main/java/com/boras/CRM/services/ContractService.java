package com.boras.CRM.services;

import java.util.List;
import java.util.Map;

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
	public List<Map<String, Object>> selectContractYear() {
		return contractMapper.selectContractYear();
	}
	
	@Override
	public List<ContractVO> selectContractList(ContractVO contractVO) {
		return contractMapper.selectContractList(contractVO);
	}
	
	@Override
	public int selectContractListCount(ContractVO contractVO) {
		return contractMapper.selectContractListCount(contractVO);
	}
	
	@Override
	public int updateContract(ContractVO contractVO) {
		return contractMapper.updateContract(contractVO);
	}
	
	@Override
	public ContractVO selectContractInfo(ContractVO contractVO) {
		return contractMapper.selectContractInfo(contractVO);
	}
	
	@Override
	public int updateContractByApproval(ContractVO contractVO) {
		return contractMapper.updateContractByApproval(contractVO);
	}
	
	@Override
	public ContractVO selectContractSeqByLedgerSeq(ContractVO contractVO) {
		return contractMapper.selectContractSeqByLedgerSeq(contractVO);
	}
	
	@Override
	public int calculateProceed(ContractVO contractVO) {
		return contractMapper.calculateProceed(contractVO);
	}
	
	@Override
	public int updateContractByCalculate(ContractVO contractVO) {
		return contractMapper.updateContractByCalculate(contractVO);
	}

}
