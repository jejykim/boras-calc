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
	protected void excelDownForFinancialSupport(List<FinancialSupportVO> list, String title, OrgehService orgehService, HttpServletResponse response, HttpServletRequest request)  {
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
	    cell.setCellValue("연도");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("사업명");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("사업기간");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("주관기간");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("주관부서");
	    cntCell++;
	    cell = row.createCell(cntCell);
	    cell.setCellStyle(headStyle);
	    cell.setCellValue("사업금액(천원)");
	    cntCell++;
	    
	    cntCell = 0;
	    
	    // 바디 생성
	    int cntRow = 1;
	    
	    for(FinancialSupportVO vo : list) {
	    	row = sheet.createRow(cntRow);
	    	cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getSearchYear());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getTitle());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getStartDate() + " ~ " +vo.getEndDate());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getInstitutionName());
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(new DeptHepler().getKpiDeptName(orgehService, vo.getDepartment()));
		    cntCell++;
		    cell = row.createCell(cntCell);
		    cell.setCellStyle(bodyStyle);
		    cell.setCellValue(vo.getPrice());
		    cntCell++;
		    
		    cntRow++;
		    
		    cntCell = 0;
	    }
    	
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
