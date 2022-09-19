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
	
	<script type="text/javascript">
		var sCodeType = <c:choose><c:when test="${not empty ledgerVO.sLedgerTypeCd }">${ledgerVO.sLedgerTypeCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
		var sFinancialCompany = <c:choose><c:when test="${not empty ledgerVO.sLedgerFinancialCompanyCd }">${ledgerVO.sLedgerFinancialCompanyCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
		var sFinancialBranch = <c:choose><c:when test="${not empty ledgerVO.sLedgerFinancialBranchCd }">${ledgerVO.sLedgerFinancialBranchCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
		var sFinancialProduct = <c:choose><c:when test="${not empty ledgerVO.sLedgerFinancialProductCd }">${ledgerVO.sLedgerFinancialProductCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
	</script>
	
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<script src='/static/assets/js/common/common.js'></script>
	<script src='/static/assets/js/ledger/ledgerList.js'></script>
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
                            <span class="text-date">
                                <strong>${thisYear } 년</strong>
                                <strong>${thisMonth } 월</strong>
                            </span>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header m-tpa-10">
                                <div class="tab"></div>
                                <div class="header-sub">
                                    <div class="search">
                                    	<input id="inputSearchText" type="text" placeholder="검색" value="${ledgerVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${ledgerVO.searchText }">
										</form>
                                    </div>
                                    <button class="btn-bu" id="btnRequestApproval">승인요청</button>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-filter">
                                    <div class="table-radio">
                                        <ul>
                                            <li><span class="badge b-wait"></span>승인대기</li>
                                            <li><span class="badge b-done"></span>승인완료</li>
                                        </ul>
                                    </div>
                                    <div class="filter" id="divFilter">
                                        <button class="btn-gr" id="btnClearFilter">초기화</button>
                                    </div>
                                </div>
                                <div class="table fix-table">
                                    <table>
                                        <colgroup>
                                            <col width="5%">
                                            <!--체크박스-->
                                            <col width="6%">
                                            <!--기타사항-->
                                            <col width="12%">
                                            <!--금융사-->
                                            <col width="12%">
                                            <!--금융지점-->
                                            <col width="10%">
                                            <!--금융상품-->
                                            <col width="5%">
                                            <!--인도일-->
                                            <col width="15%">
                                            <!--고객명-->
                                            <col width="8%">
                                            <!--딜러사-->
                                            <col width="12%">
                                            <!--차량정보-->
                                            <col width="10%">
                                            <!--금액-->
                                            <col width="5%">
                                            <!--문의-->
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span>
                                                        <input class="styled-checkbox" id="checkbox-1" type="checkbox"><label for="checkbox-1"></label>
                                                    </span>
                                                </th>
                                                <th>기타사항</th>
                                                <th class="cur" id="thFinancialCompany">금융사<i class="ico-filter"></i></th>
                                                <c:choose>
                                                	<c:when test="${empty ledgerVO.sLedgerFinancialCompanyCd }">
                                                		<th>금융지점</th>
                                                	</c:when>
                                                	<c:when test="${empty financialBranchCodelist }">
                                                		<th>금융지점</th>
                                                	</c:when>
                                                	<c:otherwise>
                                                		<th class="cur" id="thFinancialBranch">금융지점<i class="ico-filter"></i></th>
                                                	</c:otherwise>
                                                </c:choose>
                                                <th class="cur" id="thFinancialProduct">금융상품<i class="ico-filter"></i></th>
                                                <th>인도일</th>
                                                <th>고객명</th>
                                                <th>딜러사</th>
                                                <th>차량정보</th>
                                                <th>금액</th>
                                                <th>문의</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
                                        		<c:choose>
                                        			<c:when test="${list.approvalState eq '요청'}">
                                        				<tr class="tr-wait">
                                        			</c:when>
                                        			<c:when test="${list.approvalState eq '승인'}">
                                        				<tr class="tr-done">
                                        			</c:when>
                                        			<c:otherwise>
                                        				<tr>
                                        			</c:otherwise>
                                        		</c:choose>
                                    				<td>
	                                                    <span>
	                                                    	<c:if test="${list.approvalState ne '요청' and list.approvalState ne '승인'}">
		                                                        <input class="styled-checkbox" id="checkbox-${status.count + 1 }" type="checkbox" name="chk" value="${list.ledgerSeq }">
		                                                        <label for="checkbox-${status.count + 1 }"></label>
	                                                        </c:if>
	                                                    </span>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerOther }">
	                                                			-
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<button class="btn-main" onclick="LedgerList.otherModal(${list.ledgerSeq }, '${list.ledgerOther }')">보기</button>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>${list.ledgerFinancialCompanyCdName }</td>
	                                                <td>${list.ledgerFinancialBranchCdName }</td>
	                                                <td>${list.ledgerFinancialProductCdName }</td>
	                                                <td>${fn:substring(list.ledgerDeliveryDate, 0, 10) }</td>
	                                                <td>${list.ledgerCustomerName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerDealerCompanyCdName }">
	                                                			<button class="btn-main" onclick="LedgerList.dealerModal(${list.ledgerSeq }, 0, 0)">선택</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<a class="text-line" onclick="LedgerList.dealerModal(${list.ledgerSeq }, ${list.ledgerDealerBrandCd }, ${list.ledgerDealerCompanyCd })">${list.ledgerDealerBrandCdName } ${list.ledgerDealerCompanyCdName }</a>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                    <p>${list.ledgerCarName }</p>
	                                                    <p>${list.ledgerCarNumber }</p>
	                                                </td>
	                                                <td class="align-right">
	                                                    <p><span class="font-blue">차량가 </span><span><fmt:formatNumber value="${list.ledgerCarPrice }" pattern="#,###"/></span></p>
	                                                    <p><span class="font-red">취득원가 </span><span><fmt:formatNumber value="${list.ledgerAcquisitionCost }" pattern="#,###"/></span></p>
	                                                </td>
	                                                <td><button class="btn-pencil" onclick="LedgerList.inquiryModal(${list.ledgerSeq }, this)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
	                                            </tr>
                                            </c:forEach>
                                            <c:if test="${empty list }">
	                                            <tr>
	                                                <td colspan="11">조회된 데이터가 없습니다</td>
	                                            </tr>
	                                        </c:if>
	                                        
                                        </tbody>
                                    </table>
                                    
									<!--table-filter / 구분-->
                                    <div class="filter-modal" id="divCodeTypeFilter" style="display: none;">
                                        <div class="filter-body">
                                            <ul>
                                            	<c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
                                            		<c:if test="${list.codeName ne '전체'}">
		                                                <li>
		                                                    <input class="styled-checkbox" id="code-company-${status.count }" name="chkCodeCompany" type="checkbox" value="${list.codeId }" <c:if test="${fn:contains(ledgerVO.sLedgerTypeCd, list.codeId) }">checked="checked"</c:if>>
		                                                    <label for="code-company-${status.count }">${list.codeName }</label>
		                                                </li>
	                                                </c:if>
                                                </c:forEach>
                                            </ul>
                                        </div>
                                        <div class="filter-footer">
                                            <div class="filter-btn">
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sCodeType', this)">적용</button>
                                                <button class="btn-line-cancel">취소</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    <!--table-filter / 금융사-->
                                    <div class="filter-modal radio" id="divFinancialCompanyFilter" style="display: none;">
                                        <div class="filter-body">
                                        	<c:choose>
                                        		<c:when test="${fn:length(financialCompanyCodelist) % 10 eq 0}">
                                        			<c:set var="divideFinancialCompanyCodelist" value="${fn:length(financialCompanyCodelist) / 10}" />
                                        		</c:when>
                                        		<c:otherwise>
                                        			<c:set var="divideFinancialCompanyCodelist" value="${fn:length(financialCompanyCodelist) / 10 + 1}" />
                                        		</c:otherwise>
                                        	</c:choose>
                                        	<c:forEach var="ulCount" begin="1" end="${divideFinancialCompanyCodelist }" step="1">
                                        		<ul>
	                                                <c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
	                                                	<c:if test="${status.count gt ulCount * 10 - 10 and status.count le ulCount * 10}">
		                                            		<c:if test="${list.codeName ne '전체'}">
				                                                <li>
				                                                    <input id="radio-go-${status.count }" name="chkFinancialCompany" type="radio" value="${list.codeId }" <c:if test="${fn:contains(ledgerVO.sLedgerFinancialCompanyCd, list.codeId) }">checked="checked"</c:if>>
				                                                    <label for="radio-go-${status.count }" class="radio-label">${list.codeName }</label>
				                                                </li>
			                                                </c:if>
		                                                </c:if>
	                                                </c:forEach>
	                                            </ul>
                                        	</c:forEach>
                                        </div>
                                        <div class="filter-footer">
                                            <div class="filter-btn">
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sFinancialCompany', this)">적용</button>
                                                <button class="btn-line-cancel">취소</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    <!--table-filter / 금융지점-->
                                    <div class="filter-modal radio governor" id="divFinancialBranchFilter" style="display: none;">
                                        <div class="filter-body">
                                        	<c:choose>
                                        		<c:when test="${fn:length(financialBranchCodelist) % 10 eq 0}">
                                        			<c:set var="divideFinancialBranchCodelist" value="${fn:length(financialBranchCodelist) / 10}" />
                                        		</c:when>
                                        		<c:otherwise>
                                        			<c:set var="divideFinancialBranchCodelist" value="${fn:length(financialBranchCodelist) / 10 + 1}" />
                                        		</c:otherwise>
                                        	</c:choose>
                                        	<c:forEach var="ulCount" begin="1" end="${divideFinancialBranchCodelist }" step="1">
	                                            <ul>
	                                                <c:forEach var="list" items="${financialBranchCodelist }" varStatus="status">
	                                                	<c:if test="${status.count gt ulCount * 10 - 10 and status.count le ulCount * 10}">
		                                            		<c:if test="${list.codeName ne '전체'}">
				                                                <li>
				                                                    <input class="styled-checkbox" id="financial-branch-${status.count }" name="chkFinancialBranch" type="checkbox" value="${list.codeId }" <c:if test="${fn:contains(ledgerVO.sLedgerFinancialBranchCd, list.codeId) }">checked="checked"</c:if>>
				                                                    <label for="financial-branch-${status.count }">${list.codeName }</label>
				                                                </li>
			                                                </c:if>
		                                                </c:if>
	                                                </c:forEach>
	                                            </ul>
                                            </c:forEach>
                                        </div>
                                        <div class="filter-footer">
                                            <div class="filter-btn">
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sFinancialBranch', this)">적용</button>
                                                <button class="btn-line-cancel">취소</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    <!--table-filter / 금융상품-->
                                    <div class="filter-modal radio goods" id="divFinancialProductFilter" style="display: none;">
                                        <div class="filter-body">
                                            <ul>
                                                <c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
                                            		<c:if test="${list.codeName ne '전체'}">
		                                                <li>
		                                                    <input class="styled-checkbox" id="financial-product-${status.count }" name="chkFinancialProduct" type="checkbox" value="${list.codeId }" <c:if test="${fn:contains(ledgerVO.sLedgerFinancialProductCd, list.codeId) }">checked="checked"</c:if>>
		                                                    <label for="financial-product-${status.count }">${list.codeName }</label>
		                                                </li>
	                                                </c:if>
                                                </c:forEach>
                                            </ul>
                                        </div>
                                        <div class="filter-footer">
                                            <div class="filter-btn">
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sFinancialProduct', this)">적용</button>
                                                <button class="btn-line-cancel">취소</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
        
        <!--modal / 기타사항추가-->
        <div class="modal hide" id="ledgerOtherModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>기타사항 <span id="spanOtherModalHeader">추가</span></h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <textarea cols="30" rows="10" id="textOther" readonly="readonly"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-line-cancel">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
        <!--modal / 딜러사선택-->
        <div class="modal hide" id="dealerModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>딜러사 선택</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6>딜러브랜드</h6>
                            </div>
                            <select id="selDealerBrand">
                            	<option value="">--딜러브랜드를 선택해주세요--</option>
                            	<c:forEach var="list" items="${dealerBrandCodeList }" varStatus="status">
	                                <option value="${list.codeId }">${list.codeName }</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6>달러사</h6>
                            </div>
                            <select id="selDealerCompany">
                                <option value="">--딜러사를 선택해주세요--</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddDealer">완료</button>
                        <button class="btn-line-cancel">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
    </div>
</body>
</html>