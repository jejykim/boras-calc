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
	<!-- 
	<script type="text/javascript">
		console.log(${list})
		console.log(${calculateVO})
	</script> -->
	
	<script src='/static/assets/js/calculate/calculate-admin.js'></script>
	
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
                            <h3>정산목록 - 관리자용</h3>
                            <span>
                                <select id="selYear">
                                	<c:forEach var="yearList" items="${yearlist }" varStatus="status">
                                    	<option value="${yearList }" <c:if test="${yearlist eq calculateVO.calculateYear}">selected="selected"</c:if>>${yearList } 년</option>
                                	</c:forEach>
                                	<c:if test="${empty yearlist }">
                                		<option value="${thisYear }">${thisYear } 년</option>
                                	</c:if>
                                </select>
                                <select id="selMonth">
                                	<c:forEach var="monthList" begin="1" end="12" step="1" varStatus="status">
                                    	<option value="${monthList }" <c:if test="${monthList eq calculateVO.calculateMonth }">selected="selected"</c:if>>${monthList } 월</option>
                                	</c:forEach>
                                </select>
                            </span>
                        </div>
                        <div class="header-sub" style="display:none">
                            <div class="btn">
                                <button class="btn-su">엑셀다운로드</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row f-box list">
                            <div class="portlet">
                                <h5><i class="ico-f1"></i><span>AG fee 총 차액</span></h5>
                                <span class="price"><fmt:formatNumber value="${calAdminVO.calculateAgFeeTotalDifference}" pattern="#,###"/></span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f2"></i><span>원장 fee 총 입금</span></h5>
                                <span class="price"><fmt:formatNumber value="${calAdminVO.calculateAgFeeTotalDeposit}" pattern="#,###"/></span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f3"></i><span>AG fee 총&#40;+&#41; 출금</span></h5>
                                <span class="price"><fmt:formatNumber value="${calAdminVO.calculateAgFeeTotalWithdraw}" pattern="#,###"/></span>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li class="<c:if test='${calculateVO.userBusinessTypeCd eq 0 }'>on</c:if>" id="0">전체</li>
                                        <li class="<c:if test='${calculateVO.userBusinessTypeCd eq 5200 }'>on</c:if>" id="5200">사업자</li>
                                        <li class="<c:if test='${calculateVO.userBusinessTypeCd eq 5100 }'>on</c:if>" id="5100">개인</li>
                                    </ul>
                                </div>
                                <form id="tabForm" name="tabForm" action="" method="get">
                                    <input type="hidden" name="userBusinessTypeCd" id="userBusinessTypeCd" value="${calculateVO.userBusinessTypeCd }">
                                    <input type="hidden" name="calculateYear" id="calculateYear" value="${calculateVO.calculateYear }">
									<input type="hidden" name="calculateMonth" id="calculateMonth" value="${calculateVO.calculateMonth }">
                                </form>
                            </div>
                            <div class="portlet-body">
                                <div class="table">
                                    <table>
                                        <colgroup>
                                            <col width="10%" />
                                            <col width="15%" />
                                            <col width="12.5%" />
                                            <col width="12.5%" />
                                            <col width="12.5%" />
                                            <col width="12.5%" />
                                            <col width="12.5%" />
                                            <col width="12.5%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>구분</th>
                                                <th>이름</th>
                                                <th>AG fee 총 차액</th>
                                                <th>AG fee 총&#40;+&#41; 출금</th>
                                                <th>개인 총 지급합계</th>
                                                <th>개인 총 지급공급</th>
                                                <th>사업소득 신고액</th>
                                                <th>사업소득 지급액</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             <c:forEach var="list" items="${list }" varStatus="status">
                                                    <tr class="<c:if test='${status.count eq 1 }'>on</c:if>" onclick="location.href='/calculate/info/'+${list.calculateSeq}">
                                                        <td>${list.userBusinessTypeCdName }</td>
                                                        <td>${list.userName }</td>
                                                        <td> 총차액</td>
                                                        <c:choose>
                                                        	<c:when test='${list.userBusinessTypeCd eq 5100 }'>
                                                        		<td> <fmt:formatNumber value="${list.calculateBusinessIncomePay }" pattern="#,###"/></td>
                                                        	</c:when>
                                                        	<c:otherwise>
                                                        		<td> <fmt:formatNumber value="${list.calculatePersonalTotalPaySum }" pattern="#,###"/></td>
                                                        	</c:otherwise>
                                                        </c:choose>
                                                        <td> <fmt:formatNumber value="${list.calculatePersonalTotalPaySum }" pattern="#,###"/></td>
                                                        <td> <fmt:formatNumber value="${list.calculatePersonalTotalPaySupply }" pattern="#,###"/></td>
                                                        <td> <fmt:formatNumber value="${list.calculateBusinessIncomePayReport }" pattern="#,###"/></td>
                                                        <td> <fmt:formatNumber value="${list.calculateBusinessIncomePay }" pattern="#,###"/></td>
                                                    </tr>
                                                </c:forEach>
                                                <c:if test="${listCount eq 0 }">
                                                    <tr>
                                                        <td colspan="12">조회된 데이터가 없습니다</td>
                                                    </tr>
                                                </c:if>
                                        </tbody>
                                    </table>
                                     <c:if test="${listCount ne 0}">
	                                    <div class="page_wrap">
	                                        <div class="page_nation">
	                                            <a class="arrow prev" style="cursor: pointer;" onclick="Calculate.Paging(${pagingVO.startPage })"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
	                                            <c:forEach var="list" varStatus="status" begin="${pagingVO.firstPage }" end="${pagingVO.lastPage }">
	                                            	<c:choose>
                                                        <c:when test="${pagingVO.nowPage eq list }">
                                                            <a class="active">${list }</a>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <a onclick="Calculate.Paging(${list })" style="cursor: pointer;">${list }</a>
                                                        </c:otherwise>
                                                    </c:choose>
	                                            </c:forEach>
	                                            <a class="arrow next" style="cursor: pointer;" onclick="Calculate.Paging(${pagingVO.endPage })"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
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
    <!--script-->
    <script src='/static/assets/js/common/jquery-3.3.1.min.js'></script>
</body>
</html>