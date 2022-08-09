package com.boras.CRM.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.ApprovalMapper;
import com.boras.CRM.vo.ApprovalVO;


@Service
public class ApprovalService implements ApprovalMapper {

	@Autowired
	ApprovalMapper approvalMapper;

	@Override
	public int requestApproval(ApprovalVO approvalVO) {
		return approvalMapper.requestApproval(approvalVO);
	}

	@Override
	public int insertApproval(ApprovalVO approvalVO) {
		return approvalMapper.insertApproval(approvalVO);
	}
	
	@Override
	public int confirmApproval(ApprovalVO approvalVO) {
		return approvalMapper.confirmApproval(approvalVO);
	}
	
	@Override
	public int deleteRequestApproval(ApprovalVO approvalVO) {
		return approvalMapper.deleteRequestApproval(approvalVO);
	}

}
