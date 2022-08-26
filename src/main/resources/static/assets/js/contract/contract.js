/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		Contract.PageLoad();
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
Contract Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Contract Class
var Contract = {};

//Contract Const

//Contract Variable
var multiRequest = "";
var checkExcelFlag = false;

//Contract
var Properties = {};
Contract.Properties = Properties;

//Contract Method
Contract.PageLoad = function () { };  //메인 페이지 로드 공통 함수
Contract.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Contract Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.PageLoad = function () {
    try {
        Contract.Init();
        Contract.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.Init = function () {
    try {
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.SetEvent = function () {
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
			Contract.Paging(1);
		});
	
		// 검색
		$("#btnSearch").click(function() {
			$("#searchText").val($("#inputSearchText").val());
			Contract.Paging(1);
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				Contract.Paging(1);
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
			Contract.Paging(1);
		});
		
		// 원장 excel 업로드
		$("#btnAddLedgerForExcel").click(function() {
			Contract.excelSettingExist();
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 페이징
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.Paging = function (page) {
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
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.addFilterBox = function (type) {
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
				
				var span = "<span id='spanCodeType'><strong>구분 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='Contract.removeFilter(\"" + type + "\")'></i></span>";
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
				
				var span = "<span id='spanFinancialCompany'><strong>금융사 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='Contract.removeFilter(\"" + type + "\")'></i></span>";
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
				
				var span = "<span id='spanFinancialBranch'><strong>금융지점 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='Contract.removeFilter(\"" + type + "\")'></i></span>";
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
				
				var span = "<span id='spanFinancialProduct'><strong>금융상품 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='Contract.removeFilter(\"" + type + "\")'></i></span>";
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
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.removeFilter = function (type) {
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
		Contract.Paging(1);
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 필터 추가
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.addFilter = function (type, btn) {
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
		Contract.Paging(1);
    }
    catch (e) { console.log(e.message); }
}

