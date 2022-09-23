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
			UserList.Paging(1);
		});
		$("#liNewAg").click(function() {
			$("#searchText").val("");
			$("#agOrAdmin").val("new");
			UserList.Paging(1);
		});
		$("#liAdmin").click(function() {
			$("#searchText").val("");
			$("#agOrAdmin").val("admin");
			UserList.Paging(1);
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
			UserList.getPermissionList($('input[name=custom-radio]:checked').val());
			$("#modalAddUser").show();
		});
		
		// 모달 닫기
		$("#btnCancelModal").click(function() {
			$("#modalAddUser").hide();
		});
		
		// 모달 닫기
		$("#btnUpdateCancelModal").click(function() {
			$("#modalInfoUser").hide();
		});
		// ESC
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { // escape key maps to keycode `27`
				$("#modalInfoUser").hide();
		    }
		});
		
		// 계정 형태 (모달)
		$("input[name=custom-radio]").click(function() {
			var value = $('input[name=custom-radio]:checked').val();
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
		
		// 계정 수정
		$("#btnUpdateUserOk").click(function() {
			UserList.updateUser();
		});
		
		// pagePerRows 변경
		$("#selPagePerRows").change(function() {
			var pagePerRows = $("#selPagePerRows").val();
			$("#pagePerRows").val(pagePerRows);
			UserList.Paging(1);
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
2022.08.24 - 김은빈 수정
========================================================================*/
UserList.userDetail = function (userId) {
	 try {
		$.ajax({
			type : "get",
			url : "/v1/api/user/info/" + userId,
			success : function(json){
				if(json.resultCode == "00000") {
					console.log(json.info);
					$('#modalInfoUser').show();
					
					//관리자 1100~1199
					//ag   1200~1299
					var type="";
					if(json.info.userPermissionCd>=1100 && json.info.userPermissionCd<1200){
						$('#textInfoUserType').val("관리자");
						type="admin";
						
						$('#textInfoAgCompanyName').parent().parent().css("display","none");
						$('#selInfoCodeCompany').parent().parent().css("display","none");
						$('#selInfoBusinessCode').parent().parent().css("display","none");
					}else if(json.info.userPermissionCd>=1200 && json.info.userPermissionCd<1300){
						$('#textInfoUserType').val("AG");
						type="ag";
						
						$('#textInfoAgCompanyName').parent().parent().css("display","");
						$('#selInfoCodeCompany').parent().parent().css("display","");
						$('#selInfoBusinessCode').parent().parent().css("display","");
					}else if(json.info.userPermissionCd == 0){
						$('#textInfoUserType').val("AG");
						type="ag";
						
						$('#textInfoAgCompanyName').parent().parent().css("display","");
						$('#selInfoCodeCompany').parent().parent().css("display","");
						$('#selInfoBusinessCode').parent().parent().css("display","");
					}
					
					UserList.getPermissionListForInfo(type, json.info.userPermissionCd);
					
					$('#textInfoUserId').val(json.info.userId);
					$('#textInfoUserName').val(json.info.userName);
					$('#textInfoUserEmail').val(json.info.userEmail);
					$('#textInfoAgCompanyName').val(json.info.userAgCompany);
					if(json.info.userJoinDate != null){
						$('#textInfoUserJoinDate').val(json.info.userJoinDate.substring(0,19));
					}
					if(json.info.userLastAccessDate != null){
					$('#textInfoUserLastAccessDate').val(json.info.userLastAccessDate.substring(0,19));
					}
					$('#textInfoUserLastAccessIp').val(json.info.userLastAccessIp);
					
					$('#selInfoCodeCompany').val(json.info.userCodeCompanyCd).prop("selected",true);
					$('#selInfoBusinessCode').val(json.info.userBusinessTypeCd).prop("selected",true);
					
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
					$("#selInfoPermissionCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selPermissionCode").append(option);
						$("#selInfoPermissionCode").append(option);
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


/*=======================================================================
내      용  : 계정 권한 조회 - 사용자 상세 조회용
작  성  자  : 김은빈
2022.08.24 - 최초생성
========================================================================*/
UserList.getPermissionListForInfo = function (type, userPermissionCd) {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/user/permission/list/" + type,
			success : function(json){
				if(json.resultCode == "00000") {
					var option = "";
					$("#selPermissionCode").children().remove();
					$("#selInfoPermissionCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selPermissionCode").append(option);
						$("#selInfoPermissionCode").append(option);
					}
					
					$('#selInfoPermissionCode').val(userPermissionCd).prop("selected",true);
					
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
내      용  : 계정 수정
작  성  자  : 김은빈
2022.08.25 - 최초생성
========================================================================*/
UserList.updateUser = function () {
    try {
		var data = {
			"userId" : $("#textInfoUserId").val()
			, "userName" : $("#textInfoUserName").val()
			, "userEmail" : $("#textInfoUserEmail").val()
			, "userBusinessTypeCd" : $("#selInfoBusinessCode").val()
			, "userAgCompany" : $("#textInfoAgCompanyName").val()
			, "userPermissionCd" : $("#selInfoPermissionCode").val()
			, "userCodeCompanyCd" : $("#selInfoCodeCompany").val()
			};
			
		$.ajax({
			type : "post",
			url : "/v1/api/user/update",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("계정이 수정되었습니다.");
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

