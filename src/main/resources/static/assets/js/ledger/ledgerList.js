/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		LedgerList.PageLoad();
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
LedgerList Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//LedgerList Class
var LedgerList = {};

//LedgerList Const

//LedgerList Variable
LedgerList.files = [];
LedgerList.selectLedgerSeq = 0;
var multiRequest = "";
var checkExcelFlag = false;
var tempListlength = null;

//LedgerList
var Properties = {};
LedgerList.Properties = Properties;

//LedgerList Method
LedgerList.PageLoad = function () { };  //메인 페이지 로드 공통 함수
LedgerList.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
LedgerList Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.PageLoad = function () {
    try {
        LedgerList.Init();
        LedgerList.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.Init = function () {
    try {
		if($("#inputSearchText").val() != "") {
			$("#inputSearchText").focus();
			$('#inputSearchText')[0].setSelectionRange($('#inputSearchText').val().length, $('#inputSearchText').val().length);
		}
		
		// 필터 박스
		$("#divFilter").children('span').remove();
		if(sCodeType.length > 0) {
			LedgerList.addFilterBox("sCodeType");
		}
		if(sFinancialCompany.length > 0) {
			LedgerList.addFilterBox("sFinancialCompany");
		}
		if(sFinancialBranch.length > 0) {
			LedgerList.addFilterBox("sFinancialBranch");
		}
		if(sFinancialProduct.length > 0) {
			LedgerList.addFilterBox("sFinancialProduct");
		}
		if(sCodeType.length == 0 && sFinancialCompany.length == 0 && sFinancialBranch.length == 0 && sFinancialProduct.length == 0) {
			$("#divFilter").hide();
		}
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.SetEvent = function () {
    try {
		// 검색
		$("#btnSearch").click(function() {
			$("#searchText").val($("#inputSearchText").val());
			LedgerList.Paging(1);
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				LedgerList.Paging(1);
			}
		});
		
		// 필터 드랍
		$("#thCodeType").click(function() {
			$("#divCodeTypeFilter").toggle();
			if($('#divCodeTypeFilter').is(':visible')) {
				$("#thCodeType").addClass("on");
			}else {
				$("#thCodeType").removeClass("on");
			}
		});
		$("#thFinancialCompany").click(function() {
			$("#divFinancialCompanyFilter").toggle();
			if($('#divFinancialCompanyFilter').is(':visible')) {
				$("#thFinancialCompany").addClass("on");
			}else {
				$("#thFinancialCompany").removeClass("on");
			}
		});
		$("#thFinancialBranch").click(function() {
			$("#divFinancialBranchFilter").toggle();
			if($('#divFinancialBranchFilter').is(':visible')) {
				$("#thFinancialBranch").addClass("on");
			}else {
				$("#thFinancialBranch").removeClass("on");
			}
		});
		$("#thFinancialProduct").click(function() {
			$("#divFinancialProductFilter").toggle();
			if($('#divFinancialProductFilter').is(':visible')) {
				$("#thFinancialProduct").addClass("on");
			}else {
				$("#thFinancialProduct").removeClass("on");
			}
		});
		
		// 필터 취소
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().hasClass("filter-modal")) {
				var filter = $(this).parent().parent().parent();
				filter.hide();
				var id = filter.attr("id");
				switch(id) {
					case "divCodeTypeFilter" :
						$("#thCodeType").removeClass("on");
						break;
					case "divFinancialCompanyFilter" :
						$("#thFinancialCompany").removeClass("on");
						break;
					case "divFinancialBranchFilter" :
						$("#thFinancialBranch").removeClass("on");
						break;
					case "divFinancialProductFilter" :
						$("#thFinancialProduct").removeClass("on");
						break;
					default :
						break;
				}
			}
		});
		
		// 필터 초기화
		$("#btnClearFilter").click(function() {
			sCodeType = [];
			sFinancialCompany = [];
			sFinancialBranch = [];
			sFinancialProduct = [];
			LedgerList.Paging(1);
		});
		
		// 체크박스
		$("#checkbox-1").change(function() {
			if($("#checkbox-1").is(":checked")) {
				$("input[name=chk]").prop("checked", true);
			}else {
				$("input[name=chk]").prop("checked", false);
			}
		});
		
		// 승인 요청
		$("#btnRequestApproval").click(function() {
			LedgerList.requestApproval();
		});
		
		// 기타사항 완료/수정
		$("#completeOtherOk").click(function() {
			LedgerList.completeOtherOk();
		});
		
		// 딜러브랜드 => 딜러사 조회
		$("#selDealerBrand").change(function() {
			LedgerList.getDealerCompany($("#selDealerBrand").val(), 0);
		});
		
		// 딜러사 저장
		$("#btnAddDealer").click(function() {
			LedgerList.addDealer();
		});
		
		// ESC
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { // escape key maps to keycode `27`
				$(document).find(".modal").addClass("hide");
				
				$("#textOther").val("");
				LedgerList.selectLedgerSeq = 0;
				
				$("#selDealerBrand").val("");
				$("#selDealerCompany").val("");
		    }
		});
		
		// 모달 닫기
		$(".btn-line-cancel").click(function() {
			if($(this).parent().parent().parent().parent().hasClass("modal")) {
				var filter = $(this).parent().parent().parent().parent();
				filter.addClass("hide");
				
				$("#textOther").val("");
				LedgerList.selectLedgerSeq = 0;
				
				$("#selDealerBrand").val("");
				$("#selDealerCompany").val("");
			}
		});
		
		// 문의 모달 닫기
		$("#iCloseInquiryModal").click(function() {
			if($("#inquiryModal").is(":visible")) {
				$("#inquiryModal").slideUp();
				$("tr").css("background-color", "");
				$(".contact-chat").children().remove();
				LedgerList.selectLedgerSeq = 0;
				clearInterval(setIntervalInquiryList);
			}
		});
		
		// 문의 하기
		$("#btnInsertInquiry").click(function() {
			if($("#textInquiryContent").val() != "") {
				LedgerList.insertInquiry(LedgerList.selectLedgerSeq);
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 페이징
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.Paging = function (page) {
    try {
		if (page > 0) {
			$("#now_page").val(page);
			
			if(sCodeType.length > 0) {
				for(var value of sCodeType) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerTypeCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			if(sFinancialCompany.length > 0) {
				for(var value of sFinancialCompany) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerFinancialCompanyCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			if(sFinancialBranch.length > 0) {
				for(var value of sFinancialBranch) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerFinancialBranchCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			if(sFinancialProduct.length > 0) {
				for(var value of sFinancialProduct) {
					$('<input>').attr({
					    type: 'hidden',
					    name: 'sLedgerFinancialProductCd',
					    value: value
					}).appendTo('#searchForm');
				}
			}
			
			if($("#stateType").val() == "request") {
				$('<input>').attr({
				    type: 'hidden',
				    name: 'multiRequestYn',
				    value: multiRequest
				}).appendTo('#searchForm');
			}
			
			document.searchForm.submit();
		} else {
			alert("잘못된 경로 입니다");
		}	
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 검색 필터 박스 생성
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
LedgerList.addFilterBox = function (type) {
    try {
		switch(type) {
			case "sCodeType" :
				var filter = $("#divCodeTypeFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanCodeType'><strong>구분 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			case "sFinancialCompany" :
				var filter = $("#divFinancialCompanyFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanFinancialCompany'><strong>금융사 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			case "sFinancialBranch" :
				var filter = $("#divFinancialBranchFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanFinancialBranch'><strong>금융지점 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			case "sFinancialProduct" :
				var filter = $("#divFinancialProductFilter").find("li");
				var str = "";
				for(var li of filter) {
					if($(li).find("input").is(":checked")) {
						if(str.length > 0) {
							str = str + "/" + $(li).find("label").html();
						}else {
							str = $(li).find("label").html();
						}
					}
				}
				
				var span = "<span id='spanFinancialProduct'><strong>금융상품 </strong><span class='filter'>" + str + " </span><i class='fa fa-times' aria-hidden='true' onclick='LedgerList.removeFilter(\"" + type + "\")'></i></span>";
				span = $(span).css("margin-left", "5px");
				$("#divFilter").prepend(span);
				break;
			default :
				break;
		}
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 필터제거
작  성  자  : 김진열
2022.08.24 - 최초생성
========================================================================*/
LedgerList.removeFilter = function (type) {
    try {
		switch(type) {
			case "sCodeType" :
				sCodeType = [];
				$("#spanCodeType").remove();
				break;
			case "sFinancialCompany" :
				sFinancialCompany = [];
				$("#spanFinancialCompany").remove();
				break;
			case "sFinancialBranch" :
				sFinancialBranch = [];
				$("#spanFinancialBranch").remove();
				break;
			case "sFinancialProduct" :
				sFinancialProduct = [];
				$("#spanFinancialProduct").remove();
				break;
			default :
				break;
		}
		
		// 페이지 이동
		LedgerList.Paging(1);
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 필터 추가
작  성  자  : 김진열
2022.08.24 - 최초생성
========================================================================*/
LedgerList.addFilter = function (type, btn) {
    try {
		console.log($(btn).parent().parent().parent());
		if($(btn).parent().parent().parent().hasClass("filter-modal")) {
			var filter = $(btn).parent().parent().parent();
			var chkList = filter.find("input:checked");
			
			switch(type) {
				case "sCodeType" :
					sCodeType = [];
					for(var i of chkList) {
						sCodeType.push($(i).val());
					}
					break;
				case "sFinancialCompany" :
					sFinancialCompany = [];
					sFinancialBranch = [];
					for(var i of chkList) {
						sFinancialCompany.push($(i).val());
					}
					break;
				case "sFinancialBranch" :
					sFinancialBranch = [];
					for(var i of chkList) {
						sFinancialBranch.push($(i).val());
					}
					break;
				case "sFinancialProduct" :
					sFinancialProduct = [];
					for(var i of chkList) {
						sFinancialProduct.push($(i).val());
					}
					break;
				default :
					break;
			}
		}
		
		// 페이지 이동
		LedgerList.Paging(1);
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 금융지점 목록 조회
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.getFinancialBranchList = function (codeParentId) {
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
내      용  : 승인 요청
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.requestApproval = function () {
    try {
		var chkLength = $("input[name=chk]:checked").length;
		
		if(chkLength > 0) {
			
			var flag = confirm("총 " + chkLength + "건의 원장을 승인요청하시겠습니까?");
			if(flag) {
				var chkArray = new Array();
				
				for(var chk of $("input[name=chk]:checked")) {
					chkArray.push($(chk).val());
				}
				
				var data = {
					arrledgerSeq : chkArray
				};
				
				$.ajax({
					type : "post",
					url : "/v1/api/approval/request",
					data : data,
					success : function(json){
						if(json.resultCode == "00000") {
							alert("승인요청되었습니다\n관리자 승인까지 기다려주세요");
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
		}else {
			alert("승인요청할 원장을 선택해주세요");
		}
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 기타사항 모달
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.otherModal = function (ledgerSeq, otherText) {
    try {
		if(otherText == "") {
			$("#spanOtherModalHeader").html("추가");
		}else {
			$("#spanOtherModalHeader").html("수정");
		}
		
		$("#textOther").val(otherText);
		LedgerList.selectLedgerSeq = ledgerSeq;
		
		$("#ledgerOtherModal").removeClass("hide");
		
		$("#textOther").focus();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 딜러사 모달
작  성  자  : 김진열
2022.08.25 - 최초생성
========================================================================*/
LedgerList.dealerModal = function (ledgerSeq, dealerBrand, dealerCompany) {
    try {
		LedgerList.selectLedgerSeq = ledgerSeq;
		
		if(dealerBrand > 0) {
			$("#selDealerBrand").val(dealerBrand);
		}
		
		if(dealerCompany > 0) {
			LedgerList.getDealerCompany(dealerBrand, dealerCompany);
		}
		
		$("#dealerModal").removeClass("hide");
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 딜러 브랜드 조회
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.getDealerCompany = function (dealerBrand, dealerCompany) {
    try {
		var data = {
			"codeParentId" : dealerBrand
		};
	
		$.ajax({
			type : "post",
			url : "/v1/api/code/select",
			data : JSON.stringify(data),
			contentType: 'application/json',
			success : function(json){
				if(json.resultCode == "00000") {
					$("#selDealerCompany").children().remove();
					
					var firstOption = '<option value="">--딜러사를 선택해주세요--</option>';
					$("#selDealerCompany").append(firstOption);
					
					for(var item of json.list) {
						var option = "<option value='" + item.codeId + "'>" + item.codeName + "</option>";
						
						$("#selDealerCompany").append(option);
					}
					
					if(dealerCompany > 0) {
						$("#selDealerCompany").val(dealerCompany);
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
내      용  : 딜러 브랜드 저장
작  성  자  : 김진열
2022.08.29 - 최초생성
========================================================================*/
LedgerList.addDealer = function () {
    try {
		var data = {
			ledgerDealerBrandCd : $("#selDealerBrand").val()
			, ledgerDealerCompanyCd : $("#selDealerCompany").val()
			, ledgerSeq : LedgerList.selectLedgerSeq
		};
	
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/dealer/update",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("딜러사가 저장되었습니다.");
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
내      용  : 문의 상세
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
LedgerList.inquiryModal = function (ledgerSeq, trThis) {
    try {
		if(!$("#inquiryModal").is(":visible")) {
			LedgerList.selectLedgerSeq = 0;
		}
	
		if(LedgerList.selectLedgerSeq == ledgerSeq) {
			$("#inquiryModal").slideUp();
			//$(trThis).css("background-color", "");
			$(".contact-chat").children().remove();
			clearInterval(setIntervalInquiryList);
		}else {
			var data = { inquiryLedgerSeq : ledgerSeq };
			$.ajax({
				type : "post",
				url : "/v1/api/inquiry/select/ledger",
				data : data,
				success : function(json){
					if(json.resultCode == "00000") {
						var list = json.list;
						var lastInquirySeq = 0;
						
						$(".contact-chat").children().remove();
						
						for(var vo of list) {
							var div = "";
							if(vo.isMine == "Y") {
								div = '<div class="asking"><div class="nav"><p class="date">'+vo.inquiryCreateDate.substring(0, 19)+'</p><div class="text">'+vo.inquiryContent+'</div></div>';
							}else {
								div = '<div class="answer"><div class="nav"><p class="date">'+vo.inquiryCreateDate.substring(0, 19)+'</p><div class="text">'+vo.inquiryContent+'</div></div>';
							}
							
							$(".contact-chat").append(div);
							lastInquirySeq = vo.inquirySeq;
						}
						
						$("#inquiryModal").slideToggle();
						$(".contact-chat").scrollTop($(".contact-chat")[0].scrollHeight);
						
						if($("#inquiryModal").is(":visible")) {
							//$(trThis).css("background-color", "#EBECF1");
							LedgerList.selectLedgerSeq = ledgerSeq;
						}
						
						tempListlength = list.length;
						
						LedgerList.readInquiry(lastInquirySeq);
						
						setIntervalInquiryList = setInterval(LedgerList.intervalInquiryList, 1000) ;
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
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 문의 하기
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
LedgerList.insertInquiry = function (ledgerSeq) {
    try {
		var data = { 
			inquiryLedgerSeq : ledgerSeq
			, inquiryContent : $("#textInquiryContent").val()
			};
			
		$.ajax({
			type : "post",
			url : "/v1/api/inquiry/insert/to",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					let today = new Date();
					var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDay() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
					var div = '<div class="asking"><div class="nav"><p class="date">'+date+'</p><div class="text">'+$("#textInquiryContent").val()+'</div></div>';
					
					$(".contact-chat").append(div);
					$("#textInquiryContent").val("");
					$(".contact-chat").scrollTop($(".contact-chat")[0].scrollHeight);
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

/*=======================================================================
내      용  : 실시간 문의 내용 조회
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
LedgerList.intervalInquiryList = function () {
    try {
		var data = { inquiryLedgerSeq : LedgerList.selectLedgerSeq };
		$.ajax({
			type : "post",
			url : "/v1/api/inquiry/select/ledger",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					var list = json.list;
					
					$(".contact-chat").children().remove();
					
					for(var vo of list) {
						var div = "";
						if(vo.isMine == "Y") {
							div = '<div class="asking"><div class="nav"><p class="date">'+vo.inquiryCreateDate.substring(0, 19)+'</p><div class="text">'+vo.inquiryContent+'</div></div>';
						}else {
							div = '<div class="answer"><div class="nav"><p class="date">'+vo.inquiryCreateDate.substring(0, 19)+'</p><div class="text">'+vo.inquiryContent+'</div></div>';
						}
						
						$(".contact-chat").append(div);
					}
					
					if(tempListlength != list.length) {
						tempListlength = list.length;
						$(".contact-chat").scrollTop($(".contact-chat")[0].scrollHeight);
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

/*=======================================================================
내      용  : 문의 읽음 표시
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
LedgerList.readInquiry = function (lastInquirySeq) {
    try {
		if(lastInquirySeq != 0) {
			var data = { 
				inquiryLedgerSeq : LedgerList.selectLedgerSeq
				, inquirySeq : lastInquirySeq
				};
			$.ajax({
				type : "post",
				url : "/v1/api/inquiry/read",
				data : data,
				success : function(json){
					console.log(json);
				},
				error: function(request,status,error,data){
					alert("잘못된 접근 경로입니다.");
					return false;
				}
			});
		}
    }
    catch (e) { console.log(e.message); }
}