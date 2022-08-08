package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.ApprovalMapper;
import com.boras.CRM.mapper.ContractMapper;
import com.boras.CRM.vo.ApprovalVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FeeByFinancialVO;


@Service
public class ApprovalService implements ApprovalMapper {

	@Autowired
	ApprovalMapper approvalMapper;

	@Override
	public int requestApproval(ApprovalVO approvalVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int confirmApproval(ApprovalVO approvalVO) {
		// TODO Auto-generated method stub
		return 0;
	}

}
