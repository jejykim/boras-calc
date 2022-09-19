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
var setIntervalInquiryList = null;
InquiryList.selectLedgerSeq = 0;
InquiryList.selectInquiryUser = "";
var tempListlength = null;

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
				InquiryList.selectInquiryUser = "";
				clearInterval(setIntervalInquiryList);
			}
		});
		
		// 문의 하기
		$("#btnInsertInquiry").click(function() {
			if($("#textInquiryContent").val() != "") {
				InquiryList.insertInquiry(InquiryList.selectLedgerSeq);
			}
		});
		
		// AG 목록 드롭다운
		$("#iInquiryAgList").click(function() {
			$("#ulInquiryAgList").toggle();
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
내      용  : 문의 상세1 (사용자 확인)
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.getInquiryInfo = function (ledgerSeq, trThis) {
    try {
		if(!$("#inquiryModal").is(":visible")) {
			InquiryList.selectLedgerSeq = 0;
			InquiryList.selectInquiryUser = "";
		}
	
		if(InquiryList.selectLedgerSeq == ledgerSeq) {
			$("#inquiryModal").slideUp();
			$(trThis).css("background-color", "");
			$(".contact-chat").children().remove();
			clearInterval(setIntervalInquiryList);
		}else {
			var data = { inquiryLedgerSeq : ledgerSeq };
			$.ajax({
				type : "post",
				url : "/v1/api/inquiry/select/ledger/users",
				data : data,
				success : function(json){
					if(json.resultCode == "00000") {
						var userlist = json.list;
						var userId = "";
						var userName = "";
						
						$(".contact-name").children().remove();
						
						for(var vo of userlist) {
							userId = vo.inquiryFromUserId;
							userName = vo.inquiryFromUserName
							
							var li = '<li onclick="InquiryList.changeAgForInquiry('+ledgerSeq+' ,\''+userId+'\',\''+userName+'\')"><span class="name">'+vo.inquiryFromUserName+'</span></li>';
							$(".contact-name").append(li);
						}
						
						InquiryList.getInquiryInfo2(ledgerSeq, trThis, userId, userName);
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
내      용  : 문의 상세2
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.getInquiryInfo2 = function (ledgerSeq, trThis, userId, userName) {
    try {
		var data = { inquiryLedgerSeq : ledgerSeq, inquiryFromUserId : userId };
						
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
						$(trThis).css("background-color", "#EBECF1");
						InquiryList.selectLedgerSeq = ledgerSeq;
						InquiryList.selectInquiryUser = userId;
						$("#spanSelectedAgName").html(userName);
					}
					
					InquiryList.readInquiry(trThis, lastInquirySeq);
					
					tempListlength = list.length;
					
					setIntervalInquiryList = setInterval(InquiryList.intervalInquiryList, 1000) ;
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
내      용  : 문의 하기
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.insertInquiry = function (ledgerSeq) {
    try {
		var data = { 
			inquiryLedgerSeq : ledgerSeq
			, inquiryContent : $("#textInquiryContent").val()
			, inquiryToUserId : InquiryList.selectInquiryUser
		};
			
		$.ajax({
			type : "post",
			url : "/v1/api/inquiry/insert/from",
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
InquiryList.intervalInquiryList = function () {
    try {
		var data = { inquiryLedgerSeq : InquiryList.selectLedgerSeq, inquiryFromUserId : InquiryList.selectInquiryUser };
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
내      용  : AG 변경 문의 내역 조회
작  성  자  : 김진열
2022.09.15 - 최초생성
========================================================================*/
InquiryList.changeAgForInquiry = function (ledgerSeq, userId, userName) {
    try {
		clearInterval(setIntervalInquiryList);
		
		var data = { inquiryLedgerSeq : ledgerSeq, inquiryFromUserId : userId };
						
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
					
					$(".contact-chat").scrollTop($(".contact-chat")[0].scrollHeight);
					
					if($("#inquiryModal").is(":visible")) {
						InquiryList.selectLedgerSeq = ledgerSeq;
						InquiryList.selectInquiryUser = userId;
						$("#spanSelectedAgName").html(userName);
					}
					
					$("#ulInquiryAgList").hide();
					
					tempListlength = list.length;
					
					setIntervalInquiryList = setInterval(InquiryList.intervalInquiryList, 1000) ;
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
InquiryList.readInquiry = function (trThis, lastInquirySeq) {
    try {
		var data = { 
			inquiryLedgerSeq : InquiryList.selectLedgerSeq
			, inquirySeq : lastInquirySeq
			};
		$.ajax({
			type : "post",
			url : "/v1/api/inquiry/read",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					$(trThis).find("td:first").html("확인완료").css("color", "");
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