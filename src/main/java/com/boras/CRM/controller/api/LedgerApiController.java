package com.boras.CRM.controller.api;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.boras.CRM.services.LedgerExcelService;
import com.boras.CRM.services.LedgerService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.util.ExcelValidationHelper;
import com.boras.CRM.util.FileHelper;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.LedgerExcelVO;
import com.boras.CRM.vo.LedgerVO;

@RestController
@RequestMapping("/v1/api")
public class LedgerApiController {

	private static final Logger logger = LoggerFactory.getLogger(LedgerApiController.class);
	
	@Autowired
	private LedgerExcelService ledgerExcelService;
	
	@Autowired
	private LedgerService ledgerService;
	
	ExcelValidationHelper excelValidationHelper = new ExcelValidationHelper();
	
	@Value("${common.excel.financial.company}")
	int commonExcelFinancialCompany;
	
	@Value("${common.excel.financial.branch}")
	int commonExcelFinancialBranch;
	
	@Value("${common.excel.financial.product}")
	int commonExcelFinancialProduct;
	
	/**
	 * 원장 상세 조회
	 */
	@GetMapping(value = "/ledger/detail/{ledgerSeq}")
	public Map<String, Object> ledgerDetail(HttpServletRequest req, HttpServletResponse resp, @PathVariable String ledgerSeq) {
	    Map<String, Object> rvt = new HashMap<>();
	    	
	    LedgerVO ledgerVO = new LedgerVO();
	    ledgerVO.setLedgerSeq(Integer.parseInt(ledgerSeq));
	    
	    try {
	    	ledgerVO = ledgerService.selectLedgerDetail(ledgerVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
			rvt.put("ledgerVO", ledgerVO);
		} catch (Exception e) {
			logger.error(e.getMessage());
			
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
		}
		
		return rvt;
	}
	
	/**
	 * 원장 수정
	 */
	@PostMapping(value = "/ledger/update")
	public Map<String, Object> ledgerUpdate(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    	
	    ledgerVO.setLedgerUpdateUserId(PermissionHelper.getSessionUserId(req));
	    
	    try {
	    	ledgerService.updateLedger(ledgerVO);
			
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		} catch (Exception e) {
			logger.error(e.getMessage());
			
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
		}
		
		return rvt;
	}
	
	/**
	 * 원장 수기 등록
	 */
	@PostMapping(value = "/ledger/insert")
	public Map<String, Object> ledgerInsert(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    	
		ledgerVO.setLedgerCreateUserId(PermissionHelper.getSessionUserId(req));
		
		boolean insertFlag = insertLedgerDB(ledgerVO);
		
		if(insertFlag) {
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		}else {
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
		}
		
		return rvt;
	}
	
	/**
	 * 원장 엑셀 등록
	 */
	@PostMapping(value = "/ledger/excel/insert")
	public Map<String, Object> ledgerExcelInsert(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    // excel 양식 유무 확인
	    if(ledgerVO.getLedgerExcelFile() != null) {
	    	
	    	LedgerExcelVO ledgerExcelVO = new LedgerExcelVO();
	    	ledgerExcelVO.setLedgerFinancialCompanyCd(ledgerVO.getLedgerFinancialCompanyCd());
	    	ledgerExcelVO.setLedgerFinancialBranchCd(ledgerVO.getLedgerFinancialBranchCd());
	    	ledgerExcelVO.setLedgerFinancialProductCd(ledgerVO.getLedgerFinancialProductCd());
	    	
	    	ledgerExcelVO = ledgerExcelService.selectLedgerExcelDetailForValidation(ledgerExcelVO);
	    	
	    	// 통합 엑셀 여부
	    	boolean isCommonExcel = ledgerExcelVO.getLedgerExcelCommonYn().equals("Y") ? true : false;
	    	
	    	if(isCommonExcel) {
	    		ledgerExcelVO = new LedgerExcelVO();
		    	ledgerExcelVO.setLedgerFinancialCompanyCd(commonExcelFinancialCompany);
		    	ledgerExcelVO.setLedgerFinancialBranchCd(commonExcelFinancialBranch);
		    	ledgerExcelVO.setLedgerFinancialProductCd(commonExcelFinancialProduct);
		    	
		    	ledgerExcelVO = ledgerExcelService.selectLedgerExcelDetailForValidation(ledgerExcelVO);
	    	}
	    	
	    	Map<String, Object> validationMap = excelValidationHelper.isSameExcelSample(ledgerExcelVO.getLedgerExcelFilePath(), ledgerExcelVO.getLedgerExcelHeaderRow(), ledgerExcelVO.getLedgerExcelSheet(), ledgerVO.getLedgerExcelFile());
	    	
	    	if(validationMap.get("success").equals("Y")) {
	    		ledgerVO.setLedgerCreateUserId(PermissionHelper.getSessionUserId(req));
	    		
	    		boolean insertFlag = insertLedgerFormExcel(ledgerVO, ledgerExcelVO);
	    		
	    		if(insertFlag) {
	    			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    		}else {
	    			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
	    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
	    		}
	    	}else {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00005));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00005) + validationMap.get("msg").toString());
	    	}
	    }else {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00006));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00006) + "원장 excel file");
	    }
		
		return rvt;
	}
	
	/**
	 * 엑셀 원장 등록
	 * @param ledgerVO
	 * @return
	 */
	public boolean insertLedgerFormExcel(LedgerVO ledgerVO, LedgerExcelVO ledgerExcelVO) {
		boolean flag = false;
		
		try {
			FileInputStream oldFileIs = new FileInputStream(ledgerExcelVO.getLedgerExcelFilePath());
			
			int iExcelHeaderRow = Integer.parseInt(ledgerExcelVO.getLedgerExcelHeaderRow());
			
			XSSFWorkbook workBook = new XSSFWorkbook(oldFileIs);
			
			int totalSheetCount = workBook.getNumberOfSheets();
			
			int iExcelSheet = -1;
			
			for(int i = 0; i < totalSheetCount; i++) {
				if(ledgerExcelVO.getLedgerExcelSheet().equals(workBook.getSheetName(i))) {
					iExcelSheet = i;
					break;
				}
			}
			
			XSSFSheet sheet = workBook.getSheetAt(iExcelSheet);
			
			// 전체 row 수
			int rows = sheet.getPhysicalNumberOfRows();
			
			// 헤더 row + 1 (읽을 row)
			int rowIndex = 0;
			
			for(rowIndex = iExcelHeaderRow + 1; rowIndex < rows; rowIndex++){ 
				//행을읽는다
				XSSFRow row = sheet.getRow(rowIndex); 
				if(row != null){
					
					// 설정 VO 위치값 확인
					if(ledgerExcelVO.getLedgerCustomerName() != null) {
						if(ledgerExcelVO.getLedgerCustomerName().contains(",")) {
							String[] strRef = ledgerExcelVO.getLedgerCustomerName().split(",");
							String value = "";
							
							for(String str : strRef) {
								// 고객명
								CellReference ref = new CellReference(str);
								value = value + row.getCell(ref.getCol()).getStringCellValue();
							}
								
							ledgerVO.setLedgerCustomerName(value);
						}
						
						
						// 인도일
						if(ledgerExcelVO.getLedgerDeliveryDate() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerDeliveryDate());
							
							ledgerVO.setLedgerDeliveryDate(row.getCell(ref.getCol()).getStringCellValue());
						}
						
						// 차량명
						if(ledgerExcelVO.getLedgerCarName() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerCarName());
							
							ledgerVO.setLedgerCarName(row.getCell(ref.getCol()).getStringCellValue());
						}
						
						// 차량번호
						if(ledgerExcelVO.getLedgerCarNumber() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerCarNumber());
							
							ledgerVO.setLedgerCarNumber(row.getCell(ref.getCol()).getStringCellValue());
						}
						
						// 차량가
						if(ledgerExcelVO.getLedgerCarPrice() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerCarPrice());
							
							ledgerVO.setLedgerCarPrice(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 취득원가
						if(ledgerExcelVO.getLedgerAcquisitionCost() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerAcquisitionCost());
							
							ledgerVO.setLedgerAcquisitionCost(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 총fee-%
						if(ledgerExcelVO.getLedgerTotalFeePercent() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerTotalFeePercent());
							
							ledgerVO.setLedgerTotalFeePercent(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 총fee-합계
						if(ledgerExcelVO.getLedgerTotalFeeSum() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSum());
							
							ledgerVO.setLedgerTotalFeeSum(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 총fee-공급가
						if(ledgerExcelVO.getLedgerTotalFeeSupplyPrice() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSupplyPrice());
							
							ledgerVO.setLedgerTotalFeeSupplyPrice(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 총fee-부가세
						if(ledgerExcelVO.getLedgerTotalFeeSurtax() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSurtax());
							
							ledgerVO.setLedgerTotalFeeSurtax(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 슬라이딩-%
						if(ledgerExcelVO.getLedgerSlidingPercent() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerSlidingPercent());
							
							ledgerVO.setLedgerSlidingPercent(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 슬라이딩-합계
						if(ledgerExcelVO.getLedgerSlidingSum() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerSlidingSum());
							
							ledgerVO.setLedgerSlidingSum(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 슬라이딩-공급각
						if(ledgerExcelVO.getLedgerSlidingSupplyPrice() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerSlidingSupplyPrice());
							
							ledgerVO.setLedgerSlidingSupplyPrice(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 슬라이딩-부가세
						if(ledgerExcelVO.getLedgerSlidingSurtax() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerSlidingSurtax());
							
							ledgerVO.setLedgerSlidingSurtax(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 추가프로모션
						if(ledgerExcelVO.getLedgerAddPromotion() != null) {
							CellReference ref = new CellReference(ledgerExcelVO.getLedgerAddPromotion());
							
							ledgerVO.setLedgerAddPromotion(row.getCell(ref.getCol()).getNumericCellValue());
						}
						
						// 원장 등록
						insertLedgerDB(ledgerVO);
					}
				} 
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
			flag = false;
		}
		
		return flag;
	}
	
	/**
	 * 원장 DB 등록
	 * @param ledgerVO
	 * @return
	 */
	public boolean insertLedgerDB(LedgerVO ledgerVO) {
		boolean flag = false;
		
		try {
			ledgerService.insertLedger(ledgerVO);
			
			flag = true;
		} catch (Exception e) {
			logger.error(e.getMessage());
			flag = false;
		}
		
		return flag;
	}
}
