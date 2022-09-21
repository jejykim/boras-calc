/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		DashboardInfo.PageLoad();
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
DashboardInfo Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//DashboardInfo Class
var DashboardInfo = {};

//DashboardInfo Const

//DashboardInfo Variable

//DashboardInfo
var Properties = {};
DashboardInfo.Properties = Properties;

//DashboardInfo Method
DashboardInfo.PageLoad = function () { };  //메인 페이지 로드 공통 함수
DashboardInfo.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
DashboardInfo Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
DashboardInfo.PageLoad = function () {
    try {
        DashboardInfo.Init();
        DashboardInfo.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
DashboardInfo.Init = function () {
    try {
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
DashboardInfo.SetEvent = function () {
    try {
		// 년, 월 변경
		$("#selYear").change(function() {
			DashboardInfo.getCalc();
		});
		$("#selMonth").change(function() {
			DashboardInfo.getCalc();
		});
		
		// 사업자형태 탭 이동
		$("#liAll").click(function() {
			$("#textBusinessTypeCd").val("0");
			document.searchForm.submit();
		});
		$("#liCompany").click(function() {
			$("#textBusinessTypeCd").val("5200");
			document.searchForm.submit();
		});
		$("#liPersonal").click(function() {
			$("#textBusinessTypeCd").val("5100");
			document.searchForm.submit();
		});
		
		// 원장 목록
		$("#btnCloseModal").click(function() {
			$("#ledgerInfoModal").addClass("hide");
		});
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 대시보드 월별 조회
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
DashboardInfo.getCalc = function () {
    try {
		location.href = "/calc/dashboard/3015/" + $("#selYear").val() + "/" + $("#selMonth").val();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 원장 상세 보기
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
DashboardInfo.getLedgerInfo = function (ledgerList, userName, businessTypeCdName, ledgerCount, agCompanyFee, agPersonalFee) {
    try {
		var data = { 
			ledgerSeqList : ledgerList
			};
			
		$.ajax({
			type : "post",
			url : "/v1/api/ledger/detail",
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					var list = json.list;
					console.log(list);
					
					$("#spanLedgerInfoModalAgName").html(userName);
					$("#textBusinessTypeCdName").val(businessTypeCdName);
					$("#textLedgerCount").val(ledgerCount);
					$("#textAgCompanyFee").val(Common.Comma(agCompanyFee));
					$("#textAgPersonalFee").val(Common.Comma(agPersonalFee));

					$("#tbodyLedgerInfo").children().remove();
					
					for(var i of list) {
						var tr = '<tr>'
							+ '<td>' + i.ledgerTypeCdName + '</td>'
							+ '<td>' + i.ledgerFinancialCompanyCdName + '</td>'
							+ '<td>' + i.ledgerFinancialBranchCdName + '</td>'
							+ '<td>' + i.ledgerFinancialProductCdName + '</td>'
							+ '<td>' + i.ledgerCustomerName + '</td>'
							+ '<td>' + i.ledgerDeliveryDate.substring(0, 10) + '</td>'
							+ '<td>' + (i.ledgerCarName == null ? '' : i.ledgerCarName) + '</td>'
							+ '<td class="align-right">'
							+ '<p><span class="font-blue">차량가 </span>' + Common.Comma(i.ledgerCarPrice) + '<span></span></p>'
							+ '<p><span class="font-red">취득원가 </span>' + Common.Comma(i.ledgerAcquisitionCost) + '<span></span></p>'
							+ '</td>'
							+ '</tr>';
						
						$("#tbodyLedgerInfo").append(tr);
					}
					
					$("#ledgerInfoModal").removeClass("hide");
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