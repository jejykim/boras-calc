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
	<link rel="stylesheet" href="/static/assets/css/custom.css">
	
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<script src='/static/assets/js/common/common.js'></script>
	<script src='/static/assets/js/calculate/dashboard-info.js'></script>
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
                            <h3>정산 대시보드 상세</h3>
                            <span>
                                <select id="selYear">
                                	<c:forEach var="yearList" items="${yearList }" varStatus="status">
                                    	<option value="${yearList.calculate_finanical_company_year }" <c:if test="${yearList.calculate_finanical_company_year eq calculateFinanicalCompanyVO.calculateFinanicalCompanyYear}">selected="selected"</c:if>>${yearList.calculate_finanical_company_year } 년</option>
                                	</c:forEach>
                                	<c:if test="${empty yearList }">
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
                        
                        <form action="" method="get" id="searchForm" name="searchForm">
                        	<input type="hidden" name="userBusinessTypeCd" value="${contractVO.userBusinessTypeCd }" id="textBusinessTypeCd">
                        </form>
                        
                    </div>
                    
                    <div class="main-body">
                        <div class="board-info">
                            <div class="board-nav">
                                <div class="board-info-haed">
                                    <h5>${financialCompanyCodeVO.codeName }</h5>
                                    <span class="badge-text-r">확인필요</span>
                                    <span class="badge-text-y" style="display: none">입출금예정</span>
                                    <span class="badge-text-g" style=" display: none">정산완료</span>
                                </div>
                                <div class="board-info-result">
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyBillSum + calculateFinanicalCompanyVO.calculateFinanicalCompanyPersonalSum + calculateFinanicalCompanyVO.calculateFinanicalCompanyProfitSum }" pattern="#,###"/></strong></span>
                                        <span class="tag badge-p">총 합계</span>
                                    </div>
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyProfitSum }" pattern="#,###"/></strong></span>
                                        <span class="tag badge-m">회사 수익분</span>
                                    </div>
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyBillSum }" pattern="#,###"/></strong></span>
                                        <span class="tag badge-b">계산서 발급</span>
                                    </div>
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyPersonalSum }" pattern="#,###"/></strong></span>
                                        <span class="tag badge-o">개인지급</span>
                                    </div>
                                </div>
                            </div>
                            <div class="board-nav price-box">
                                <div>
                                    <span class="title"><i class="i-badge"></i>개인지급 공급가</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyPersonalSupplySum }" pattern="#,###"/></strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>개인지급 부가세</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyPersonalSurtaxSum }" pattern="#,###"/></strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>3.3% 공제</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyWithholdingTaxSum }" pattern="#,###"/></strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>사업소득</span>
                                    <span><i class="ico-b-krw"></i><strong><fmt:formatNumber value="${calculateFinanicalCompanyVO.calculateFinanicalCompanyBusinessIncomeSum }" pattern="#,###"/></strong></span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                    	<li id="liAll" <c:if test="${empty contractVO.userBusinessTypeCd or contractVO.userBusinessTypeCd eq 0 }">class="on"</c:if>>전체</li>
                                        <li id="liCompany" <c:if test="${contractVO.userBusinessTypeCd eq 5200 }">class="on"</c:if>>사업자</li>
                                        <li id="liPersonal" <c:if test="${contractVO.userBusinessTypeCd eq 5100 }">class="on"</c:if>>개인</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table fix-table">
                                    <table class="n-hover ">
                                        <thead>
                                            <tr>
                                                <th>AG 명</th>
                                                <th>사업자 구분</th>
                                                <th>원장 수</th>
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
	                                                <td>${list.user_name }</td>
	                                                <td>${list.user_business_type_cd_name }</td>
	                                                <td style="text-decoration: underline; cursor: pointer; color: blue;" onclick="DashboardInfo.getLedgerInfo('${list.ledger_seq_list }', '${list.user_name }', '${list.user_business_type_cd_name }', ${list.ledger_count }, ${list.agCompanyFee }, ${list.agPersonalFee })">${list.ledger_count }</td>
	                                                <td><fmt:formatNumber value="${list.agCompanyFee }" pattern="#,###"/></td>
	                                                <td><fmt:formatNumber value="${list.agPersonalFee }" pattern="#,###"/></td>
	                                                <td><fmt:formatNumber value="${list.pSupplySum }" pattern="#,###"/></td>
	                                                <td><fmt:formatNumber value="${list.pSurtaxSum }" pattern="#,###"/></td>
	                                                <td><fmt:formatNumber value="${list.withdholdingTaxSum }" pattern="#,###"/></td>
	                                                <td><fmt:formatNumber value="${list.businessIncome }" pattern="#,###"/></td>
	                                            </tr>
                                        	</c:forEach>
                                        	<c:if test="${empty list }">
                                        		<tr>
                                        			<td colspan="9">조회된 데이터가 없습니다</td>
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
        
        <!--modal / 원장 상세 모달-->
		<div class="modal hide" id="ledgerInfoModal">
		    <div class="modal-contents" style="width: 1200px;">
		        <div class="modal-head">
		            <h4>원장 목록 | <span id="spanLedgerInfoModalAgName">AG명</span></h4>
		        </div>
		        <div class="modal-body">
		            <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>사업자 구분</h6>
                            </div>
                            <input type="text" id="textBusinessTypeCdName" disabled="disabled">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>원장 수</h6>
                            </div>
                            <input type="text" id="textLedgerCount" disabled="disabled">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>계산서 발급</h6>
                            </div>
                            <input type="text" id="textAgCompanyFee" disabled="disabled">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>개인 지급</h6>
                            </div>
                            <input type="text" id="textAgPersonalFee" disabled="disabled">
                        </div>
                    </div>
                    
                    <div class="modal-form">
		                <div>
		                	<table class="n-hover ">
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>금융사</th>
                                        <th>금융지점</th>
                                        <th>금융상품</th>
                                        <th>고객명</th>
                                        <th>인도일</th>
                                        <th>차량정보</th>
                                        <th>금액</th>
                                    </tr>
                                </thead>
                                <tbody id="tbodyLedgerInfo">
                                     <tr>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td class="align-right">
                                             <p><span class="font-blue">차량가 </span><span></span></p>
                                             <p><span class="font-red">취득원가 </span><span></span></p>
                                         </td>
                                     </tr>
                                </tbody>
                            </table>
		                </div>
		            </div>
		            
		        </div>
		        <div class="modal-footer">
		            <div class="modal-btn">
		                <button class="btn-line-cancel" id="btnCloseModal">닫기</button>
		            </div>
		        </div>
		    </div>
		</div>
		<!--end::modal-->

    </div>
</body>
</html>