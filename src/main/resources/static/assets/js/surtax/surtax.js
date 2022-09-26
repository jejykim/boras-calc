/*=======================================================================
Content  : FormLoad
========================================================================*/
$(document).ready(function() {
	try {
		Surtax.PageLoad();
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
Surtax Class 명세 시작 (상수(변수)>>속성>>메서드)
========================================================================*/
//Surtax Class
var Surtax = {};

//Surtax Const

//Surtax Variable

//Surtax
var Properties = {};
Surtax.Properties = Properties;

//Surtax Method
Surtax.PageLoad = function() { };  //메인 페이지 로드 공통 함수
Surtax.SetEvent = function() { };  //메인 페이지 이벤트 바인딩
/*=======================================================================
Surtax Class 명세 끝
========================================================================*/

/*=======================================================================
내      용  : 메인 페이지 로드(PageLoad)
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Surtax.PageLoad = function() {
	try {
		Surtax.Init();
		Surtax.SetEvent();
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 메인 페이지 초기화
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Surtax.Init = function() {
	try {
	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 이벤트 핸들러
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Surtax.SetEvent = function() {
	try {

		// 추가
		$("#btnAdd").click(function() {
			$(".changeHead").html("부가세 지원여부 추가");
			$('input:radio').prop('checked',false);
			$("#tdCompanySelect").css("display","");
			$("#tdCompanyInput").css("display","none");
			$("#tdProductSelect").css("display","");
			$("#tdProductInput").css("display","none");
			$("#tdCompanySelect select").val(0).prop("selected",true)
			$("#tdProductSelect select").val(0).prop("selected",true)
			$("#btnInsert").css("display","");
			$("#btnUpdate").css("display","none");
			Surtax.insertSurtax();
		});
		
		// 수정
		$("#btnUpdate").click(function() {
			Surtax.updateSurtax();
		});
		

	}
	catch (e) { console.log(e.message); }
}

/*=======================================================================
내      용  : 계출 상세
작  성  자  : 김은빈
2022.08.26 - 최초생성
========================================================================*/
Surtax.selectSurtaxInfo = function(surtaxSeq, trThis) {
	try {
		$(trThis).parent().children().removeClass('on');
		$(trThis).addClass("on");
		$(".changeHead").html("부가세 지원여부 수정");
		$("#btnInsert").css("display","none");
		$("#btnUpdate").css("display","");
		
		$("#tdCompanySelect").css("display","none");
		$("#tdCompanyInput").css("display","");
		$("#tdProductSelect").css("display","none");
		$("#tdProductInput").css("display","");
		
		$.ajax({
			type: "get",
			url: "/v1/api/surtax/info/" + surtaxSeq,
			success: function(json) {
				
				if (json.resultCode == "00000") {
					var surtax = json.surtaxSupportByFinancialInfo;
					Surtax.SurtaxSeq=surtax.surtaxSupportByFinancialSeq;
					console.log(surtax)
					$('#txtSurtaxSupportByFinancialCompanyCdName').val(surtax.surtaxSupportByFinancialCompanyCdName)
					$('#txtSurtaxSupportByFinancialProductCdName').val(surtax.surtaxSupportByFinancialProductCdName)
					$('#txtSurtaxSupportByFinancialCompanyCd').val(surtax.surtaxSupportByFinancialCompanyCd)
					$('#txtSurtaxSupportByFinancialProductCd').val(surtax.surtaxSupportByFinancialProductCd)
					
					//$("#tdCompanySelect select").val(surtax.surtaxSupportByFinancialCompanyCd).prop("selected",true)
					//$("#tdProductSelect select").val(surtax.surtaxSupportByFinancialProductCd).prop("selected",true)
					
					if(surtax.surtaxSupportByFinancialAgFeeSurtaxSupportYn=='Y'){
						$("#radio-1").prop('checked', true); 
					}else{
						$("#radio-2").prop('checked', true); 
					}
					
					if(surtax.surtaxSupportByFinancialSlidingSurtaxSupportYn=='Y'){
						$("#radio-3").prop('checked', true); 
					}else{
						$("#radio-4").prop('checked', true); 
					}
					
					if(surtax.surtaxSupportByFinancialAddFeeSurtaxSupportYn=='Y'){
						$("#radio-5").prop('checked', true); 
					}else{
						$("#radio-6").prop('checked', true); 
					}
					
					if(surtax.surtaxSupportByFinancialUseYn=='Y'){
						$("#radio-7").prop('checked', true); 
					}else{
						$("#radio-8").prop('checked', true); 
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
내      용  : 부가세 추가
작  성  자  : 김은빈
2022.09.26 - 최초생성
========================================================================*/
Surtax.insertSurtax = function() {
	try {
		var data = {
			
			"surtaxSupportByFinancialCompanyCd": $('#txtSurtaxSupportByFinancialCompanyCd').val()
			, "surtaxSupportByFinancialProductCd": $('#txtSurtaxSupportByFinancialProductCd').val()
			, "surtaxSupportByFinancialAgFeeSurtaxSupportYn": $('input[name=radio]:checked').val()
			, "surtaxSupportByFinancialSlidingSurtaxSupportYn": $('input[name=radio2]:checked').val()
			, "surtaxSupportByFinancialAddFeeSurtaxSupportYn": $('input[name=radio3]:checked').val()
			, "surtaxSupportByFinancialUseYn": $('input[name=radio4]:checked').val()
		}
		$.ajax({
			type: "post",
			url: "/v1/api/surtax/insert",
			data: data,
			success: function(json) {
				if (json.resultCode == "00000") {
					alert("추가되었습니다.");
					location.reload();
				} else {
					alert(json.resultMsg);
				}
			},
			error: function() {
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
	}
	catch (e) { console.log(e.message); }
}


/*=======================================================================
내      용  : 부가세 수정
작  성  자  : 김은빈
2022.09.26 - 최초생성
========================================================================*/
Surtax.updateSurtax = function() {
	try {
		var data = {
			
			"surtaxSupportByFinancialSeq": Surtax.SurtaxSeq
			, "surtaxSupportByFinancialCompanyCd": $('#txtSurtaxSupportByFinancialCompanyCd').val()
			, "surtaxSupportByFinancialProductCd": $('#txtSurtaxSupportByFinancialProductCd').val()
			, "surtaxSupportByFinancialAgFeeSurtaxSupportYn": $('input[name=radio]:checked').val()
			, "surtaxSupportByFinancialSlidingSurtaxSupportYn": $('input[name=radio2]:checked').val()
			, "surtaxSupportByFinancialAddFeeSurtaxSupportYn": $('input[name=radio3]:checked').val()
			, "surtaxSupportByFinancialUseYn": $('input[name=radio4]:checked').val()
		}
		$.ajax({
			type: "post",
			url: "/v1/api/surtax/update",
			data: data,
			success: function(json) {
				if (json.resultCode == "00000") {
					alert("수정되었습니다.");
					location.reload();
				} else {
					alert(json.resultMsg);
				}
			},
			error: function() {
				alert("잘못된 접근 경로입니다.");
				return false;
			}
		});
	}
	catch (e) { console.log(e.message); }
}
