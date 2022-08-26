package com.boras.CRM.util;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.boras.CRM.services.ContractService;
import com.boras.CRM.services.LedgerService;
import com.boras.CRM.services.SurtaxSupportByFinancialService;
import com.boras.CRM.vo.ApprovalVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.LedgerVO;
import com.boras.CRM.vo.SurtaxSupportByFinancialVO;

public class ContractHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(ContractHelper.class);
	
	public boolean insertContract(LedgerVO ledgerVO, LedgerService ledgerService ,SurtaxSupportByFinancialService surtaxSupportByFinancialService,
			ContractService contractService) {
		boolean result = false;
		
		ContractVO contractVO = new ContractVO();
		contractVO.setContractLedgerSeq(ledgerVO.getLedgerSeq());
		
		try {
			ledgerVO=ledgerService.selectLedgerDetail(ledgerVO);
			
			//일반 총 fee
			contractVO.setContractNomalTotalFeePercent(ledgerVO.getLedgerTotalFeePercent());
			contractVO.setContractNomalTotalFeeSum(0);
			
			//일반 ag fee
			contractVO.setContractNomalAgFeePercent(0);
			contractVO.setContractNomalAgFeeSum(0);
			
			//일반dp fee
			contractVO.setContractNomalDpFeePercent(0);
			contractVO.setContractNomalDpFeeSum(0);
			
			//추가
			contractVO.setContractAddTotalFeeSum(0);
			contractVO.setContractAddAgFeeSum(0);
			contractVO.setContractAddDpFeeSum(0);
			
			//슬 총
			contractVO.setContractTotalSlidingPercent(ledgerVO.getLedgerSlidingPercent());
			contractVO.setContractTotalSlidingSum(0);
			//슬 ag
			contractVO.setContractAgSlidingPercent(0);
			contractVO.setContractAgSlidingSum(0);
			
			//슬 dp
			contractVO.setContractDpSlidingPercent(0);
			contractVO.setContractDpSlidingSum(0);
			
			//등록년월
			contractVO.setContractCreateYear(0);
			contractVO.setContractCreateMonth(0);
			
			
			List<SurtaxSupportByFinancialVO> ssList = surtaxSupportByFinancialService.selectSurtaxSupportByFinancialList();
			
			for(SurtaxSupportByFinancialVO ssVO : ssList) {
				if(ledgerVO.getLedgerFinancialCompanyCd()==ssVO.getSurtaxSupportByFinancialCompanyCd()) {
					if(ledgerVO.getLedgerFinancialProductCd()==ssVO.getSurtaxSupportByFinancialProductCd()) {
						contractVO.setContractAddFeeSurtaxSupportYn(ssVO.getSurtaxSupportByFinancialAddFeeSurtaxSupportYn());
						contractVO.setContractAgFeeSurtaxSupportYn(ssVO.getSurtaxSupportByFinancialAgFeeSurtaxSupportYn());
						contractVO.setContractSlidingSurtaxSupportYn(ssVO.getSurtaxSupportByFinancialSlidingSurtaxSupportYn());
						
						contractService.insertContract(contractVO);
					}
				}
			}
			
			result = true;
			
		}catch (Exception e) {
			logger.error(e.getMessage());
		}
		return result;
	}
}
