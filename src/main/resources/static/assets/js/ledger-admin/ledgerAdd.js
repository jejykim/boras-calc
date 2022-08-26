/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		LedgerAdd.PageLoad();
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
LedgerAdd Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//LedgerAdd Class
var LedgerAdd = {};

//LedgerAdd Const

//LedgerAdd Variable
LedgerAdd.files = [];
var multiRequest = "";
var checkExcelFlag = false;

//LedgerAdd
var Properties = {};
LedgerAdd.Properties = Properties;

//LedgerAdd Method
LedgerAdd.PageLoad = function () { };  //메인 페이지 로드 공통 함수
LedgerAdd.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
LedgerAdd Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerAdd.PageLoad = function () {
    try {
        LedgerAdd.Init();
        LedgerAdd.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerAdd.Init = function () {
    try {
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerAdd.SetEvent = function () {
    try {
		// 금융사 -> 금융지점
		$("#selFinancialCompanyCode").change(function() {
			LedgerAdd.getFinancialBranchList($("#selFinancialCompanyCode").val());
		});
		
		// 딜러사 브랜드 -> 딜러사
		$("#selDealerBrandCode").change(function() {
			LedgerAdd.getDealerCompanyList($("#selDealerBrandCode").val());
		});
		
		// ag 선택 모달
		$("#btnSelectAg").click(function() {
			$("#addAgModal").removeClass("hide");
		});
		
		// 모달 닫기
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().parent().hasClass("modal")) {
				var filter = $(this).parent().parent().parent().parent();
				filter.addClass("hide");
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
LedgerAdd.validationCheck = function () {
    try {
		var flag = true;
		$("#selFinancialBranchCode").css("border", "");
		
		if(LedgerAdd.files.length < 1) {
			flag = false;
			alert("Excel 파일을 업로드해주세요");
		}
		
		else if($("#selFinancialBranchCode").val() == "") {
			flag = false;
			alert("금융지점을 선택해주세요");
			$("#selFinancialBranchCode").css("border", "red solid 1px");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 금융지점 목록 조회
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerAdd.getFinancialBranchList = function (codeParentId) {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/ledger/financial/" + codeParentId + "/branch/list",
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selFinancialBranchCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selFinancialBranchCode").append(option);
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
내      용  : 딜러사 목록 조회
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerAdd.getDealerCompanyList = function (codeParentId) {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/ledger/financial/" + codeParentId + "/branch/list",
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selDealerCompanyCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selDealerCompanyCode").append(option);
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
내      용  : AG 목록 조회
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerAdd.getAgList = function () {
    try {
		var data = {
			"searchText" : $("#textAgSearch").val()
		};
		
		$.ajax({
			type : "get",
			url : "/v1/api/user/list/ag",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selDealerCompanyCode").children().remove();
					
					for(var data of json.list) {
						option = "<option value='" + data.codeId + "'> " + data.codeName + "</option>";
						
						$("#selDealerCompanyCode").append(option);
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