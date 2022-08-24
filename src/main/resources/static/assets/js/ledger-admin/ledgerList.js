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
		$("#divFilter").children().remove();
		if(sCodeType != "") {
			LedgerList.addFilterBox("sCodeType");
		}
		if(sFinancialCompany != "") {
			LedgerList.addFilterBox("sFinancialCompany");
		}
		if(sFinancialBranch != "") {
			LedgerList.addFilterBox("sFinancialBranch");
		}
		if(sFinancialProduct != "") {
			LedgerList.addFilterBox("sFinancialProduct");
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
					if($(li).find(input).is(":checked")) {
						if(str.lenght > 0) {
							str = str + $(li).find(label).html();
						}else {
							str = str + $(li).find(label).html();
						}
					}
				}
				var span = '<span><strong>구분</strong><span class="filter">' + str + '</span><i class="fa fa-times" aria-hidden="true"></i></span>';
				$("#divFilter").append(span);
				break;
			case "sFinancialCompany" :
				break;
			case "sFinancialBranch" :
				break;
			case "sFinancialProduct" :
				break;
			default :
				break;
		}
		var span = '<span><strong>구분</strong><span class="filter">성문/올카</span><i class="fa fa-times" aria-hidden="true"></i></span>';
    }
    catch (e) { console.log(e.message); }
}