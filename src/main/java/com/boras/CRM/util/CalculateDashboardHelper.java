package com.boras.CRM.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.boras.CRM.services.CalculateFinanicalCompanyService;
import com.boras.CRM.vo.CalculateFinanicalCompanyVO;
import com.boras.CRM.vo.ContractVO;

public class CalculateDashboardHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(CalculateDashboardHelper.class);
	
	/**
	 * 금융사별 정산 등록 및 재등록
	 * @param req
	 * @param calculateFinanicalCompanyService
	 * @param year
	 * @param month
	 * @param calculateSeq
	 * @return
	 */
	public boolean calculateFinancialCompany(HttpServletRequest req, CalculateFinanicalCompanyService calculateFinanicalCompanyService, int year, int month, int calculateSeq) {
		boolean flag = false;
		
		ContractVO contractVO = new ContractVO();
		contractVO.setContractCreateYear(year);
		contractVO.setContractCreateMonth(month);
		
		// 금융사별 계출 합계 목록 조회 (금월)
		List<Map<String, Object>> contractList = new ArrayList<>();
		
		try {
			contractList = calculateFinanicalCompanyService.calculateFinancialCompany(contractVO);
		} catch (Exception e) {
			logger.error("[ERROR : calculateFinancialCompany ]");
			logger.error(e.getMessage());
		}
		
		for(Map<String, Object> map : contractList) {
			long totalFee = Long.parseLong(map.get("total_fee") == null ? "0" : map.get("total_fee").toString());
			long agPersonalFee = Long.parseLong(map.get("ag_personal_fee") == null ? "0" : map.get("ag_personal_fee").toString());
			long agCompanyFee = Long.parseLong(map.get("ag_company_fee") == null ? "0" : map.get("ag_company_fee").toString());
			long dpFee = Long.parseLong(map.get("dp_fee") == null ? "0" : map.get("dp_fee").toString());
			
			int financialCompanyCd = Integer.parseInt(map.get("ledger_financial_company_cd").toString());
			
			if(totalFee == agPersonalFee + agCompanyFee + dpFee) {
				CalculateFinanicalCompanyVO calculateFinanicalCompanyVO = new CalculateFinanicalCompanyVO();
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyCreateId(PermissionHelper.getSessionUserId(req));
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyCalculateSeq(calculateSeq);
				
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyBillSum(agCompanyFee);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyPersonalSum(agPersonalFee);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyProfitSum(dpFee);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyCd(financialCompanyCd);
				
				// 개인지급 공급가
				long pSupplySum = (long) (agPersonalFee / 1.1);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyPersonalSupplySum(pSupplySum);
				
				// 개인지급 부가세
				long pSurtaxSum = agPersonalFee - pSupplySum;
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyPersonalSurtaxSum(pSurtaxSum);
				
				// 개인지급 3.3% 공제
				long withdholdingTaxSum = (long) (pSupplySum * 0.033);
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyWithholdingTaxSum(withdholdingTaxSum);
				
				// 사업소득 (공급가 - 3.3% 공제액)
				long businessIncome = pSupplySum - withdholdingTaxSum;
				calculateFinanicalCompanyVO.setCalculateFinanicalCompanyBusinessIncomeSum(businessIncome);
				
				// 등록 여부 확인
				int isExist = -1;
				
				try {
					isExist = calculateFinanicalCompanyService.isExistCalculate(calculateFinanicalCompanyVO);
				} catch (Exception e) {
					logger.error("[ERROR : isExistCalculate ]");
					logger.error(e.getMessage());
				}
				
				switch (isExist) {
					case 0:
						try {
							calculateFinanicalCompanyService.insertCalculate(calculateFinanicalCompanyVO);
							flag = true;
						} catch (Exception e) {
							logger.error("[ERROR : insertCalculate ]");
							logger.error(e.getMessage());
						}
						break;
					case 1:
						try {
							calculateFinanicalCompanyService.updateCalculate(calculateFinanicalCompanyVO);
							flag = true;
						} catch (Exception e) {
							logger.error("[ERROR : updateCalculate ]");
							logger.error(e.getMessage());
						}
						break;
	
					default:
						flag = false;
						break;
				}
			}else {
				flag = false;
				break;
			}
		}
		
		return flag;
	}

}
