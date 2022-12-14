package com.boras.CRM.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.LedgerMapper;
import com.boras.CRM.vo.ApprovalVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.LedgerVO;

@Service
public class LedgerService implements LedgerMapper {

	@Autowired
	private LedgerMapper ledgerMapper;

	@Override
	public int insertLedger(LedgerVO ledgerVO) {
		return ledgerMapper.insertLedger(ledgerVO);
	}

	@Override
	public int updateLedger(LedgerVO ledgerVO) {
		return ledgerMapper.updateLedger(ledgerVO);
	}

	@Override
	public LedgerVO selectLedgerDetail(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerDetail(ledgerVO);
	}

	@Override
	public List<LedgerVO> selectLedgerList(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerList(ledgerVO);
	}

	@Override
	public int selectLedgerListCount(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerListCount(ledgerVO);
	}

	@Override
	public List<LedgerVO> selectLedgerListForAg(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerListForAg(ledgerVO);
	}

	@Override
	public List<Map<String, Object>> selectLedgerYear() {
		return ledgerMapper.selectLedgerYear();
	}

	@Override
	public List<Map<String, Object>> selectSumCost(LedgerVO ledgerVO) {
		return ledgerMapper.selectSumCost(ledgerVO);
	}

	@Override
	public List<LedgerVO> selectLedgerListForAgDone(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerListForAgDone(ledgerVO);
	}

	@Override
	public List<Map<String, Object>> selectCountOfApprovalThisMonth(ApprovalVO approvalVO) {
		return ledgerMapper.selectCountOfApprovalThisMonth(approvalVO);
	}

	@Override
	public int isApprovalYCount(ApprovalVO approvalVO) {
		return ledgerMapper.isApprovalYCount(approvalVO);
	}

	@Override
	public int deleteApproval(ApprovalVO approvalVO) {
		return ledgerMapper.deleteApproval(approvalVO);
	}

	@Override
	public int isCalculateCount(ContractVO contractVO) {
		return ledgerMapper.isCalculateCount(contractVO);
	}

	@Override
	public int deleteContract(ContractVO contractVO) {
		return ledgerMapper.deleteContract(contractVO);
	}

	@Override
	public int deleteLedger(LedgerVO ledgerVO) {
		return ledgerMapper.deleteLedger(ledgerVO);
	}

	@Override
	public List<LedgerVO> selectLedgerDetailList(int[] ledgerSeq) {
		return ledgerMapper.selectLedgerDetailList(ledgerSeq);
	}

	@Override
	public Map<String, Object> selectLedgerEachCount(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerEachCount(ledgerVO);
	}

}
