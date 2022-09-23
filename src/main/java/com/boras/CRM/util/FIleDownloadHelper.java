package com.boras.CRM.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.util.HSSFColor.HSSFColorPredefined;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.view.AbstractView;

import com.boras.CRM.vo.CalculateVO;

public class FIleDownloadHelper extends AbstractView {

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
		File file = (File)model.get("downloadFile");
        if(file != null) {
            String fileName = null;
            String userAgent = request.getHeader("User-Agent");
            String fileNameSup = (String)model.get("fileName");
            
            if(userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1){
                fileName = URLEncoder.encode(fileNameSup, "utf-8").replaceAll("\\+", "%20");;
            }else if(userAgent.indexOf("Chrome") > -1) {
            	StringBuffer sb = new StringBuffer();
            	for(int i=0; i<fileNameSup.length(); i++) {
            		char c = fileNameSup.charAt(i);
            		if(c > '~') {
            			sb.append(URLEncoder.encode(""+c, "UTF-8"));
            		}else {
            			sb.append(c);
            		}
            	}
            	fileName = sb.toString();
            }else {
            	fileName = new String(fileNameSup.getBytes("utf-8"));
            }
            
            response.setContentType(getContentType());
            response.setContentLength((int)file.length());
            response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\";");
            response.setContentType("application/download; UTF-8");
            response.setHeader("Content-Transfer-Encoding", "binary");
            
            OutputStream out = response.getOutputStream();
            FileInputStream fis = null;
            try {
                fis = new FileInputStream(file);
                FileCopyUtils.copy(fis, out);
            } catch(Exception e){
                e.printStackTrace();
            }finally{
                if(fis != null){
                    try{
                        fis.close();
                    }catch(Exception e){
                    	e.printStackTrace();
                    }
                }
                
                if(out != null) {
                	out.flush();
                }
            }
        }
	}
	
	// excelDownForFinancialSupport(financialSupportList, "재정지원사업 선정현황_"+title, orgehService, resp, req);
	// 샘플 엑셀 다운로드
	protected void excelDownForAgCalculate(List<CalculateVO> list,CalculateVO calAgVO, String title, HttpServletResponse response, HttpServletRequest request)  {
		// 워크북 생성
		Workbook wb = new XSSFWorkbook();
	    Sheet sheet = wb.createSheet(title);
	    Row row = null;
	    Cell cell = null;
	    boolean first = false;
		
		// 테이블 헤더용 스타일
	    CellStyle headStyle = wb.createCellStyle();
	    
	    // 가는 경계선을 가집니다.
	    headStyle.setBorderTop(BorderStyle.THIN);
	    headStyle.setBorderBottom(BorderStyle.THIN);
	    headStyle.setBorderLeft(BorderStyle.THIN);
	    headStyle.setBorderRight(BorderStyle.THIN);

	    // 배경색은 노란색입니다.
	    headStyle.setFillForegroundColor(HSSFColorPredefined.GREY_25_PERCENT.getIndex());
	    headStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

	    // 데이터는 가운데 정렬합니다.
	    headStyle.setAlignment(HorizontalAlignment.CENTER);

	    // 데이터용 경계 스타일 테두리만 지정
	    CellStyle bodyStyle = wb.createCellStyle();
	    bodyStyle.setBorderTop(BorderStyle.THIN);
	    bodyStyle.setBorderBottom(BorderStyle.THIN);
	    bodyStyle.setBorderLeft(BorderStyle.THIN);
	    bodyStyle.setBorderRight(BorderStyle.THIN);
	    
	    // 헤더 생성
	    int cntCell = 0;
	    row = sheet.createRow(0);
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("기타사항");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("금융사");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("금융지점");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("금융상품");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("인도일");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("고객명");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("차량명");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("차량번호");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("차량가");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("취득원가");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("cm 수수료-%");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("cm 수수료-금액");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("ag 수수료-%");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("ag 수수료-금액");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("프로모션 수수료");
	    cntCell++;
	    cntCell = 0;
	    
	    // 바디 생성
	    int cntRow = 1;
	    
	    for(CalculateVO vo : list) {
	    	row = sheet.createRow(cntRow);
	    	cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerOther());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerFinancialCompanyCdName());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerFinancialBranchCdName());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerFinancialProductCdName());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerDeliveryDate());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerCustomerName());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerCarName());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getLedgerCarNumber());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    if(vo.getLedgerCarPrice()==null) {
		    	cell.setCellValue(0);
		    }else {
		    	cell.setCellValue(vo.getLedgerCarPrice().doubleValue());
		    }
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    if(vo.getLedgerAcquisitionCost()==null) {
		    	cell.setCellValue(0);
		    }else {
		    	cell.setCellValue(vo.getLedgerAcquisitionCost().doubleValue());
		    }
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getContractNomalAgFeePercent());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    if(vo.getContractNomalAgFeeSum()==null) {
		    	cell.setCellValue(0);
		    }else {
		    	cell.setCellValue(vo.getContractNomalAgFeeSum().doubleValue());
		    }
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getContractNomalAgFeePercent());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    if(vo.getContractNomalAgFeeSum()==null) {
		    	cell.setCellValue(0);
		    }else {
		    	cell.setCellValue(vo.getContractNomalAgFeeSum().doubleValue());
		    }
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    
		    if(vo.getContractAgSlidingSum()!=null && vo.getContractAddAgFeeSum()!=null ) {
		    	cell.setCellValue(vo.getContractAgSlidingSum().doubleValue()+vo.getContractAddAgFeeSum().doubleValue());
		    }else {
		    	if(vo.getContractAgSlidingSum()==null) {
		    		if(vo.getContractAddAgFeeSum()==null) {
		    			cell.setCellValue(0);
		    		}else {
		    			cell.setCellValue(vo.getContractAddAgFeeSum().doubleValue());
		    		}
		    	}else {
		    		 if(vo.getContractAddAgFeeSum()==null) {
			    		cell.setCellValue(0);
		    		 }else {
		    			 cell.setCellValue(vo.getContractAgSlidingSum().doubleValue());
		    		 }
		    	}
		    }
		    cntCell++;
		    cntRow++;
		    
		    cntCell = 0;
	    }
	    
	    
	    // 헤더 생성
	    int cntCell2 = 0;
	    row = sheet.createRow(list.size()+3);
	    cell = row.createCell(cntCell2);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("공급가액");
	    cntCell2++;
	    cell = row.createCell(cntCell2);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("부가세액");
	    cntCell2++;
	    cell = row.createCell(cntCell2);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("합계금액");
	    cntCell2++;
	    cell = row.createCell(cntCell2);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("개인AG");
	    cntCell2++;
	    
	    
	    // 바디 생성
	    int cntRow2 = list.size()+4;
	    int cntCell3 = 0;
	    
	    row = sheet.createRow(cntRow2);
	    cell = row.createCell(cntCell3);
	    cell.setCellValue(calAgVO.getCalculateSupplySum().doubleValue());
	    cntCell3++;
	    cell = row.createCell(cntCell3);
	    cell.setCellValue(calAgVO.getCalculateSurtaxSum().doubleValue());
	    cntCell3++;
	    cell = row.createCell(cntCell3);
	    cell.setCellValue(calAgVO.getCalculateTotalSum().doubleValue());
	    cntCell3++;
	    cell = row.createCell(cntCell3);
	    cell.setCellValue(calAgVO.getCalculatePersonalAgSum().doubleValue());
	    cntCell3++;
    	
		String userAgent = request.getHeader("User-Agent");
		String fileName = title + ".xlsx";
		try {
			// 컨텐츠 타입과 파일명 지정
			if(userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1){
	           
				fileName = URLEncoder.encode(fileName, "utf-8").replaceAll("\\+", "%20");
				
	        }else if(userAgent.indexOf("Chrome") > -1) {
	        	StringBuffer sb = new StringBuffer();
	        	for(int i=0; i<fileName.length(); i++) {
	        		char c = fileName.charAt(i);
	        		if(c > '~') {
	        			sb.append(URLEncoder.encode(""+c, "UTF-8"));
	        		}else {
	        			sb.append(c);
	        		}
	        	}
	        	fileName = sb.toString();
	        }else {
	        	fileName = new String(fileName.getBytes("utf-8"));
	        }
		} catch (UnsupportedEncodingException e) {
			logger.error("[ URL : "+request.getRequestURI()+", ERROR : 1excelDown - fileNameBuild ]");
			e.printStackTrace();
		};

	    response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\";");
	    
	    // 엑셀 출력
	    try {
			wb.write(response.getOutputStream());
		    wb.close();
		} catch (IOException e) {
			logger.error("[ URL : "+request.getRequestURI()+", ERROR : 2excelDown - excelFileSave ]");
			logger.error(e.getMessage());
		}
	}
}
