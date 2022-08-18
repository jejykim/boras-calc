/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		Common.PageLoad();
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
Common Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Common Class
var Common = {};

//Common Const

//Common Variable

//Common
var Properties = {};
Common.Properties = Properties;

//Common Method
Common.PageLoad = function () { };  //메인 페이지 로드 공통 함수
Common.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Common Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.17 - 최초생성
========================================================================*/
Common.PageLoad = function () {
    try {
        Common.Init();
        Common.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.17 - 최초생성
========================================================================*/
Common.Init = function () {
    try {
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.17 - 최초생성
========================================================================*/
Common.SetEvent = function () {
    try {
    }
    catch (e) { console.log(e.message); }
}