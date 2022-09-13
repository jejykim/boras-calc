/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		LedgerInfo.PageLoad();
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
LedgerInfo Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//LedgerInfo Class
var LedgerInfo = {};

//LedgerInfo Const

//LedgerInfo Variable
LedgerInfo.ag = "";


//LedgerInfo
var Properties = {};
LedgerInfo.Properties = Properties;

//LedgerInfo Method
LedgerInfo.PageLoad = function () { };  //메인 페이지 로드 공통 함수
LedgerInfo.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
LedgerInfo Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerInfo.PageLoad = function () {
    try {
        LedgerInfo.Init();
        LedgerInfo.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerInfo.Init = function () {
    try {
		var agLength = $(".span-box").find("span").length;
		
		if(agLength > 1) {
			LedgerInfo.ag = "중복";
		}else if(agLength == 1) {
			LedgerInfo.ag = $(".span-box").find("span").attr("data");
		}else {
			LedgerInfo.ag = "";
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerInfo.SetEvent = function () {
    try {
		// 금융사 -> 금융지점
		$("#selFinancialCompanyCode").change(function() {
			LedgerInfo.getFinancialBranchList($("#selFinancialCompanyCode").val());
		});
		
		// 딜러사 브랜드 -> 딜러사
		$("#selDealerBrandCode").change(function() {
			LedgerInfo.getDealerCompanyList($("#selDealerBrandCode").val());
		});
		
		// ag 선택 모달
		$("#btnSelectAg").click(function() {
			LedgerInfo.getAgList();
			$("#addAgModal").removeClass("hide");
		});
		
		// 모달 닫기
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().parent().hasClass("modal")) {
				var filter = $(this).parent().parent().parent().parent();
				filter.addClass("hide");
			}
		});
		
		// AG 선택
		$("#btnAddAg").click(function() {
			if($("#selAgList").val() == null || $("#selAgList").val() == "") {
				$("#selAgList").css("border", "1px solid red");
				alert("AG를 선택해주세요");
			}else {
				$(".span-box").find("span").remove();
				
				var data = $("#selAgList").val().split("|");
				var userId = data[0];
				var userName = data[1];
				
				LedgerInfo.ag = userId;
				
				$("#addAgModal").addClass("hide");
				
				var span = '<span><strong>' + userName + ' </strong><i class="fa fa-times" aria-hidden="true" style="cursor: pointer;" onclick="LedgerInfo.deleteAgBox(this)"></i></span>';
				
				$(".span-box").append(span);
			}
		});
		
		// ag사 검색
		$("#textAgSearch").keyup(function() {
			LedgerInfo.getAgList();
		});
		
		// 원장 수정
		$("#btnUpdateLedger").click(function() {
			if(LedgerInfo.validationCheck()) {
				LedgerInfo.updateLedger();
			}
		});
		
		// 원장 삭제
		$("#btnDeleteLedger").click(function() {
			var flag = confirm("정말 삭제하시겠습니까?");
			if(flag) {
				LedgerInfo.deleteLedger();
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
LedgerInfo.validationCheck = function () {
    try {
		var flag = true;
		$("#selFinancialBranchCode").css("border", "");
		
		if(LedgerInfo.files.length < 1) {
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
LedgerInfo.getFinancialBranchList = function (codeParentId) {
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
LedgerInfo.getDealerCompanyList = function (codeParentId) {
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
LedgerInfo.getAgList = function () {
    try {
		var data = {
			"searchText" : $("#textAgSearch").val()
		};
		
		$.ajax({
			type : "post",
			url : "/v1/api/user/list/ag",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selAgList").children().remove();
					
					for(var data of json.list) {
						var option = "<option value='" + data.userId + "|" + data.userName + "'> " + data.userName + "</option>";
						
						$("#selAgList").append(option);
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
내      용  : AG 박스 제거
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerInfo.deleteAgBox = function (agBox) {
    try {
		$(agBox).parent().remove();
		
		var agLength = $(".span-box").find("span").length;
		
		if(agLength > 1) {
			LedgerInfo.ag = "중복";
		}else if(agLength == 1) {
			LedgerInfo.ag = $(".span-box").find("span").attr("data");
		}else {
			LedgerInfo.ag = "";
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 유효성 검사
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerInfo.validationCheck = function () {
    try {
		var flag = true;
		
		$("#selFinancialCompanyCode").css("border", "");
		$("#selFinancialBranchCode").css("border", "");
		$("#selFinancialProduct").css("border", "");
		$("#selCodeCompany").css("border", "");
		$("#textCustomerName").css("border", "");
		
		if($("#selFinancialCompanyCode").val() == "") {
			flag = false;
			alert("금융사를 선택해주세요");
			$("#selFinancialCompanyCode").css("border", "1px solid red");
		}
		
		else if($("#selFinancialBranchCode").val() == "") {
			flag = false;
			alert("금융지점을 선택해주세요");
			$("#selFinancialBranchCode").css("border", "1px solid red");
		}
		
		else if($("#selFinancialProduct").val() == "") {
			flag = false;
			alert("금융상품을 선택해주세요");
			$("#selFinancialProduct").css("border", "1px solid red");
		}
		
		else if($("#selCodeCompany").val() == "") {
			flag = false;
			alert("코드사를 선택해주세요");
			$("#selCodeCompany").css("border", "1px solid red");
		}
		
		else if($("#textCustomerName").val() == "") {
			flag = false;
			alert("고객명을 입력해주세요");
			$("#textCustomerName").focus();
			$("#textCustomerName").css("border", "1px solid red");
		}
		
		return flag;
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 수정
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerInfo.updateLedger = function () {
    try {
		var ledgerCarPrice = $("#textCarPrice").val() == "" ? 0 : $("#textCarPrice").val().replace(/,/gi, "");
		var ledgerAcquisitionCost = $("#textAcquisitionCost").val() == "" ? 0 : $("#textAcquisitionCost").val().replace(/,/gi, ""); 
		var ledgerTotalFeePercent = $("#textTotalFeePercent").val() == "" ? 0 : $("#textTotalFeePercent").val().replace(/,/gi, ""); 
		var ledgerTotalFeeSum = $("#textTotalFeeSum").val() == "" ? 0 : $("#textTotalFeeSum").val().replace(/,/gi, ""); 
		var ledgerTotalFeeSupplyPrice = $("#textTotalFeeSupplyPrice").val() == "" ? 0 : $("#textTotalFeeSupplyPrice").val().replace(/,/gi, ""); 
		var ledgerTotalFeeSurtax = $("#textTotalFeeSurtax").val() == "" ? 0 : $("#textTotalFeeSurtax").val().replace(/,/gi, ""); 
		var ledgerSlidingPercent = $("#textSlidingPercent").val() == "" ? 0 : $("#textSlidingPercent").val().replace(/,/gi, ""); 
		var ledgerSlidingSum = $("#textSlidingSum").val() == "" ? 0 : $("#textSlidingSum").val().replace(/,/gi, ""); 
		var ledgerSlidingSupplyPrice = $("#textSlidingSupplyPrice").val() == "" ? 0 : $("#textSlidingSupplyPrice").val().replace(/,/gi, ""); 
		var ledgerSlidingSurtax = $("#textSlidingSurtax").val() == "" ? 0 : $("#textSlidingSurtax").val().replace(/,/gi, ""); 
	
		var data = {
			"ledgerOther" : $("#textOther").val()
			, "ledgerTypeCd" : $("#selCodeCompany").val()
			, "ledgerFinancialCompanyCd" : $("#selFinancialCompanyCode").val()
			, "ledgerFinancialBranchCd" : $("#selFinancialBranchCode").val()
			, "ledgerFinancialProductCd" : $("#selFinancialProduct").val()
			, "ledgerDeliveryDate" : $("#textDeliveryDate").val()
			, "ledgerCustomerName" : $("#textCustomerName").val()
			, "ledgerDealerBrandCd" : $("#selDealerBrandCode").val() == "" ? 0 : $("#selDealerBrandCode").val()
			, "ledgerDealerCompanyCd" : $("#selDealerCompanyCode").val() == "" ? 0 : $("#selDealerCompanyCode").val()
			, "ledgerCarName" : $("#textCarName").val()
			, "ledgerCarNumber" : $("#textCarNumber").val()
			, "ledgerCarPrice" : ledgerCarPrice
			, "ledgerAcquisitionCost" : ledgerAcquisitionCost
			, "ledgerTotalFeePercent" : ledgerTotalFeePercent
			, "ledgerTotalFeeSum" : ledgerTotalFeeSum
			, "ledgerTotalFeeSupplyPrice" : ledgerTotalFeeSupplyPrice
			, "ledgerTotalFeeSurtax" : ledgerTotalFeeSurtax
			, "ledgerSlidingPercent" : ledgerSlidingPercent
			, "ledgerSlidingSum" : ledgerSlidingSum
			, "ledgerSlidingSupplyPrice" : ledgerSlidingSupplyPrice
			, "ledgerSlidingSurtax" : ledgerSlidingSurtax
			, "LedgerInfoPromotion" : $("#textAddPromotion").val() == "" ? 0 : $("#textAddPromotion").val()
			, "ledgerPromotionMemo" : $("#textPromotionMemo").val()
			, "agUserId" : LedgerInfo.ag
			, "ledgerSeq" : $("#ledgerSeq").val()
		};
		
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/update",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("수정되었습니다");
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
내      용  : 원장 삭제
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerInfo.deleteLedger = function () {
    try {
		var data = {
			"ledgerSeq" : $("#ledgerSeq").val()
		};
		
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/delete",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("삭제 되었습니다");
					location.href = "/admin/ledger/list";
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