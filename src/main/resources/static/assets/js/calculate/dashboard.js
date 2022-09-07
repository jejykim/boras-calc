/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		Dashboard.PageLoad();
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
Dashboard Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Dashboard Class
var Dashboard = {};

//Dashboard Const

//Dashboard Variable

//Dashboard
var Properties = {};
Dashboard.Properties = Properties;

//Dashboard Method
Dashboard.PageLoad = function () { };  //메인 페이지 로드 공통 함수
Dashboard.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Dashboard Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Dashboard.PageLoad = function () {
    try {
        Dashboard.Init();
        Dashboard.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Dashboard.Init = function () {
    try {
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Dashboard.SetEvent = function () {
    try {
		// 년, 월 변경
		$("#selYear").change(function() {
			Dashboard.getCalc();
		});
		$("#selMonth").change(function() {
			Dashboard.getCalc();
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 대시보드 월별 조회
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Dashboard.getCalc = function () {
    try {
		$("#textYear").val($("#selYear").val());
		$("#textMonth").val($("#selMonth").val());
		
		$("#formDashboard").submit();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 대시보드 상세 이동
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Dashboard.getInfo = function (financialCompanyCd) {
    try {
		var year = $("#selYear").val();
		var month = $("#selMonth").val();
	
		location.href = "/calc/dashboard/" + financialCompanyCd + "/" + year + "/" + month;
    }
    catch (e) { console.log(e.message); }
}