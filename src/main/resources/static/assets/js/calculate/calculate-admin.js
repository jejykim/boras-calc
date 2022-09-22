/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		Calculate.PageLoad();
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
Calculate Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Calculate Class
var Calculate = {};

//Calculate Const

//Calculate Variable
var multiRequest = "";
var checkExcelFlag = false;

//Calculate
var Properties = {};
Calculate.Properties = Properties;

//Calculate Method
Calculate.PageLoad = function() { };  //메인 페이지 로드 공통 함수
Calculate.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Calculate Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.PageLoad = function() {
	try {
		Calculate.Init();
		Calculate.SetEvent();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.Init = function() {
	try {
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.SetEvent = function() {
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
Calculate.Paging = function (page) {
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
