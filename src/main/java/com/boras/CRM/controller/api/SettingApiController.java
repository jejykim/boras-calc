package com.boras.CRM.controller.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.boras.CRM.services.LedgerExcelService;
import com.boras.CRM.services.UserService;
import com.boras.CRM.util.FileHelper;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.LedgerExcelVO;

@RestController
@RequestMapping("/v1/api")
public class SettingApiController {

	private static final Logger logger = LoggerFactory.getLogger(SettingApiController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private LedgerExcelService ledgerExcelService;
	
	FileHelper fileHelper = new FileHelper();
	
	@Value("${file.path}")
	String serverPath;
	
	/**
	 * 원장 엑셀 설정 등록
	 */
	@PostMapping(value = "/ledger/setting/excel/insert")
	public Map<String, Object> ledgerSettingExcelInsert(HttpServletRequest req, HttpServletResponse resp, @RequestPart("ledgerExcelFile") MultipartFile ledgerExcelFile, @RequestPart("ledgerExcelVO") LedgerExcelVO ledgerExcelVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    boolean fileFlag = true;
	    
	    ledgerExcelVO.setLedgerExcelFile(ledgerExcelFile);
	    
	    // excel 양식 유무 확인
	    if(ledgerExcelVO.getLedgerExcelFile() != null) {
	    	try {
	    		Map<String, Object> fileMap = fileHelper.saveFile(ledgerExcelVO.getLedgerExcelFile().getOriginalFilename(), ledgerExcelVO.getLedgerExcelFile().getBytes(), req, "ledger_excel_setting", "F", serverPath);
	    		
	    		if(fileMap.get("success").toString().equals("Y")) {
	    			ledgerExcelVO.setLedgerExcelFileName(ledgerExcelVO.getLedgerExcelFile().getOriginalFilename());
	    			ledgerExcelVO.setLedgerExcelFilePath(fileMap.get("RealFilePath").toString());
	    		}else {
	    			fileFlag = false;
					
					rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_30001));
			    	rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_30001));
	    		}
			} catch (IOException e) {
				logger.error(e.getMessage());
				fileFlag = false;
				
				rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_30001));
		    	rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_30001));
			}
	    }
	    
	    if(fileFlag) {
	    	ledgerExcelVO.setLedgerExcelCreateId(PermissionHelper.getSessionUserId(req));
	    	
	    	// DB 저장
	    	try {
	    		ledgerExcelService.insertLedgerExcelSetting(ledgerExcelVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	} catch (Exception e) {
	    		logger.error(e.getMessage());
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    	}
	    }
		
		return rvt;
	}
	
	/**
	 * 원장 엑셀 설정 수정
	 */
	@PostMapping(value = "/ledger/setting/excel/update")
	public Map<String, Object> ledgerSettingExcelUpdate(HttpServletRequest req, HttpServletResponse resp, @RequestPart("ledgerExcelFile") MultipartFile ledgerExcelFile, @RequestPart("ledgerExcelVO") LedgerExcelVO ledgerExcelVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    boolean fileFlag = true;
	    
	    ledgerExcelVO.setLedgerExcelFile(ledgerExcelFile);
	    
	    // excel 양식 유무 확인
	    if(ledgerExcelVO.getLedgerExcelFile() != null) {
	    	try {
	    		Map<String, Object> fileMap = fileHelper.saveFile(ledgerExcelVO.getLedgerExcelFile().getOriginalFilename(), ledgerExcelVO.getLedgerExcelFile().getBytes(), req, "ledger_excel_setting", "F", serverPath);
	    		
	    		if(fileMap.get("success").toString().equals("Y")) {
	    			ledgerExcelVO.setLedgerExcelFileName(ledgerExcelVO.getLedgerExcelFile().getOriginalFilename());
	    			ledgerExcelVO.setLedgerExcelFilePath(fileMap.get("RealFilePath").toString());
	    		}else {
	    			fileFlag = false;
					
					rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_30001));
			    	rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_30001));
	    		}
			} catch (IOException e) {
				logger.error(e.getMessage());
				fileFlag = false;
				
				rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_30001));
		    	rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_30001));
			}
	    }
	    
	    if(fileFlag) {
	    	ledgerExcelVO.setLedgerExcelUpdateId(PermissionHelper.getSessionUserId(req));
	    	
	    	// DB 저장
	    	try {
	    		ledgerExcelService.updateLedgerExcelSetting(ledgerExcelVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	} catch (Exception e) {
	    		logger.error(e.getMessage());
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    	}
	    }
		
		return rvt;
	}
	
	/**
	 * 원장 엑셀 설정 목록
	 */
	@PostMapping(value = "/ledger/setting/excel/list")
	public Map<String, Object> ledgerSettingExcelList(HttpServletRequest req, HttpServletResponse resp, LedgerExcelVO ledgerExcelVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    List<LedgerExcelVO> list = new ArrayList<>();
	    
    	try {
    		list = ledgerExcelService.selectLedgerExcelList(ledgerExcelVO);
    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
    		rvt.put("listCount", list.size());
    		rvt.put("list", list);
    	} catch (Exception e) {
    		logger.error(e.getMessage());
    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
    	}
		
		return rvt;
	}
	
	/**
	 * 원장 엑셀 설정 상세
	 */
	@PostMapping(value = "/ledger/setting/excel/detail")
	public Map<String, Object> ledgerSettingExcelDetail(HttpServletRequest req, HttpServletResponse resp, LedgerExcelVO ledgerExcelVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
    	try {
    		ledgerExcelVO = ledgerExcelService.selectLedgerExcelDetail(ledgerExcelVO);
    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
    		rvt.put("ledgerExcelVO", ledgerExcelVO);
    	} catch (Exception e) {
    		logger.error(e.getMessage());
    		
    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
    	}
		
		return rvt;
	}
	
	/**
	 * 원장 엑셀 중복 체크
	 */
	@PostMapping(value = "/ledger/setting/excel/exist")
	public Map<String, Object> ledgerSettingExcelExist(HttpServletRequest req, HttpServletResponse resp, LedgerExcelVO ledgerExcelVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    boolean reqParam = false;
	    
	    if(!(ledgerExcelVO.getLedgerFinancialCompanyCd() > 0)) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00007));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00007) + "금융사 코드");
	    }else if(!(ledgerExcelVO.getLedgerFinancialBranchCd() > 0)) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00007));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00007) + "금융 지점 코드");
	    }else if(!(ledgerExcelVO.getLedgerFinancialProductCd() > 0)) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00007));
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00007) + "금융 상품 코드");
	    }else {
	    	reqParam = true;
	    }
	    
	    if(reqParam) {
	    	try {
	    		int count = ledgerExcelService.isExcelExist(ledgerExcelVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    		rvt.put("isExist", count > 0 ? "Y" : "N");
	    	} catch (Exception e) {
	    		logger.error(e.getMessage());
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    	}
	    }
		
		return rvt;
	}
	
}
