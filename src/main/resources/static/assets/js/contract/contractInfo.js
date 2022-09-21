/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		ContractInfo.PageLoad();
	}
	catch (e) { console.log(e.message); }

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
ContractInfo Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//ContractInfo Class
var ContractInfo = {};

//ContractInfo Const

//ContractInfo Variable
var multiRequest = "";
var checkExcelFlag = false;

//ContractInfo
var Properties = {};
ContractInfo.Properties = Properties;
ContractInfo.FormulatList = "";

//금융상품 초기화
//금융사 초기화
//fee % 초기화
ContractInfo.ContractInfoNomalTotalFeePercent = 0;
ContractInfo.ContractInfoNomalAgFeePercent = 0;
ContractInfo.ContractInfoNomalDpFeePercent = 0;
ContractInfo.ContractInfoTotalSlidingPercent = 0;
ContractInfo.ContractInfoAgSlidingPercent = 0;
ContractInfo.ContractInfoDpSlidingPercent = 0;

//ContractInfo Method
ContractInfo.PageLoad = function() { };  //메인 페이지 로드 공통 함수
ContractInfo.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
ContractInfo Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
ContractInfo.PageLoad = function() {
	try {
		ContractInfo.Init();
		ContractInfo.SetEvent();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
ContractInfo.Init = function() {
	try {
		ContractInfo.getFormulaList();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
ContractInfo.SetEvent = function() {
	try {

		// 저장
		$("#btnUpdate").click(function() {
			ContractInfo.updateContractInfo();
		});


		/* 계출 수정 값 변화 감치 % <-> sum */
		// 일반fee-총fee
		$("#txtContractInfoNomalTotalFeePercent").change(function() {
			ContractInfo.ContractInfoCalculation('NTotalFee', 'NTotalP');
		});
		// 일반fee-총fee
		$("#txtContractInfoNomalTotalFeeSum").change(function() {
			ContractInfo.ContractInfoCalculation('NTotalFee', 'NTotalS');
		});

		// 일반fee-AGfee
		$("#txtContractInfoNomalAgFeePercent").change(function() {
			ContractInfo.ContractInfoCalculation('NAGFee', 'NAGP');
		});
		// 일반fee-AGfee
		$("#txtContractInfoNomalAgFeeSum").change(function() {
			ContractInfo.ContractInfoCalculation('NAGFee', 'NAGS');
		});

		// 일반fee-DPfee
		$("#txtContractInfoNomalDpFeePercent").change(function() {
			ContractInfo.ContractInfoCalculation('NDPFee', 'NDPP');
		});
		// 일반fee-DPfee
		$("#txtContractInfoNomalDpFeeSum").change(function() {
			ContractInfo.ContractInfoCalculation('NDPFee', 'NDPS');
		});

		// 슬라이딩-총fee
		$("#txtContractInfoTotalSlidingPercent").change(function() {
			ContractInfo.ContractInfoCalculation('STotalFee', 'STotalP');
		});
		// 슬라이딩-총fee
		$("#txtContractInfoTotalSlidingSum").change(function() {
			ContractInfo.ContractInfoCalculation('STotalFee', 'STotalS');
		});

		// 슬라이딩-AGfee
		$("#txtContractInfoAgSlidingPercent").change(function() {
			ContractInfo.ContractInfoCalculation('SAGFee', 'SAGP');
		});
		// 슬라이딩-AGfee
		$("#txtContractInfoAgSlidingSum").change(function() {
			ContractInfo.ContractInfoCalculation('SAGFee', 'SAGS');
		});

		// 슬라이딩-DPfee
		$("#txtContractInfoDpSlidingPercent").change(function() {
			ContractInfo.ContractInfoCalculation('SDPFee', 'SDPP');
		});
		// 슬라이딩-DPfee
		$("#txtContractInfoDpSlidingSum").change(function() {
			ContractInfo.ContractInfoCalculation('SDPFee', 'SDPS');
		});
		

	}
	catch (e) { console.log(e.message); }
}



/*=======================================================================
내      용  : 계출 수정
작  성  자  : 김은빈
2022.08.29 - 최초생성
========================================================================*/
ContractInfo.updateContractInfo = function() {
	try {
		var data = {
			"ContractInfoNomalTotalFeePercent": $("#txtContractInfoNomalTotalFeePercent").val()
			, "ContractInfoNomalTotalFeeSum": Common.RemoveComma($("#txtContractInfoNomalTotalFeeSum").val())
			, "ContractInfoNomalAgFeePercent": $("#txtContractInfoNomalAgFeePercent").val()
			, "ContractInfoNomalAgFeeSum": Common.RemoveComma($("#txtContractInfoNomalAgFeeSum").val())
			, "ContractInfoNomalDpFeePercent": $("#txtContractInfoNomalDpFeePercent").val()
			, "ContractInfoNomalDpFeeSum": Common.RemoveComma($("#txtContractInfoNomalDpFeeSum").val())

			, "ContractInfoAgFeeSurtaxSupportYn": $("#selContractInfoAgFeeSurtaxSupport").val()

			, "ContractInfoAddTotalFeeSum": Common.RemoveComma($("#txtContractInfoAddTotalFeeSum").val())
			, "ContractInfoAddAgFeeSum": Common.RemoveComma($("#txtContractInfoAddAgFeeSum").val())
			, "ContractInfoAddDpFeeSum": Common.RemoveComma($("#txtContractInfoAddDpFeeSum").val())

			, "ContractInfoSlidingSurtaxSupportYn": $("#selContractInfoSlidingSurtaxSupport").val()

			, "ContractInfoTotalSlidingPercent": $("#txtContractInfoTotalSlidingPercent").val()
			, "ContractInfoTotalSlidingSum": Common.RemoveComma($("#txtContractInfoTotalSlidingSum").val())
			, "ContractInfoAgSlidingPercent": $("#txtContractInfoAgSlidingPercent").val()
			, "ContractInfoAgSlidingSum": Common.RemoveComma($("#txtContractInfoAgSlidingSum").val())
			, "ContractInfoDpSlidingPercent": $("#txtContractInfoDpSlidingPercent").val()
			, "ContractInfoDpSlidingSum": Common.RemoveComma($("#txtContractInfoDpSlidingSum").val())

			, "ContractInfoAddFeeSurtaxSupportYn": $("#selContractInfoAddFeeSurtaxSupport").val()
		}
		console.log(data)
		$.ajax({
			type: "post",
			url: "/v1/api/Contract/update/" + contractInfoSeq,
			data: data,
			success: function(json) {
				if (json.resultCode == "00000") {
					alert("수정되었습니다.");
				} else {
					alert(json.resultMsg);
				}
			},
			error: function(request, status, error, data) {
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
ContractInfo.getFormulaList = function() {
	try {

		$.ajax({
			type: "get",
			url: "/v1/api/contract/formula/list",
			success: function(json) {
				if (json.resultCode == "00000") {
					ContractInfo.FormulatList = json.formulaList;
				} else {
					alert(json.resultMsg);
				}
			},
			error: function(request, status, error, data) {
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
ContractInfo.ContractInfoCalculation = function(type, type2) {
	try {
		var price1 = 0;
		var price2 = 0;
		var price3 = 0;

		if (type == 'NTotalFee') {
			$("#txtContractInfoNomalAgFeePercent").val(0);
			$("#txtContractInfoNomalAgFeeSum").val(0);
			$("#txtContractInfoNomalDpFeePercent").val(0);
			$("#txtContractInfoNomalDpFeeSum").val(0);
		}
		if (type == 'STotalFee') {
			$("#txtContractInfoAgSlidingPercent").val(0);
			$("#txtContractInfoAgSlidingSum").val(0);
			$("#txtContractInfoDpSlidingPercent").val(0);
			$("#txtContractInfoDpSlidingSum").val(0);
		}

		for (var i = 0; i < ContractInfo.FormulatList.length; i++) {
			console.log($("#txtContractInfoNomalAgFeePercent").val())
			var formula = ContractInfo.FormulatList[i];
			
			if (formula.formulaType == type) {
				if (formula.formulaFinancialProductCd == ledgerFinancialProductCd && formula.formulaFinancialCompanyCd == ledgerFinancialCompanyCd) {
						console.log($("#txtContractInfoNomalAgFeePercent").val())
					if (formula.formula1 == "ledgerAcquisitionCost") {
						price1 = ledgerCarPrice;
					} else if (formula.formula1 == "ledgerCarPrice") {
						price1 = ledgerAcquisitionCost;
					}
					if (formula.formula2 == 'contractNomalTotalFeePercent') {
						price2 = {
							"percent": $("#txtContractInfoNomalTotalFeePercent").val()
							, "sum": $("#txtContractInfoNomalTotalFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalAgFeePercent') {
						price2 = {
							"percent": $("#txtContractInfoNomalAgFeePercent").val()
							, "sum": $("#txtContractInfoNomalAgFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalDpFeePercent') {
						price2 = {
							"percent": $("#txtContractInfoNomalDpFeePercent").val()
							, "sum": $("#txtContractInfoNomalDpFeeSum").val()
						}
					} else if (formula.formula2 == 'contractTotalSlidingPercent') {
						price2 = {
							"percent": $("#txtContractInfoTotalSlidingPercent").val()
							, "sum": $("#txtContractInfoTotalSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractAgSlidingPercent') {
						price2 = {
							"percent": $("#txtContractInfoAgSlidingPercent").val()
							, "sum": $("#txtContractInfoAgSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractDpSlidingPercent') {
						price2 = {
							"percent": $("#txtContractInfoDpSlidingPercent").val()
							, "sum": $("#txtContractInfoDpSlidingSum").val()
						}
					}
					price3 = formula.formula3;
					ContractInfo.SwitchCalculation(type, price1, price2, price3, type2);
				} else if (formula.formulaFinancialCompanyCd == 0) {
					if (formula.formula1 == "ledgerAcquisitionCost") {
						price1 = ledgerAcquisitionCost;
					} else if (formula.formula1 == "ledgerCarPrice") {
						price1 = ledgerCarPrice;
					}
					if (formula.formula2 == 'contractNomalTotalFeePercent') {
						price2 = {
							"percent": $("#txtContractInfoNomalTotalFeePercent").val()
							, "sum": $("#txtContractInfoNomalTotalFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalAgFeePercent') {
						price2 = {
							"percent": $("#txtContractInfoNomalAgFeePercent").val()
							, "sum": $("#txtContractInfoNomalAgFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalDpFeePercent') {
						price2 = {
							"percent": $("#txtContractInfoNomalDpFeePercent").val()
							, "sum": $("#txtContractInfoNomalDpFeeSum").val()
						}
					} else if (formula.formula2 == 'contractTotalSlidingPercent') {
						price2 = {
							"percent": $("#txtContractInfoTotalSlidingPercent").val()
							, "sum": $("#txtContractInfoTotalSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractAgSlidingPercent') {
						price2 = {
							"percent": $("#txtContractInfoAgSlidingPercent").val()
							, "sum": $("#txtContractInfoAgSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractDpSlidingPercent') {
						price2 = {
							"percent": $("#txtContractInfoDpSlidingPercent").val()
							, "sum": $("#txtContractInfoDpSlidingSum").val()
						}
					}
					price3 = formula.formula3;
					ContractInfo.SwitchCalculation(type, price1, price2, price3, type2);
				}

			} 
		}

	}
	catch (e) { console.log(e.message); }
}


/*=======================================================================
내      용  : 계출 계산
작  성  자  : 김은빈
2022.08.30 - 최초생성
========================================================================*/
ContractInfo.SwitchCalculation = function(type, price1, price2, price3, type2) {
	try {
		
		var NTotalFee = { "percent": Common.RemoveComma($('#txtContractInfoNomalTotalFeePercent').val()), "sum": Common.RemoveComma($('#txtContractInfoNomalTotalFeeSum').val()) };
		var STotalFee = { "percent": Common.RemoveComma($('#txtContractInfoTotalSlidingPercent').val()), "sum": Common.RemoveComma($('#txtContractInfoTotalSlidingSum').val()) };
		
		switch (type) {
			case 'NTotalFee':
				NTotalFee = ContractInfo.Calculation(price1, price2, price3, type2);
				var nomalTotalFeePercent = Common.Comma(NTotalFee.percent);
				$('#txtContractInfoNomalTotalFeePercent').val(nomalTotalFeePercent);

				var nomalTotalFeeSum = Common.Comma(NTotalFee.sum);
				$('#txtContractInfoNomalTotalFeeSum').val(nomalTotalFeeSum);

				break;
			case 'NAGFee':
				var NAGFee = ContractInfo.Calculation(price1, price2, price3, type2);
				
				console.log(NAGFee)
				
				var nomalAgFeePercent = Common.Comma(NAGFee.percent);
				$('#txtContractInfoNomalAgFeePercent').val(nomalAgFeePercent);

				var nomalAgFeeSum = Common.Comma(NAGFee.sum);
				$('#txtContractInfoNomalAgFeeSum').val(nomalAgFeeSum);

				$('#txtContractInfoNomalDpFeePercent').val(NTotalFee.percent - NAGFee.percent);
				$('#txtContractInfoNomalDpFeeSum').val(Common.Comma(NTotalFee.sum - NAGFee.sum));

				break;
			case 'NDPFee':
				var NDPFee = ContractInfo.Calculation(price1, price2, price3, type2);

				var nomalDpFeePercent = Common.Comma(NDPFee.percent);
				$('#txtContractInfoNomalDpFeePercent').val(nomalDpFeePercent);

				var nomalDpFeeSum = Common.Comma(NDPFee.sum);
				$('#txtContractInfoNomalDpFeeSum').val(nomalDpFeeSum);

				$('#txtContractInfoNomalAgFeePercent').val(NTotalFee.percent - NDPFee.percent);
				$('#txtContractInfoNomalAgFeeSum').val(Common.Comma(NTotalFee.sum - NDPFee.sum));

				break;
			case 'STotalFee':
				STotalFee = ContractInfo.Calculation(price1, price2, price3, type2);

				var slidingTotalFeePercent = Common.Comma(STotalFee.percent);
				$('#txtContractInfoTotalSlidingPercent').val(slidingTotalFeePercent);

				var slidingTotalFeeSum = Common.Comma(STotalFee.sum);
				$('#txtContractInfoTotalSlidingSum').val(slidingTotalFeeSum);

				break;
			case 'SAGFee':
				var SAGFee = ContractInfo.Calculation(price1, price2, price3, type2);

				var slidingAgFeePercent = Common.Comma(SAGFee.percent);
				$('#txtContractInfoAgSlidingPercent').val(slidingAgFeePercent);

				var slidingAgFeeSum = Common.Comma(SAGFee.sum);
				$('#txtContractInfoAgSlidingSum').val(slidingAgFeeSum);

				$('#txtContractInfoDpSlidingPercent').val(STotalFee.percent - SAGFee.percent);
				$('#txtContractInfoDpSlidingSum').val(Common.Comma(STotalFee.sum - SAGFee.sum));

				break;
			case 'SDPFee':
				var SDPFee = ContractInfo.Calculation(price1, price2, price3, type2);

				var slidingDpFeePercent = Common.Comma(SDPFee.percent);
				$('#txtContractInfoDpSlidingPercent').val(slidingDpFeePercent);

				var slidingDpFeeSum = Common.Comma(SDPFee.sum);
				$('#txtContractInfoDpSlidingSum').val(slidingDpFeeSum);

				$('#txtContractInfoAgSlidingPercent').val(STotalFee.percent - SDPFee.percent);
				$('#txtContractInfoAgSlidingSum').val(Common.Comma(STotalFee.sum - SDPFee.sum));
				break;
		}

	}

	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계출 계산
작  성  자  : 김은빈
2022.08.30 - 최초생성
========================================================================*/
ContractInfo.Calculation = function(formula1, formula2, formula3, type2) {
	try {
		if (type2 == 'NTotalS' || type2 == 'NAGS' || type2 == 'NDPS' || type2 == 'STotalS' || type2 == 'SAGS' || type2 == 'SDPS') {
			if (formula3 != null) {
				var sum = Common.RemoveComma(formula2.sum);
				var percent = (100 * sum / formula1).toFixed(4);
			} else {
				var sum = Common.RemoveComma(formula2.sum);
				var percent = (100 * sum / formula1).toFixed(4);
			}
		} else if (type2 == 'NTotalP' || type2 == 'NAGP' || type2 == 'NDPP' || type2 == 'STotalP' || type2 == 'SAGP' || type2 == 'SDPP') {
			if (formula3 != null) {
				var sum = ((formula2.percent / 100) * formula1).toFixed(4);
				var percent = formula2.percent;
			} else {
				var sum = ((formula2.percent / 100) * formula1).toFixed(4);
				var percent = formula2.percent;
			}
		}
		var json = { "percent": percent, "sum": sum };
		console.log("json: "+JSON.stringify(json))
		return json;
	}

	catch (e) { console.log(e.message); }
}
