/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		InquiryList.PageLoad();
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
InquiryList Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//InquiryList Class
var InquiryList = {};

//InquiryList Const

//InquiryList Variable
InquiryList.selectLedgerSeq = 0;

//InquiryList
var Properties = {};
InquiryList.Properties = Properties;

//InquiryList Method
InquiryList.PageLoad = function () { };  //메인 페이지 로드 공통 함수
InquiryList.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
InquiryList Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.PageLoad = function () {
    try {
        InquiryList.Init();
        InquiryList.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.Init = function () {
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
2022.09.15 - 최초생성
========================================================================*/
InquiryList.SetEvent = function () {
    try {
		// 문의 내역 탭
		$("#liAll").click(function() {
			$("#searchText").val("");
			$("#inquiryTeb").val("all");
			$("#now_page").val("1");
			document.searchForm.submit();
		});
		$("#liNotRead").click(function() {
			$("#searchText").val("");
			$("#inquiryTeb").val("notRead");
			$("#now_page").val("1");
			document.searchForm.submit();
		});

		// 검색
		$("#btnSearch").click(function() {
			$("#searchText").val($("#inputSearchText").val());
			InquiryList.Paging(1);
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				InquiryList.Paging(1);
			}
		});
		
		// pagePerRows 변경
		$("#selPagePerRows").change(function() {
			var pagePerRows = $("#selPagePerRows").val();
			$("#pagePerRows").val(pagePerRows);
			InquiryList.Paging(1);
		});
		
		// 문의 모달 닫기
		$("#iCloseInquiryModal").click(function() {
			if($("#inquiryModal").is(":visible")) {
				$("#inquiryModal").slideUp();
				$("tr").css("background-color", "");
				$(".contact-chat").children().remove();
				InquiryList.selectLedgerSeq = 0;
			}
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 페이징
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.Paging = function (page) {
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
내      용  : 문의 상세
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.getInquiryInfo = function (ledgerSeq, trThis) {
    try {
		if(!$("#inquiryModal").is(":visible")) {
			InquiryList.selectLedgerSeq = 0;
		}
	
		if(InquiryList.selectLedgerSeq == ledgerSeq) {
			$("#inquiryModal").slideUp();
			$(trThis).css("background-color", "");
			$(".contact-chat").children().remove();
		}else {
			var data = { inquiryLedgerSeq : ledgerSeq };
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
						
						$("#inquiryModal").slideToggle();
						if($("#inquiryModal").is(":visible")) {
							$(trThis).css("background-color", "#EBECF1");
							InquiryList.selectLedgerSeq = ledgerSeq;
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
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 문의 하기
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.insertInquiry = function (ledgerSeq) {
    try {
		var data = { inquiryLedgerSeq : ledgerSeq };
		$.ajax({
			type : "post",
			url : "/v1/api/inquiry/select/ledger",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					
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