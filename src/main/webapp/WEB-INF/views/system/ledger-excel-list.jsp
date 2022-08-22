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
	<script src='/static/assets/js/system/ledgerExcelList.js'></script>
	
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
                            <h3>원장 Excel 목록</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-main" id="btnAddUser">원장 Excel 추가</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li id="liAll" <c:if test="${empty ledgerExcelVO.ledgerExcelCommonYn }">class="on"</c:if>>전체</li>
                                        <li id="liCommonN" <c:if test="${ledgerExcelVO.ledgerExcelCommonYn eq 'N'}">class="on"</c:if>>개별 엑셀 원장</li>
                                        <li id="liCommonY" <c:if test="${ledgerExcelVO.ledgerExcelCommonYn eq 'Y'}">class="on"</c:if>>통합 엑셀 원장</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="검색" value="${ledgerExcelVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="/system/ledger/excel/list" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${ledgerExcelVO.searchText }">
											<input type="hidden" name="ledgerExcelCommonYn" id="ledgerExcelCommonYn" value="${ledgerExcelVO.ledgerExcelCommonYn }">
										</form>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>금융사</th>
                                                <th>금융지점</th>
                                                <th>금융상품</th>
                                                <th>개별/통합</th>
                                                <th>양식파일</th>
                                                <th>활성화</th>
                                                <th>수정자</th>
                                                <th>수정일자</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                            <tr>
	                                                <td>${list.ledgerFinancialCompanyCdName }</td>
	                                                <td>${list.ledgerFinancialBranchCdName }</td>
	                                                <td>${list.ledgerFinancialProductCdName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.ledgerExcelCommonYn eq 'Y' }">
	                                                			<span style="color: green;">통합</span>
	                                                		</c:when>
	                                                		<c:when test="${list.ledgerExcelCommonYn eq 'N' }">
	                                                			개별
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<span style="color: gray;">오류</span>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>${list.ledgerExcelFileName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.ledgerExcelUseYn eq 'Y' }">
	                                                			<span style="color: green;">활성화</span>
	                                                		</c:when>
	                                                		<c:when test="${list.ledgerExcelUseYn eq 'N' }">
	                                                			<span style="color: red;">비활성화</span>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<span style="color: gray;">오류</span>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty ledgerExcelUpdateId }">
	                                                			${ledgerExcelCreateId }
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			${ledgerExcelUpdateId }
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty ledgerExcelUpdateDate }">
	                                                			${fn:substring(list.ledgerExcelCreateDate, 0, 19) }
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			${fn:substring(list.ledgerExcelUpdateDate, 0, 19) }
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                            </tr>
                                        	</c:forEach>
                                        	<c:if test="${empty list }">
	                                            <tr>
	                                                <td colspan="8">조회된 데이터가 없습니다</td>
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
</body>
</html>