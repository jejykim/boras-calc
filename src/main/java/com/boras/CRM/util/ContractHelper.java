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
			
			//값이 없으면 -1이아닌 조회한값으로 세팅해야됨
			
			//일반 총 fee
			contractVO.setContractNomalTotalFeePercent(ledgerVO.getLedgerTotalFeePercent());
			contractVO.setContractNomalTotalFeeSum(ledgerVO.getLedgerTotalFeeSum());
			//일반 ag fee
			contractVO.setContractNomalAgFeePercent(ledgerVO.getLedgerTotalFeePercent());
			contractVO.setContractNomalAgFeeSum(ledgerVO.getLedgerTotalFeeSum());
			//일반dp fee
			contractVO.setContractNomalDpFeePercent(0);
			contractVO.setContractNomalDpFeeSum(0);
			
			//슬 총
			contractVO.setContractTotalSlidingPercent(ledgerVO.getLedgerSlidingPercent());
			contractVO.setContractTotalSlidingSum(ledgerVO.getLedgerSlidingSum());
			//슬 ag
			contractVO.setContractAgSlidingPercent(ledgerVO.getLedgerSlidingPercent());
			contractVO.setContractAgSlidingSum(ledgerVO.getLedgerSlidingSum());
			//슬 dp
			contractVO.setContractDpSlidingPercent(0);
			contractVO.setContractDpSlidingSum(0);
			
			//추가
			contractVO.setContractAddTotalFeeSum(ledgerVO.getLedgerTotalFeeSum());
			contractVO.setContractAddAgFeeSum(ledgerVO.getLedgerSlidingSum());
			contractVO.setContractAddDpFeeSum(ledgerVO.getLedgerTotalFeeSum()-ledgerVO.getLedgerSlidingSum());
			
			
			//등록년월
			contractVO.setContractCreateMonth(ledgerVO.getLedgerCreateMonth());
			contractVO.setContractCreateYear(ledgerVO.getLedgerCreateYear());
			
			List<SurtaxSupportByFinancialVO> ssList = surtaxSupportByFinancialService.selectSurtaxSupportByFinancialList();
			
			for(SurtaxSupportByFinancialVO ssVO : ssList) {
				if(ledgerVO.getLedgerFinancialCompanyCd()==ssVO.getSurtaxSupportByFinancialCompanyCd()) {
					if(ledgerVO.getLedgerFinancialProductCd()==ssVO.getSurtaxSupportByFinancialProductCd()) {
						contractVO.setContractAddFeeSurtaxSupportYn(ssVO.getSurtaxSupportByFinancialAddFeeSurtaxSupportYn());
						contractVO.setContractAgFeeSurtaxSupportYn(ssVO.getSurtaxSupportByFinancialAgFeeSurtaxSupportYn());
						contractVO.setContractSlidingSurtaxSupportYn(ssVO.getSurtaxSupportByFinancialSlidingSurtaxSupportYn());
						
						contractService.insertContract(contractVO);
					}else {
						contractVO.setContractAddFeeSurtaxSupportYn(null);
						contractVO.setContractAgFeeSurtaxSupportYn(null);
						contractVO.setContractSlidingSurtaxSupportYn(null);
						
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
	
	/**
	 * 수정 필요
	 * @param ledgerVO
	 * @param ledgerService
	 * @param surtaxSupportByFinancialService
	 * @param contractService
	 * @return
	 */
	public boolean updateContract(LedgerVO ledgerVO, LedgerService ledgerService ,SurtaxSupportByFinancialService surtaxSupportByFinancialService,
			ContractService contractService) {
		boolean result = false;
		
		ContractVO contractVO = new ContractVO();
		contractVO.setContractLedgerSeq(ledgerVO.getLedgerSeq());
		
		try {
			ledgerVO=ledgerService.selectLedgerDetail(ledgerVO);
			
			//값이 없으면 -1이아닌 조회한값으로 세팅해야됨
			
			//일반 총 fee
			contractVO.setContractNomalTotalFeePercent(ledgerVO.getLedgerTotalFeePercent());
			contractVO.setContractNomalTotalFeeSum(ledgerVO.getLedgerTotalFeeSum());
			//일반 ag fee
			contractVO.setContractNomalAgFeePercent(ledgerVO.getLedgerTotalFeePercent());
			contractVO.setContractNomalAgFeeSum(ledgerVO.getLedgerTotalFeeSum());
			//일반dp fee
			contractVO.setContractNomalDpFeePercent(0);
			contractVO.setContractNomalDpFeeSum(0);
			
			//슬 총
			contractVO.setContractTotalSlidingPercent(ledgerVO.getLedgerSlidingPercent());
			contractVO.setContractTotalSlidingSum(ledgerVO.getLedgerSlidingSum());
			//슬 ag
			contractVO.setContractAgSlidingPercent(ledgerVO.getLedgerSlidingPercent());
			contractVO.setContractAgSlidingSum(ledgerVO.getLedgerSlidingSum());
			//슬 dp
			contractVO.setContractDpSlidingPercent(0);
			contractVO.setContractDpSlidingSum(0);
			
			//추가
			contractVO.setContractAddTotalFeeSum(ledgerVO.getLedgerTotalFeeSum());
			contractVO.setContractAddAgFeeSum(ledgerVO.getLedgerSlidingSum());
			contractVO.setContractAddDpFeeSum(ledgerVO.getLedgerTotalFeeSum()-ledgerVO.getLedgerSlidingSum());
			
			
			//등록년월
			contractVO.setContractCreateMonth(ledgerVO.getLedgerCreateMonth());
			contractVO.setContractCreateYear(ledgerVO.getLedgerCreateYear());
			
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
