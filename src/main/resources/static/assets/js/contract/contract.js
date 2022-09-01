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
Contract.FormulatList = "";

//차량가 초기화
Contract.ledgerCarPrice = 0;
//취득원가 초기화
Contract.ledgerAcquisitionCost = 0;
//금융상품 초기화
Contract.ledgerFinancialProductCd = 0;
//금융사 초기화
Contract.ledgerFinancialCompanyCd = 0;
//fee % 초기화
Contract.contractNomalTotalFeePercent = 0;
Contract.contractNomalAgFeePercent = 0;
Contract.contractNomalDpFeePercent = 0;
Contract.contractTotalSlidingPercent = 0;
Contract.contractAgSlidingPercent = 0;
Contract.contractDpSlidingPercent = 0;

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
		Contract.getFormulaList();
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
		
		// 정산
		$("#btnCalculate").click(function() {
			Contract.calculate();
		});
		
		/* 계출 수정 값 변화 감치 % <-> sum */
		// 일반fee-총fee
		$("#txtContractNomalTotalFeePercent").keyup(function() {
			Contract.ContractCalculation();
		});
		// 일반fee-총fee
		$("#txtContractNomalTotalFeeSum").keyup(function() {
			Contract.ContractCalculation();
		});
		
		// 일반fee-AGfee
		$("#txtContractNomalAgFeePercent").keyup(function() {
			Contract.ContractCalculation();
		});
		// 일반fee-AGfee
		$("#txtContractNomalAgFeeSum").keyup(function() {
			Contract.ContractCalculation();
		});
		
		// 일반fee-DPfee
		$("#txtContractNomalDpFeePercent").keyup(function() {
			Contract.ContractCalculation();
		});
		// 일반fee-DPfee
		$("#txtContractNomalDpFeeSum").keyup(function() {
			Contract.ContractCalculation();
		});
		
		// 슬라이딩-총fee
		$("#txtContractTotalSlidingPercent").keyup(function() {
			Contract.ContractCalculation();
		});
		// 슬라이딩-총fee
		$("#txtContractTotalSlidingSum").keyup(function() {
			Contract.ContractCalculation();
		});
		
		// 슬라이딩-AGfee
		$("#txtContractAgSlidingPercent").keyup(function() {
			Contract.ContractCalculation();
		});
		// 슬라이딩-AGfee
		$("#txtContractAgSlidingSum").keyup(function() {
			Contract.ContractCalculation();
		});
		
		// 슬라이딩-DPfee
		$("#txtContractDpSlidingPercent").keyup(function() {
			Contract.ContractCalculation();
		});
		// 슬라이딩-DPfee
		$("#txtContractDpSlidingSum").keyup(function() {
			Contract.ContractCalculation();
		});
		
    }
    catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계출 상세
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.selectContractInfo = function (contracatSeq,trThis) {
    try {
		$(trThis).parent().children().removeClass('on');
		$(trThis).addClass("on");
		Contract.ContractSeq = contracatSeq;
		
		var NTotalFee = 0;
		var NAGFee = 0;
		var NDPFee = 0;
		var STotalFee = 0;
		var SAGFee = 0;
		var SDPFee = 0;
		
		$.ajax({
			type : "get",
			url : "/v1/api/contract/info/" + contracatSeq,
			success : function(json){
				var contract = json.info;
				if(json.resultCode == "00000") {
					
					//차량가 세팅
					Contract.ledgerCarPrice = contract.ledgerCarPrice;
					//취득원가 세팅
					Contract.ledgerAcquisitionCost = contract.ledgerAcquisitionCost;
					
					//금융상품 세팅
					Contract.ledgerFinancialProductCd = contract.ledgerFinancialProductCd;
					//금융사 세팅
					Contract.ledgerFinancialCompanyCd = contract.ledgerFinancialCompanyCd;
					//fee % 세팅
					Contract.contractNomalTotalFeePercent = contract.contractNomalTotalFeePercent;
					Contract.contractNomalAgFeePercent = contract.contractNomalAgFeePercent;
					Contract.contractNomalDpFeePercent = contract.contractNomalDpFeePercent;
					Contract.contractTotalSlidingPercent = contract.contractTotalSlidingPercent;
					Contract.contractAgSlidingPercent = contract.contractAgSlidingPercent;
					Contract.contractDpSlidingPercent = contract.contractDpSlidingPercent;
										
					$('#txtContractNomalTotalFeePercent').val(contract.contractNomalTotalFeePercent);
					$('#txtContractNomalAgFeePercent').val(contract.contractNomalAgFeePercent);
					$('#txtContractNomalDpFeePercent').val(contract.contractNomalDpFeePercent);
					
					for(var i=0; i<json.formulaList.length; i++){
						var formula = json.formulaList[i];
						if(formula.formulaType=='NTotalFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								NTotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}else{
								NTotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}
						}else if(formula.formulaType=='NAGFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								NAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)	
							}else{
								NAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3) 
							}
						}else if(formula.formulaType=='NDPFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								NDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}else{
								NDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}
						}else if(formula.formulaType=='STotalFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								STotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}else{
								STotalFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}
						}else if(formula.formulaType=='SAGFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								SAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)	
							}else{
								SAGFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3) 
							}
						}else if(formula.formulaType=='SDPFee' && formula.formulaFinancialProductCd==contract.ledgerFinancialProductCd){
							if(formula.formulaFinancialCompanyCd==contract.ledgerFinancialCompanyCd){
								SDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
							}else{
								SDPFee = Contract.Calculation(contract[formula.formula1],contract[formula.formula2],formula.formula3)
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
			,"contractNomalTotalFeeSum" : Common.RemoveComma($("#txtContractNomalTotalFeeSum").val())
			,"contractNomalAgFeePercent" : $("#txtContractNomalAgFeePercent").val()
			,"contractNomalAgFeeSum" : Common.RemoveComma($("#txtContractNomalAgFeeSum").val())
			,"contractNomalDpFeePercent" : $("#txtContractNomalDpFeePercent").val()
			,"contractNomalDpFeeSum" : Common.RemoveComma($("#txtContractNomalDpFeeSum").val())
			
			,"contractAgFeeSurtaxSupportYn" : $("#selContractAgFeeSurtaxSupport").val()
			
			,"contractAddTotalFeeSum" : Common.RemoveComma($("#txtContractAddTotalFeeSum").val())
			,"contractAddAgFeeSum" : Common.RemoveComma($("#txtContractAddAgFeeSum").val())
			,"contractAddDpFeeSum" : Common.RemoveComma($("#txtContractAddDpFeeSum").val())
			
			,"contractSlidingSurtaxSupportYn" : $("#selContractSlidingSurtaxSupport").val()
			
			,"contractTotalSlidingPercent" : $("#txtContractTotalSlidingPercent").val()
			,"contractTotalSlidingSum" : Common.RemoveComma($("#txtContractTotalSlidingSum").val())
			,"contractAgSlidingPercent" : $("#txtContractAgSlidingPercent").val()
			,"contractAgSlidingSum" : Common.RemoveComma($("#txtContractAgSlidingSum").val())
			,"contractDpSlidingPercent" : $("#txtContractDpSlidingPercent").val()
			,"contractDpSlidingSum" : Common.RemoveComma($("#txtContractDpSlidingSum").val())
			
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
내      용  : 계출 공식 가져오기
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.getFormulaList = function () {
    try {
		
		$.ajax({
			type : "get",
			url : "/v1/api/contract/formula/list",
			success : function(json){
				if(json.resultCode == "00000") {
					Contract.FormulatList = json.formulaList;
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
Contract.ContractCalculation = function () {
    try {
	
	
console.log(Contract.ledgerCarPrice)
console.log(Contract.ledgerAcquisitionCost)
console.log(Contract.ledgerFinancialProductCd)
console.log(Contract.ledgerFinancialCompanyCd)
console.log(Contract.contractNomalTotalFeePercent)
console.log(Contract.contractNomalAgFeePercent)
console.log(Contract.contractNomalDpFeePercent)
console.log(Contract.contractTotalSlidingPercent)
console.log(Contract.contractAgSlidingPercent)
console.log(Contract.contractDpSlidingPercent)
		var price1 = 0;
		var price2 = 0;
		var price3 = 0;
		
		var NTotalFee = 0;
		var NAGFee = 0;
		var NDPFee = 0;
		var STotalFee = 0;
		var SAGFee = 0;
		var SDPFee = 0;
		
		for(var i=0; i<Contract.FormulatList.length; i++){
			var formula = Contract.FormulatList[i];
			if(formula.formulaType=='NTotalFee' && formula.formulaFinancialProductCd==Contract.ledgerFinancialProductCd){
				if(formula.formulaFinancialCompanyCd==Contract.ledgerFinancialCompanyCd){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractNomalTotalFeePercent'){
						price2 = $("#txtContractNomalTotalFeePercent").val()
					}
					price3 = formula.formula3;
				}else if(formula.formulaFinancialCompanyCd==null){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractNomalTotalFeePercent'){
						price2 = $("#txtContractNomalTotalFeePercent").val()
					}
					price3 = formula.formula3;
				}
				NTotalFee = Contract.Calculation(price1,price2,price3)
			}
			else if(formula.formulaType=='NAGFee' && formula.formulaFinancialProductCd==Contract.ledgerFinancialProductCd){
				if(formula.formulaFinancialCompanyCd==Contract.ledgerFinancialCompanyCd){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractNomalAgFeePercent'){
						price2 = $("#txtContractNomalAgFeePercent").val()
					}
					price3 = formula.formula3;
				}else if(formula.formulaFinancialCompanyCd==null){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractNomalAgFeePercent'){
						price2 = $("#txtContractNomalAgFeePercent").val()
					}
					price3 = formula.formula3;
				}
					NAGFee = Contract.Calculation(price1,price2,price3)
			}else if(formula.formulaType=='NDPFee' && formula.formulaFinancialProductCd==Contract.ledgerFinancialProductCd){
				if(formula.formulaFinancialCompanyCd==Contract.ledgerFinancialCompanyCd){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractNomalDpFeePercent'){
						price2 = $("#txtContractNomalDpFeePercent").val()
					}
					price3 = formula.formula3;
				}else if(formula.formulaFinancialCompanyCd==null){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractNomalDpFeePercent'){
						price2 = $("#txtContractNomalDpFeePercent").val()
					}
					price3 = formula.formula3;
				}
					NDPFee = Contract.Calculation(price1,price2,price3)
			}else if(formula.formulaType=='STotalFee' && formula.formulaFinancialProductCd==Contract.ledgerFinancialProductCd){
				if(formula.formulaFinancialCompanyCd==Contract.ledgerFinancialCompanyCd){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractTotalSlidingPercent'){
						price2 = $("#txtContractTotalSlidingPercent").val()
					}
					price3 = formula.formula3;
				}else if(formula.formulaFinancialCompanyCd==null){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractTotalSlidingPercent'){
						price2 = $("#txtContractTotalSlidingPercent").val()
					}
					price3 = formula.formula3;
				}
					STotalFee = Contract.Calculation(price1,price2,price3)
			}else if(formula.formulaType=='SAGFee' && formula.formulaFinancialProductCd==Contract.ledgerFinancialProductCd){
				if(formula.formulaFinancialCompanyCd==Contract.ledgerFinancialCompanyCd){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractAgSlidingPercent'){
						price2 = $("#txtContractAgSlidingPercent").val()
					}
					price3 = formula.formula3;
				}else if(formula.formulaFinancialCompanyCd==null){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractAgSlidingPercent'){
						price2 = $("#txtContractAgSlidingPercent").val()
					}
					price3 = formula.formula3;
				}
					SAGFee = Contract.Calculation(price1,price2,price3)	
			}else if(formula.formulaType=='SDPFee' && formula.formulaFinancialProductCd==Contract.ledgerFinancialProductCd){
				if(formula.formulaFinancialCompanyCd==Contract.ledgerFinancialCompanyCd){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractDpSlidingPercent'){
						price2 = $("#txtContractDpSlidingPercent").val()
					}
					price3 = formula.formula3;
				}else if(formula.formulaFinancialCompanyCd==null){
					if(formula.formula1=="ledgerAcquisitionCost"){
						price1 = Contract.ledgerAcquisitionCost;
					}else if(formula.formula1=="ledgerCarPrice"){
						price1 = Contract.ledgerCarPrice;
					}
					if(formula.formula2=='contractDpSlidingPercent'){
						price2 = $("#txtContractDpSlidingPercent").val()
					}
					price3 = formula.formula3;
				}
					SDPFee = Contract.Calculation(price1,price2,price3)
			}
			
		}
		console.log(NTotalFee);
		console.log(NTotalFee.sum);
		console.log(NTotalFee.percent);
		var nomalTotalFeePercent = Common.Comma(NTotalFee.percent);
		var nomalAgFeePercent = Common.Comma(NAGFee.percent);
		var nomalDpFeePercent = Common.Comma(NDPFee.percent);
		
		var nomalTotalFeeSum = Common.Comma(NTotalFee.sum);
		var nomalAgFeeSum = Common.Comma(NAGFee.sum);
		var nomalDpFeeSum = Common.Comma(NDPFee.sum);
		
		var slidingTotalFeePercent = Common.Comma(STotalFee.percent);
		var slidingAgFeePercent = Common.Comma(SAGFee.percent);
		var slidingDpFeePercent = Common.Comma(SDPFee.percent);
		
		var slidingTotalFeeSum = Common.Comma(STotalFee.sum);
		var slidingAgFeeSum = Common.Comma(SAGFee.sum);
		var slidingDpFeeSum = Common.Comma(SDPFee.sum);
	
		
		$('#txtContractNomalTotalFeePercent').val(nomalTotalFeePercent);
		$('#txtContractNomalAgFeePercent').val(nomalAgFeePercent);
		$('#txtContractNomalDpFeePercent').val(nomalDpFeePercent);
		
		$('#txtContractTotalSlidingPercent').val(slidingTotalFeePercent);
		$('#txtContractAgSlidingPercent').val(slidingAgFeePercent);
		$('#txtContractDpSlidingPercent').val(slidingDpFeePercent);
	
		$('#txtContractNomalTotalFeeSum').val(nomalTotalFeeSum);
		$('#txtContractNomalAgFeeSum').val(nomalAgFeeSum);
		$('#txtContractNomalDpFeeSum').val(nomalDpFeeSum);
		
		$('#txtContractTotalSlidingSum').val(slidingTotalFeeSum);
		$('#txtContractAgSlidingSum').val(slidingAgFeeSum);
		$('#txtContractDpSlidingSum').val(slidingDpFeeSum);
					
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
			var percent = (formula1 * formula2)/100 * formula3;
			var sum = (formula2/formula1)*100;
		}else{
			//var percent = (formula1 * formula2)/100;
			var sum = (formula2/100)*formula1;
			var percent = sum/formula1*100
		}
		
		var json= {"percent":percent,"sum":sum};
		
		return json;
		}
	    
    catch (e) { console.log(e.message); }
}
