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
	
	<link rel="stylesheet" href="/static/assets/css/dropzone.css" />
	<script src="/static/assets/js/common/dropzone.js"></script>

	<script type="text/javascript">
		var sCodeType = <c:choose><c:when test="${not empty ledgerVO.sLedgerTypeCd }">${ledgerVO.sLedgerTypeCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
		var sFinancialCompany = <c:choose><c:when test="${not empty ledgerVO.sLedgerFinancialCompanyCd }">${ledgerVO.sLedgerFinancialCompanyCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
		var sFinancialBranch = <c:choose><c:when test="${not empty ledgerVO.sLedgerFinancialBranchCd }">${ledgerVO.sLedgerFinancialBranchCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
		var sFinancialProduct = <c:choose><c:when test="${not empty ledgerVO.sLedgerFinancialProductCd }">${ledgerVO.sLedgerFinancialProductCd }</c:when><c:otherwise>[]</c:otherwise></c:choose>;
	</script>
										
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
                                    	<option value="${monthList }" <c:if test="${monthList eq ledgerVO.ledgerCreateMonth}">selected="selected"</c:if>>${monthList } 월</option>
                                	</c:forEach>
                                </select>
                            </span>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su" id="btnAddExcel">원장엑셀업로드</button>
                                <button class="btn-main" id="btnAddLedger">원장추가</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row f-box">
                            <div class="portlet">
                                <h5><i class="ico-f1"></i><span>차량가</span></h5>
                                <span class="price">
                                	<c:if test="${not empty sumCostList[0] }">
	                                	<c:forEach var="list" items="${sumCostList }" varStatus="status">
	                                		<c:choose>
	                                			<c:when test="${empty list.ledgercarprice }">
	                                				0
	                                			</c:when>
	                                			<c:otherwise>
				                                	<fmt:formatNumber value="${list.ledgercarprice }" pattern="#,###"/>
	                                			</c:otherwise>
	                                		</c:choose>
	                                	</c:forEach>
                                	</c:if>
                                </span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f2"></i><span>취득원가</span></h5>
                                <span class="price">
                                	<c:if test="${not empty sumCostList[0] }">
	                                	<c:forEach var="list" items="${sumCostList }" varStatus="status">
	                                		<c:choose>
	                                			<c:when test="${empty list.ledgeracquisitioncost }">
	                                				0
	                                			</c:when>
	                                			<c:otherwise>
				                                	<fmt:formatNumber value="${list.ledgeracquisitioncost }" pattern="#,###"/>
	                                			</c:otherwise>
	                                		</c:choose>
	                                	</c:forEach>
                                	</c:if>
                                </span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f3"></i><span>fee합계</span></h5>
                                <span class="price">
                                	<c:if test="${not empty sumCostList[0] }">
	                                	<c:forEach var="list" items="${sumCostList }" varStatus="status">
	                                		<c:choose>
	                                			<c:when test="${empty list.ledgertotalfeesum }">
	                                				0
	                                			</c:when>
	                                			<c:otherwise>
				                                	<fmt:formatNumber value="${list.ledgertotalfeesum }" pattern="#,###"/>
	                                			</c:otherwise>
	                                		</c:choose>
	                                	</c:forEach>
                                	</c:if>
                                </span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f4"></i><span>슬라이딩 합계</span></h5>
                                <span class="price">
                                	<c:if test="${not empty sumCostList[0] }">
	                                	<c:forEach var="list" items="${sumCostList }" varStatus="status">
	                                		<c:choose>
	                                			<c:when test="${empty list.ledgerslidingsum }">
	                                				0
	                                			</c:when>
	                                			<c:otherwise>
				                                	<fmt:formatNumber value="${list.ledgerslidingsum }" pattern="#,###"/>
	                                			</c:otherwise>
	                                		</c:choose>
	                                	</c:forEach>
                                	</c:if>
                                </span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f5"></i><span>추가fee 합계</span></h5>
                                <span class="price">
                                	<c:if test="${not empty sumCostList[0] }">
	                                	<c:forEach var="list" items="${sumCostList }" varStatus="status">
	                                		<c:choose>
	                                			<c:when test="${empty list.ledgeraddpromotion }">
	                                				0
	                                			</c:when>
	                                			<c:otherwise>
				                                	<fmt:formatNumber value="${list.ledgeraddpromotion }" pattern="#,###"/>
	                                			</c:otherwise>
	                                		</c:choose>
	                                	</c:forEach>
                               		</c:if>
                                </span>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li id="liAll" <c:if test="${empty ledgerVO.stateType or ledgerVO.stateType eq 'all' }">class="on"</c:if>>전체</li>
                                        <li id="liRequest" <c:if test="${ledgerVO.stateType eq 'request' }">class="on"</c:if>>승인요청</li>
                                        <li id="liComplete" <c:if test="${ledgerVO.stateType eq 'complete' }">class="on"</c:if>>승인완료</li>
                                        <li id="liLeft" <c:if test="${ledgerVO.stateType eq 'left' }">class="on"</c:if>>잉여원장</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="검색" value="${ledgerVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${ledgerVO.searchText }">
											<input type="hidden" name="stateType" id="stateType" value="${ledgerVO.stateType }">
											<input type="hidden" name="ledgerCreateYear" id="ledgerCreateYear" value="${ledgerVO.ledgerCreateYear }">
											<input type="hidden" name="ledgerCreateMonth" id="ledgerCreateMonth" value="${ledgerVO.ledgerCreateMonth }">
											<input type='hidden' id="now_page" name="nowPage" value="${ledgerVO.nowPage }">
										</form>
                                    </div>
                                    <c:if test="${ledgerVO.stateType eq 'request' }">
										<button class="btn-bu" id="btnApprovalOk">승인</button>
									</c:if>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-filter <c:if test="${ledgerVO.stateType ne 'request' }">fl-end</c:if>">
                                	<c:if test="${ledgerVO.stateType eq 'request' }">
	                                	<div class="table-radio">
	                                        <ul>
	                                            <li>
	                                                <input id="radio-mr-1" name="multiRequest" type="radio" value="" <c:if test="${empty ledgerVO.multiRequestYn }">checked='checked'</c:if>/>
	                                                <label for="radio-mr-1" class="radio-label">전체</label>
	                                            </li>
	                                            <li>
	                                                <input id="multiRequestY" name="multiRequest" type="radio" value="Y" <c:if test="${ledgerVO.multiRequestYn eq 'Y'}">checked='checked'</c:if>/>
	                                                <label for="multiRequestY" class="radio-label">정상 승인요청</label>
	                                            </li>
	                                            <li>
	                                                <input id="multiRequestN" name="multiRequest" type="radio" value="N" <c:if test="${ledgerVO.multiRequestYn eq 'N'}">checked='checked'</c:if>/>
	                                                <label for="multiRequestN" class="radio-label">중복 승인요청</label>
	                                            </li>
	                                        </ul>
	                                    </div>
                                    </c:if>
                                    <div class="filter" id="divFilter">
                                        <button class="btn-gr" id="btnClearFilter">초기화</button>
                                    </div>
                                </div>
                                <div class="table">
                                    <table>
                                    	<colgroup>
                                    		<c:choose>
                                    			<c:when test="${ledgerVO.stateType eq 'request' or ledgerVO.stateType eq 'left' }">
                                    				<col width="5%">
		                                            <!--체크박스-->
		                                            <col width="6%">
		                                            <!--기타사항-->
		                                            <col width="10%">
		                                            <!--구분-->
		                                            <col width="8%">
		                                            <!--금융사-->
		                                            <col width="10%">
		                                            <!--금융지점-->
		                                            <col width="10%">
		                                            <!--금융상품-->
		                                            <col width="4%">
		                                            <!--인도일-->
		                                            <col width="12%">
		                                            <!--고객명-->
		                                            <col width="5%">
		                                            <!--딜러사-->
		                                            <col width="10%">
		                                            <!--차량정보-->
		                                            <col width="8%">
		                                            <!--금액-->
		                                            <col width="9%">
		                                            <!--ag사-->
		                                            <col width="4%">
		                                            <!--문의-->
                                    			</c:when>
                                    			<c:otherwise>
                                    				<col width="5%">
		                                            <col width="8%">
		                                            <col width="10%">
		                                            <col width="10%">
		                                            <col width="10%">
		                                            <col width="10%">
		                                            <col width="8%">
		                                            <col width="10%">
		                                            <col width="8%">
		                                            <col width="10%">
		                                            <col width="5%">
		                                            <col width="5%">
                                    			</c:otherwise>
                                    		</c:choose>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                            	<c:choose>
	                                    			<c:when test="${ledgerVO.stateType eq 'request' or ledgerVO.stateType eq 'left' }">
	                                    				<th>
		                                                    <span>
		                                                        <input class="styled-checkbox" id="checkbox-1" type="checkbox">
		                                                        <label for="checkbox-1"></label>
		                                                    </span>
		                                                </th>
	                                    			</c:when>
	                                    		</c:choose>
                                                <th>기타사항</th>
                                                <th class="cur" id="thCodeType">구분<i class="ico-filter"></i></th>
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
                                                <th>AG사</th>
                                                <th>문의</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                            <tr>
	                                            	<c:choose>
		                                    			<c:when test="${ledgerVO.stateType eq 'request' or ledgerVO.stateType eq 'left' }">
		                                    				<td>
		                                    					<c:choose>
			                                                		<c:when test="${list.cnt eq 1 }">
			                                                			<span>
					                                                        <input class="styled-checkbox" id="checkbox-${status.count + 1 }" type="checkbox" name="chk" value="${list.approvalSeq }">
					                                                        <label for="checkbox-${status.count + 1 }"></label>
					                                                    </span>
			                                                		</c:when>
			                                                	</c:choose>
			                                                </td>
		                                    			</c:when>
		                                    		</c:choose>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerOther }">
	                                                			<button class="btn-line-main" onclick="LedgerList.otherModal(${list.ledgerSeq }, '')">추가</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<button class="btn-main" onclick="LedgerList.otherModal(${list.ledgerSeq }, '${list.ledgerOther }')">보기</button>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>${list.ledgerTypeCdName }</td>
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
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.cnt gt 1 }">
	                                                			<a class="text-line" style="color: red;" onclick="LedgerList.selectAgModal(${list.ledgerSeq }, 'Y')">중복</a>
	                                                		</c:when>
	                                                		<c:when test="${list.cnt eq 1 }">
	                                                			<a class="text-line" onclick="LedgerList.selectAgModal(${list.ledgerSeq }, 'Y')">${list.agUserName }</a>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<button class="btn-main" onclick="LedgerList.selectAgModal(${list.ledgerSeq }, 'N')">선택</button>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td><button class="btn-pencil" onclick="LedgerList.inquiryModal(${list.ledgerSeq })"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
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
        
        <!--modal / 원장 엑셀 추가-->
		<div class="modal hide" id="addExcelModal">
		    <div class="modal-contents sm">
		        <div class="modal-head">
		            <h4>원장 Excel 업로드</h4>
		        </div>
		        <div class="modal-body">
		            <div class="modal-form input-sh">
		                <div>
		                    <div class="from-title">
		                        <h6>금융사</h6>
		                    </div>
		                    <select id="selFinancialCompanyCode">
                            	<c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
		                </div>
		                <div>
		                    <div class="from-title">
		                        <h6>금융지점</h6>
		                    </div>
		                    <select id="selFinancialBranchCode">
		                    	<option value="">--금융사를 먼저 선택해주세요--</option>
                            	<%-- <c:forEach var="list" items="${financialBranchCodelist2 }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach> --%>
		                    </select>
		                </div>
		            </div>
		            <div class="modal-form input-sh">
                        <div>
                            <div class="from-title">
                                <h6>금융상품</h6>
                            </div>
                            <select id="selFinancialProduct">
                            	<c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>코드사</h6>
                            </div>
                            <select id="selCodeCompany">
		                        <c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
		                        	<c:if test="${list.codeName ne '전체'}">
		                        		<option value="${list.codeId }">${list.codeName }</option>
		                        	</c:if>
		                        </c:forEach>
		                    </select>
                        </div>
                    </div>
                    <div class="modal-form">
                    	<div>
                    		<div class="from-title">
                                <h6>Excel 파일</h6>
                            </div>
	                    	<div class="dropzone" id="my-dropzone">
							</div>
                    	</div>
                   	</div>
		        </div>
		        <div class="modal-footer">
		            <div class="modal-btn">
		                <button class="btn-bu" id="btnAddLedgerForExcel">완료</button>
		                <button class="btn-line-cancel">취소</button>
		            </div>
		        </div>
		    </div>
		</div>
		<!--end::modal-->
		
		<!--modal / 기타사항추가-->
        <div class="modal hide" id="ledgerOtherModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>기타사항 <span id="spanOtherModalHeader">추가</span></h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <textarea cols="30" rows="10" id="textOther"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="completeOtherOk">완료</button>
                        <button class="btn-line-cancel">취소</button>
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
        
        <!--modal / AG 선택-->
        <div class="modal hide" id="agModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>AG 선택</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6>AG</h6>
                            </div>
                            <select id="selAgList">
                                <option value="">--AG를 선택해주세요--</option>
                            	<c:forEach var="list" items="${agList }" varStatus="status">
	                                <option value="${list.userId }">${list.userName }</option>
                                </c:forEach>
                            </select>
                        </div>
                        <div>
                            <div class="select-2" id="divSelectedAg">
                                <p class="on"><span>A AG사</span><i class="fa fa-times" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddAg">완료</button>
                        <button class="btn-line-cancel">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
    </div>
    
    <script type="text/javascript">
		// dropzone 파일 1개 설정
		Dropzone.options.myDropzone = {
			url: 'http://localhost:508090', //업로드할 url (ex)컨트롤러)
            autoProcessQueue: false, // 자동업로드 여부 (true일 경우, 바로 업로드 되어지며, false일 경우, 서버에는 올라가지 않은 상태임 processQueue() 호출시 올라간다.)
            autoQueue: false, // 드래그 드랍 후 바로 서버로 전송
            clickable: true, // 클릭가능여부
            createImageThumbnails: true, //파일 업로드 썸네일 생성
            thumbnailHeight: 90, // Upload icon size
            thumbnailWidth: 90, // Upload icon size
            maxFiles: 1, // 업로드 파일수
            maxFilesize: 10, // 최대업로드용량 : 10MB
            parallelUploads: 1, // 동시파일업로드 수(이걸 지정한 수 만큼 여러파일을 한번에 컨트롤러에 넘긴다.)
            addRemoveLinks: true, // 삭제버튼 표시 여부
            dictRemoveFile: '삭제', // 삭제버튼 표시 텍스트
            uploadMultiple: false, // 다중업로드 기능
            acceptedFiles: '.xlsx', // 파일 포맷만 허용
            dictDefaultMessage: "<p>Drop file here or click to upload</p><p>XLSX file only</p>",
			init: function() {
				this.on("addedfile", function(file) {
					if (this.files[1] != null) {
						this.removeFile(this.files[0]);
					}
					LedgerList.files = [];
					LedgerList.files.push(file);
				});
				this.on("removedfile", function(file) {
					var index = LedgerList.files.indexOf(file);
					LedgerList.files.splice(index, 1);
				});
			},
		};
    </script>
</body>
</html>