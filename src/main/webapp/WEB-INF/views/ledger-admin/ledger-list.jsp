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
	<script src='/static/assets/js/ledger-admin/ledgerList.js'></script>
	
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
                            <h3>금융사 원장목록</h3>
                            <span>
                                <select id="selYear">
                                	<c:forEach var="yearList" items="${yearlist }" varStatus="status">
                                    	<option value="${yearList }">${yearList } 년</option>
                                	</c:forEach>
                                	<c:if test="${empty yearlist }">
                                		<option value="${thisYear }">${thisYear } 년</option>
                                	</c:if>
                                </select>
                                <select id="selMonth">
                                	<c:forEach var="monthList" begin="1" end="12" step="1" varStatus="status">
                                    	<option value="${monthList }" <c:if test="${monthList eq thisMonth}">selected="selected"</c:if>>${monthList } 월</option>
                                	</c:forEach>
                                </select>
                            </span>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su">원장엑셀업로드</button>
                                <button class="btn-main">원장추가</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row f-box">
                            <div class="portlet">
                                <h5><i class="ico-f1"></i><span>차량가</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f2"></i><span>취득원가</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f3"></i><span>fee합계</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f4"></i><span>슬라이딩 합계</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f5"></i><span>추가fee 합계</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li id="liAll" class="on">전체</li>
                                        <li id="liRequest">승인요청</li>
                                        <li id="liComplete">승인완료</li>
                                        <li id="liLeft">잉여원장</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="검색" value="${userVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="/user/list" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${userVO.searchText }">
											<input type="hidden" name="agOrAdmin" id="agOrAdmin" value="${userVO.agOrAdmin }">
											<input type='hidden' id="now_page" name="nowPage" value="${userVO.nowPage }">
										</form>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-filter">
                                    <span>
                                        <strong>인도일</strong>
                                        <span class="filter">2022.08.03</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>금융상품</strong>
                                        <span class="filter">리스</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>금융지점</strong>
                                        <span class="filter">강남지구 어떤지구</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>구분</strong>
                                        <span class="filter">성문/올카</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>금융상품</strong>
                                        <span class="filter">리스</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <button class="btn-gr">초기화</button>
                                </div>
                                <div class="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>기타사항</th>
                                                <th>상태</th>
                                                <th class="cur">구분<i class="ico-filter"></i></th>
                                                <th class="cur">금융사<i class="ico-filter"></i></th>
                                                <th class="cur">금융지점<i class="ico-filter"></i></th>
                                                <th class="cur">금융상품<i class="ico-filter"></i></th>
                                                <th>인도일</th>
                                                <th>고객명</th>
                                                <th>딜러사</th>
                                                <th>차량정보</th>
                                                <th>금액</th>
                                                <th>AG사</th>
                                                <th>문의</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                            <tr>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerOther }">
	                                                			<button class="btn-line-main">추가</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<button class="btn-main">보기</button>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>${list.ledgerTypeCd }</td>
	                                                <td>잉여원장</td>
	                                                <td>${list.ledgerFinancialCompanyCdName }</td>
	                                                <td>${list.ledgerFinancialBranchCdName }</td>
	                                                <td>${list.ledgerFinancialProductCdName }</td>
	                                                <td>${fn:substring(list.ledgerDeliveryDate, 0, 19) }</td>
	                                                <td>${list.ledgerCustomerName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerDealerBrandCdName }">
	                                                			<button class="btn-main">선택</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<a class="text-line">${list.ledgerDealerBrandCdName }</a>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                    <p>${list.ledgerCarName }</p>
	                                                    <p>${list.ledgerCarNumber }</p>
	                                                </td>
	                                                <td class="align-right">
	                                                    <p><span>차량가</span><span><fmt:formatNumber value="${list.ledgerCarPrice }" pattern="#,###"/></span></p>
	                                                    <p><span>취득원가</span><span><fmt:formatNumber value="${list.ledgerAcquisitionCost }" pattern="#,###"/></span></p>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerDealerBrandCdName }">
	                                                			<button class="btn-main">선택</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<a class="text-line">ag사명</a>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td><button class="btn-pencil"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
	                                            </tr>
                                            </c:forEach>
                                            <c:if test="${listCount eq 0 }">
	                                            <tr>
	                                                <td colspan="13">조회된 데이터가 없습니다</td>
	                                            </tr>
	                                        </c:if>
                                        </tbody>
                                    </table>
                                    
									<c:if test="${listCount ne 0}">
	                                    <div class="page_wrap">
	                                        <div class="page_nation">
	                                            <a class="arrow prev" style="cursor: pointer;" onclick="LedgerList.Paging(${pagingVO.startPage })"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
	                                            <c:forEach var="list" varStatus="status" begin="${pagingVO.firstPage }" end="${pagingVO.lastPage }">
	                                            	<c:choose>
                                                        <c:when test="${pagingVO.nowPage eq list }">
                                                            <a class="active">${list }</a>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <a onclick="LedgerList.Paging(${list })" style="cursor: pointer;">${list }</a>
                                                        </c:otherwise>
                                                    </c:choose>
	                                            </c:forEach>
	                                            <a class="arrow next" style="cursor: pointer;" onclick="LedgerList.Paging(${pagingVO.endPage })"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
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