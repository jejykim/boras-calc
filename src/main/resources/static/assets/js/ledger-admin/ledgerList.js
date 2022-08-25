/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		LedgerList.PageLoad();
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
LedgerList Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//LedgerList Class
var LedgerList = {};

//LedgerList Const

//LedgerList Variable
LedgerList.files = [];
var multiRequest = "";
var checkExcelFlag = false;

//LedgerList
var Properties = {};
LedgerList.Properties = Properties;

//LedgerList Method
LedgerList.PageLoad = function () { };  //메인 페이지 로드 공통 함수
LedgerList.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
LedgerList Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.PageLoad = function () {
    try {
        LedgerList.Init();
        LedgerList.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.Init = function () {
    try {
		if($("#inputSearchText").val() != "") {
			$("#inputSearchText").focus();
			$('#inputSearchText')[0].setSelectionRange($('#inputSearchText').val().length, $('#inputSearchText').val().length);
		}
		
		// 필터 박스
		$("#divFilter").children('span').remove();
		if(sCodeType.length > 0) {
			LedgerList.addFilterBox("sCodeType");
		}
		if(sFinancialCompany.length > 0) {
			LedgerList.addFilterBox("sFinancialCompany");
		}
		if(sFinancialBranch.length > 0) {
			LedgerList.addFilterBox("sFinancialBranch");
		}
		if(sFinancialProduct.length > 0) {
			LedgerList.addFilterBox("sFinancialProduct");
		}
		if(sCodeType.length == 0 && sFinancialCompany.length == 0 && sFinancialBranch.length == 0 && sFinancialProduct.length == 0) {
			$("#divFilter").hide();
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.SetEvent = function () {
    try {
		// 사용자 탭 li
		$("#liAll").click(function() {
			$("#searchText").val("");
			$("#stateType").val("all");
			document.searchForm.submit();
		});
		$("#liRequest").click(function() {
			$("#searchText").val("");
			$("#stateType").val("request");
			document.searchForm.submit();
		});
		$("#liComplete").click(function() {
			$("#searchText").val("");
			$("#stateType").val("complete");
			document.searchForm.submit();
		});
		$("#liLeft").click(function() {
			$("#searchText").val("");
			$("#stateType").val("left");
			document.searchForm.submit();
		});
		
		// 승인요청 - 상태처리 (정상, 중복)
		$("input[name='multiRequest']").click(function() {
			multiRequest = $("input[name='multiRequest']:checked").val();
			LedgerList.Paging(1);
		});
	
		// 검색
		$("#btnSearch").click(function() {
			$("#searchText").val($("#inputSearchText").val());
			LedgerList.Paging(1);
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				LedgerList.Paging(1);
			}
		});
		
		// 필터 드랍
		$("#thCodeType").click(function() {
			$("#divCodeTypeFilter").toggle();
			if($('#divCodeTypeFilter').is(':visible')) {
				$("#thCodeType").addClass("on");
			}else {
				$("#thCodeType").removeClass("on");
			}
		});
		$("#thFinancialCompany").click(function() {
			$("#divFinancialCompanyFilter").toggle();
			if($('#divFinancialCompanyFilter').is(':visible')) {
				$("#thFinancialCompany").addClass("on");
			}else {
				$("#thFinancialCompany").removeClass("on");
			}
		});
		$("#thFinancialBranch").click(function() {
			$("#divFinancialBranchFilter").toggle();
			if($('#divFinancialBranchFilter').is(':visible')) {
				$("#thFinancialBranch").addClass("on");
			}else {
				$("#thFinancialBranch").removeClass("on");
			}
		});
		$("#thFinancialProduct").click(function() {
			$("#divFinancialProductFilter").toggle();
			if($('#divFinancialProductFilter').is(':visible')) {
				$("#thFinancialProduct").addClass("on");
			}else {
				$("#thFinancialProduct").removeClass("on");
			}
		});
		
		// 필터 취소
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().hasClass("filter-modal")) {
				var filter = $(this).parent().parent().parent();
				filter.hide();
				var id = filter.attr("id");
				switch(id) {
					case "divCodeTypeFilter" :
						$("#thCodeType").removeClass("on");
						break;
					case "divFinancialCompanyFilter" :
						$("#thFinancialCompany").removeClass("on");
						break;
					case "divFinancialBranchFilter" :
						$("#thFinancialBranch").removeClass("on");
						break;
					case "divFinancialProductFilter" :
						$("#thFinancialProduct").removeClass("on");
						break;
					default :
						break;
				}
			}
		});
		
		// 모달 닫기
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().parent().hasClass("modal")) {
				var filter = $(this).parent().parent().parent().parent();
				filter.addClass("hide");
			}
		});
		
		// 원장 엑셀 업로드 모달
		$("#btnAddExcel").click(function() {
			if(!$('#addExcelModal').is(':visible')) {
				$("#addExcelModal").removeClass("hide");
			}
		});
		
		// 구분 선택
		$("#btnAddExcel").click(function() {
			if(!$('#addExcelModal').is(':visible')) {
				$("#addExcelModal").removeClass("hide");
			}
		});
		
		// 필터 초기화
		$("#btnClearFilter").click(function() {
			sCodeType = [];
			sFinancialCompany = [];
			sFinancialBranch = [];
			sFinancialProduct = [];
			LedgerList.Paging(1);
		});
		
		// 원장 excel 업로드
		$("#btnAddLedgerForExcel").click(function() {
			LedgerList.excelSettingExist();
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 페이징
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.Paging = function (page) {
    try {
		if (page > 0) {
			$("#now_page").val(page);
			
			if(sCodeType.length > 0) {
				for(var value of sCodeType) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerTypeCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			if(sFinancialCompany.length > 0) {
				for(var value of sFinancialCompany) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerFinancialCompanyCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			if(sFinancialBranch.length > 0) {
				for(var value of sFinancialBranch) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerFinancialBranchCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			if(sFinancialProduct.length > 0) {
				for(var value of sFinancialProduct) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerFinancialProductCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			
			if($("#stateType").val() == "request") {
				$('<input>').attr({
				    type: 'hidden',
				    name: 'multiRequestYn',
				    value: multiRequest
				}).appendTo('#searchForm');
			}
			
			document.searchForm.submit();
		} else {
			alert("잘못된 경로 입니다");
		}	
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 검색 필터 박스 생성
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.addFilterBox = function (type) {
    try {
		switch(type) {
			case "sCodeType" :
				var filter = $("#divCodeTypeFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanCodeType'><strong>구분 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			case "sFinancialCompany" :
				var filter = $("#divFinancialCompanyFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanFinancialCompany'><strong>금융사 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			case "sFinancialBranch" :
				var filter = $("#divFinancialBranchFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanFinancialBranch'><strong>금융지점 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			case "sFinancialProduct" :
				var filter = $("#divFinancialProductFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanFinancialProduct'><strong>금융상품 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			default :
				break;
		}
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 필터제거
작  성  자  : 김진열
2022.08.24 - 최초생성
========================================================================*/
LedgerList.removeFilter = function (type) {
    try {
		switch(type) {
			case "sCodeType" :
				sCodeType = [];
				$("#spanCodeType").remove();
				break;
			case "sFinancialCompany" :
				sFinancialCompany = [];
				$("#spanFinancialCompany").remove();
				break;
			case "sFinancialBranch" :
				sFinancialBranch = [];
				$("#spanFinancialBranch").remove();
				break;
			case "sFinancialProduct" :
				sFinancialProduct = [];
				$("#spanFinancialProduct").remove();
				break;
			default :
				break;
		}
		
		// 페이지 이동
		LedgerList.Paging(1);
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 필터 추가
작  성  자  : 김진열
2022.08.24 - 최초생성
========================================================================*/
LedgerList.addFilter = function (type, btn) {
    try {
		console.log($(btn).parent().parent().parent());
		if($(btn).parent().parent().parent().hasClass("filter-modal")) {
			var filter = $(btn).parent().parent().parent();
			var chkList = filter.find("input:checked");
			
			switch(type) {
				case "sCodeType" :
					sCodeType = [];
					for(var i of chkList) {
						sCodeType.push($(i).val());
					}
					break;
				case "sFinancialCompany" :
					sFinancialCompany = [];
					sFinancialBranch = [];
					for(var i of chkList) {
						sFinancialCompany.push($(i).val());
					}
					break;
				case "sFinancialBranch" :
					sFinancialBranch = [];
					for(var i of chkList) {
						sFinancialBranch.push($(i).val());
					}
					break;
				case "sFinancialProduct" :
					sFinancialProduct = [];
					for(var i of chkList) {
						sFinancialProduct.push($(i).val());
					}
					break;
				default :
					break;
			}
		}
		
		// 페이지 이동
		LedgerList.Paging(1);
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 필터 추가
작  성  자  : 김진열
2022.08.24 - 최초생성
========================================================================*/
LedgerList.addLedgerForExcel = function () {
    try {
		var formData = new FormData($("#addForm")[0]);
		
		formData.append("ledgerExcelFile", LedgerList.files[0]);
		
    	var data = {
			"ledgerFinancialCompanyCd" : $("#selFinancialCompanyCode").val()
			, "ledgerFinancialBranchCd" : $("#selFinancialBranchCode").val()
			, "ledgerFinancialProductCd" : $("#selFinancialProduct").val()
			, "ledgerTypeCd" : $("#selCodeCompany").val()
		};
		
		formData.append("ledgerVO", new Blob([JSON.stringify(data)], {type: "application/json"}));
		
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/excel/insert",
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
내      용  : 원장 excel setting is exist
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.excelSettingExist = function () {
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
						checkExcelFlag = false;
					}else if(json.isExist == "N") {
						checkExcelFlag = true;
					}
					
					if(checkExcelFlag) {
						alert("등록된 설정이 없습니다\n설정을 먼저 등록해주세요");
					}else {
						if(LedgerList.validationCheck()) {
							LedgerList.addLedgerForExcel();
						}
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
LedgerList.validationCheck = function () {
    try {
		var flag = true;
		
		if(LedgerList.files.length < 1) {
				flag = false;
				alert("Excel 파일을 업로드해주세요");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}