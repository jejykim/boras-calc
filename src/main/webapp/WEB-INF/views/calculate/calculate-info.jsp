<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="ko">
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
	
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<script src='/static/assets/js/common/common.js'></script>
	
	<script src='/static/assets/js/calculate/calculate-info.js'></script>
	
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
                            <h3>정산 상세 - 관리자용</h3>
                        </div>
                        <div class="header-sub" style="display:none">
                            <div class="btn">
                                <button class="btn-su">엑셀다운로드</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="board-info">
                            <div class="board-nav">
                                <div class="board-info-haed">
                                    <h5>
                                   	<c:if test="${not empty calculateUserInfo.userAgCompany}">
                                   		<span>${calculateUserInfo.userAgCompany } -</span>
                                   	</c:if>
                                    <span>${calculateUserInfo.userName }</span></h5>
                                    <c:if test="${calculateUserInfo.userBusinessTypeCd eq 5200}">
                                    	<span class="badge-text-business">사업자</span>
                                    </c:if>
                                     <c:if test="${calculateUserInfo.userBusinessTypeCd eq 5100}">
                                    	<span class="badge-text-person">개인</span>	
                                    </c:if>
                                </div>
                                <div class="board-info-result th">
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateSumInfo.calculateAgFeeTotalDifference}" pattern="#,###"/></strong></span>
                                        <span class="tag badge-p">AG fee 총 차액</span>
                                    </div>
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateSumInfo.calculatePersonalTotalPaySum}" pattern="#,###"/></strong></span>
                                        <span class="tag badge-b">원장 fee 총 입금</span>
                                    </div>
                                    <div>
                                        <span>
                                        	<i class="ico-b-krw"></i>
                                        	<strong>
                                        		<c:if test="${calculateUserInfo.userBusinessTypeCd eq 5200}">
                                        			<fmt:formatNumber value="${calculateSumInfo.calculatePersonalTotalPaySum}" pattern="#,###"/>	
                                        		</c:if>
                                        		<c:if test="${calculateUserInfo.userBusinessTypeCd eq 5100}">
                                        			<fmt:formatNumber value="${calculateSumInfo.calculateBusinessIncomePay}" pattern="#,###"/>	
                                        		</c:if>
                                       		</strong>
                                       	</span>
                                        <span class="tag badge-o">AG fee 총(+) 출금</span>
                                    </div>
                                </div>
                            </div>
                            <div class="board-nav price-box">
                                <div>
                                    <span class="title"><i class="i-badge"></i>개인총 지급 합계</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateSumInfo.calculatePersonalTotalPaySum}" pattern="#,###"/></strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>개인총 지급 공급</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateSumInfo.calculatePersonalTotalPaySupply}" pattern="#,###"/></strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>사업소득 신고액</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateSumInfo.calculateBusinessIncomePayReport}" pattern="#,###"/></strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>사업소득 지급액</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateSumInfo.calculateBusinessIncomePay}" pattern="#,###"/></strong></span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <c:forEach var="financialList" items="${financialList }">
                                        	<li class="<c:if test='${calculateVO.ledgerFinancialCompanyCd eq 0 }'>on</c:if>" value="0">전체</li>
                                        	<li class="<c:if test='${calculateVO.ledgerFinancialCompanyCd eq financialList.ledgerFinancialCompanyCd }'>on</c:if>" value="${financialList.ledgerFinancialCompanyCd}">${financialList.ledgerFinancialCompanyCdName }</li>	
                                        </c:forEach>
                                    </ul>
                                </div>
                                <form id="tabForm" name="tabForm" action="" method="get">
                                    <input type="hidden" name="ledgerFinancialCompanyCd" id="ledgerFinancialCompanyCd" value="${calculateVO.ledgerFinancialCompanyCd }">
                                </form>
                            </div>
                            <div class="portlet-body">
                                <div class="table fix-table">
                                    <table class="n-hover">
                                        <colgroup>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                            	<th>금융사</th>
                                                <th>계산서 발급</th>
                                                <th>개인지급</th>
                                                <th>개인지급 공급가</th>
                                                <th>개인지급 부가세</th>
                                                <th>3.3공제</th>
                                                <th>사업소득</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <c:forEach var="list" items="${list }" varStatus="status">
                                                    <tr>
                                                    	<td>${list.ledgerFinancialCompanyCdName }</td>
                                                        <td><fmt:formatNumber value="${list.calculateBusinessTotalPaySum}" pattern="#,###"/></td>
                                                        <td><fmt:formatNumber value="${list.calculatePersonalTotalPaySum}" pattern="#,###"/></td>
                                                        <td><fmt:formatNumber value="${list.calculatePersonalTotalPaySupply}" pattern="#,###"/></td>
                                                        <td><fmt:formatNumber value="${list.calculatePersonalTotalPaySurtax}" pattern="#,###"/></td>
                                                        <td><fmt:formatNumber value="${list.calculateThreeDotThreeDeduction}" pattern="#,###"/></td>
                                                        <td><fmt:formatNumber value="${list.calculateBusinessIncomePay}" pattern="#,###"/></td>
                                                    </tr>
                                                </c:forEach>
                                                <c:if test="${listCount eq 0 }">
                                                    <tr>
                                                        <td colspan="12">조회된 데이터가 없습니다</td>
                                                    </tr>
                                                </c:if>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <!--script-->
    <script src='/static/assets/js/common/jquery-3.3.1.min.js'></script>
</body>
</html>