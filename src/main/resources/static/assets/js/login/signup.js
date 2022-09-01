/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		Signup.PageLoad();
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
Signup Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Signup Class
var Signup = {};

//Signup Const

//Signup Variable

//Signup
var Properties = {};
Signup.Properties = Properties;

//Signup Method
Signup.PageLoad = function () { };  //메인 페이지 로드 공통 함수
Signup.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Signup Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
Signup.PageLoad = function () {
    try {
        Signup.Init();
        Signup.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
Signup.Init = function () {
    try {
		$("#userId").focus();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
Signup.SetEvent = function () {
    try {
		$("#btnSignup").click(function() {
			if(Signup.ValidationCheck()) {
				$("#formSignup").submit();
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 유효성 검사
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
Signup.ValidationCheck = function () {
    try {
		var flag = true;
		
		$("#userId").css("border", "");
		$("#userPw").css("border", "");
		$("#userPwCheck").css("border", "");
		$("#userName").css("border", "");
		$("#selBusinessType").css("border", "");
		$("#userAgCompany").css("border", "");
		
		if($("#userId").val() == "") {
			flag = false;
			alert("새 비밀번호를 입력해주세요");
			$("#userId").focus();
			$("#userId").css("border", "red solid 1px");
		}
		
		else if($("#userPw").val() == "") {
			flag = false;
			alert("새 비밀번호를 입력해주세요");
			$("#userPw").focus();
			$("#userPw").css("border", "red solid 1px");
		}
		
		else if($("#userPwCheck").val() == "") {
			flag = false;
			alert("새 비밀번호 확인을 입력해주세요");
			$("#userPwCheck").focus();
			$("#userPwCheck").css("border", "red solid 1px");
		}
		
		else if($("#userPw").val() != $("#userPwCheck").val()) {
			flag = false;
			alert("비밀번호가 다릅니다.\n재입력해주세요.");
			$("#userPwCheck").focus();
			$("#userPwCheck").css("border", "red solid 1px");
		}
		
		else if($("#userName").val() == "") {
			flag = false;
			alert("이름을 입력해주세요");
			$("#userName").focus();
			$("#userName").css("border", "red solid 1px");
		}
		
		else if($("#selBusinessType").val() == "") {
			flag = false;
			alert("사업자 형태를 선택해주세요");
			$("#selBusinessType").focus();
			$("#selBusinessType").css("border", "red solid 1px");
		}
		
		else if($("#selBusinessType").val() == "5200" && $("#userAgCompany").val() == "") {
			flag = false;
			alert("회사명을 입력해주세요");
			$("#userAgCompany").focus();
			$("#userAgCompany").css("border", "red solid 1px");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}
