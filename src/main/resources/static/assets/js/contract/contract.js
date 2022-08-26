/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function(){
	try{
		Contract.PageLoad();
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
Contract Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Contract Class
var Contract = {};

//Contract Const

//Contract Variable
var multiRequest = "";
var checkExcelFlag = false;

//Contract
var Properties = {};
Contract.Properties = Properties;

//Contract Method
Contract.PageLoad = function () { };  //메인 페이지 로드 공통 함수
Contract.SetEvent = function () { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Contract Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.PageLoad = function () {
    try {
        Contract.Init();
        Contract.SetEvent();
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.Init = function () {
    try {
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.SetEvent = function () {
    try {
		
		// 검색
		$("#btnSearch").click(function() {
			if($("#selFinancialCompanyCode").val() == "all"){
				$("#ledgerFinancialCompanyCd").val(0);
			}else{
				$("#ledgerFinancialCompanyCd").val($("#selFinancialCompanyCode").val());
			}
			
			if($("#selFinancialProduct").val() == "all"){
				$("#ledgerFinancialProductCd").val(0);
			}else{
				$("#ledgerFinancialProductCd").val($("#selFinancialProduct").val());	
			}

			$("#userName").val($("#inputSearchText").val());
			$("#searchText").val($("#inputSearchText").val());
			document.searchForm.submit();
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				Contract.Paging(1);
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
			Contract.Paging(1);
		});
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 목록 조회
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.getContractList = function (page) {
    try {
		
		if(sFinancialCompany.length > 0) {
			for(var value of sFinancialCompany) {
				$('<input>').attr({
				    type: 'hidden',
				    name: 'sLedgerFinancialCompanyCd',
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
		
		if(sAgName.length > 0) {
			for(var value of sAgName) {
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
	
    }
    catch (e) { console.log(e.message); }
}

