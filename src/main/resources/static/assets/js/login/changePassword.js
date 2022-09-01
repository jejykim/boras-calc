/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		ChangePassword.PageLoad();
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
ChangePassword Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//ChangePassword Class
var ChangePassword = {};

//ChangePassword Const

//ChangePassword Variable

//ChangePassword
var Properties = {};
ChangePassword.Properties = Properties;

//ChangePassword Method
ChangePassword.PageLoad = function () { };  //메인 페이지 로드 공통 함수
ChangePassword.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
ChangePassword Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
ChangePassword.PageLoad = function () {
    try {
        ChangePassword.Init();
        ChangePassword.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
ChangePassword.Init = function () {
    try {
		$("#userPw").focus();
		
		alert("초기 비밀번호로 로그인하셨습니다.\n비밀번호를 변경 후 이용해주세요.");
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
ChangePassword.SetEvent = function () {
    try {
		// 이메일 전송
		$("#btnchangePassword").click(function() {
			if(ChangePassword.ValidationCheck()) {
				ChangePassword.SendImsiPassword("new");
			}
		});
		$("#userPwCheck").keyup(function(e) {
			if(e.keyCode == 13) {
				if(ChangePassword.ValidationCheck()) {
					ChangePassword.SendImsiPassword("new");
				}
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 임시비밀번호 발송
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
ChangePassword.ChangePassword = function () {
    try {
		$("#formChangePassword").submit();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 유효성 검사
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
ChangePassword.ValidationCheck = function () {
    try {
		var flag = true;
		$("#userPw").css("border", "");
		$("#userPwCheck").css("border", "");
		
		if($("#userPw").val() == "") {
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
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}
