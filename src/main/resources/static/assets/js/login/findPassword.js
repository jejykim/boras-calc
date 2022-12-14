/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		FindPassword.PageLoad();
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
FindPassword Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//FindPassword Class
var FindPassword = {};

//FindPassword Const

//FindPassword Variable

//FindPassword
var Properties = {};
FindPassword.Properties = Properties;

//FindPassword Method
FindPassword.PageLoad = function () { };  //메인 페이지 로드 공통 함수
FindPassword.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
FindPassword Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
FindPassword.PageLoad = function () {
    try {
        FindPassword.Init();
        FindPassword.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
FindPassword.Init = function () {
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
FindPassword.SetEvent = function () {
    try {
		// 이메일 전송
		$("#btnFindPassword").click(function() {
			if(FindPassword.ValidationCheck()) {
				FindPassword.SendImsiPassword("new");
			}
		});
		$("#userEmail").keyup(function(e) {
			if(e.keyCode == 13) {
				if(FindPassword.ValidationCheck()) {
					FindPassword.SendImsiPassword("new");
				}
			}
		});
		
		// 모달 닫기
		$("#btnCloseModal").click(function() {
			$("#completeFindPasswordModal").addClass("hide");
		});
		
		$("#btnResend").click(function() {
			FindPassword.SendImsiPassword("resend");
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 임시비밀번호 발송
작  성  자  : 김진열
2022.08.05 - 최초생성
========================================================================*/
FindPassword.SendImsiPassword = function (type) {
    try {
		var data = {
			userId : $("#userId").val()
			, userEmail : $("#userEmail").val()
		};
		
		$.ajax({
			type : "post",
			url : "/v1/api/user/send/imsi/password",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					if(type == "resend") {
						alert("재전송 되었습니다.\n최신메일을 확인해주세요.");
					}else {
						$("#completeFindPasswordModal").removeClass("hide");
					}
				}else if(json.resultCode == "10002"){
					alert("등록된 ID와 이메일 주소가 없습니다.\n다시 입력해주세요.");
				}else {
					alert(json.resultMsg);
				}
			},
			error: function(request,status,error,data){
				alert("잘못된 접근 경로입니다.");
				return false;
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
FindPassword.ValidationCheck = function () {
    try {
		var flag = true;
		$("#userId").css("border", "");
		$("#userEmail").css("border", "");
		
		if($("#userId").val() == "") {
			flag = false;
			alert("아이디를 입력해주세요");
			$("#userId").focus();
			$("#userId").css("border", "red solid 1px");
		}
		
		else if($("#userEmail").val() == "") {
			flag = false;
			alert("이메일을 입력해주세요");
			$("#userEmail").focus();
			$("#userEmail").css("border", "red solid 1px");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}
