package com.boras.CRM.controller.api;

import java.io.File;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.util.CellReference;
import org.apache.poi.ss.usermodel.CellType;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.boras.CRM.services.ApprovalService;
import com.boras.CRM.services.CodeService;
import com.boras.CRM.services.ContractService;
import com.boras.CRM.services.FormulaService;
import com.boras.CRM.services.LedgerExcelService;
import com.boras.CRM.services.LedgerService;
import com.boras.CRM.services.SurtaxSupportByFinancialService;
import com.boras.CRM.util.ContractHelper;
import com.boras.CRM.util.ExcelValidationHelper;
import com.boras.CRM.util.PermissionHelper;
import com.boras.CRM.util.ResultCode;
import com.boras.CRM.util.ResultCode.ResultNum;
import com.boras.CRM.vo.ApprovalVO;
import com.boras.CRM.vo.CodeVO;
import com.boras.CRM.vo.ContractVO;
import com.boras.CRM.vo.FormulaVO;
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
	
	@Autowired
	private CodeService codeService;
	
	@Autowired
	private ContractService contractService;
	
	@Autowired
	private ApprovalService approvalService;
	
	@Autowired
	private SurtaxSupportByFinancialService surtaxSupportByFinancialService;
	
	@Autowired
	private FormulaService formulaService;
	
	ExcelValidationHelper excelValidationHelper = new ExcelValidationHelper();
	
	ContractHelper contractHelper = new ContractHelper();
	
	@Value("${common.excel.financial.company}")
	int commonExcelFinancialCompany;
	
	@Value("${common.excel.financial.branch}")
	int commonExcelFinancialBranch;
	
	@Value("${common.excel.financial.product}")
	int commonExcelFinancialProduct;
	
	private static final String COMMON_EXCEL_FILE_PATH = "D:/file/ledger_excel_setting/";
	
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
	 * 원장 상세 조회
	 */
	@PostMapping(value = "/ledger/detail")
	public Map<String, Object> ledgerListDetail(HttpServletRequest req, HttpServletResponse resp, @RequestParam("ledgerSeqList") String ledgerSeqList) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    String[] strLedgerSeqList = ledgerSeqList.split(",");
	    int[] iLedgerSeqList = Arrays.stream(strLedgerSeqList).mapToInt(Integer::parseInt).toArray();
	    
	    List<LedgerVO> list = new ArrayList<>();
	    
	    try {
			list = ledgerService.selectLedgerDetailList(iLedgerSeqList);
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
			rvt.put("list", list);
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
	    
	    if(ledgerVO.getLedgerDeliveryDate().indexOf("-") > 0) {
	    	ledgerVO.setLedgerDeliveryDate(ledgerVO.getLedgerDeliveryDate().replaceAll("-", ""));
	    }
	    
	    boolean updateFlag = updateLedgerDB(ledgerVO);
	    
	    if(updateFlag) {
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		}else {
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
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
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		}
		
		return rvt;
	}
	
	/**
	 * 원장 엑셀 등록
	 */
	@PostMapping(value = "/ledger/excel/insert")
	public Map<String, Object> ledgerExcelInsert(HttpServletRequest req, HttpServletResponse resp, @RequestPart("ledgerExcelFile") MultipartFile ledgerExcelFile, @RequestPart("ledgerVO") LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    ledgerVO.setLedgerExcelFile(ledgerExcelFile);
	    
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
	    		/*
	    		ledgerExcelVO = new LedgerExcelVO();
		    	ledgerExcelVO.setLedgerFinancialCompanyCd(commonExcelFinancialCompany);
		    	ledgerExcelVO.setLedgerFinancialBranchCd(commonExcelFinancialBranch);
		    	ledgerExcelVO.setLedgerFinancialProductCd(commonExcelFinancialProduct);
		    	
		    	ledgerExcelVO = ledgerExcelService.selectLedgerExcelDetailForValidation(ledgerExcelVO);
		    	*/
	    		ledgerExcelVO = settingCommonExcel(ledgerExcelVO);
	    	}
	    	
	    	Map<String, Object> validationMap = excelValidationHelper.isSameExcelSample(ledgerExcelVO.getLedgerExcelFilePath(), ledgerExcelVO.getLedgerExcelHeaderRow(), ledgerExcelVO.getLedgerExcelSheet(), ledgerVO.getLedgerExcelFile(), isCommonExcel);
	    	
	    	if(validationMap.get("success").equals("Y")) {
	    		ledgerVO.setLedgerCreateUserId(PermissionHelper.getSessionUserId(req));
	    		
	    		boolean insertFlag = insertLedgerFormExcel(ledgerVO, ledgerExcelVO, formulaService, isCommonExcel);
	    		
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
	 * 금융지점 목록 조회
	 */
	@GetMapping(value = "/ledger/financial/{codeId}/branch/list")
	public Map<String, Object> financialBranchList(HttpServletRequest req, HttpServletResponse resp, @PathVariable("codeId") int codeId) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    CodeVO codeVO = new CodeVO();
	    codeVO.setCodeParentId(codeId);
	    
	    try {
	    	List<CodeVO> list = codeService.selectCodeList(codeVO);
		    if(list.size()>0) {
		    	rvt.put("list", list);
		    	
		    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		    }else {
		    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
    			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
		    }
		    	
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 기타사항 등록/수정
	 */
	@PostMapping(value = "/ledger/other/update")
	public Map<String, Object> ledgerOtherUpdate(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    ledgerVO.setLedgerUpdateUserId(PermissionHelper.getSessionUserId(req));
	    
	    try {
	    	ledgerService.updateLedger(ledgerVO);
	    	
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 딜러사 등록/수정
	 */
	@PostMapping(value = "/ledger/dealer/update")
	public Map<String, Object> ledgerDealerUpdate(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    ledgerVO.setLedgerUpdateUserId(PermissionHelper.getSessionUserId(req));
	    
	    try {
	    	ledgerService.updateLedger(ledgerVO);
	    	
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 승인요청 AG 목록
	 */
	@PostMapping(value = "/ledger/approval/ag")
	public Map<String, Object> ledgerApprovalAg(HttpServletRequest req, HttpServletResponse resp, ApprovalVO approvalVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    List<ApprovalVO> list = new ArrayList<>();
	    
	    try {
	    	list = approvalService.selectRequestApprovalList(approvalVO);
	    	
	    	rvt.put("list", list);
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_10002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_10002));
			logger.error(e.getMessage());
		}
	   
		return rvt;
	}
	
	/**
	 * 원장 삭제
	 */
	@PostMapping(value = "/ledger/delete")
	public Map<String, Object> ledgerDelete(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    /*
	     * 원장 삭제 시
	     * approval에 승인 여부 확인
	     * 1. 요청만 있을 경우 approval 삭제 후 계출 삭제 후 원장 삭제
	     * 2. 승인 되었을 경우 계출테이블에 정산 seq가 update 되었는지 확인 (정산 완료인지 여부)
	     * 	a. 정산 전일 경우 approval 삭제 후 계출 삭제 후 원장 삭제
	     * 	b. 정산완료일 경우 삭제 X
	     */
	    
	    ApprovalVO approvalVO = new ApprovalVO();
	    approvalVO.setApprovalLedgerSeq(ledgerVO.getLedgerSeq());
	    
	    ContractVO contractVO = new ContractVO();
	    contractVO.setContractLedgerSeq(ledgerVO.getLedgerSeq());

	    
	    int isApproval = 0;
	    int isCalculate = 0;
	    
	    // 승인 되었는지 확인
	    try {
	    	isApproval = ledgerService.isApprovalYCount(approvalVO);
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
			logger.error(e.getMessage());
		}
	    
	    // 정산 되었는지 확인
    	try {
	    	isCalculate = ledgerService.isCalculateCount(contractVO);
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
			logger.error(e.getMessage());
		}
	    
	    if(isApproval > 0 && isCalculate > 0) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.fail));
	    	rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.fail));
	    	rvt.put("msg", "이미 정산된 원장으로 삭제가 불가능 합니다.");
	    }else {
	    	try {
	    		ledgerService.deleteContract(contractVO);
	    		ledgerService.deleteApproval(approvalVO);
	    		ledgerService.deleteLedger(ledgerVO);
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
			} catch (Exception e) {
				rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
				rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
				logger.error(e.getMessage());
			}
	    }
	   
		return rvt;
	}
	
	/**
	 * AG mapping 관리자용
	 */
	@PostMapping(value = "/ledger/mapping/ag")
	public Map<String, Object> ledgerMappingAg(HttpServletRequest req, HttpServletResponse resp, ApprovalVO approvalVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    approvalVO.setApprovalState("승인");
	    approvalVO.setApprovalYn("Y");
	    
	    int isExist = -1;
	    
	    try {
			isExist = approvalService.cntApprovalLedgerSeq(approvalVO);
		} catch (Exception e) {
			rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
			logger.error(e.getMessage());
		}
	    
	    if(isExist > 0) {
	    	// 본인 제외 모두 거부
	    	try {
	    		approvalService.refusalApproval(approvalVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	}catch (Exception e) {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    		logger.error(e.getMessage());
	    	}
	    	
	    	// 본인 유무 확인
	    	ApprovalVO tempApprovalVO = approvalService.selectApprovalInfoByUserId(approvalVO);
	    	
	    	if(tempApprovalVO == null) {
	    		try {
		    		approvalService.insertApproval(approvalVO);
		    		
		    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
		    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
		    	}catch (Exception e) {
		    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
		    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
		    		logger.error(e.getMessage());
		    	}
	    	}
	    	
	    }else if(isExist == 0) {
	    	try {
	    		approvalService.insertApproval(approvalVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	}catch (Exception e) {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    		logger.error(e.getMessage());
	    	}
	    }
	   
		return rvt;
	}
	
	/**
	 * 엑셀 원장 등록
	 * @param ledgerVO
	 * @return
	 */
	public boolean insertLedgerFormExcel(LedgerVO ledgerVO, LedgerExcelVO ledgerExcelVO, FormulaService formulaService, boolean isCommonExcel) {
		boolean flag = true;
		
		File fNewExcelFile = null;
		try {
			if(isCommonExcel) {
				fNewExcelFile = new File(COMMON_EXCEL_FILE_PATH + ledgerVO.getLedgerExcelFile().getOriginalFilename());
			}else {
				fNewExcelFile = new File(ledgerExcelVO.getLedgerExcelFilePath().substring(0, ledgerExcelVO.getLedgerExcelFilePath().lastIndexOf("/")) + ledgerVO.getLedgerExcelFile().getOriginalFilename());
			}
			if(fNewExcelFile.exists()) {
				if(fNewExcelFile.delete()) {
					ledgerVO.getLedgerExcelFile().transferTo(fNewExcelFile);
				}
			}else {
				ledgerVO.getLedgerExcelFile().transferTo(fNewExcelFile);
			}
		} catch (Exception e) {
			logger.error("[ ERROR : Transfer To File Fail ]");
			logger.error(e.getMessage());
			flag = false;
		}
		
		// 계산 공식 조회
		FormulaVO formulaVO = new FormulaVO();
		formulaVO.setFormulaFinancialCompanyCd(ledgerVO.getLedgerFinancialCompanyCd());
		formulaVO.setFormulaFinancialProductCd(ledgerVO.getLedgerFinancialProductCd());
		
		List<FormulaVO> formulaList = new ArrayList<>();
		
		try {
			formulaList = formulaService.selectFormulaListByFinancial(formulaVO);
		} catch (Exception e) {
			logger.error("[ ERROR : selectFormulaListByFinancial ]");
			logger.error(e.getMessage());
		}
		
		try {
			XSSFWorkbook workBook = new XSSFWorkbook(fNewExcelFile);
			
			String excelHeaderRow = ledgerExcelVO.getLedgerExcelHeaderRow().replaceAll("[^0-9]", "");
			
			int iExcelHeaderRow = Integer.parseInt(excelHeaderRow);
			iExcelHeaderRow = iExcelHeaderRow - 1;
			
			int totalSheetCount = workBook.getNumberOfSheets();
			
			XSSFSheet sheet = workBook.getSheetAt(totalSheetCount - 1);
			
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
						CellReference ref = new CellReference(ledgerExcelVO.getLedgerCustomerName());
						
						Double itemp1 = 0d;
						Double itemp2 = 0d;
						String strTemp = "";
						
						if(ledgerExcelVO.getLedgerCarPrice() != null) {
							CellReference tempRef1 = new CellReference(ledgerExcelVO.getLedgerCarPrice());
							XSSFCell cell = row.getCell(tempRef1.getCol());
							itemp1 = cell != null ? cell.getNumericCellValue() : 0d;
						}
						
						if(ledgerExcelVO.getLedgerAcquisitionCost() != null) {
							CellReference tempRef2 = new CellReference(ledgerExcelVO.getLedgerAcquisitionCost());
							XSSFCell cell = row.getCell(tempRef2.getCol());
							itemp2 = cell != null ? cell.getNumericCellValue() : 0d;
						}
						
						if(ledgerExcelVO.getLedgerCustomerName() != null) {
							CellReference tempRef3 = new CellReference(ledgerExcelVO.getLedgerCustomerName());
							XSSFCell cell = row.getCell(tempRef3.getCol());
							strTemp = cell != null ? cell.getStringCellValue() : "";
						}
						
						if((itemp1 > 0 || itemp2 > 0) && !strTemp.isEmpty()) {
							logger.info("[Try to insert ledger from excel] CustomerName : " + row.getCell(ref.getCol()).getStringCellValue());
							
							ledgerVO.setLedgerCustomerName(row.getCell(ref.getCol()).getStringCellValue());
							
							// 인도일
							if(ledgerExcelVO.getLedgerDeliveryDate() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerDeliveryDate());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerDeliveryDate(changeDateFormat(cell != null ? getCellValue(cell) : ""));
							}
							
							// 차량명
							if(ledgerExcelVO.getLedgerCarName() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerCarName());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerCarName(cell != null ? getCellValue(cell) : "");
							}
							
							// 차량번호
							if(ledgerExcelVO.getLedgerCarNumber() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerCarNumber());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerCarNumber(cell != null ? getCellValue(cell) : "");
							}
							
							// 차량가
							if(ledgerExcelVO.getLedgerCarPrice() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerCarPrice());
								XSSFCell cell = row.getCell(ref.getCol());
								
								BigDecimal bigD = new BigDecimal(getCellValue(cell));
								
								ledgerVO.setLedgerCarPrice(cell != null ? bigD : null);
							}
							
							// 취득원가
							if(ledgerExcelVO.getLedgerAcquisitionCost() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerAcquisitionCost());
								XSSFCell cell = row.getCell(ref.getCol());
								BigDecimal bigD = new BigDecimal(getCellValue(cell));
								ledgerVO.setLedgerAcquisitionCost(cell != null ? bigD : null);
							}
							
							String nForm1 = "";
							String nForm3 = "";
							
							String sForm1 = "";
							String sForm3 = "";
							
							for(FormulaVO vo : formulaList) {
								if(vo.getFormulaType().equals("NTotalFee")) {
									nForm1 = vo.getFormula1(); 
									nForm3 = vo.getFormula3();
								}else if(vo.getFormulaType().equals("STotalFee")) {
									sForm1 = vo.getFormula1(); 
									sForm3 = vo.getFormula3();
								}
							}
							
							// 총fee-합계
							if(ledgerExcelVO.getLedgerTotalFeeSum() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSum());
								XSSFCell cell = row.getCell(ref.getCol());
								
								BigDecimal bigD = new BigDecimal(getCellValue(cell));
								BigDecimal totalFeeSum = cell != null ? bigD : BigDecimal.ZERO;
								BigDecimal num = new BigDecimal(1.1);
								if(!nForm3.isEmpty()) {
									totalFeeSum = totalFeeSum.multiply(num);
								}
								ledgerVO.setLedgerTotalFeeSum(totalFeeSum);
							}
							
							// 총fee-%
							if(ledgerExcelVO.getLedgerTotalFeePercent() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerTotalFeePercent());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerTotalFeePercent(cell != null ? Integer.parseInt(getCellValue(cell)) : 0);
							}else {
								BigDecimal percent = BigDecimal.ZERO;
								switch (nForm1) {
								case "ledgerAcquisitionCost":
									percent = ledgerVO.getLedgerTotalFeeSum().divide(ledgerVO.getLedgerAcquisitionCost());
									break;
								case "ledgerCarPrice":
									percent = ledgerVO.getLedgerTotalFeeSum().divide(ledgerVO.getLedgerCarPrice());
									break;
								default:
									percent = ledgerVO.getLedgerTotalFeeSum().divide(ledgerVO.getLedgerAcquisitionCost());
									break;
								}
								Double doublePercent = percent.doubleValue();
								if(doublePercent > 0) {
									ledgerVO.setLedgerTotalFeePercent(doublePercent * 100d);
									//ledgerVO.setLedgerTotalFeePercent(percent);
								}else {
									ledgerVO.setLedgerTotalFeePercent(0);
								}
							}
							
							int supplyPrice = 0;
							int surtax = 0;
							
							// 총fee-공급가
							if(ledgerExcelVO.getLedgerTotalFeeSupplyPrice() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSupplyPrice());
								XSSFCell cell = row.getCell(ref.getCol());
								BigDecimal bigD = new BigDecimal(getCellValue(cell));
								ledgerVO.setLedgerTotalFeeSupplyPrice(cell != null ? bigD : BigDecimal.ZERO);
							}else {
								if(ledgerVO.getLedgerTotalFeeSum().compareTo(BigDecimal.ZERO) > 0) {
									supplyPrice = (int) (ledgerVO.getLedgerTotalFeeSum().doubleValue() / 1.1);
									surtax = (int) (ledgerVO.getLedgerTotalFeeSum().doubleValue() - supplyPrice);
									BigDecimal bigI = new BigDecimal(supplyPrice);
									ledgerVO.setLedgerTotalFeeSupplyPrice(bigI);
								}else {
									ledgerVO.setLedgerTotalFeeSupplyPrice(BigDecimal.ZERO);
								}
							}
							
							if(surtax > 0) {
								BigDecimal bigI = new BigDecimal(surtax);
								ledgerVO.setLedgerTotalFeeSurtax(bigI);
							}else {
								// 총fee-부가세
								if(ledgerExcelVO.getLedgerTotalFeeSurtax() != null) {
									ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSurtax());
									XSSFCell cell = row.getCell(ref.getCol());
									BigDecimal bigD = new BigDecimal(getCellValue(cell));
									ledgerVO.setLedgerTotalFeeSurtax(cell != null ? bigD : BigDecimal.ZERO);
								}else {
									ledgerVO.setLedgerTotalFeeSurtax(BigDecimal.ZERO);
								}
							}
							
							// 슬라이딩-합계
							if(ledgerExcelVO.getLedgerSlidingSum() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerSlidingSum());
								XSSFCell cell = row.getCell(ref.getCol());
								int sFeeSum = cell != null ? Integer.parseInt(getCellValue(cell)) : 0;
								if(!sForm3.isEmpty()) {
									sFeeSum = (int) (sFeeSum * 1.1);
								}
								BigDecimal bigSFS = new BigDecimal(sFeeSum);
								ledgerVO.setLedgerSlidingSum(bigSFS);
							}
							
							// 슬라이딩-%
							if(ledgerExcelVO.getLedgerSlidingPercent() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerSlidingPercent());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerSlidingPercent(cell != null ? Integer.parseInt(getCellValue(cell)) : 0);
							}else {
								Double percent = 0d;
								switch (sForm1) {
									case "ledgerAcquisitionCost":
										percent = ledgerVO.getLedgerSlidingSum().doubleValue() / ledgerVO.getLedgerAcquisitionCost().doubleValue();
										break;
									case "ledgerCarPrice":
										percent = ledgerVO.getLedgerSlidingSum().doubleValue() / ledgerVO.getLedgerCarPrice().doubleValue();
										break;
									default:
										percent = ledgerVO.getLedgerSlidingSum().doubleValue() / ledgerVO.getLedgerAcquisitionCost().doubleValue();
										break;
								}
								
								if(percent > 0) {
									ledgerVO.setLedgerSlidingPercent(percent * 100d);
									//ledgerVO.setLedgerSlidingPercent(percent);
								}else {
									ledgerVO.setLedgerSlidingPercent(0);
								}
							}
							
							int sSupplyPrice = 0;
							int sSurtax = 0;
							
							// 슬라이딩-공급각
							if(ledgerExcelVO.getLedgerSlidingSupplyPrice() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerSlidingSupplyPrice());
								XSSFCell cell = row.getCell(ref.getCol());
								BigDecimal bigD = new BigDecimal(getCellValue(cell));
								ledgerVO.setLedgerSlidingSupplyPrice(cell != null ? bigD : BigDecimal.ZERO);
							}else {
								if(ledgerVO.getLedgerSlidingSum().doubleValue() > 0) {
									sSupplyPrice = (int) (ledgerVO.getLedgerSlidingSum().doubleValue() / 1.1);
									sSurtax = (int) (ledgerVO.getLedgerSlidingSum().doubleValue() - sSupplyPrice);
									BigDecimal bigSSupplyPrice = new BigDecimal(sSupplyPrice);
									ledgerVO.setLedgerSlidingSupplyPrice(bigSSupplyPrice);
								}else {
									ledgerVO.setLedgerSlidingSupplyPrice(BigDecimal.ZERO);
								}
							}
							
							if(sSurtax > 0) {
								BigDecimal bigSS = new BigDecimal(sSurtax);
								ledgerVO.setLedgerSlidingSurtax(bigSS);
							}else {
								// 슬라이딩-부가세
								if(ledgerExcelVO.getLedgerSlidingSurtax() != null) {
									ref = new CellReference(ledgerExcelVO.getLedgerSlidingSurtax());
									XSSFCell cell = row.getCell(ref.getCol());
									BigDecimal bigD = new BigDecimal(getCellValue(cell));
									ledgerVO.setLedgerSlidingSurtax(cell != null ? bigD : BigDecimal.ZERO);
								}else {
									ledgerVO.setLedgerSlidingSurtax(BigDecimal.ZERO);
								}
							}
							
							// 추가프로모션
							if(ledgerExcelVO.getLedgerAddPromotion() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerAddPromotion());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerAddPromotion(cell != null ? Integer.parseInt(getCellValue(cell)) : null);
							}
							
							// 원장 등록
							insertLedgerDB(ledgerVO);
							
						}
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
			
			ApprovalVO approvalVO = new ApprovalVO();
			approvalVO.setApprovalLedgerSeq(ledgerVO.getLedgerSeq());
			approvalVO.setApprovalState("승인");
			approvalVO.setApprovalYn("Y");
			approvalVO.setApprovalUserId(ledgerVO.getAgUserId());
			
			// 계출 등록
			if(ledgerVO.getLedgerSeq() > 0) {
				logger.info("[Try to insert contract] ledger seq : " + ledgerVO.getLedgerSeq());
				
				contractHelper.insertContract(ledgerVO, ledgerService, surtaxSupportByFinancialService, contractService);
			}
			
			// AG 맵핑 등록 (승인)
			if(!ledgerVO.getAgUserId().isEmpty()) {
				approvalService.insertApproval(approvalVO);
			}
			
			flag = true;
		} catch (Exception e) {
			logger.error(e.getMessage());
			flag = false;
		}
		
		return flag;
	}
	
	/**
	 * 원장 DB 수정
	 * @param ledgerVO
	 * @return
	 */
	public boolean updateLedgerDB(LedgerVO ledgerVO) {
		boolean flag = false;
		
		try {
			int i = ledgerService.updateLedger(ledgerVO);
			
			if(!ledgerVO.getAgUserId().isEmpty()) {
				ApprovalVO approvalVO = new ApprovalVO();
				approvalVO.setApprovalLedgerSeq(ledgerVO.getLedgerSeq());
				approvalVO.setApprovalState("승인");
				approvalVO.setApprovalYn("Y");
				approvalVO.setApprovalUserId(ledgerVO.getAgUserId());
				
				int isExist = -1;
				
				try {
					isExist = approvalService.cntApprovalLedgerSeq(approvalVO);
				} catch (Exception e) {
					logger.error(e.getMessage());
				}
				
				if(isExist > 0) {
					// 본인 제외 모두 거부
					try {
						approvalService.refusalApproval(approvalVO);
					}catch (Exception e) {
						logger.error(e.getMessage());
					}
					
					// 본인 유무 확인
					ApprovalVO tempApprovalVO = approvalService.selectApprovalInfoByUserId(approvalVO);
					
					if(tempApprovalVO == null) {
						try {
							approvalService.insertApproval(approvalVO);
						}catch (Exception e) {
							logger.error(e.getMessage());
						}
					}
					
				}else if(isExist == 0) {
					try {
						approvalService.insertApproval(approvalVO);
					}catch (Exception e) {
						logger.error(e.getMessage());
					}
				}
				
				// 계출 등록
				if(ledgerVO.getLedgerSeq() > 0) {
					logger.info("[Try to update contract] ledger seq : " + ledgerVO.getLedgerSeq());
					
					contractHelper.updateContract(ledgerVO, ledgerService, surtaxSupportByFinancialService, contractService);
				}
				
				// AG 맵핑 등록 (승인)
				if(!ledgerVO.getAgUserId().isEmpty()) {
					approvalService.insertApproval(approvalVO);
				}
			}
			
			flag = true;
		} catch (Exception e) {
			logger.error(e.getMessage());
			flag = false;
		}
		
		return flag;
	}
	
	public String changeDateFormat(String beforeDate) {
		String rvt = "";
		
		beforeDate = beforeDate.replaceAll("[^0-9]", "");
		
		rvt = beforeDate;
		
		return rvt;
	}
	
	/**
	 * 통합 엑셀 설정
	 * @param ledgerExcelVO
	 * @return
	 */
	public LedgerExcelVO settingCommonExcel(LedgerExcelVO ledgerExcelVO) {
		LedgerExcelVO rvt = ledgerExcelVO;
		
		rvt = new LedgerExcelVO();
		rvt.setLedgerExcelHeaderRow("A3");
		rvt.setLedgerExcelSheet("통합엑셀(변경금지)");
		rvt.setLedgerCarPrice("E3");
		rvt.setLedgerAcquisitionCost("F3");
		rvt.setLedgerDeliveryDate("B3");
		rvt.setLedgerCustomerName("A3");
		rvt.setLedgerCarName("C3");
		rvt.setLedgerCarNumber("D3");
		rvt.setLedgerTotalFeePercent("H3");
		rvt.setLedgerTotalFeeSum("G3");
		rvt.setLedgerTotalFeeSupplyPrice("I3");
		rvt.setLedgerTotalFeeSurtax("J3");
		rvt.setLedgerSlidingPercent("L3");
		rvt.setLedgerSlidingSum("K3");
		rvt.setLedgerSlidingSupplyPrice("M3");
		rvt.setLedgerSlidingSurtax("N3");
		
		return rvt;
	}
	
	public String getCellValue(XSSFCell cell) {
		String value = "";
		
		switch (cell.getCellType()){
			case XSSFCell.CELL_TYPE_FORMULA:
				value = cell.getCellFormula();
				break;
			case XSSFCell.CELL_TYPE_NUMERIC:
				if (HSSFDateUtil.isCellDateFormatted(cell)) {
					Date date = cell.getDateCellValue();
					
					SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
					value = sdf.format(date);
				}else {
					cell.setCellType(CellType.STRING);
					value = cell.getStringCellValue() + "";
				}
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
		
		return value;
	}
}
