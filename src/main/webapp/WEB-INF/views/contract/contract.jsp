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
	
	<script type="text/javascript">
		var firstRowSeq = <c:choose><c:when test="${not empty list }">${list[0].contractSeq }</c:when><c:otherwise>0</c:otherwise></c:choose>;
	</script>
	
	<script src='/static/assets/js/contract/contract.js'></script>
	
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
                            <h3>계출</h3>
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
                                    	<option value="${monthList }" <c:if test="${monthList eq contractVO.contractCreateMonth}">selected="selected"</c:if>>${monthList } 월</option>
                                	</c:forEach>
                                </select>
                            </span>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button id="btnCalculate" class="btn-su">정산하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg m-bmg-12 box-sh">
                            <div class="search-bar">
                                <div class="bar">
                                    <label>금융사</label>
                                    <div class="bar-info">
                                        <select id="selFinancialCompanyCode">
                                            <option value="all">전체</option>
                                            <c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
                                                <option value="${list.codeId }" <c:if test="${list.codeId eq contractVO.ledgerFinancialCompanyCd }">selected="selected"</c:if>>${list.codeName }</option>
                                            </c:forEach>
                                        </select>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>금융상품</label>
                                    <div class="bar-info">
                                        <select id="selFinancialProduct">
                                            <option value="all">전체</option>
                                            <c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
                                                <option value="${list.codeId }" <c:if test="${list.codeId eq contractVO.ledgerFinancialProductCd }">selected="selected"</c:if>>${list.codeName }</option>
                                            </c:forEach>
                                        </select>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>AG</label>
                                    <div class="bar-info">
                                        <select id="selUserAg">
                                            <option value="all">전체</option>
                                            <c:forEach var="list" items="${userAglist }" varStatus="status">
                                                <option value="${list.userId }" <c:if test="${list.userId eq contractVO.userId }">selected="selected"</c:if>>${list.userName }</option>
                                            </c:forEach>
                                        </select>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>검색</label>
                                    <div class="bar-info">
                                        <input type="text" id="searchText" placeholder="검색">
                                    </div>
                                </div>
                                <div class="bar btn">
                                    <button class="btn-main" id="btnSearch">검색</button>
                                    <button class="btn-gr" id="btnReset">초기화</button>

                                    <form class="search-form" id="searchForm" name="searchForm" action="" method="get">
                                        <input type="hidden" name="ledgerFinancialCompanyCd" id="ledgerFinancialCompanyCd" value="${contractVO.ledgerFinancialCompanyCd }">
                                        <input type="hidden" name="ledgerFinancialProductCd" id="ledgerFinancialProductCd" value="${contractVO.ledgerFinancialProductCd }">
                                        <input type="hidden" name="userId" id="userId" value="${contractVO.userId }">
                                        <input type="hidden" name="searchText" id="inputSearchText" value="">
                                        <!-- <input type="hidden" name="ledgerCreateYear" id="ledgerCreateYear" value="">
											<input type="hidden" name="ledgerCreateMonth" id="ledgerCreateMonth" value=""> -->
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="row con-2">
                            <div class="row w-bg main-content report">
                                <div class="portlet-body">
                                    <div class="table fix-table">
                                        <table>
                                            <colgroup>
                                                <col width="18%">
                                                <col width="12%">
                                                <col width="15%">
                                                <col width="20%">
                                                <col width="25%">
                                                <col width="10%">
                                            </colgroup>
                                            <thead>
                                                <th>금융사</th>
                                                <th>금융상품</th>
                                                <th>AG</th>
                                                <th>차량명</th>
                                                <th>고객명</th>
                                                <th>상세</th>
                                            </thead>
                                            <tbody>
                                            <c:forEach var="list" items="${list }" varStatus="status">
                                                    <%-- <c:if test="${status.count eq 1 }">
                                            			<script type="text/javascript">
		                                            		Contract.contractInfo('${list.contractSeq}');
														</script>
                                            		</c:if> --%>
                                                    <%-- <tr <c:if test="${status.count eq 1 }"> class="on" </c:if> onclick="Contract.selectContractInfo('${list.contractSeq}')"> --%>
                                                    <tr class="<c:if test='${status.count eq 1 }'>on</c:if>" onclick="Contract.selectContractInfo('${list.contractSeq}',this)">
                                                        <td>${list.ledgerFinancialCompanyCdName }</td>
                                                        <td>${list.ledgerFinancialProductCdName }</td>
                                                        <td>${list.userName }</td>
                                                        <td>${list.ledgerCarName }</td>
                                                        <td>${list.ledgerCustomerName }</td>
                                                        <td><button class="btn-bu" onclick="location.href='/contract/info/'+${list.contractSeq}">상세</button></td>
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
                            <div class="row w-bg main-content">
                                <div class="portlet-body">
                                    <!--일반fee-->
                                    <div class="talble-info">
                                        <div class="info-head">
                                            <h6>일반fee</h6>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractNomalTotalFeePercent" type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractNomalTotalFeeSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>AG fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractNomalAgFeePercent" type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractNomalAgFeeSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractNomalDpFeePercent" type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractNomalDpFeeSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>fee VAT여부</h7>
                                                    <p class="info-result">
                                                        <select id="selContractAgFeeSurtaxSupport">
                                                        	<option disabled selected="selected">선택</option>
                                                            <option value="N">미지원</option>
                                                            <option value="Y">지원</option>
                                                        </select>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::일반fee-->
                                    <!--추가fee-->
                                    <div class="talble-info input-line">
                                        <div class="info-head">
                                            <h6>추가 fee</h6>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractAddTotalFeeSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>AG fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractAddAgFeeSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractAddDpFeeSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>추가 VAT여부</h7>
                                                    <p class="info-result">
                                                        <select id="selContractSlidingSurtaxSupport">
                                                        	<option disabled selected="selected">선택</option>
                                                            <option value="N">미지원</option>
                                                            <option value="Y">지원</option>
                                                        </select>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::추가fee-->
                                    <!--슬라이딩-->
                                    <div class="talble-info">
                                        <div class="info-head">
                                            <h6>슬라이딩</h6>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractTotalSlidingPercent" type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractTotalSlidingSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>AG fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractAgSlidingPercent" type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractAgSlidingSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractDpSlidingPercent" type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractDpSlidingSum" type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>슬라이딩 VAT여부</h7>
                                                    <p class="info-result">
                                                        <select id="selContractAddFeeSurtaxSupport">
                                                        	<option disabled selected="selected">선택</option>
                                                            <option value="N">미지원</option>
                                                            <option value="Y">지원</option>
                                                        </select>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::슬라이딩-->
                                    <div class="table-info footer">
                                        <button class="btn-bu" id="btnUpdate">수정</button>
                                    </div>
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