/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		LedgerExcelList.PageLoad();
	}
	catch(e){ console.log(e.message); }
	
});


/*=======================================================================
Content  : FormBeforeUnLoad
========================================================================*/
function FormBeforeUnLoad() {
    try {
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
LedgerExcelList Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//LedgerExcelList Class
var LedgerExcelList = {};

//LedgerExcelList Const

//LedgerExcelList Variable
LedgerExcelList.files = [];
LedgerExcelList.ledgerExcelSeq = 0;
var checkIdFlag = false;

//LedgerExcelList
var Properties = {};
LedgerExcelList.Properties = Properties;

//LedgerExcelList Method
LedgerExcelList.PageLoad = function () { };  //메인 페이지 로드 공통 함수
LedgerExcelList.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
LedgerExcelList Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerExcelList.PageLoad = function () {
    try {
        LedgerExcelList.Init();
        LedgerExcelList.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerExcelList.Init = function () {
    try {
		if($("#inputSearchText").val() != "") {
			$("#inputSearchText").focus();
			$('#inputSearchText')[0].setSelectionRange($('#inputSearchText').val().length, $('#inputSearchText').val().length);
		}
		
		LedgerExcelList.getFinancialBranchList($("#selFinancialCompanyCode").val());
		
		if($("input[name='common-radio']:checked").val() == "Y") {
			$("#modalAddExcel input[type=text]").attr("disabled", "disabled");
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerExcelList.SetEvent = function () {
    try {
		// 통합 엑셀 사용여부
		$("input[name=common-radio]").change(function() {
			if($("input[name='common-radio']:checked").val() == "Y") {
				$("#modalAddExcel input[type=text]").attr("disabled", "disabled");
			}else {
				$("#modalAddExcel input[type=text]").removeAttr("disabled");
			}
		});
	
		// 상태 탭 li
		$("#liAll").click(function() {
			$("#searchText").val("");
			$("#ledgerExcelCommonYn").val("");
			document.searchForm.submit();
		});
		$("#liCommonN").click(function() {
			$("#searchText").val("");
			$("#ledgerExcelCommonYn").val("N");
			document.searchForm.submit();
		});
		$("#liCommonY").click(function() {
			$("#searchText").val("");
			$("#ledgerExcelCommonYn").val("Y");
			document.searchForm.submit();
		});
	
		// 검색
		$("#btnSearch").click(function() {
			$("#searchText").val($("#inputSearchText").val());
			document.searchForm.submit();
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				document.searchForm.submit();
			}
		});
		
		// 원장 모달 호출
		$("#btnAddExcel").click(function() {
			$("#modalAddExcel").removeClass("hide");
		});
		
		// 모달 닫기
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().parent().hasClass("modal")) {
				var filter = $(this).parent().parent().parent().parent();
				filter.addClass("hide");
				LedgerExcelList.files = [];
				Dropzone.forElement("#my-dropzone").removeAllFiles(true);
				Dropzone.forElement("#my-dropzone2").removeAllFiles(true);
				$("input[type=text]").val("");
			}
		});
		// ESC
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { // escape key maps to keycode `27`
				$(document).find(".modal").addClass("hide");
				
				LedgerExcelList.files = [];
				Dropzone.forElement("#my-dropzone").removeAllFiles(true);
				Dropzone.forElement("#my-dropzone2").removeAllFiles(true);
				$("input[type=text]").val("");
		    }
		});
		
		// 원장 excel 등록 btnAddExcelSettingOk
		$("#btnAddExcelSettingOk").click(function() {
			LedgerExcelList.excelSettingExist();
		});
		
		// 금융지점 변경
		$("#selFinancialCompanyCode").change(function() {
			LedgerExcelList.getFinancialBranchList($("#selFinancialCompanyCode").val());
		});
		
		// 원장 excel 수정
		$("#btnModifyExcelSettingOk").click(function() {
			var flag = confirm("정말 수정하시겠습니까?");
			if(flag) {
				LedgerExcelList.modifyExcelSetting();
			}
		});
		
		// 통합 excel 수정
		$("#btnDlCommonExcel").click(function() {
			LedgerExcelList.getCommonExcel();
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 페이징
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerExcelList.Paging = function (page) {
    try {
		if (page > 0) {
			$("#now_page").val(page);
			document.searchForm.submit();
		} else {
			alert("잘못된 경로 입니다");
		}	
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 excel setting 등록
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.addExcelSetting = function () {
    try {
		var formData = new FormData($("#addForm")[0]);
		
		formData.append("ledgerExcelFile", LedgerExcelList.files[0]);
		
    	var data = {
			"ledgerFinancialCompanyCd" : $("#selFinancialCompanyCode").val()
			, "ledgerFinancialBranchCd" : $("#selFinancialBranchCode").val()
			, "ledgerFinancialProductCd" : $("#selFinancialProduct").val()
			, "ledgerExcelUseYn" : $("input[name='auto-radio']:checked").val()
			, "ledgerExcelCommonYn" : $("input[name='common-radio']:checked").val()
			, "ledgerExcelHeaderRow" : $("#textExcelHeader").val()
			, "ledgerExcelSheet" : $("#textExcelSheet").val()
			, "ledgerCarPrice" : $("#textCarPrice").val()
			, "ledgerAcquisitionCost" : $("#textAcquisitionCost").val()
			, "ledgerDeliveryDate" : $("#textDeliveryDate").val()
			, "ledgerCustomerName" : $("#textCustomerName").val()
			, "ledgerCarName" : $("#textCarName").val()
			, "ledgerCarNumber" : $("#textCarNumber").val()
			, "ledgerTotalFeePercent" : $("#textTotalFeePercent").val()
			, "ledgerTotalFeeSum" : $("#textTotalFeeSum").val()
			, "ledgerTotalFeeSupplyPrice" : $("#textTotalFeeSupplyPrice").val()
			, "ledgerTotalFeeSurtax" : $("#textTotalFeeSurtax").val()
			, "ledgerSlidingPercent" : $("#textSlidingPercent").val()
			, "ledgerSlidingSum" : $("#textSlidingSum").val()
			, "ledgerSlidingSupplyPrice" : $("#textSlidingSupplyPrice").val()
			, "ledgerSlidingSurtax" : $("#textSlidingSurtax").val()
			, "ledgerAddPromotion" : $("#textPromotionFee").val()
			, "ledgerPromotionMemo" : $("#textPromotionName").val()
		};
		
		formData.append("ledgerExcelVO", new Blob([JSON.stringify(data)], {type: "application/json"}));
		
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/setting/excel/insert",
			data : formData,
			contentType: false,
			processData: false,
			enctype: 'multipart/form-data',
			success : function(json){
				if(json.resultCode == "00000") {
					alert("등록되었습니다");
					location.reload();
				}else {
					alert(json.resultMsg);
				}
			},
			error: function(request,status,error,data){
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 excel setting 수정
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.modifyExcelSetting = function () {
    try {
		var formData = new FormData($("#addForm")[0]);
		
		if(LedgerExcelList.files.length > 0) {
			formData.append("ledgerExcelFile", LedgerExcelList.files[0]);
		}
		
    	var data = {
			"ledgerFinancialCompanyCd" : $("#textFinancialCompanyCd").val()
			, "ledgerFinancialBranchCd" : $("#textFinancialBranchCd").val()
			, "ledgerFinancialProductCd" : $("#textFinancialProductcd").val()
			, "ledgerExcelUseYn" : $("input[name='auto-radio2']:checked").val()
			, "ledgerExcelCommonYn" : $("input[name='common-radio2']:checked").val()
			, "ledgerExcelHeaderRow" : $("#textExcelHeader2").val()
			, "ledgerExcelSheet" : $("#textExcelSheet2").val()
			, "ledgerCarPrice" : $("#textCarPrice2").val()
			, "ledgerAcquisitionCost" : $("#textAcquisitionCost2").val()
			, "ledgerDeliveryDate" : $("#textDeliveryDate2").val()
			, "ledgerCustomerName" : $("#textCustomerName2").val()
			, "ledgerCarName" : $("#textCarName2").val()
			, "ledgerCarNumber" : $("#textCarNumber2").val()
			, "ledgerTotalFeePercent" : $("#textTotalFeePercent2").val()
			, "ledgerTotalFeeSum" : $("#textTotalFeeSum2").val()
			, "ledgerTotalFeeSupplyPrice" : $("#textTotalFeeSupplyPrice2").val()
			, "ledgerTotalFeeSurtax" : $("#textTotalFeeSurtax2").val()
			, "ledgerSlidingPercent" : $("#textSlidingPercent2").val()
			, "ledgerSlidingSum" : $("#textSlidingSum2").val()
			, "ledgerSlidingSupplyPrice" : $("#textSlidingSupplyPrice2").val()
			, "ledgerSlidingSurtax" : $("#textSlidingSurtax2").val()
			, "ledgerAddPromotion" : $("#textPromotionFee2").val()
			, "ledgerPromotionMemo" : $("#textPromotionName2").val()
			, "ledgerExcelSeq" : LedgerExcelList.ledgerExcelSeq
		};
		
		formData.append("ledgerExcelVO", new Blob([JSON.stringify(data)], {type: "application/json"}));
		
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/setting/excel/update",
			data : formData,
			contentType: false,
			processData: false,
			enctype: 'multipart/form-data',
			success : function(json){
				if(json.resultCode == "00000") {
					alert("수정되었습니다");
					location.reload();
				}else {
					alert(json.resultMsg);
				}
			},
			error: function(request,status,error,data){
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 excel setting is exist
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.excelSettingExist = function () {
    try {
		var data = {
			"ledgerFinancialCompanyCd" : $("#selFinancialCompanyCode").val()
			, "ledgerFinancialBranchCd" : $("#selFinancialBranchCode").val()
			, "ledgerFinancialProductCd" : $("#selFinancialProduct").val()
		};
	
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/setting/excel/exist",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					if(json.isExist == "Y") {
						checkIdFlag = false;
					}else if(json.isExist == "N") {
						checkIdFlag = true;
					}
					
					if(checkIdFlag) {
						if(LedgerExcelList.validationCheck()) {
							LedgerExcelList.addExcelSetting();
						}
					}else {
						alert("이미 등록된 설정이 있습니다.");
					}
				}else {
					alert(json.resultMsg);
				}
			},
			error: function(request,status,error,data){
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 유효성 검사
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.validationCheck = function () {
    try {
		var flag = true;
		
		if($("input[name='common-radio']:checked").val() == "N") {
			$("#textExcelHeader").css("border", "");
			$("#textExcelSheet").css("border", "");
			
			if($("#textExcelHeader").val() == "") {
				flag = false;
				alert("엑셀 헤더 열 위치를 입력해주세요");
				$("#textExcelHeader").focus();
				$("#textExcelHeader").css("border", "1px solid red");
			}
			
			else if($("#textExcelSheet").val() == "") {
				flag = false;
				alert("엑셀 시트 명를 입력해주세요");
				$("#textExcelSheet").focus();
				$("#textExcelSheet").css("border", "1px solid red");
			}
			
			else if(LedgerExcelList.files.length < 1) {
				flag = false;
				alert("Excel 파일을 업로드해주세요");
			}
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 금융지점 목록 조회
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.getFinancialBranchList = function (codeParentId) {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/ledger/financial/" + codeParentId + "/branch/list",
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selFinancialBranchCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selFinancialBranchCode").append(option);
					}
				}else {
					alert(json.resultMsg);
				}
			},
			error: function(request,status,error,data){
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 상세 모달
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.getledgerExcelInfo = function (ledgerExcelSeq) {
    try {
		LedgerExcelList.ledgerExcelSeq = ledgerExcelSeq;
		
		var data = {
			ledgerExcelSeq : ledgerExcelSeq
		};
		
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/setting/excel/detail",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					var vo = json.ledgerExcelVO;
					
					$("#textFinancialCompanyCode2").val(vo.ledgerFinancialCompanyCdName);
					$("#textFinancialBranchCode2").val(vo.ledgerFinancialBranchCdName);
					$("#textFinancialProduct2").val(vo.ledgerFinancialProductCdName);
					
					$("#textFinancialCompanyCd").val(vo.ledgerFinancialCompanyCd);
					$("#textFinancialBranchCd").val(vo.ledgerFinancialBranchCd);
					$("#textFinancialProductcd").val(vo.ledgerFinancialProductCd);
					
					if(vo.ledgerExcelUseYn == "Y") {
						$("#arY2").prop("checked", true);
					}else {
						$("#arN2").prop("checked", true);
					}
					
					if(vo.ledgerExcelCommonYn == "Y") {
						$("#crY2").prop("checked", true);
						
						$("#modalInfoExcel input[type=text]").attr("disabled", "disabled");
					}else {
						$("#crN2").prop("checked", true);
					}
					
					$("#textExcelHeader2").val(vo.ledgerExcelHeaderRow);
					$("#textExcelSheet2").val(vo.ledgerExcelSheet);
					$("#textCarPrice2").val(vo.ledgerCarPrice);
					$("#textAcquisitionCost2").val(vo.ledgerAcquisitionCost);
					$("#textDeliveryDate2").val(vo.ledgerDeliveryDate);
					$("#textCustomerName2").val(vo.ledgerCustomerName);
					$("#textCarName2").val(vo.ledgerCarName);
					$("#textCarNumber2").val(vo.ledgerCarNumber);
					$("#textTotalFeePercent2").val(vo.ledgerTotalFeePercent);
					$("#textTotalFeeSum2").val(vo.ledgerTotalFeeSum);
					$("#textTotalFeeSupplyPrice2").val(vo.ledgerTotalFeeSupplyPrice);
					$("#textTotalFeeSurtax2").val(vo.ledgerTotalFeeSurtax);
					$("#textSlidingPercent2").val(vo.ledgerSlidingPercent);
					$("#textSlidingSum2").val(vo.ledgerSlidingSum);
					$("#textSlidingSupplyPrice2").val(vo.ledgerSlidingSupplyPrice);
					$("#textSlidingSurtax2").val(vo.ledgerSlidingSurtax);
					$("#textPromotionFee2").val(vo.ledgerAddPromotion);
					$("#textPromotionName2").val(vo.ledgerPromotionMemo);
					$("#aExcelFile").attr("href", vo.ledgerExcelFilePath);
					$("#aExcelFile").html(vo.ledgerExcelFileName);
					
					$("#modalInfoExcel").removeClass("hide");
				}else {
					alert(json.resultMsg);
				}
			},
			error: function(request,status,error,data){
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 통합 excel 다운로드
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerExcelList.getCommonExcel = function () {
    try {
		window.open("/system/ledger/excel/dl/common");
    }
    catch (e) { console.log(e.message); }
}