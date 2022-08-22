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
		// 사용자 탭 li
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