/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		Calculate.PageLoad();
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
Calculate Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Calculate Class
var Calculate = {};

//Calculate Const

//Calculate Variable
var multiRequest = "";
var checkExcelFlag = false;

//Calculate
var Properties = {};
Calculate.Properties = Properties;
Calculate.CalculateSeq = firstRowSeq;
Calculate.FormulatList = "";

//차량가 초기화
Calculate.ledgerCarPrice = 0;
//취득원가 초기화
Calculate.ledgerAcquisitionCost = 0;
//금융상품 초기화
Calculate.ledgerFinancialProductCd = 0;
//금융사 초기화
Calculate.ledgerFinancialCompanyCd = 0;


//Calculate Method
Calculate.PageLoad = function() { };  //메인 페이지 로드 공통 함수
Calculate.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Calculate Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.PageLoad = function() {
	try {
		Calculate.Init();
		Calculate.SetEvent();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.Init = function() {
	try {
		if (firstRowSeq > 0) {
			Calculate.selectCalculateInfo(firstRowSeq);
		}
		if(financialCompany > 0 ){
			Calculate.selectCodeListByParent('financial');
		}
		if(dealerBrand > 0){
			Calculate.selectCodeListByParent('dealer');
		}
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.SetEvent = function() {
	try {

		// 검색
		$("#btnSearch").click(function() {
			if ($("#selFinancialCompanyCode").val() == "0" || $("#selFinancialCompanyCode").val() == "") {
				$("#ledgerFinancialCompanyCd").val(0);
			} else {
				$("#ledgerFinancialCompanyCd").val($("#selFinancialCompanyCode").val());
			}
			if ($("#selFinancialBranchCode").val() == "0" || $("#selFinancialBranchCode").val() == "") {
				$("#ledgerFinancialBranchCd").val(0);
			} else {
				$("#ledgerFinancialBranchCd").val($("#selFinancialBranchCode").val());
			}
			if ($("#selFinancialProductCode").val() == "0" || $("#selFinancialProductCode").val() == "") {
				$("#ledgerFinancialProductCd").val(0);
			} else {
				$("#ledgerFinancialProductCd").val($("#selFinancialProductCode").val());
			}
			if ($("#selDealerBrandCode").val() == "0" || $("#selDealerBrandCode").val() == "") {
				$("#ledgerDealerBrandCd").val(0);
			} else {
				$("#ledgerDealerBrandCd").val($("#selDealerBrandCode").val());
			}
			if ($("#selDealerBrandCode2").val() == "0" || $("#selDealerBrandCode2").val() == "") {
				$("#ledgerDealerCompanyCd").val(0);
			} else {
				$("#ledgerDealerCompanyCd").val($("#selDealerBrandCode2").val());
			}


			$("#searchText").val($("#inputSearchText").val());
			document.searchForm.submit();
		});
		$("#inputSearchText").keyup(function(e) {
			if (e.keyCode == 13) {
				$("#searchText").val($("#inputSearchText").val());
				Calculate.Paging(1);
			}
		});


		// 검색 초기화
		$("#btnReset").click(function() {
			$("#ledgerFinancialCompanyCd").val(0);
			$("#ledgerFinancialBranchCd").val(0);
			$("#ledgerFinancialProductCd").val(0);
			$("#ledgerDealerBrandCd").val(0);
			$("#ledgerDealerCompanyCd").val(0);
			$("#searchText").val('');
			document.searchForm.submit();
		});
		
		$("select[name=financialCompany]").change(function(){
			Calculate.selectCodeListByParent('financial');
		});
		
		$("select[name=dealerBrand]").change(function(){
			Calculate.selectCodeListByParent('dealer');
		});
	}
	catch (e) { console.log(e.message); }
}


/*=======================================================================
내      용  : 코드 자식 목록 가져오기
작  성  자  : 김은빈
2022.09.14 - 최초생성
========================================================================*/
Calculate.selectCodeListByParent= function(type) {
	try {
		if(type=='financial'){
			var parentCode=$("#selFinancialCompanyCode option:selected").val()
		}else if(type=='dealer'){
			var parentCode=$("#selDealerBrandCode option:selected").val()
		}
		
		var data={
			"codeParentId" : parentCode
		};
		console.log(data)
		$.ajax({
			type: "post",
			url: "/v1/api/code/select",
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function(json) {
				if (json.resultCode == "00000") {
					console.log(json.list);
					
					if(type=='financial'){
						$("#selFinancialBranchCode").children().remove();
						
						var firstOption = '<option value="0">전체</option>';
						$("#selFinancialBranchCode").append(firstOption);
						
						for(var item of json.list) {
							if(item.codeId==financialBranch){
								var option = "<option value='" + item.codeId + "' selected=\"selected\">" + item.codeName + "</option>";
							}else{
								var option = "<option value='" + item.codeId + "'>" + item.codeName + "</option>";								
							}
							
							$("#selFinancialBranchCode").append(option);
						}
					}else if(type=='dealer'){
						$("#selDealerBrandCode2").children().remove();
						
						var firstOption = '<option value="0">전체</option>';
						$("#selDealerBrandCode2").append(firstOption);
						
						for(var item of json.list) {
							if(item.codeId==dealerCompany){
								var option = "<option value='" + item.codeId + "' selected=\"selected\">"  + item.codeName + "</option>";
							}else{
								var option = "<option value='" + item.codeId + "'>" + item.codeName + "</option>";
							}
							
							
							$("#selDealerBrandCode2").append(option);
						}
					}
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
내      용  : 정산 상세
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Calculate.selectCalculateInfo = function(contractSeq, trThis) {
	try {
		$(trThis).parent().children().removeClass('on');
		$(trThis).addClass("on");
		$.ajax({
			type: "get",
			url: "/v1/api/calculate/info/"+contractSeq,
			success: function(json) {
				if (json.resultCode == "00000") {
					console.log(json.info);
					var calculate=json.info;
					
					$("#txtCmFeePercent").text("cm수수료가뭐지");
					$("#txtCmFeeWon").text("cm수수료가뭐지");
					$("#txtAGFeePercent").text(calculate.contractNomalAgFeePercent);
					$("#txtAGFeeWon").text(Common.Comma(calculate.contractNomalAgFeeSum));
					$("#txtPromotionFee1Won").text(Common.Comma(calculate.contractAddAgFeeSum));
					$("#txtPromotionFee2Won").text(Common.Comma(calculate.contractAgSlidingSum));
					
					$("#pLedgerOther").text(calculate.ledgerOther);
					$("#pLedgerFinancialBranchCdName").text(calculate.ledgerFinancialBranchCdName);
					$("#pLedgerDealerCompanyCdName").text(calculate.ledgerDealerCompanyCdName);
					$("#pLedgerCarName").text(calculate.ledgerCarName);
					$("#pLedgerCarNumber").text(calculate.ledgerCarNumber);
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
내      용  : 페이징
작  성  자  : 김진열
2022.08.18 - 최초생성
========================================================================*/
Calculate.Paging = function (page) {
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
