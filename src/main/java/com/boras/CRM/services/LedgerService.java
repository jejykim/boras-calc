package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.LedgerMapper;
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
	public LedgerVO selectLedgerDetail(LedgerVO ledgerVO) {
		return ledgerMapper.selectLedgerDetail(ledgerVO);
	}
	

}
