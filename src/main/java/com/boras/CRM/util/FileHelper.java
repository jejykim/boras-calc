package com.boras.CRM.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.view.AbstractView;

public class FileHelper extends AbstractView {
	
	private static final Logger logger = LoggerFactory.getLogger(FileHelper.class);

	// 서버 파일 저장 경로
	//private static final String SERVER_PATH = "";	// 개발(local)
	//private static final String SERVER_PATH = "/upload/"; // 운영
	private static FileWriter writer = null;
	private static File dir = null;
	String fileName = null;
	String filePath = null;
	
	// 확장자 별 경로
	private static String pathForExtensionType = "files/";
	
	// 파일 저장
	public Map<String, Object> saveFile(String fileName, byte[] fileData, HttpServletRequest req, String fileType, String extensionType, String serverPath) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		// 파일 확장자 종류
		switch (extensionType) {
		case "I":
			pathForExtensionType = "images/";
			break;
		case "F":
			pathForExtensionType = "files/";
			break;
		default:
			pathForExtensionType = "files/";
			break;
		}
		
		logger.info("Try to save File : " + fileName);
		
		// 파일명 암호화
		String encodingFileName = encodingImageName(fileName);
		
		// 경로 반환
		String filePath = switchPath(req, fileType, serverPath) + encodingFileName;
		
		try (FileOutputStream lFileOutputStream = new FileOutputStream(new File(filePath))){
	        lFileOutputStream.write(fileData);
	        map.put("success", "Y");
	        map.put("RealFilePath", filePath);
	        map.put("filePath", filePathForDB(fileType, encodingFileName, serverPath));
	    }catch(Exception e) {
	        logger.error(e.getMessage());
	        map.put("success", "N");
	    }
		
		return map;
	}
	
	// 파일 존재 여부 확인
	public boolean checkFileByFileName(String fileName, HttpServletRequest req, String fileType, String serverPath) {
		String filePath = switchPath(req, fileType, serverPath) + fileName;
		
		File file = new File(filePath);
		return file.exists();
	}
	
	// 파일 존재 여부 확인
	public boolean checkFileByFilePath(String filePath) {
		File file = new File(filePath);
		return file.exists();
	}
	
	// 파일 종류에 따른 경로 반환
	public String switchPath(HttpServletRequest req, String fileType, String serverPath) {
		String rootPath = "";
		
		if(serverPath.isEmpty()) {
			rootPath = req.getSession().getServletContext().getRealPath("/") + "resources/Assets/front/" + pathForExtensionType;
		}else {
			rootPath = serverPath;
		}
		String downPath = rootPath+ getFileLocation(fileType);
		filePathDirectory(downPath);
		return downPath;
	}
	
	// 파일 디렉토리 경로 생성
	public void filePathDirectory(String path) {
		File Folder = new File(path);

		// 해당 디렉토리가 없을경우 디렉토리를 생성합니다.
		if (!Folder.exists()) {
			try{
			    Folder.mkdir(); //폴더 생성합니다.
			    logger.info("폴더가 생성되었습니다.");
		    }catch(Exception e) {
	        	e.getStackTrace();
	        }        
         }else {
			logger.info("이미 폴더가 생성되어 있습니다.");
		}
	}
	
	// 파일명 인코딩
	public String encodingImageName(String fileName) {
		String encodingFileName = "";
		
		String fileType = fileName.substring(fileName.lastIndexOf("."), fileName.length());
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
		encodingFileName = format.format(date) + "_BORAS_" + UUID.randomUUID() + fileType;
		
		return encodingFileName;
	}
	
	// 파일 상대 경로
	public String filePathForDB(String fileType, String fileName, String serverPath) {
		String prefixPath = "";
		
		if(serverPath.isEmpty()) {
			prefixPath = "/" + pathForExtensionType;
		}else {
			prefixPath = "/upload/";
		}
		
		return prefixPath + getFileLocation(fileType) + fileName;
	}
	
	// 파일 디렉토리 경로
	private String getFileLocation(String fileType) {
		String filePath = "";
		
		switch (fileType) {
		case "ledger_excel_setting":
			filePath = "ledger_excel_setting/";
			break;
		default:
			filePath = "";
			break;
		}
		
		return filePath;
	}
	
	// 파일 추출
	public File getFile(String filePath, String fileName) {
		File file = null;
		File file2 = null;
		
		file2 = new File(fileName);
		
		if(file2.exists()) {
			file2.delete();
		}
		
		file = new File(filePath);
		file.renameTo(file2);
		
		return file;
	}

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		File file = (File) model.get("file");
        if(file != null) {
            String fileName = null;
            String userAgent = request.getHeader("User-Agent");
            String fileNameSup = (String) model.get("fileName");
            
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
	
}