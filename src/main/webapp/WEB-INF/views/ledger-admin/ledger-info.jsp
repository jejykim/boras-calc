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
	<script src='/static/assets/js/ledger-admin/ledgerInfo.js'></script>
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
                            <h3>원장상세</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-bu btn-sm" id="btnUpdateLedger">수정</button>
                                <input type="hidden" id="ledgerSeq" name="ledgerSeq" value="${ledgerVO.ledgerSeq }">
                                <button class="btn-red btn-sm" id="btnDeleteLedger">삭제</button>
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
							                        	<option value="${list.codeId }" <c:if test="${list.codeId eq ledgerVO.ledgerFinancialCompanyCd }">selected="selected"</c:if>>${list.codeName }</option>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selFinancialBranchCode">
                                                    <option value="">--금융지점을 선택해주세요--</option>
                                                    <c:forEach var="list" items="${financialBranchCodelist }" varStatus="status">
							                        	<option value="${list.codeId }" <c:if test="${list.codeId eq ledgerVO.ledgerFinancialBranchCd }">selected="selected"</c:if>>${list.codeName }</option>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selFinancialProduct">
                                                    <option value="">--금융상품를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
							                        	<option value="${list.codeId }" <c:if test="${list.codeId eq ledgerVO.ledgerFinancialProductCd }">selected="selected"</c:if>>${list.codeName }</option>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selCodeCompany">
                                                    <option value="">--코드사를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
							                        	<c:if test="${list.codeName ne '전체'}">
							                        		<option value="${list.codeId }" <c:if test="${list.codeId eq ledgerVO.ledgerTypeCd }">selected="selected"</c:if>>${list.codeName }</option>
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
                                                <input type="date" class="col-1" id="textDeliveryDate" value="${fn:substring(ledgerVO.ledgerDeliveryDate, 0, 10) }">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                <span style="color: red;">* </span>고객명
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="고객명을 입력하세요" class="col-1" id="textCustomerName" value="${ledgerVO.ledgerCustomerName }">
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
							                        		<option value="${list.codeId }" <c:if test="${list.codeId eq ledgerVO.ledgerDealerBrandCd }">selected="selected"</c:if>>${list.codeName }</option>
							                        	</c:if>
							                        </c:forEach>
                                                </select>
                                                <select class="col-2" id="selDealerCompanyCode">
                                                    <option value="">--딜러사를 선택해주세요--</option>
                                                    <c:forEach var="list" items="${dealerCompanyCodelist }" varStatus="status">
							                        	<c:if test="${list.codeName ne '전체'}">
							                        		<option value="${list.codeId }" <c:if test="${list.codeId eq ledgerVO.ledgerDealerCompanyCd }">selected="selected"</c:if>>${list.codeName }</option>
							                        	</c:if>
							                        </c:forEach>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                차량정보
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="차량명을 입력하세요" class="col-3" id="textCarName" value="${ledgerVO.ledgerCarName }">
                                                <input type="text" placeholder="차량번호를 입력하세요" class="col-3" id="textCarNumber" value="${ledgerVO.ledgerCarNumber }">
                                                <input type="text" placeholder="차량가를 입력하세요" class="col-3" id="textCarPrice" value="<fmt:formatNumber value="${ledgerVO.ledgerCarPrice }" pattern="#,###"/>">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                취득원가
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="취득원가를 입력하세요" class="col-1" id="textAcquisitionCost" value="<fmt:formatNumber value="${ledgerVO.ledgerAcquisitionCost }" pattern="#,###"/>">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                기타사항
                                            </label>
                                            <div class="form-control">
                                                <textarea name="" id="textOther" cols="30" rows="10" placeholder="기타사항을 입력하세요">${ledgerVO.ledgerOther }</textarea>
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
                                                <input type="text" placeholder="총Fee%를 입력하세요" class="col-2" id="textTotalFeePercent" value="${ledgerVO.ledgerTotalFeePercent }">
                                                <input type="text" placeholder="총Fee 합계" class="col-2" id="textTotalFeeSum" value="<fmt:formatNumber value="${ledgerVO.ledgerTotalFeeSum }" pattern="#,###"/>">
                                                <input type="text" placeholder="총Fee 공급가" class="col-2" id="textTotalFeeSupplyPrice" value="<fmt:formatNumber value="${ledgerVO.ledgerTotalFeeSupplyPrice }" pattern="#,###"/>">
                                                <input type="text" placeholder="총Fee 부가세" class="col-2" id="textTotalFeeSurtax" value="<fmt:formatNumber value="${ledgerVO.ledgerTotalFeeSurtax }" pattern="#,###"/>">

                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                슬라이딩
                                            </label>
                                            <div class="form-control col-wrap">
                                                <input type="text" placeholder="슬라이딩% 를 입력하세요" class="col-2" id="textSlidingPercent" value="${ledgerVO.ledgerSlidingPercent }">
                                                <input type="text" placeholder="슬라이딩 합계" class="col-2" id="textSlidingSum" value="<fmt:formatNumber value="${ledgerVO.ledgerSlidingSum }" pattern="#,###"/>">
                                                <input type="text" placeholder="슬라이딩 공급가" class="col-2" id="textSlidingSupplyPrice" value="<fmt:formatNumber value="${ledgerVO.ledgerSlidingSupplyPrice }" pattern="#,###"/>">
                                                <input type="text" placeholder="슬라이딩 부가세" class="col-2" id="textSlidingSurtax" value="<fmt:formatNumber value="${ledgerVO.ledgerSlidingSurtax }" pattern="#,###"/>">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                추가프로모션
                                            </label>
                                            <div class="form-control">
                                                <input type="text" placeholder="추가프로모션을 입력하세요" class="col-1" id="textAddPromotion" value="<fmt:formatNumber value="${ledgerVO.ledgerAddPromotion }" pattern="#,###"/>">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                프로모션리스트-수기작성
                                            </label>
                                            <div class="form-control">
                                                <textarea name="" id="textPromotionMemo" cols="30" rows="10" placeholder="프로모션리스트-수기작성">${ledgerVO.ledgerPromotionMemo }</textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                AG
                                            </label>
                                            <div class="form-control span-box">
                                                <button class="btn-bu btn-sm" id="btnSelectAg">선택</button>
                                                <c:forEach var="list" items="${approvalList }" varStatus="status">
	                                                <span data="${list.approvalUserId }"><strong>${list.userName } </strong><i class="fa fa-times" aria-hidden="true" style="cursor: pointer;" onclick="LedgerInfo.deleteAgBox(this)"></i></span>
                                                </c:forEach>
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