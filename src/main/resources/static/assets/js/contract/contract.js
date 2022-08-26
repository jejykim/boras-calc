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
		if(firstRowSeq > 0) {
			Contract.contractInfo(firstRowSeq);
		}
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
			
			if($("#selUserAg").val() == "all"){
				$("#userId").val('');
			}else{
				$("#userId").val($('#selUserAg').val());	
			}
			
			$("#searchText").val($("#inputSearchText").val());
			document.searchForm.submit();
		});
		$("#inputSearchText").keyup(function(e) {
			if(e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				Contract.Paging(1);
			}
		});
		
	
		// 검색 초기화
		$("#btnReset").click(function() {
			$("#ledgerFinancialCompanyCd").val(0);
			$("#ledgerFinancialProductCd").val(0);
			$("#userId").val('');
			document.searchForm.submit();
		});
	
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계정 권한 조회 - 사용자 상세 조회용
작  성  자  : 김은빈
2022.08.24 - 최초생성
========================================================================*/
Contract.contractInfo = function (contracatSeq) {
    try {
		$.ajax({
			type : "get",
			url : "/v1/api/contract/info/" + contracatSeq,
			success : function(json){
				console.log(json)
				if(json.resultCode == "00000") {
					$('#txtContractNomalTotalFeePercent').val(json.info.contractNomalTotalFeePercent);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractNomalTotalFeeSum);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractNomalAgFeePercent);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractNomalAgFeeSum);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractNomalDpFeePercent);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractNomalDpFeeSum);
					
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAgFeeSurtaxSupportYn);
					
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAddTotalFeeSum);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAddAgFeeSum);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAddDpFeeSum);
					
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAddFeeSurtaxSupportYn);
					
					$('#txtContractNomalTotalFeePercent').val(json.info.contractTotalSlidingPercent);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractTotalSlidingSum);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAgSlidingPercent);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractAgSlidingSum);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractDpSlidingPercent);
					$('#txtContractNomalTotalFeePercent').val(json.info.contractDpSlidingSum);
					
					$('#txtContractNomalTotalFeePercent').val(json.info.contractSlidingSurtaxSupportYn);
					
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

