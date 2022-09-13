package com.boras.CRM.util;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

public class ExcelValidationHelper {
	
	private static final Logger logger = LoggerFactory.getLogger(ExcelValidationHelper.class);
	
	private static final String SUCCESS = "success";
	private static final String MSG = "msg";

	private static final String COMMON_EXCEL_FILE_PATH = "D:/file/ledger_excel_setting/";
	
	// 엑셀 기존 양식 변경 여부 확인
	public Map<String, Object> isSameExcelSample(String oldFilePath, String excelHeaderRow, String excelSheetName, MultipartFile newExcelFile, boolean isCommonExcel) {
		Map<String, Object> rvt = new HashMap<>();
		
		int oldExcelCellCount = 0;
		int newExcelCellCount = 0;
		
		if(excelHeaderRow == null) {
			excelHeaderRow = "0";
		}
		
		List<String> oldExcelHeaderValueList = new ArrayList<>();
		
		if(isCommonExcel) {
			oldExcelHeaderValueList.add("고객명");
			oldExcelHeaderValueList.add("인도일");
			oldExcelHeaderValueList.add("차량명");
			oldExcelHeaderValueList.add("차량번호");
			oldExcelHeaderValueList.add("차량가");
			oldExcelHeaderValueList.add("취득원가");
			oldExcelHeaderValueList.add("일반 fee 금액");
			oldExcelHeaderValueList.add("일반 fee %");
			oldExcelHeaderValueList.add("일반 fee 공급가");
			oldExcelHeaderValueList.add("일반 fee 부가세");
			oldExcelHeaderValueList.add("슬라이딩 fee 금액");
			oldExcelHeaderValueList.add("슬라이딩 fee %");
			oldExcelHeaderValueList.add("슬라이딩 fee 공급가");
			oldExcelHeaderValueList.add("슬라이딩 fee 부가세");
		}else {
			try {
				FileInputStream oldFileIs = new FileInputStream(oldFilePath);
				
				excelHeaderRow = excelHeaderRow.replaceAll("[^0-9]", "");
				
				int iExcelHeaderRow = Integer.parseInt(excelHeaderRow);
				iExcelHeaderRow = iExcelHeaderRow - 1;
				
				XSSFWorkbook workBook = new XSSFWorkbook(oldFileIs);
				
				int totalSheetCount = workBook.getNumberOfSheets();
				
				int iExcelSheet = -1;
				
				for(int i = 0; i < totalSheetCount; i++) {
					if(excelSheetName.equals(workBook.getSheetName(i))) {
						iExcelSheet = i;
						break;
					}
				}
				
				if(iExcelSheet == -1) {
					rvt.put(SUCCESS, "N");
					rvt.put(MSG, "(OLD) 일치하는 시트명이 없습니다.");
				}else {
					XSSFSheet sheet = workBook.getSheetAt(iExcelSheet);
					
					XSSFRow row = sheet.getRow(iExcelHeaderRow);
					
					oldExcelCellCount = row.getPhysicalNumberOfCells();
					
					for(int columnIndex = 0; columnIndex < oldExcelCellCount; columnIndex++){ 
						//셀값을 읽는다 
						XSSFCell cell = row.getCell(columnIndex); 
						String value = "";
						//셀이 빈값일경우를 위한 널체크 
						if(cell != null){ 
							value = cell.getStringCellValue() + "";
						}
						
						oldExcelHeaderValueList.add(value);
					}
					
				}
			} catch (Exception e) {
				logger.error(e.getMessage());
				rvt.put(SUCCESS, "N");
				rvt.put(MSG, "시스템 에러");
			}
		}
		
		if(oldExcelHeaderValueList.size() > 0) {
			File fNewExcelFile = null;
			try {
				if(isCommonExcel) {
					fNewExcelFile = new File(COMMON_EXCEL_FILE_PATH + newExcelFile.getOriginalFilename());
				}else {
					fNewExcelFile = new File(oldFilePath.substring(0, oldFilePath.lastIndexOf("/")) + newExcelFile.getOriginalFilename());
				}
				if(fNewExcelFile.exists()) {
					if(fNewExcelFile.delete()) {
						newExcelFile.transferTo(fNewExcelFile);
					}
				}else {
					newExcelFile.transferTo(fNewExcelFile);
				}
			} catch (Exception e) {
				logger.error("[ ERROR : Transfer To File Fail ]");
				logger.error(e.getMessage());
			}
			
			boolean compareFlag = true;
			
			try {
				excelHeaderRow = excelHeaderRow.replaceAll("[^0-9]", "");
			
				int iExcelHeaderRow = Integer.parseInt(excelHeaderRow);
				iExcelHeaderRow = iExcelHeaderRow - 1;
				
				XSSFWorkbook workBook = new XSSFWorkbook(fNewExcelFile);
				
				int totalSheetCount = workBook.getNumberOfSheets();
				
				int iExcelSheet = -1;
				
				for(int i = 0; i < totalSheetCount; i++) {
					if(excelSheetName.equals(workBook.getSheetName(i))) {
						iExcelSheet = i;
						break;
					}
				}
				
				if(iExcelSheet == -1) {
					rvt.put(SUCCESS, "N");
					rvt.put(MSG, "(NEW) 일치하는 시트명이 없습니다.");
				}else {
					XSSFSheet sheet = (XSSFSheet) workBook.getSheetAt(iExcelSheet);
					
					XSSFRow row = sheet.getRow(iExcelHeaderRow);
					
					newExcelCellCount = row.getPhysicalNumberOfCells();
					
					for(int columnIndex = 0; columnIndex < newExcelCellCount; columnIndex++){ 
						//셀값을 읽는다 
						XSSFCell cell = row.getCell(columnIndex); 
						String value = "";
						//셀이 빈값일경우를 위한 널체크 
						if(cell != null){
							value = cell.getStringCellValue() + "";
						}
						
						if(!oldExcelHeaderValueList.get(columnIndex).toString().equals(value)) {
							compareFlag = false;
							break;
						}
					}
					
					if(compareFlag) {
						rvt.put(SUCCESS, "Y");
						rvt.put(MSG, "엑셀 파일 일치");
					}else {
						rvt.put(SUCCESS, "N");
						rvt.put(MSG, "엑셀 파일 불일치");
					}
				}
			} catch (Exception e) {
				logger.error(e.getMessage());
				rvt.put(SUCCESS, "N");
				rvt.put(MSG, "시스템 에러");
			}
			
		}else {
			rvt.put(SUCCESS, "N");
			rvt.put(MSG, "이전 양식 데이터 호출 실패");
		}
		
		return rvt;
	}
	
}
