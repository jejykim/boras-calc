package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.LedgerExcelMapper;
import com.boras.CRM.vo.LedgerExcelVO;

@Service
public class LedgerExcelService implements LedgerExcelMapper {

	@Autowired
	private LedgerExcelMapper ledgerExcelMapper;
	
	@Override
	public int insertLedgerExcelSetting(LedgerExcelVO ledgerExcelVO) {
		return ledgerExcelMapper.insertLedgerExcelSetting(ledgerExcelVO);
	}

	@Override
	public LedgerExcelVO selectLedgerExcelDetail(LedgerExcelVO ledgerExcelVO) {
		return ledgerExcelMapper.selectLedgerExcelDetail(ledgerExcelVO);
	}

	@Override
	public List<LedgerExcelVO> selectLedgerExcelList() {
		return ledgerExcelMapper.selectLedgerExcelList();
	}

	@Override
	public int updateLedgerExcelSetting(LedgerExcelVO ledgerExcelVO) {
		return ledgerExcelMapper.updateLedgerExcelSetting(ledgerExcelVO);
	}

	@Override
	public LedgerExcelVO selectLedgerExcelDetailForValidation(LedgerExcelVO ledgerExcelVO) {
		return ledgerExcelMapper.selectLedgerExcelDetailForValidation(ledgerExcelVO);
	}

}
