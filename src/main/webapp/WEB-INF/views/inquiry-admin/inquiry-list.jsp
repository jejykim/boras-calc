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
	<script src='/static/assets/js/inquiry-admin/InquiryList.js'></script>
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
                            <h3>문의 내역</h3>
                        </div>
                        <div class="header-sub">
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li id="liAll" <c:if test="${inquiryVO.inquiryTeb eq 'all' }">class="on"</c:if>>전체</li>
                                        <li id="liNotRead" <c:if test="${inquiryVO.inquiryTeb eq 'notRead' }">class="on"</c:if>>미확인 문의</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                	<div class="form-control">
                                        <select class="col-2" id="selPagePerRows" style="width: 100px;">
	                                   		<option value="10" <c:if test="${inquiryVO.pagePerRows eq 10 }">selected="selected"</c:if>>10 줄</option>
	                                   		<option value="20" <c:if test="${inquiryVO.pagePerRows eq 20 }">selected="selected"</c:if>>20 줄</option>
	                                   		<option value="50" <c:if test="${inquiryVO.pagePerRows eq 50 }">selected="selected"</c:if>>50 줄</option>
	                                   		<option value="100" <c:if test="${inquiryVO.pagePerRows eq 100 }">selected="selected"</c:if>>100 줄</option>
	                                   	</select>
                                	</div>
                                	&nbsp;
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="검색" value="${inquiryVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${inquiryVO.searchText }">
											<input type='hidden' id="now_page" name="nowPage" value="${inquiryVO.nowPage }">
											<input type='hidden' id="inquiryTeb" name="inquiryTeb" value="${inquiryVO.inquiryTeb }">
											<input type='hidden' id="pagePerRows" name="pagePerRows" value="${inquiryVO.pagePerRows }">
										</form>
                                    </div>
                                    <c:if test="${ledgerVO.stateType eq 'request' }">
										<button class="btn-bu" id="btnApprovalOk">승인</button>
									</c:if>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>확인 여부</th>
                                                <th>금융사</th>
                                                <th>금융지점</th>
                                                <th>금융상품</th>
                                                <th>고객명</th>
                                                <th>차량가</th>
                                                <th>취득원가</th>
                                                <th>최근 답변 일자</th>
                                                <th>최초 문의 일자</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                        	<tr onclick="InquiryList.getInquiryInfo('${list.inquiryLedgerSeq}', this)">
	                                        		<c:choose>
	                                        			<c:when test="${list.isRead eq 'N' }">
	                                        				<td style="color: green;">미확인</td>
	                                        			</c:when>
	                                        			<c:otherwise>
	                                        				<td>확인완료</td>
	                                        			</c:otherwise>
	                                        		</c:choose>
	                                        		
	                                        		<td>${list.ledgerFinancialCompanyCdName }</td>
	                                        		<td>${list.ledgerFinancialBranchCdName }</td>
	                                        		<td>${list.ledgerFinancialProductCdName }</td>
	                                        		<td>${list.ledgerCustomerName }</td>
	                                        		<td><fmt:formatNumber value="${list.ledgerCarPrice }" pattern="#,###"/></td>
	                                        		<td><fmt:formatNumber value="${list.ledgerAcquisitionCost }" pattern="#,###"/></td>
	                                        		<td>${fn:substring(list.inquiryLastDate, 0, 19) }</td>
	                                        		<td>${fn:substring(list.inquiryCreateDate, 0, 19) }</td>
	                                        	</tr>
                                        	</c:forEach>
                                            <c:if test="${listCount eq 0 }">
	                                            <tr>
	                                                <td colspan="9">조회된 데이터가 없습니다</td>
	                                            </tr>
	                                        </c:if>
                                        </tbody>
                                    </table>
                                    
									<c:if test="${listCount ne 0}">
	                                    <div class="page_wrap">
	                                        <div class="page_nation">
	                                            <a class="arrow prev" style="cursor: pointer;" onclick="InquiryList.Paging(${pagingVO.startPage })"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
	                                            <c:forEach var="list" varStatus="status" begin="${pagingVO.firstPage }" end="${pagingVO.lastPage }">
	                                            	<c:choose>
                                                        <c:when test="${pagingVO.nowPage eq list }">
                                                            <a class="active">${list }</a>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <a onclick="InquiryList.Paging(${list })" style="cursor: pointer;">${list }</a>
                                                        </c:otherwise>
                                                    </c:choose>
	                                            </c:forEach>
	                                            <a class="arrow next" style="cursor: pointer;" onclick="InquiryList.Paging(${pagingVO.endPage })"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
	                                        </div>
	                                    </div>
                                    </c:if>
                                    
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