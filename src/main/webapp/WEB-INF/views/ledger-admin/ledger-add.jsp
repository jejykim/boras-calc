<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>CRM</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
	<script src="https://use.fontawesome.com/6ab134b18c.js"></script>
	<link rel="stylesheet" href="/static/assets/css/common.css">
	<link rel="stylesheet" href="/static/assets/css/style.css">
	<link rel="stylesheet" href="/static/assets/css/custom.css">
	
	<link rel="stylesheet" href="/static/assets/css/dropzone.css" />
	<script src="/static/assets/js/common/dropzone.js"></script>

	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<script src='/static/assets/js/common/common.js'></script>
	<script src='/static/assets/js/ledger-admin/ledgerAdd.js'></script>
</head>
<body>
    <div class="wrap">
        <!-- gnb -->
		<jsp:include page="../common/gnb.jsp" />
		<!-- //gnb -->
		
        <!-- snb -->
        <jsp:include page="../common/snb.jsp" />
        <!-- //snb -->
        
        <div class="contents">
            <main>
                <div class="wrapper">
                    <div class="main-header">
                        <div class="header-title">
                            <h3>원장추가</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <!-- <button class="btn-bu btn-sm">수정</button>
                                <button class="btn-red btn-sm">삭제</button> -->
                                <button class="btn-bu btn-sm" id="btnAddLedger">추가</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <h5>원장정보</h5>
                            </div>
                            <div class="portlet-body">
                                <div class="portlet-contents">
                                    <div class="portlet-form">
                                        <div class="form-group row">
                                            <label class="text-input">
                                                <span style="color: red;">* </span>금융사 정보
                                            </label>
                                            <div class="form-control col-wrap">
                                                <select class="col-2" id="selFinancialCompanyCode">
                                                    <option value="">--금융사를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
							                        	<option value="${list.codeId }">${list.codeName }</option>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selFinancialBranchCode">
                                                    <option value="">--금융지점을 선택해주세요--</option>
                                                </select>
                                                <select class="col-2" id="selFinancialProduct">
                                                    <option value="">--금융상품를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
							                        	<option value="${list.codeId }">${list.codeName }</option>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selCodeCompany">
                                                    <option value="">--코드사를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
							                        	<c:if test="${list.codeName ne '전체'}">
							                        		<option value="${list.codeId }">${list.codeName }</option>
							                        	</c:if>
							                        </c:forEach>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                인도일
                                            </label>
                                            <div class="form-control">
                                                <input type="date" class="col-1" id="textDeliveryDate">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                <span style="color: red;">* </span>고객명
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="고객명을 입력하세요" class="col-1" id="textCustomerName">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                딜러사 정보
                                            </label>
                                            <div class="form-control">
                                                <select class="col-2" id="selDealerBrandCode">
                                                    <option value="">--딜러사 브랜드를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${dealerBrandCodelist }" varStatus="status">
							                        	<c:if test="${list.codeName ne '전체'}">
							                        		<option value="${list.codeId }">${list.codeName }</option>
							                        	</c:if>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selDealerCompanyCode">
                                                    <option value="">--딜러사를 선택해주세요--</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                차량정보
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="차량명을 입력하세요" class="col-3" id="textCarName">
                                                <input type="text" placeholder="차량번호를 입력하세요" class="col-3" id="textCarNumber">
                                                <input type="text" placeholder="차량가를 입력하세요" class="col-3" id="textCarPrice">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                취득원가
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="취득원가를 입력하세요" class="col-1" id="textAcquisitionCost">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                기타사항
                                            </label>
                                            <div class="form-control">
                                                <textarea name="" id="textOther" cols="30" rows="10" placeholder="기타사항을 입력하세요"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <h5>상세정보</h5>
                            </div>
                            <div class="portlet-body">
                                <div class="portlet-contents">
                                    <div class="portlet-form">
                                        <div class="form-group row">
                                            <label class="text-input">
                                                Fee
                                            </label>
                                            <div class="form-control col-wrap">
                                                <input type="text" placeholder="총Fee%를 입력하세요" class="col-2" id="textTotalFeePercent">
                                                <input type="text" placeholder="총Fee 합계" class="col-2" id="textTotalFeeSum">
                                                <input type="text" placeholder="총Fee 공급가" class="col-2" id="textTotalFeeSupplyPrice">
                                                <input type="text" placeholder="총Fee 부가세" class="col-2" id="textTotalFeeSurtax">

                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                슬라이딩
                                            </label>
                                            <div class="form-control col-wrap">
                                                <input type="text" placeholder="슬라이딩% 를 입력하세요" class="col-2" id="textSlidingPercent">
                                                <input type="text" placeholder="슬라이딩 합계 합계" class="col-2" id="textSlidingSum">
                                                <input type="text" placeholder="슬라이딩 공급가" class="col-2" id="textSlidingSupplyPrice">
                                                <input type="text" placeholder="슬라이딩 부가세" class="col-2" id="textSlidingSurtax">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                추가프로모션
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="추가프로모션을 입력하세요" class="col-1" id="textAddPromotion">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                프로모션리스트-수기작성
                                            </label>
                                            <div class="form-control">
                                                <textarea name="" id="textPromotionMemo" cols="30" rows="10" placeholder="프로모션리스트-수기작성"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                AG
                                            </label>
                                            <div class="form-control span-box">
                                                <button class="btn-bu btn-sm" id="btnSelectAg">선택</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

		<!--modal / AG사매핑-->
        <div class="modal hide" id="addAgModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>AG사 매핑</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <div>
                            <div class="search">
                                <input type="text" placeholder="AG사 검색" id="textAgSearch">
                                <button><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                            <div class="search-result">
                                <select size="4" id="selAgList">
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddAg">확인</button>
                        <button class="btn-line-cancel">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
    </div>
</body>
</html>