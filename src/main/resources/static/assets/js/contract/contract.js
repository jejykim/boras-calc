/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		Contract.PageLoad();
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
Contract.PageLoad = function() { };  //메인 페이지 로드 공통 함수
Contract.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Contract Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.PageLoad = function() {
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
Contract.Init = function() {
	try {
		Contract.getFormulaList();
		if (firstRowSeq > 0) {
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
Contract.SetEvent = function() {
	try {

		// 검색
		$("#btnSearch").click(function() {
			if ($("#selFinancialCompanyCode").val() == "all") {
				$("#ledgerFinancialCompanyCd").val(0);
			} else {
				$("#ledgerFinancialCompanyCd").val($("#selFinancialCompanyCode").val());
			}

			if ($("#selFinancialProduct").val() == "all") {
				$("#ledgerFinancialProductCd").val(0);
			} else {
				$("#ledgerFinancialProductCd").val($("#selFinancialProduct").val());
			}

			if ($("#selUserAg").val() == "all") {
				$("#userId").val('');
			} else {
				$("#userId").val($('#selUserAg').val());
			}

			$("#searchText").val($("#inputSearchText").val());
			document.searchForm.submit();
		});
		$("#inputSearchText").keyup(function(e) {
			if (e.keyCode == 13) {
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
		$("#txtContractNomalTotalFeePercent").change(function() {
			Contract.ContractCalculation('NTotalFee', 'NTotalP');
		});
		// 일반fee-총fee
		$("#txtContractNomalTotalFeeSum").change(function() {
			Contract.ContractCalculation('NTotalFee', 'NTotalS');
		});

		// 일반fee-AGfee
		$("#txtContractNomalAgFeePercent").change(function() {
			Contract.ContractCalculation('NAGFee', 'NAGP');
		});
		// 일반fee-AGfee
		$("#txtContractNomalAgFeeSum").change(function() {
			Contract.ContractCalculation('NAGFee', 'NAGS');
		});

		// 일반fee-DPfee
		$("#txtContractNomalDpFeePercent").change(function() {
			Contract.ContractCalculation('NDPFee', 'NDPP');
		});
		// 일반fee-DPfee
		$("#txtContractNomalDpFeeSum").change(function() {
			Contract.ContractCalculation('NDPFee', 'NDPS');
		});

		// 슬라이딩-총fee
		$("#txtContractTotalSlidingPercent").change(function() {
			Contract.ContractCalculation('STotalFee', 'STotalP');
		});
		// 슬라이딩-총fee
		$("#txtContractTotalSlidingSum").change(function() {
			Contract.ContractCalculation('STotalFee', 'STotalS');
		});

		// 슬라이딩-AGfee
		$("#txtContractAgSlidingPercent").change(function() {
			Contract.ContractCalculation('SAGFee', 'SAGP');
		});
		// 슬라이딩-AGfee
		$("#txtContractAgSlidingSum").change(function() {
			Contract.ContractCalculation('SAGFee', 'SAGS');
		});

		// 슬라이딩-DPfee
		$("#txtContractDpSlidingPercent").change(function() {
			Contract.ContractCalculation('SDPFee', 'SDPP');
		});
		// 슬라이딩-DPfee
		$("#txtContractDpSlidingSum").change(function() {
			Contract.ContractCalculation('SDPFee', 'SDPS');
		});

	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계출 상세
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Contract.selectContractInfo = function(contracatSeq, trThis) {
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
			type: "get",
			url: "/v1/api/contract/info/" + contracatSeq,
			success: function(json) {
				var contract = json.info;
				if (json.resultCode == "00000") {
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

					var contractJson = {
						"ledgerCarPrice": Contract.ledgerCarPrice
						, "ledgerAcquisitionCost": Contract.ledgerAcquisitionCost
						, "contractNomalTotalFeePercent": Contract.contractNomalTotalFeePercent
						, "contractNomalAgFeePercent": Contract.contractNomalAgFeePercent
						, "contractNomalDpFeePercent": Contract.contractNomalDpFeePercent
						, "contractTotalSlidingPercent": Contract.contractTotalSlidingPercent
						, "contractAgSlidingPercent": Contract.contractAgSlidingPercent
						, "contractDpSlidingPercent": Contract.contractDpSlidingPercent
					}
					var nomalTotalFeePercent = Common.Comma(contract.contractNomalTotalFeePercent);
					var nomalAgFeePercent = Common.Comma(contract.contractNomalAgFeePercent);
					var nomalDpFeePercent = Common.Comma(contract.contractNomalDpFeePercent);

					var nomalTotalFeeSum = Common.Comma(contract.contractNomalTotalFeeSum);
					var nomalAgFeeSum = Common.Comma(contract.contractNomalAgFeeSum);
					var nomalDpFeeSum = Common.Comma(contract.contractNomalDpFeeSum);

					var slidingTotalFeePercent = Common.Comma(contract.contractTotalSlidingPercent);
					var slidingAgFeePercent = Common.Comma(contract.contractAgSlidingPercent);
					var slidingDpFeePercent = Common.Comma(contract.contractDpSlidingPercent);

					var slidingTotalFeeSum = Common.Comma(contract.contractTotalSlidingSum);
					var slidingAgFeeSum = Common.Comma(contract.contractAgSlidingSum);
					var slidingDpFeeSum = Common.Comma(contract.contractDpSlidingSum);

					$('#txtContractNomalTotalFeePercent').val(nomalTotalFeePercent);
					$('#txtContractNomalAgFeePercent').val(nomalAgFeePercent);
					$('#txtContractNomalDpFeePercent').val(nomalDpFeePercent);

					$('#txtContractNomalTotalFeeSum').val(nomalTotalFeeSum);
					$('#txtContractNomalAgFeeSum').val(nomalAgFeeSum);
					$('#txtContractNomalDpFeeSum').val(nomalDpFeeSum);

					$('#txtContractAddTotalFeeSum').val(contract.contractAddTotalFeeSum);
					$('#txtContractAddAgFeeSum').val(contract.contractAddAgFeeSum);
					$('#txtContractAddDpFeeSum').val(contract.contractAddDpFeeSum);

					$('#txtContractTotalSlidingPercent').val(slidingTotalFeePercent);
					$('#txtContractAgSlidingPercent').val(slidingAgFeePercent);
					$('#txtContractDpSlidingPercent').val(slidingDpFeePercent);

					$('#txtContractTotalSlidingSum').val(slidingTotalFeeSum);
					$('#txtContractAgSlidingSum').val(slidingAgFeeSum);
					$('#txtContractDpSlidingSum').val(slidingDpFeeSum);

					$('#selContractAgFeeSurtaxSupport').val(contract.contractAgFeeSurtaxSupportYn);

					$('#selContractSlidingSurtaxSupport').val(contract.contractSlidingSurtaxSupportYn);

					$('#selContractAddFeeSurtaxSupport').val(contract.contractAddFeeSurtaxSupportYn);
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
내      용  : 계출 수정
작  성  자  : 김은빈
2022.08.29 - 최초생성
========================================================================*/
Contract.updateContract = function() {
	try {
		var data = {
			"contractNomalTotalFeePercent": $("#txtContractNomalTotalFeePercent").val()
			, "contractNomalTotalFeeSum": Common.RemoveComma($("#txtContractNomalTotalFeeSum").val())
			, "contractNomalAgFeePercent": $("#txtContractNomalAgFeePercent").val()
			, "contractNomalAgFeeSum": Common.RemoveComma($("#txtContractNomalAgFeeSum").val())
			, "contractNomalDpFeePercent": $("#txtContractNomalDpFeePercent").val()
			, "contractNomalDpFeeSum": Common.RemoveComma($("#txtContractNomalDpFeeSum").val())

			, "contractAgFeeSurtaxSupportYn": $("#selContractAgFeeSurtaxSupport").val()

			, "contractAddTotalFeeSum": Common.RemoveComma($("#txtContractAddTotalFeeSum").val())
			, "contractAddAgFeeSum": Common.RemoveComma($("#txtContractAddAgFeeSum").val())
			, "contractAddDpFeeSum": Common.RemoveComma($("#txtContractAddDpFeeSum").val())

			, "contractSlidingSurtaxSupportYn": $("#selContractSlidingSurtaxSupport").val()

			, "contractTotalSlidingPercent": $("#txtContractTotalSlidingPercent").val()
			, "contractTotalSlidingSum": Common.RemoveComma($("#txtContractTotalSlidingSum").val())
			, "contractAgSlidingPercent": $("#txtContractAgSlidingPercent").val()
			, "contractAgSlidingSum": Common.RemoveComma($("#txtContractAgSlidingSum").val())
			, "contractDpSlidingPercent": $("#txtContractDpSlidingPercent").val()
			, "contractDpSlidingSum": Common.RemoveComma($("#txtContractDpSlidingSum").val())

			, "contractAddFeeSurtaxSupportYn": $("#selContractAddFeeSurtaxSupport").val()
		}
		console.log(data)
		$.ajax({
			type: "post",
			url: "/v1/api/contract/update/" + Contract.ContractSeq,
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
Contract.getFormulaList = function() {
	try {

		$.ajax({
			type: "get",
			url: "/v1/api/contract/formula/list",
			success: function(json) {
				if (json.resultCode == "00000") {
					Contract.FormulatList = json.formulaList;
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
Contract.ContractCalculation = function(type, type2) {
	try {
		var price1 = 0;
		var price2 = 0;
		var price3 = 0;

		if (type == 'NTotalFee') {
			$("#txtContractNomalAgFeePercent").val(0);
			$("#txtContractNomalAgFeeSum").val(0);
			$("#txtContractNomalDpFeePercent").val(0);
			$("#txtContractNomalDpFeeSum").val(0);
		}
		if (type == 'STotalFee') {
			$("#txtContractAgSlidingPercent").val(0);
			$("#txtContractAgSlidingSum").val(0);
			$("#txtContractDpSlidingPercent").val(0);
			$("#txtContractDpSlidingSum").val(0);
		}


		for (var i = 0; i < Contract.FormulatList.length; i++) {
			var formula = Contract.FormulatList[i];
			//console.log("formula.formulaType: "+formula.formulaType + "type: "+ type)
			//console.log("formula.formulaFinancialCompanyCd: "+formula.formulaFinancialProductCd + "Contract.ledgerFinancialProductCd: "+ Contract.ledgerFinancialProductCd)
			//console.log("formula.formulaFinancialCompanyCd: "+formula.formulaFinancialCompanyCd + "Contract.ledgerFinancialCompanyCd: "+ Contract.ledgerFinancialCompanyCd)

			if (formula.formulaType == type) {
				if (formula.formulaFinancialProductCd == Contract.ledgerFinancialProductCd
					&& formula.formulaFinancialCompanyCd == Contract.ledgerFinancialCompanyCd) {
					if (formula.formula1 == "ledgerAcquisitionCost") {
						price1 = Contract.ledgerAcquisitionCost;
					} else if (formula.formula1 == "ledgerCarPrice") {
						price1 = Contract.ledgerCarPrice;
					}
					if (formula.formula2 == 'contractNomalTotalFeePercent') {
						price2 = {
							"percent": $("#txtContractNomalTotalFeePercent").val()
							, "sum": $("#txtContractNomalTotalFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalAgFeePercent') {
						price2 = {
							"percent": $("#txtContractNomalAgFeePercent").val()
							, "sum": $("#txtContractNomalAgFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalDpFeePercent') {
						price2 = {
							"percent": $("#txtContractNomalDpFeePercent").val()
							, "sum": $("#txtContractNomalDpFeeSum").val()
						}
					} else if (formula.formula2 == 'contractTotalSlidingPercent') {
						price2 = {
							"percent": $("#txtContractTotalSlidingPercent").val()
							, "sum": $("#txtContractTotalSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractAgSlidingPercent') {
						price2 = {
							"percent": $("#txtContractAgSlidingPercent").val()
							, "sum": $("#txtContractAgSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractDpSlidingPercent') {
						price2 = {
							"percent": $("#txtContractDpSlidingPercent").val()
							, "sum": $("#txtContractDpSlidingSum").val()
						}
					}
					price3 = formula.formula3;
					Contract.SwitchCalculation(type, price1, price2, price3, type2);
				} else if (formula.formulaFinancialCompanyCd == 0) {
					console.log("예외일경우,,,")
					if (formula.formula1 == "ledgerAcquisitionCost") {
						price1 = Contract.ledgerAcquisitionCost;
					} else if (formula.formula1 == "ledgerCarPrice") {
						price1 = Contract.ledgerCarPrice;
					}
					if (formula.formula2 == 'contractNomalTotalFeePercent') {
						price2 = {
							"percent": $("#txtContractNomalTotalFeePercent").val()
							, "sum": $("#txtContractNomalTotalFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalAgFeePercent') {
						price2 = {
							"percent": $("#txtContractNomalAgFeePercent").val()
							, "sum": $("#txtContractNomalAgFeeSum").val()
						}
					} else if (formula.formula2 == 'contractNomalDpFeePercent') {
						price2 = {
							"percent": $("#txtContractNomalDpFeePercent").val()
							, "sum": $("#txtContractNomalDpFeeSum").val()
						}
					} else if (formula.formula2 == 'contractTotalSlidingPercent') {
						price2 = {
							"percent": $("#txtContractTotalSlidingPercent").val()
							, "sum": $("#txtContractTotalSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractAgSlidingPercent') {
						price2 = {
							"percent": $("#txtContractAgSlidingPercent").val()
							, "sum": $("#txtContractAgSlidingSum").val()
						}
					} else if (formula.formula2 == 'contractDpSlidingPercent') {
						price2 = {
							"percent": $("#txtContractDpSlidingPercent").val()
							, "sum": $("#txtContractDpSlidingSum").val()
						}
					}
					price3 = formula.formula3;
					Contract.SwitchCalculation(type, price1, price2, price3, type2);
				}

			} else {
				alert("관리자에게 문의하세요.");
				console.log("formula.formulaType:" + formula.formulaType)
				console.log("type:" + type)
				console.log("formula.formulaFinancialProductCd:" + formula.formulaFinancialProductCd)
				console.log("Contract.ledgerFinancialProductCd:" + Contract.ledgerFinancialProductCd)
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
Contract.SwitchCalculation = function(type, price1, price2, price3, type2) {
	try {
		console.log("type:" + type)
		console.log("price1:" + price1)
		console.log("price2:" + type)
		console.log("price3:" + price3)
		console.log("type2:" + type2)
		var NTotalFee = { "percent": Common.RemoveComma($('#txtContractNomalTotalFeePercent').val()), "sum": Common.RemoveComma($('#txtContractNomalTotalFeeSum').val()) };
		var STotalFee = { "percent": Common.RemoveComma($('#txtContractTotalSlidingPercent').val()), "sum": Common.RemoveComma($('#txtContractTotalSlidingSum').val()) };
		switch (type) {
			case 'NTotalFee':
				NTotalFee = Contract.Calculation(price1, price2, price3, type2);
				var nomalTotalFeePercent = Common.Comma(NTotalFee.percent);
				$('#txtContractNomalTotalFeePercent').val(nomalTotalFeePercent);

				var nomalTotalFeeSum = Common.Comma(NTotalFee.sum);
				$('#txtContractNomalTotalFeeSum').val(nomalTotalFeeSum);

				break;
			case 'NAGFee':
				var NAGFee = Contract.Calculation(price1, price2, price3, type2);
				var nomalAgFeePercent = Common.Comma(NAGFee.percent);
				$('#txtContractNomalAgFeePercent').val(nomalAgFeePercent);

				var nomalAgFeeSum = Common.Comma(NAGFee.sum);
				$('#txtContractNomalAgFeeSum').val(nomalAgFeeSum);

				$('#txtContractNomalDpFeePercent').val(NTotalFee.percent - NAGFee.percent);
				$('#txtContractNomalDpFeeSum').val(Common.Comma(NTotalFee.sum - NAGFee.sum));

				break;
			case 'NDPFee':
				var NDPFee = Contract.Calculation(price1, price2, price3, type2);

				var nomalDpFeePercent = Common.Comma(NDPFee.percent);
				$('#txtContractNomalDpFeePercent').val(nomalDpFeePercent);

				var nomalDpFeeSum = Common.Comma(NDPFee.sum);
				$('#txtContractNomalDpFeeSum').val(nomalDpFeeSum);

				$('#txtContractNomalAgFeePercent').val(NTotalFee.percent - NDPFee.percent);
				$('#txtContractNomalAgFeeSum').val(Common.Comma(NTotalFee.sum - NDPFee.sum));

				break;
			case 'STotalFee':
				STotalFee = Contract.Calculation(price1, price2, price3, type2);

				var slidingTotalFeePercent = Common.Comma(STotalFee.percent);
				$('#txtContractTotalSlidingPercent').val(slidingTotalFeePercent);

				var slidingTotalFeeSum = Common.Comma(STotalFee.sum);
				$('#txtContractTotalSlidingSum').val(slidingTotalFeeSum);

				break;
			case 'SAGFee':
				var SAGFee = Contract.Calculation(price1, price2, price3, type2);

				var slidingAgFeePercent = Common.Comma(SAGFee.percent);
				$('#txtContractAgSlidingPercent').val(slidingAgFeePercent);

				var slidingAgFeeSum = Common.Comma(SAGFee.sum);
				$('#txtContractAgSlidingSum').val(slidingAgFeeSum);

				$('#txtContractDpSlidingPercent').val(STotalFee.percent - SAGFee.percent);
				$('#txtContractDpSlidingSum').val(Common.Comma(STotalFee.sum - SAGFee.sum));

				break;
			case 'SDPFee':
				var SDPFee = Contract.Calculation(price1, price2, price3, type2);

				var slidingDpFeePercent = Common.Comma(SDPFee.percent);
				$('#txtContractDpSlidingPercent').val(slidingDpFeePercent);

				var slidingDpFeeSum = Common.Comma(SDPFee.sum);
				$('#txtContractDpSlidingSum').val(slidingDpFeeSum);

				$('#txtContractAgSlidingPercent').val(STotalFee.percent - SDPFee.percent);
				$('#txtContractAgSlidingSum').val(Common.Comma(STotalFee.sum - SDPFee.sum));
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
Contract.Calculation = function(formula1, formula2, formula3, type2) {
	try {
		if (type2 == 'NTotalS' || type2 == 'NAGS' || type2 == 'NDPS' || type2 == 'STotalS' || type2 == 'SAGS' || type2 == 'SDPS') {
			if (formula3 != null) {
				var sum = Common.RemoveComma(formula2.sum) * 1.1;
				var percent = (100 * sum / formula1 * 1.1).toFixed(4);
			} else {
				var sum = Common.RemoveComma(formula2.sum);
				var percent = (100 * sum / formula1).toFixed(4);
			}
		} else if (type2 == 'NTotalP' || type2 == 'NAGP' || type2 == 'NDPP' || type2 == 'STotalP' || type2 == 'SAGP' || type2 == 'SDPP') {
			if (formula3 != null) {
				var sum = ((formula2.percent / 100) * formula1 * 1.1).toFixed(4);
				var percent = formula2.percent * 1.1;
			} else {
				var sum = ((formula2.percent / 100) * formula1).toFixed(4);
				var percent = formula2.percent;
			}
		}
		var json = { "percent": percent, "sum": sum };

		return json;
	}

	catch (e) { console.log(e.message); }
}
