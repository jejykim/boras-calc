package com.boras.CRM.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
	
	/**
	 * 원장 엑셀 등록
	 */
	@PostMapping(value = "/ledger/excel/insert")
	public Map<String, Object> ledgerInsert(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    // excel 양식 유무 확인
	    if(ledgerVO.getLedgerExcelFile() != null) {
	    	
	    	LedgerExcelVO ledgerExcelVO = new LedgerExcelVO();
	    	ledgerExcelVO.setLedgerFinancialCompanyCd(ledgerVO.getLedgerFinancialCompanyCd());
	    	ledgerExcelVO.setLedgerFinancialBranchCd(ledgerVO.getLedgerFinancialBranchCd());
	    	ledgerExcelVO.setLedgerFinancialProductCd(ledgerVO.getLedgerFinancialProductCd());
	    	
	    	ledgerExcelVO = ledgerExcelService.selectLedgerExcelDetailForValidation(ledgerExcelVO);
	    	
	    	Map<String, Object> validationMap = excelValidationHelper.isSameExcelSample(ledgerExcelVO.getLedgerExcelFilePath(), ledgerExcelVO.getLedgerExcelHeaderRow(), ledgerExcelVO.getLedgerExcelSheet(), ledgerVO.getLedgerExcelFile());
	    	
	    	if(validationMap.get("success").equals("Y")) {
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
			int rows = sheet.getPhysicalNumberOfRows();
			
			/*
			for(rowIndex=0;rowIndex<rows;rowIndex++){ 
				//행을읽는다
				XSSFRow row=sheet.getRow(rowIndex); 
				if(row !=null){ 
					//셀의 수 
					int cells=row.getPhysicalNumberOfCells(); 
					for(columnIndex=0; columnIndex<=cells; columnIndex++){ 
						//셀값을 읽는다 
						XSSFCell cell=row.getCell(columnIndex); 
						String value="";
						//셀이 빈값일경우를 위한 널체크 
						if(cell==null){ 
							continue; 
						}else{
							switch (cell.getCellType()){
								case XSSFCell.CELL_TYPE_FORMULA:
									value = cell.getCellFormula();
									break;
								case XSSFCell.CELL_TYPE_NUMERIC:
									value = cell.getNumericCellValue() + "";
									break;
								case XSSFCell.CELL_TYPE_STRING:
									value = cell.getStringCellValue() + "";
									break;
								case XSSFCell.CELL_TYPE_BLANK:
									value = cell.getBooleanCellValue() + "";
									break;
								case XSSFCell.CELL_TYPE_ERROR:
									value = cell.getErrorCellValue() + "";
									break;
								default:
									value = new String();
									break;
							}
						}
						
						switch (columnIndex) {
							case 0 : //result
								//dgDTO.setResult(value);
								jsonObj.put(RESULT,value);
								break;
							case 1 : //route_no
								//dgDTO.setRouteNo(value);
								jsonObj.put(ROUTE_NO,  value);
								break;
							case 2 : //route_name
								//dgDTO.setRouteName(value);
								jsonObj.put(ROUTE_NAME, value);
								break;
							case 3 : //updown_type
								jsonObj.put(UPDOWN_TYPE,  value);
								//dgDTO.setUpdownType(value);
								break;
							case 4 : //vms_id
								jsonObj.put(VMS_ID,  value);
								//dgDTO.setVmsId(value);
								break;
							case 5 : //center_code
								jsonObj.put(CENTER_CODE, value);
								//dgDTO.setCenterCode(value);
								break;
							case 6 : //center_name
								jsonObj.put(CENTER_NAME, value);
								//dgDTO.setCenterName(value);
								break;
							case 7 : //vms_message
								jsonObj.put(VMS_MESSAGE,  value);
								//dgDTO.setVmsMessage(value);
								break;
							case 8 : //vms_message2
								jsonObj.put(VMS_MESSAGE2,  value);
								//dgDTO.setVmsMessage2(value);
								break;
							default :
								break;
						}
					} 
				} 
			}
			*/
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
