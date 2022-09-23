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
		Common.reloadNewInquiry();
		var reloadInquiryList = setInterval(Common.reloadNewInquiry, 1000 * 30);
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
		// 비밀번호 변경 모달 닫기
		$("#btnCancelChangePw").click(function() {
			$("#changePwModal").addClass("hide");
			
			$("#textNowPw").val("");
			$("#textNewPw").val("");
			$("#textNewPwCheck").val("");
		});
		// ESC
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { // escape key maps to keycode `27`
				$(document).find(".modal").addClass("hide");
				
				$("#textNowPw").val("");
				$("#textNewPw").val("");
				$("#textNewPwCheck").val("");
		    }
		});
		
		// 비밀번호 변경
		$("#btnChangePw").click(function() {
			if(Common.ChangePwValidationCheck()) {
				Common.ChangePw();
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 콤마 생성
작  성  자  : 김은빈
2022.08.17 - 최초생성
========================================================================*/
Common.Comma = function (price) {
	try {
		if(price!=null){
			let splitVal = price.toString().split('.');   
			splitVal[0] = splitVal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
			return splitVal.join("."); 
		}
		else{
			return 0;
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 콤마 제거
작  성  자  : 김은빈
2022.08.17 - 최초생성
========================================================================*/
Common.RemoveComma = function (price) {
    try {
		return price.replace(/,/g, '');
    }
    catch (e) { console.log(e.message); }
}


/*=======================================================================
내      용  : 쿠키 가져오기
작  성  자  : 김진열
2022.08.17 - 최초생성
========================================================================*/
Common.GetCookie = function (keyName) {
    try {
		var value = document.cookie.match('(^|;) ?' + keyName + '=([^;]*)(;|$)');
    	return value? value[2] : null;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 비밀번호 변경 모달 호출
작  성  자  : 김진열
2022.09.05 - 최초생성
========================================================================*/
Common.ChangePwModal = function () {
    try {
		$("#changePwModal").removeClass("hide");
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 비밀번호 변경 모달 호출
작  성  자  : 김진열
2022.09.05 - 최초생성
========================================================================*/
Common.ChangePwValidationCheck = function () {
    try {
		var flag = true;
		
		$("#textNowPw").css("border", "");
		$("#textNewPw").css("border", "");
		$("#textNewPwCheck").css("border", "");
		
		if($("#textNowPw").val() == "") {
			flag = false;
			alert("현재 비밀번호를 입력해주세요");
			$("#textNowPw").focus();
			$("#textNowPw").css("border", "red solid 1px");
		}
		
		else if($("#textNewPw").val() == "") {
			flag = false;
			alert("새 비밀번호를 입력해주세요");
			$("#textNewPw").focus();
			$("#textNewPw").css("border", "red solid 1px");
		}
		
		else if($("#textNewPwCheck").val() == "") {
			flag = false;
			alert("새 비밀번호 확인을 입력해주세요");
			$("#textNewPwCheck").focus();
			$("#textNewPwCheck").css("border", "red solid 1px");
		}
		
		else if($("#textNewPw").val() != $("#textNewPwCheck").val()) {
			flag = false;
			alert("새 비밀번호가 서로 다릅니다");
			$("#textNewPwCheck").focus();
			$("#textNewPw").css("border", "red solid 1px");
			$("#textNewPwCheck").css("border", "red solid 1px");
		}
		
		else if(!Common.PwRole($("#textNewPw").val())) {
			flag = false;
			$("#textNewPw").focus();
			$("#textNowPw").css("border", "red solid 1px");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 비밀번호 규칙성
작  성  자  : 김진열
2022.09.05 - 최초생성
========================================================================*/
Common.PwRole = function (text) {
    try {
		var flag = true;
		
		var regExp1 = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
		
		if(text.match(regExp1) == null) {
			flag = false;
			alert("비밀번호는 영문, 숫자, 특수문자를 포함한 6 ~ 15자리 사이로 생성해주세요");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 비밀번호 변경
작  성  자  : 김진열
2022.09.05 - 최초생성
========================================================================*/
Common.ChangePw = function () {
    try {
		var data = {
			nowPw : $("#textNowPw").val()
			, newPw : $("#textNewPw").val()
			, newPwCheck : $("#textNewPwCheck").val()
		};
	
		$.ajax({
			type : "post",
			url : "/v1/api/user/update/pw",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("비밀번호가 변경되었습니다.");
					
					$("#changePwModal").addClass("hide");
			
					$("#textNowPw").val("");
					$("#textNewPw").val("");
					$("#textNewPwCheck").val("");
				}else if(json.resultCode == "00009") {
					alert(json.msg);
					$("#textNowPw").focus();
					$("#textNowPw").css("border", "red solid 1px");
				}else {
					console.log(json.resultMsg);
					alert(json.msg);
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
내      용  : 신규 문의 목록 조회
작  성  자  : 김진열
2022.09.05 - 최초생성
========================================================================*/
Common.reloadNewInquiry = function () {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/common/inquiry/list",
			success : function(json){
				if(json.resultCode == "00000") {
					var list = json.list;
					
					if(list.length > 0) {
						$(".badge-alarm").html(list.length);
						$(".badge-alarm").show();
						$(".alarm").attr("onclick", "location.href='/tts/inquiry/list?inquiryTeb=notRead'");
					}else {
						$(".badge-alarm").hide();
						$(".alarm").attr("onclick", "location.href='/tts/inquiry/list'");
					}
				}else {
					console.log(json.resultMsg);
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