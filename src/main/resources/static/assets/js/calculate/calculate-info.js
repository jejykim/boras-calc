/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		CalculateInfo.PageLoad();
	}
	catch (e) { console.log(e.message); }

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
CalculateInfo Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//CalculateInfo Class
var CalculateInfo = {};

//CalculateInfo Const

//CalculateInfo Variable
var multiRequest = "";
var checkExcelFlag = false;

//CalculateInfo
var Properties = {};
CalculateInfo.Properties = Properties;

//CalculateInfo Method
CalculateInfo.PageLoad = function() { };  //메인 페이지 로드 공통 함수
CalculateInfo.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
CalculateInfo Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
CalculateInfo.PageLoad = function() {
	try {
		CalculateInfo.Init();
		CalculateInfo.SetEvent();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
CalculateInfo.Init = function() {
	try {
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
CalculateInfo.SetEvent = function() {
	try {

		$("ul li").click(function(){
			$("#ledgerFinancialCompanyCd").val($(this).val());
			document.tabForm.submit();
		});
		
	}
	catch (e) { console.log(e.message); }
}

