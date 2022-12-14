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
	 * ?????? ?????? ??????
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
	 * ?????? ?????? ??????
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
	 * ?????? ??????
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
	 * ?????? ?????? ??????
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
	 * ?????? ?????? ??????
	 */
	@PostMapping(value = "/ledger/excel/insert")
	public Map<String, Object> ledgerExcelInsert(HttpServletRequest req, HttpServletResponse resp, @RequestPart("ledgerExcelFile") MultipartFile ledgerExcelFile, @RequestPart("ledgerVO") LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    ledgerVO.setLedgerExcelFile(ledgerExcelFile);
	    
	    // excel ?????? ?????? ??????
	    if(ledgerVO.getLedgerExcelFile() != null) {
	    	
	    	LedgerExcelVO ledgerExcelVO = new LedgerExcelVO();
	    	ledgerExcelVO.setLedgerFinancialCompanyCd(ledgerVO.getLedgerFinancialCompanyCd());
	    	ledgerExcelVO.setLedgerFinancialBranchCd(ledgerVO.getLedgerFinancialBranchCd());
	    	ledgerExcelVO.setLedgerFinancialProductCd(ledgerVO.getLedgerFinancialProductCd());
	    	
	    	ledgerExcelVO = ledgerExcelService.selectLedgerExcelDetailForValidation(ledgerExcelVO);
	    	
	    	// ?????? ?????? ??????
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
    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00006) + "?????? excel file");
	    }
		
		return rvt;
	}
	
	/**
	 * ???????????? ?????? ??????
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
	 * ???????????? ??????/??????
	 */
	@PostMapping(value = "/ledger/other/update")
	public Map<String, Object> ledgerOtherUpdate(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    ledgerVO.setLedgerUpdateUserId(PermissionHelper.getSessionUserId(req));
	    
	    LedgerVO tempLedgerVO = new LedgerVO();
	    
	    try {
	    	tempLedgerVO = ledgerService.selectLedgerDetail(ledgerVO);
	    }catch (Exception e) {
			logger.error(e.getMessage());
		}
	    
	    tempLedgerVO.setLedgerOther(ledgerVO.getLedgerOther());
	    
	    try {
	    	ledgerService.updateLedger(tempLedgerVO);
	    	
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
	 * ????????? ??????/??????
	 */
	@PostMapping(value = "/ledger/dealer/update")
	public Map<String, Object> ledgerDealerUpdate(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    ledgerVO.setLedgerUpdateUserId(PermissionHelper.getSessionUserId(req));
	    
	    LedgerVO tempLedgerVO = new LedgerVO();
	    
	    try {
	    	tempLedgerVO = ledgerService.selectLedgerDetail(ledgerVO);
	    }catch (Exception e) {
			logger.error(e.getMessage());
		}
	    
	    tempLedgerVO.setLedgerDealerBrandCd(ledgerVO.getLedgerDealerBrandCd());
	    tempLedgerVO.setLedgerDealerCompanyCd(ledgerVO.getLedgerDealerCompanyCd());
	    
	    try {
	    	ledgerService.updateLedger(tempLedgerVO);
	    	
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
	 * ???????????? AG ??????
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
	 * ?????? ??????
	 */
	@PostMapping(value = "/ledger/delete")
	public Map<String, Object> ledgerDelete(HttpServletRequest req, HttpServletResponse resp, LedgerVO ledgerVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    /*
	     * ?????? ?????? ???
	     * approval??? ?????? ?????? ??????
	     * 1. ????????? ?????? ?????? approval ?????? ??? ?????? ?????? ??? ?????? ??????
	     * 2. ?????? ????????? ?????? ?????????????????? ?????? seq??? update ???????????? ?????? (?????? ???????????? ??????)
	     * 	a. ?????? ?????? ?????? approval ?????? ??? ?????? ?????? ??? ?????? ??????
	     * 	b. ??????????????? ?????? ?????? X
	     */
	    
	    ApprovalVO approvalVO = new ApprovalVO();
	    approvalVO.setApprovalLedgerSeq(ledgerVO.getLedgerSeq());
	    
	    ContractVO contractVO = new ContractVO();
	    contractVO.setContractLedgerSeq(ledgerVO.getLedgerSeq());

	    
	    int isApproval = 0;
	    int isCalculate = 0;
	    
	    // ?????? ???????????? ??????
	    try {
	    	isApproval = ledgerService.isApprovalYCount(approvalVO);
	    }catch (Exception e) {
	    	rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
			rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
			logger.error(e.getMessage());
		}
	    
	    // ?????? ???????????? ??????
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
	    	rvt.put("msg", "?????? ????????? ???????????? ????????? ????????? ?????????.");
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
	 * AG mapping ????????????
	 */
	@PostMapping(value = "/ledger/mapping/ag")
	public Map<String, Object> ledgerMappingAg(HttpServletRequest req, HttpServletResponse resp, ApprovalVO approvalVO) {
	    Map<String, Object> rvt = new HashMap<>();
	    
	    approvalVO.setApprovalState("??????");
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
	    	// ?????? ?????? ?????? ??????
	    	try {
	    		approvalService.refusalApproval(approvalVO);
	    		
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.success));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.success));
	    	}catch (Exception e) {
	    		rvt.put(ResultCode.RESULT_CODE, ResultCode.resultNum(ResultNum.e_00002));
	    		rvt.put(ResultCode.RESULT_MSG, ResultCode.resultMsg(ResultNum.e_00002));
	    		logger.error(e.getMessage());
	    	}
	    	
	    	// ?????? ?????? ??????
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
	 * ?????? ?????? ??????
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
		
		// ?????? ?????? ??????
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
			
			// ?????? row ???
			int rows = sheet.getPhysicalNumberOfRows();
			
			// ?????? row + 1 (?????? row)
			int rowIndex = 0;
			
			for(rowIndex = iExcelHeaderRow + 1; rowIndex < rows; rowIndex++){ 
				//???????????????
				XSSFRow row = sheet.getRow(rowIndex);
				if(row != null){
					
					// ?????? VO ????????? ??????
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
							
							// ?????????
							if(ledgerExcelVO.getLedgerDeliveryDate() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerDeliveryDate());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerDeliveryDate(changeDateFormat(cell != null ? getCellValue(cell) : ""));
							}
							
							// ?????????
							if(ledgerExcelVO.getLedgerCarName() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerCarName());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerCarName(cell != null ? getCellValue(cell) : "");
							}
							
							// ????????????
							if(ledgerExcelVO.getLedgerCarNumber() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerCarNumber());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerCarNumber(cell != null ? getCellValue(cell) : "");
							}
							
							// ?????????
							if(ledgerExcelVO.getLedgerCarPrice() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerCarPrice());
								XSSFCell cell = row.getCell(ref.getCol());
								
								BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
								
								ledgerVO.setLedgerCarPrice(cell != null ? bigD : null);
							}
							
							// ????????????
							if(ledgerExcelVO.getLedgerAcquisitionCost() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerAcquisitionCost());
								XSSFCell cell = row.getCell(ref.getCol());
								BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
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
							
							// ???fee-??????
							if(ledgerExcelVO.getLedgerTotalFeeSum() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSum());
								XSSFCell cell = row.getCell(ref.getCol());
								
								BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
								BigDecimal totalFeeSum = cell != null ? bigD : BigDecimal.ZERO;
								BigDecimal num = new BigDecimal(1.1);
								if(!nForm3.isEmpty()) {
									totalFeeSum = totalFeeSum.multiply(num);
								}
								ledgerVO.setLedgerTotalFeeSum(totalFeeSum);
							}
							
							// ???fee-%
							if(ledgerExcelVO.getLedgerTotalFeePercent() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerTotalFeePercent());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerTotalFeePercent(cell != null ? Integer.parseInt(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell)) : 0);
							}else {
								Double percent = 0d;
								switch (nForm1) {
								case "ledgerAcquisitionCost":
									percent = ledgerVO.getLedgerTotalFeeSum().doubleValue() / ledgerVO.getLedgerAcquisitionCost().doubleValue();
									break;
								case "ledgerCarPrice":
									percent = ledgerVO.getLedgerTotalFeeSum().doubleValue() / ledgerVO.getLedgerCarPrice().doubleValue();
									break;
								default:
									percent = ledgerVO.getLedgerTotalFeeSum().doubleValue() / ledgerVO.getLedgerAcquisitionCost().doubleValue();
									break;
								}
								if(percent > 0) {
									ledgerVO.setLedgerTotalFeePercent(percent * 100d);
									//ledgerVO.setLedgerTotalFeePercent(percent);
								}else {
									ledgerVO.setLedgerTotalFeePercent(0);
								}
							}
							
							int supplyPrice = 0;
							int surtax = 0;
							
							// ???fee-?????????
							if(ledgerExcelVO.getLedgerTotalFeeSupplyPrice() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSupplyPrice());
								XSSFCell cell = row.getCell(ref.getCol());
								BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
								ledgerVO.setLedgerTotalFeeSupplyPrice(bigD);
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
								// ???fee-?????????
								if(ledgerExcelVO.getLedgerTotalFeeSurtax() != null) {
									ref = new CellReference(ledgerExcelVO.getLedgerTotalFeeSurtax());
									XSSFCell cell = row.getCell(ref.getCol());
									BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
									ledgerVO.setLedgerTotalFeeSurtax(bigD);
								}else {
									ledgerVO.setLedgerTotalFeeSurtax(BigDecimal.ZERO);
								}
							}
							
							// ????????????-??????
							if(ledgerExcelVO.getLedgerSlidingSum() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerSlidingSum());
								XSSFCell cell = row.getCell(ref.getCol());
								int sFeeSum = cell != null ? Integer.parseInt(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell)) : 0;
								if(!sForm3.isEmpty()) {
									sFeeSum = (int) (sFeeSum * 1.1);
								}
								BigDecimal bigSFS = new BigDecimal(sFeeSum);
								ledgerVO.setLedgerSlidingSum(bigSFS);
							}
							
							// ????????????-%
							if(ledgerExcelVO.getLedgerSlidingPercent() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerSlidingPercent());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerSlidingPercent(cell != null ? Integer.parseInt(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell)) : 0);
							}else {
								Double percent = 0d;
								switch (sForm1) {
									case "ledgerAcquisitionCost":
										percent = ledgerVO.getLedgerSlidingSum() != null ? ledgerVO.getLedgerSlidingSum().doubleValue() : 0d / ledgerVO.getLedgerAcquisitionCost().doubleValue();
										break;
									case "ledgerCarPrice":
										percent = ledgerVO.getLedgerSlidingSum() != null ? ledgerVO.getLedgerSlidingSum().doubleValue() : 0d / ledgerVO.getLedgerCarPrice().doubleValue();
										break;
									default:
										percent = ledgerVO.getLedgerSlidingSum() != null ? ledgerVO.getLedgerSlidingSum().doubleValue() : 0d / ledgerVO.getLedgerAcquisitionCost().doubleValue();
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
							
							// ????????????-?????????
							if(ledgerExcelVO.getLedgerSlidingSupplyPrice() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerSlidingSupplyPrice());
								XSSFCell cell = row.getCell(ref.getCol());
								BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
								ledgerVO.setLedgerSlidingSupplyPrice(bigD);
							}else {
								if(ledgerVO.getLedgerSlidingSum() != null) {
									if(ledgerVO.getLedgerSlidingSum().doubleValue() > 0) {
										sSupplyPrice = (int) (ledgerVO.getLedgerSlidingSum() != null ? ledgerVO.getLedgerSlidingSum().doubleValue() : 0d / 1.1);
										sSurtax = (int) (ledgerVO.getLedgerSlidingSum() != null ? ledgerVO.getLedgerSlidingSum().doubleValue() : 0d - sSupplyPrice);
										BigDecimal bigSSupplyPrice = new BigDecimal(sSupplyPrice);
										ledgerVO.setLedgerSlidingSupplyPrice(bigSSupplyPrice);
									}else {
										ledgerVO.setLedgerSlidingSupplyPrice(BigDecimal.ZERO);
									}
								}
							}
							
							if(sSurtax > 0) {
								BigDecimal bigSS = new BigDecimal(sSurtax);
								ledgerVO.setLedgerSlidingSurtax(bigSS);
							}else {
								// ????????????-?????????
								if(ledgerExcelVO.getLedgerSlidingSurtax() != null) {
									ref = new CellReference(ledgerExcelVO.getLedgerSlidingSurtax());
									XSSFCell cell = row.getCell(ref.getCol());
									BigDecimal bigD = new BigDecimal(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell));
									ledgerVO.setLedgerSlidingSurtax(bigD);
								}else {
									ledgerVO.setLedgerSlidingSurtax(BigDecimal.ZERO);
								}
							}
							
							// ??????????????????
							if(ledgerExcelVO.getLedgerAddPromotion() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerAddPromotion());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerAddPromotion(cell != null ? Integer.parseInt(getCellValue(cell).isEmpty() ? "0" : getCellValue(cell)) : null);
							}
							
							// ?????????????????? ???
							if(ledgerExcelVO.getLedgerPromotionMemo() != null) {
								ref = new CellReference(ledgerExcelVO.getLedgerPromotionMemo());
								XSSFCell cell = row.getCell(ref.getCol());
								ledgerVO.setLedgerPromotionMemo(cell != null ? getCellValue(cell) : "");
							}
							
							// ?????? ??????
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
	 * ?????? DB ??????
	 * @param ledgerVO
	 * @return
	 */
	public boolean insertLedgerDB(LedgerVO ledgerVO) {
		boolean flag = false;
		
		try {
			ledgerService.insertLedger(ledgerVO);
			
			ApprovalVO approvalVO = new ApprovalVO();
			approvalVO.setApprovalLedgerSeq(ledgerVO.getLedgerSeq());
			approvalVO.setApprovalState("??????");
			approvalVO.setApprovalYn("Y");
			approvalVO.setApprovalUserId(ledgerVO.getAgUserId());
			
			// ?????? ??????
			if(ledgerVO.getLedgerSeq() > 0) {
				logger.info("[Try to insert contract] ledger seq : " + ledgerVO.getLedgerSeq());
				
				contractHelper.insertContract(ledgerVO, ledgerService, surtaxSupportByFinancialService, contractService);
			}
			
			// AG ?????? ?????? (??????)
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
	 * ?????? DB ??????
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
				approvalVO.setApprovalState("??????");
				approvalVO.setApprovalYn("Y");
				approvalVO.setApprovalUserId(ledgerVO.getAgUserId());
				
				int isExist = -1;
				
				try {
					isExist = approvalService.cntApprovalLedgerSeq(approvalVO);
				} catch (Exception e) {
					logger.error(e.getMessage());
				}
				
				if(isExist > 0) {
					// ?????? ?????? ?????? ??????
					try {
						approvalService.refusalApproval(approvalVO);
					}catch (Exception e) {
						logger.error(e.getMessage());
					}
					
					// ?????? ?????? ??????
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
				
				// ?????? ??????
				if(ledgerVO.getLedgerSeq() > 0) {
					logger.info("[Try to update contract] ledger seq : " + ledgerVO.getLedgerSeq());
					
					contractHelper.updateContract(ledgerVO, ledgerService, surtaxSupportByFinancialService, contractService);
				}
				
				// AG ?????? ?????? (??????)
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
	 * ?????? ?????? ??????
	 * @param ledgerExcelVO
	 * @return
	 */
	public LedgerExcelVO settingCommonExcel(LedgerExcelVO ledgerExcelVO) {
		LedgerExcelVO rvt = ledgerExcelVO;
		
		rvt = new LedgerExcelVO();
		rvt.setLedgerExcelHeaderRow("A3");
		rvt.setLedgerExcelSheet("????????????(????????????)");
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
		rvt.setLedgerAddPromotion("O3");
		rvt.setLedgerPromotionMemo("P3");
		
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
				value = "";
				break;
			case XSSFCell.CELL_TYPE_ERROR:
				value = "";
				break;
			default:
				value = new String();
				break;
		}
		
		return value;
	}
}
