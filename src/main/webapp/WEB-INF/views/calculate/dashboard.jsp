<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
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
	<script src='/static/assets/js/calculate/dashboard.js'></script>
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
                            <h3>정산 대시보드</h3>
                            <span>
                                <select id="selYear">
                                	<c:forEach var="yearList" items="${yearlist }" varStatus="status">
                                    	<option value="${yearList }" <c:if test="${monthList eq calculateFinanicalCompanyVO.calculateFinanicalCompanyYear}">selected="selected"</c:if>>${yearList } 년</option>
                                	</c:forEach>
                                	<c:if test="${empty yearlist }">
                                		<option value="${thisYear }">${thisYear } 년</option>
                                	</c:if>
                                </select>
                                <select id="selMonth">
                                	<c:forEach var="monthList" begin="1" end="12" step="1" varStatus="status">
                                    	<option value="${monthList }" <c:if test="${monthList eq calculateFinanicalCompanyVO.calculateFinanicalCompanyMonth}">selected="selected"</c:if>>${monthList } 월</option>
                                	</c:forEach>
                                </select>
                            </span>
                        </div>
                        
                        <form action="" method="get" id="formDashboard">
                        	<input type="hidden" name="calculateFinanicalCompanyYear" value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyYear }" id="textYear">
                        	<input type="hidden" name="calculateFinanicalCompanyMonth" value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyMonth }" id="textMonth">
                        </form>
                        
                        <div class="header-sub">
                            <div class="btn dashbard">
                                <span><i class="badge confirm"></i>확인필요</span>
                                <span><i class="badge wait"></i>입출금예정</span>
                                <span><i class="badge done"></i>정산완료</span>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row main-content">
                            <div class="portlet-body dashboard">
                            
                            	<c:forEach var="list" items="${list }" varStatus="status">
	                                <div class="board" style="cursor: pointer;" onclick="Dashboard.getInfo(${list.calculateFinanicalCompanyCd})">
	                                    <div class="box confirm">
	                                        <div class="box-head">
	                                            <h5>${list.calculateFinanicalCompanyCdName }</h5>
	                                            <div class="total">
	                                                <span class="num"><i class="ico-r-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyBillSum + list.calculateFinanicalCompanyPersonalSum + list.calculateFinanicalCompanyProfitSum }" pattern="#,###"/></strong></span>
	                                                <span class="text">총 합계</span>
	                                            </div>
	                                            <div class="toal-nav">
	                                                <p>
	                                                    <h7>계산서 발급</h7>
	                                                    <span><i class="ico-r-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyBillSum }" pattern="#,###"/></strong></span>
	                                                </p>
	                                                <p>
	                                                    <h7>개인 지급</h7>
	                                                    <span><i class="ico-r-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyPersonalSum }" pattern="#,###"/></strong></span>
	                                                </p>
	                                                <p>
	                                                    <h7>회사 수익분</h7>
	                                                    <span><i class="ico-r-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyProfitSum }" pattern="#,###"/></strong></span>
	                                                </p>
	                                            </div>
	                                        </div>
	                                        <div class="box-body">
	                                            <p>
	                                                <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyPersonalSupplySum }" pattern="#,###"/></strong></span>
	                                                <h8>개인지급 공급가</h8>
	                                            </p>
	                                            <p>
	                                                <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyPersonalSurtaxSum }" pattern="#,###"/></strong></span>
	                                                <h8>개인지급 부가세</h8>
	                                            </p>
	                                            <p>
	                                                <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyWithholdingTaxSum }" pattern="#,###"/></strong></span>
	                                                <h8>3.3% 공제</h8>
	                                            </p>
	                                            <p>
	                                                <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${list.calculateFinanicalCompanyBusinessIncomeSum }" pattern="#,###"/></strong></span>
	                                                <h8>사업소득</h8>
	                                            </p>
	                                        </div>
	                                    </div>
	                                </div>
                                </c:forEach>
                                <c:if test="${empty list }">
                                	조회된 정산 내역이 없습니다
                                </c:if>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</body>
</html>