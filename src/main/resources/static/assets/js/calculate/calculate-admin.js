/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		CalculateAdmin.PageLoad();
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
CalculateAdmin Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//CalculateAdmin Class
var CalculateAdmin = {};

//CalculateAdmin Const

//CalculateAdmin Variable
var multiRequest = "";
var checkExcelFlag = false;

//CalculateAdmin
var Properties = {};
CalculateAdmin.Properties = Properties;

//CalculateAdmin Method
CalculateAdmin.PageLoad = function() { };  //메인 페이지 로드 공통 함수
CalculateAdmin.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
CalculateAdmin Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
CalculateAdmin.PageLoad = function() {
	try {
		CalculateAdmin.Init();
		CalculateAdmin.SetEvent();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
CalculateAdmin.Init = function() {
	try {
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
CalculateAdmin.SetEvent = function() {
	try {

		$(".tab li").click(function(){
			$("#userBusinessTypeCd").val($(this).attr('id'));
			document.tabForm.submit();
			
		});
		
		$("#selYear, #selMonth").change(function(){
			$("#calculateYear").val($("#selYear").val());
			$("#calculateMonth").val($("#selMonth").val());
			document.tabForm.submit();
		});
		
	}
	catch (e) { console.log(e.message); }
}


/*=======================================================================
내      용  : 페이징
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
CalculateAdmin.Paging = function (page) {
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
