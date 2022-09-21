/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		Mypage.PageLoad();
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
Mypage Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Mypage Class
var Mypage = {};

//Mypage Const

//Mypage Variable
Mypage.files = [];
Mypage.selectLedgerSeq = 0;
Mypage.selectAG = "";
Mypage.selectInquiryUser = "";
var tempListlength = null;

var checkExcelFlag = false;

//Mypage
var Properties = {};
Mypage.Properties = Properties;

//Mypage Method
Mypage.PageLoad = function () { };  //메인 페이지 로드 공통 함수
Mypage.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Mypage Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Mypage.PageLoad = function () {
    try {
        Mypage.Init();
        Mypage.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Mypage.Init = function () {
    try {
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Mypage.SetEvent = function () {
    try {
		$("#btnChangeMypage").click(function() {
			if(Mypage.validationCheck()) {
				Mypage.changeMypage();
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 유효성 검사
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
Mypage.validationCheck = function () {
    try {
		var flag = true;
		$("#textUserName").css("border", "");
		$("#textUserEmail").css("border", "");
		
		if($("#textUserName").val() == "") {
			flag = false;
			alert("사용자명을 입력해주세요");
			$("#textUserName").focus();
			$("#textUserName").css("border", "red solid 1px");
		}
		
		else if($("#textUserEmail").val() == "") {
			flag = false;
			alert("이메일 주소를 입력해주세요");
			$("#textUserEmail").focus();
			$("#textUserEmail").css("border", "red solid 1px");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계정 정보 수정
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
Mypage.changeMypage = function () {
    try {
		var data = {
			"userId" : $("#textUserId").val()
			, "userName" : $("#textUserName").val()
			, "userEmail" : $("#textUserEmail").val()
			};
		
		if($("#selUserBusinessType").val() != undefined) {
			data.userBusinessTypeCd = $("#selUserBusinessType").val();
		}
		
		if($("#textUserAgCompany").val() != undefined) {
			data.userAgCompany = $("#textUserAgCompany").val();
		}
		
		$.ajax({
			type : "post",
			url : "/v1/api/user/update",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("계정 정보가 수정되었습니다.");
					location.reload();
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