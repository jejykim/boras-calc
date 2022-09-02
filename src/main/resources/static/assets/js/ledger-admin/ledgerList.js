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
LedgerList.selectLedgerSeq = 0;
LedgerList.selectAG = "";

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
		
		// 금융지점
		LedgerList.getFinancialBranchList($("#selFinancialCompanyCode").val());
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
			$("#now_page").val("1");
			document.searchForm.submit();
		});
		$("#liRequest").click(function() {
			$("#searchText").val("");
			$("#stateType").val("request");
			$("#now_page").val("1");
			document.searchForm.submit();
		});
		$("#liComplete").click(function() {
			$("#searchText").val("");
			$("#stateType").val("complete");
			$("#now_page").val("1");
			document.searchForm.submit();
		});
		$("#liLeft").click(function() {
			$("#searchText").val("");
			$("#stateType").val("left");
			$("#now_page").val("1");
			document.searchForm.submit();
		});
		
		// 날짜 변경
		$("#selMonth, #selYear").change(function() {
			$("#searchText").val("");
			$("#ledgerCreateYear").val($("#selYear").val());
			$("#ledgerCreateMonth").val($("#selMonth").val());
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
				
				$("#textOther").val("");
				LedgerList.selectLedgerSeq = 0;
				LedgerList.selectAG = "";
				
				$("#selDealerBrand").val("");
				$("#selDealerCompany").val("");
				$("#selAgList").val("");
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
		
		// 원장 Excel 업로드 금융사 -> 금융지점
		$("#selFinancialCompanyCode").change(function() {
			LedgerList.getFinancialBranchList($("#selFinancialCompanyCode").val());
		});
		
		// 원장 수기 추가 페이지 이동
		$("#btnAddLedger").click(function() {
			location.href = "/admin/ledger/add";
		});
		
		// 체크박스
		$("#checkbox-1").change(function() {
			if($("#checkbox-1").is(":checked")) {
				$("input[name=chk]").prop("checked", true);
			}else {
				$("input[name=chk]").prop("checked", false);
			}
		});
		
		// 승인 처리
		$("#btnApprovalOk").click(function() {
			LedgerList.approvalOk();
		});
		
		// 기타사항 완료/수정
		$("#completeOtherOk").click(function() {
			LedgerList.completeOtherOk();
		});
		
		// 딜러브랜드 => 딜러사 조회
		$("#selDealerBrand").change(function() {
			LedgerList.getDealerCompany($("#selDealerBrand").val(), 0);
		});
		
		// 딜러사 저장
		$("#btnAddDealer").click(function() {
			LedgerList.addDealer();
		});
		
		// ESC
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { // escape key maps to keycode `27`
				$(document).find(".modal").addClass("hide");
				
				$("#textOther").val("");
				LedgerList.selectLedgerSeq = 0;
				LedgerList.selectAG = "";
				
				$("#selDealerBrand").val("");
				$("#selDealerCompany").val("");
				$("#selAgList").val("");
		    }
		});
		
		// AG 선택
		$("#selAgList").change(function() {
			LedgerList.selectAg();
		});
		
		// AG 선택 저장
		$("#btnAddAg").click(function() {
			var flag = confirm("AG를 매칭하시겠습니까?");
			if(flag) {
				LedgerList.addAg();
			}
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
		$("#selFinancialBranchCode").css("border", "");
		
		if(LedgerList.files.length < 1) {
			flag = false;
			alert("Excel 파일을 업로드해주세요");
		}
		
		else if($("#selFinancialBranchCode").val() == "") {
			flag = false;
			alert("금융지점을 선택해주세요");
			$("#selFinancialBranchCode").css("border", "red solid 1px");
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
LedgerList.getFinancialBranchList = function (codeParentId) {
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
내      용  : 승인 처리
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.approvalOk = function () {
    try {
		var chkLength = $("input[name=chk]:checked").length;
		
		if(chkLength > 0) {
			
			var flag = confirm("총 " + chkLength + "건의 원장을 승인하시겠습니까?");
			if(flag) {
				var chkArray = new Array();
				
				for(var chk of $("input[name=chk]:checked")) {
					chkArray.push($(chk).val());
				}
				
				var data = {
					arrApprovalSeq : chkArray
				};
				
				$.ajax({
					type : "post",
					url : "/v1/api/approval/confrim",
					data : data,
					success : function(json){
						if(json.resultCode == "00000") {
							alert("승인되었습니다");
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
		}else {
			alert("승인할 원장을 선택해주세요");
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 기타사항 모달
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.otherModal = function (ledgerSeq, otherText) {
    try {
		if(otherText == "") {
			$("#spanOtherModalHeader").html("추가");
		}else {
			$("#spanOtherModalHeader").html("수정");
		}
		
		$("#textOther").val(otherText);
		LedgerList.selectLedgerSeq = ledgerSeq;
		
		$("#ledgerOtherModal").removeClass("hide");
		
		$("#textOther").focus();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 기타사항 완료/수정
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.completeOtherOk = function () {
    try {
		var flag = confirm("기타사항을 추가 및 수정하시겠습니까?");
		
		if(flag) {
			var data = {
				ledgerSeq : LedgerList.selectLedgerSeq
				, ledgerOther : $("#textOther").val()
			};
			
			$.ajax({
				type : "post",
				url : "/v1/api/ledger/other/update",
				data : data,
				success : function(json){
					if(json.resultCode == "00000") {
						alert("기타사항이 수정되었습니다.");
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
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 딜러사 모달
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.dealerModal = function (ledgerSeq, dealerBrand, dealerCompany) {
    try {
		LedgerList.selectLedgerSeq = ledgerSeq;
		
		if(dealerBrand > 0) {
			$("#selDealerBrand").val(dealerBrand);
		}
		
		if(dealerCompany > 0) {
			LedgerList.getDealerCompany(dealerBrand, dealerCompany);
		}
		
		$("#dealerModal").removeClass("hide");
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 딜러 브랜드 조회
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.getDealerCompany = function (dealerBrand, dealerCompany) {
    try {
		var data = {
			"codeParentId" : dealerBrand
		};
	
		$.ajax({
			type : "post",
			url : "/v1/api/code/select",
			data : JSON.stringify(data),
			contentType: 'application/json',
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selDealerCompany").children().remove();
					
					var firstOption = '<option value="">--딜러사를 선택해주세요--</option>';
					$("#selDealerCompany").append(firstOption);
					
					for(var item of json.list) {
						var option = "<option value='" + item.codeId + "'>" + item.codeName + "</option>";
						
						$("#selDealerCompany").append(option);
					}
					
					if(dealerCompany > 0) {
						$("#selDealerCompany").val(dealerCompany);
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
내      용  : 딜러 브랜드 저장
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.addDealer = function () {
    try {
		var data = {
			ledgerDealerBrandCd : $("#selDealerBrand").val()
			, ledgerDealerCompanyCd : $("#selDealerCompany").val()
			, ledgerSeq : LedgerList.selectLedgerSeq
		};
	
		$.ajax({
				type : "post",
				url : "/v1/api/ledger/dealer/update",
				data : data,
				success : function(json){
					if(json.resultCode == "00000") {
						alert("딜러사가 저장되었습니다.");
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
내      용  : AG사 모달
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.selectAgModal = function (ledgerSeq, isExist) {
    try {
		LedgerList.selectLedgerSeq = ledgerSeq;
		
		if(isExist == "Y") {
			var data = {approvalLedgerSeq : ledgerSeq};
			
			$.ajax({
				type : "post",
				url : "/v1/api/ledger/approval/ag",
				data : data,
				success : function(json){
					if(json.resultCode == "00000") {
						$("#divSelectedAg").children().remove();
						
						console.log(json.list);
						
						if(json.list.length > 1) {
							LedgerList.selectAG = "중복";
						}
						
						for(var item of json.list) {
							var pTag = '<p class="on" data="' + item.approvalUserId + '"><span>' + item.userName + '</span><i class="fa fa-times" aria-hidden="true" onclick="LedgerList.deleteAg(\'' + item.approvalUserId + '\', this)"></i></p>';
							$("#divSelectedAg").append(pTag);
						}
						
						$("#agModal").removeClass("hide");
					}else {
						alert(json.resultMsg);
					}
				},
				error: function(request,status,error,data){
					alert("잘못된 접근 경로입니다.");
					return false;
				}
			});
		}else {
			$("#divSelectedAg").children().remove();
			
			$("#agModal").removeClass("hide");
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : AG 선택
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.selectAg = function () {
    try {
		var agId = $("#selAgList").val();
		$("#divSelectedAg").children().remove();
		
		if(agId != "") {
			LedgerList.selectAG = agId;
			
			var pTag = '<p class="on" data="' + agId + '"><span>' + $("#selAgList option:checked").text() + '</span><i class="fa fa-times" aria-hidden="true" onclick="LedgerList.deleteAg(\'' + agId + '\', this)"></i></p>';
			
			$("#divSelectedAg").append(pTag);
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : AG 삭제
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.deleteAg = function (agId, iTag) {
    try {
		$(iTag).parent().remove();
		$("#selAgList").val("");
		
		var pLength = $("#divSelectedAg p").length;
		
		if(pLength == 1) {
			LedgerList.selectAG = $("#divSelectedAg p").attr("data");
		}else if(pLength == 0) {
			LedgerList.selectAG = "";
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : AG 저장 + 유효성
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.addAg = function () {
    try {
		$("#selAgList").css("border", "");
	
		if(LedgerList.selectAG == "중복") {
			alert("AG를 하나만 선택해주세요");
			$("#selAgList").css("border", "red solid 1px");
		}else if(LedgerList.selectAG == "") {
			alert("AG를 선택해주세요");
			$("#selAgList").css("border", "red solid 1px");
		}else {
			var data = {
				approvalUserId : LedgerList.selectAG
				, approvalLedgerSeq : LedgerList.selectLedgerSeq
			};
			
			$.ajax({
				type : "post",
				url : "/v1/api/ledger/mapping/ag",
				data : data,
				success : function(json){
					if(json.resultCode == "00000") {
						alert("AG가 매칭되었습니다.");
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
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 상세 이동
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.ledgerInfo = function (ledgerSeq) {
    try {
		location.href="/admin/ledger/info/" + ledgerSeq;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 문의 모달
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.inquiryModal = function (ledgerSeq) {
    try {
		//LedgerList.selectLedgerSeq = ledgerSeq;
		
		/*
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/dealer/update",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("딜러사가 저장되었습니다.");
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
		*/
    }
    catch (e) { console.log(e.message); }
}