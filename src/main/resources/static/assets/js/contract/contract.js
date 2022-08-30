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
Contract.ContractSeq = firstRowSeq;

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
			Contract.selectContractInfo(firstRowSeq);
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
	
		// 수정
		$("#btnUpdate").click(function() {
			Contract.updateContract();
		});
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계출 상세
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.selectContractInfo = function (contracatSeq) {
    try {
		Contract.ContractSeq = contracatSeq;
		$.ajax({
			type : "get",
			url : "/v1/api/contract/info/" + contracatSeq,
			success : function(json){
				console.log(json)
				var contract = json.info;
				if(json.resultCode == "00000") {
					
					$('#txtContractNomalTotalFeePercent').val(contract.contractNomalTotalFeePercent);
					$('#txtContractNomalAgFeePercent').val(contract.contractNomalAgFeePercent);
					$('#txtContractNomalDpFeePercent').val(contract.contractNomalDpFeePercent);
					
					for(var i=0; i<json.formulaList.length; i++){
						var formula = json.formulaList[i];
						if(formula.formulaType=='NTotalFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								var NTotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}else{
								var NTotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}
						}else if(formula.formulaType=='NAGFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								var NAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])	
							}else{
								var NAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3]) 
							}
						}else if(formula.formulaType=='NDPFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								var NDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}else{
								var NDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}
						}else if(formula.formulaType=='STotalFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								var STotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}else{
								var STotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}
						}else if(formula.formulaType=='SAGFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								var SAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])	
							}else{
								var SAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3]) 
							}
						}else if(formula.formulaType=='SDPFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								var SDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}else{
								var SDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],contract[formula.formula3])
							}
						}
					}
					
					/*
					//금융상품이 렌트
					if(json.info.ledgerFinancialProductCd==3101){
						var price = json.info.ledgerCarPrice;
					}
					//금융상품이 리스
					else if(json.info.ledgerFinancialProductCd==3102){
						var price = json.info.ledgerAcquisitionCost;
					}
					*/
					var nomalTotalFeeSum = Common.Comma(NTotalFee);
					var nomalAgFeeSum = Common.Comma(NAGFee);
					var nomalDpFeeSum = Common.Comma(NDPFee);
					
					var slidingTotalFeeSum = Common.Comma(STotalFee);
					var slidingAgFeeSum = Common.Comma(SAGFee);
					var slidingDpFeeSum = Common.Comma(SDPFee);
					
					$('#txtContractNomalTotalFeeSum').val(nomalTotalFeeSum);
					$('#txtContractNomalAgFeeSum').val(nomalAgFeeSum);
					$('#txtContractNomalDpFeeSum').val(nomalDpFeeSum);
					
					
					$('#selContractAgFeeSurtaxSupport').val(json.info.contractAgFeeSurtaxSupportYn);
					
					$('#txtContractAddTotalFeeSum').val(json.info.contractAddTotalFeeSum);
					$('#txtContractAddAgFeeSum').val(json.info.contractAddAgFeeSum);
					$('#txtContractAddDpFeeSum').val(json.info.contractAddDpFeeSum);
					
					$('#selContractSlidingSurtaxSupport').val(json.info.contractSlidingSurtaxSupportYn);
					
					$('#txtContractTotalSlidingPercent').val(json.info.contractTotalSlidingPercent);
					$('#txtContractAgSlidingPercent').val(json.info.contractAgSlidingPercent);
					$('#txtContractDpSlidingPercent').val(json.info.contractDpSlidingPercent);
					
					
					$('#txtContractTotalSlidingSum').val(slidingTotalFeeSum);
					$('#txtContractAgSlidingSum').val(slidingAgFeeSum);
					$('#txtContractDpSlidingSum').val(slidingDpFeeSum);
					
					$('#selContractAddFeeSurtaxSupport').val(json.info.contractAddFeeSurtaxSupportYn);
					
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
내      용  : 계출 수정
작  성  자  : 김은빈
2022.08.29 - 최초생성
========================================================================*/
Contract.updateContract = function () {
    try {
		var data = {
			"contractNomalTotalFeePercent" : $("#txtContractNomalTotalFeePercent").val()
			,"contractNomalTotalFeeSum" : $("#txtContractNomalTotalFeeSum").val()
			,"contractNomalAgFeePercent" : $("#txtContractNomalAgFeePercent").val()
			,"contractNomalAgFeeSum" : $("#txtContractNomalAgFeeSum").val()
			,"contractNomalDpFeePercent" : $("#txtContractNomalDpFeePercent").val()
			,"contractNomalDpFeeSum" : $("#txtContractNomalDpFeeSum").val()
			
			,"contractAgFeeSurtaxSupportYn" : $("#selContractAgFeeSurtaxSupport").val()
			
			,"contractAddTotalFeeSum" : $("#txtContractAddTotalFeeSum").val()
			,"contractAddAgFeeSum" : $("#txtContractAddAgFeeSum").val()
			,"contractAddDpFeeSum" : $("#txtContractAddDpFeeSum").val()
			
			,"contractSlidingSurtaxSupportYn" : $("#selContractSlidingSurtaxSupport").val()
			
			,"contractTotalSlidingPercent" : $("#txtContractTotalSlidingPercent").val()
			,"contractTotalSlidingSum" : $("#txtContractTotalSlidingSum").val()
			,"contractAgSlidingPercent" : $("#txtContractAgSlidingPercent").val()
			,"contractAgSlidingSum" : $("#txtContractAgSlidingSum").val()
			,"contractDpSlidingPercent" : $("#txtContractDpSlidingPercent").val()
			,"contractDpSlidingSum" : $("#txtContractDpSlidingSum").val()
			
			,"contractAddFeeSurtaxSupportYn" : $("#selContractAddFeeSurtaxSupport").val()
		}
		console.log(data)
		$.ajax({
			type : "post",
			url : "/v1/api/contract/update/" + Contract.ContractSeq,
			data : data,
			success : function(json){
				if(json.resultCode == "00000") {
					alert("수정되었습니다.");
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
내      용  : 계출 계산
작  성  자  : 김은빈
2022.08.30 - 최초생성
========================================================================*/
Contract.Calculation = function (formula1,formula2,formula3) {
    try {
		if(formula3!=null){
			var cal = formula1 * formula2 * formula3	
		}else{
			var cal = formula1 * formula2 
		}
		return cal
	    }
    catch (e) { console.log(e.message); }
}
