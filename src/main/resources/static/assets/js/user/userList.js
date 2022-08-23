/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		UserList.PageLoad();
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
UserList Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//UserList Class
var UserList = {};

//UserList Const

//UserList Variable
var checkIdFlag = false;

//UserList
var Properties = {};
UserList.Properties = Properties;

//UserList Method
UserList.PageLoad = function () { };  //메인 페이지 로드 공통 함수
UserList.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
UserList Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.PageLoad = function () {
    try {
        UserList.Init();
        UserList.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.Init = function () {
    try {
		if($("#inputSearchText").val() != "") {
			$("#inputSearchText").focus();
			$('#inputSearchText')[0].setSelectionRange($('#inputSearchText').val().length, $('#inputSearchText').val().length);
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.SetEvent = function () {
    try {
		// 사용자 탭 li
		$("#liAg").click(function() {
			$("#searchText").val("");
			$("#agOrAdmin").val("ag");
			document.searchForm.submit();
		});
		$("#liNewAg").click(function() {
			$("#searchText").val("");
			$("#agOrAdmin").val("new");
			document.searchForm.submit();
		});
		$("#liAdmin").click(function() {
			$("#searchText").val("");
			$("#agOrAdmin").val("admin");
			document.searchForm.submit();
		});
	
		// 검색
		$("#btnSearch").click(function() {
			$("#searchText").val($("#inputSearchText").val());
			document.searchForm.submit();
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				document.searchForm.submit();
			}
		});
		
		// 사용자 추가 모달
		$("#btnAddUser").click(function() {
			UserList.getPermissionList($('input[name=radio]:checked').val());
			$("#modalAddUser").show();
		});
		
		// 모달 닫기
		$("#btnCancelModal").click(function() {
			$("#modalAddUser").hide();
		});
		
		// 계정 형태 (모달)
		$(".radio-button").click(function() {
			var value = $('input[name=radio]:checked').val();
			UserList.getPermissionList(value);
			
			if(value == "ag") {
				$(".ag-box").slideDown();
			}else {
				$(".ag-box").slideUp();
			}
		});
		
		// 계정 추가
		$("#btnAddUserOk").click(function() {
			if(UserList.ValidationCheck()) {
				UserList.addUser();
			}
		});
		
		// 아이디 중복 체크
		$("#textUserId").keyup(function() {
			UserList.checkUserId();
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 페이징
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.Paging = function (page) {
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

/*=======================================================================
내      용  : 사용자 상세 모달
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.userDetail = function (userId) {
    try {
		console.log(userId);
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계정 권한 조회
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.getPermissionList = function (value) {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/user/permission/list/" + value,
			success : function(json){
				if(json.resultCode == "00000") {
					var option = "";
					$("#selPermissionCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selPermissionCode").append(option);
					}
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
내      용  : 계정 추가
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.addUser = function () {
    try {
		var data = {
			"userId" : $("#textUserId").val()
			, "userName" : $("#textUserName").val()
			, "userEmail" : $("#textUserEmail").val()
			, "userBusinessTypeCd" : $("#selBusinessCode").val()
			, "userAgCompany" : $("#textAgCompanyName").val()
			, "userPermissionCd" : $("#selPermissionCode").val()
			, "userCodeCompanyCd" : $("#selCodeCompany").val()
			};
	
		$.ajax({
			type : "post",
			url : "/v1/api/user/insert",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("계정이 생성되었습니다.");
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

/*=======================================================================
내      용  : 아이디 중복 체크
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.checkUserId = function () {
    try {
		var id = $("#textUserId").val();
		
		if(id != "") {
			$.ajax({
				type : "get",
				url : "/v1/api/user/check/id/" + id,
				success : function(json){
					if(json.resultCode == "00000") {
						if(json.isExist == "Y") {
							$("#spanIdCheck").html("사용 불가");
							$("#spanIdCheck").css("color", "red");
							$("#textUserId").css("border", "1px solid red");
							checkIdFlag = false;
						}else if(json.isExist == "N") {
							$("#spanIdCheck").html("사용 가능");
							$("#spanIdCheck").css("color", "green");
							$("#textUserId").css("border", "1px solid green");
							checkIdFlag = true;
						}
					}else {
						alert(json.resultMsg);
					}
				},
				error: function(request,status,error,data){
					alert("잘못된 접근 경로입니다.");
					return false;
				}
			});
		}else {
			$("#spanIdCheck").html("");
			$("#spanIdCheck").css("color", "");
			$("#textUserId").css("border", "");
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 유효성 체크
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
UserList.ValidationCheck = function () {
    try {
		var flag = true;
		
		$("#textUserId").css("border", "");
		$("#textUserName").css("border", "");
		$("#textUserEmail").css("border", "");
		
		if($("#textUserId").val() == "") {
			flag = false;
			alert("아이디를 입력해주세요");
			$("#textUserId").focus();
			$("#textUserId").css("border", "1px solid red");
		}
		
		else if(!checkIdFlag) {
			flag = false;
			alert("사용불가한 아이디 입니다");
			$("#textUserId").focus();
			$("#textUserId").css("border", "1px solid red");
		}
		
		else if($("#textUserName").val() == "") {
			flag = false;
			alert("사용자명를 입력해주세요");
			$("#textUserName").focus();
			$("#textUserName").css("border", "1px solid red");
		}
		
		else if($("#textUserEmail").val() == "") {
			flag = false;
			alert("사용자명를 입력해주세요");
			$("#textUserEmail").focus();
			$("#textUserEmail").css("border", "1px solid red");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}