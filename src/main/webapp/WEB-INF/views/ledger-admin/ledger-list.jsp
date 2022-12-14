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
		var multiRequest = "${ledgerVO.multiRequestYn }";
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
                            <h3>????????? ????????????</h3>
                            <span>
                                <select id="selYear">
                                	<c:forEach var="yearList" items="${yearlist }" varStatus="status">
                                    	<option value="${yearList }" <c:if test="${yearlist eq ledgerVO.ledgerCreateYear}">selected="selected"</c:if>>${yearList } ???</option>
                                	</c:forEach>
                                	<c:if test="${empty yearlist }">
                                		<option value="${thisYear }">${thisYear } ???</option>
                                	</c:if>
                                </select>
                                <select id="selMonth">
                                	<c:forEach var="monthList" begin="1" end="12" step="1" varStatus="status">
                                    	<option value="${monthList }" <c:if test="${monthList eq ledgerVO.ledgerCreateMonth}">selected="selected"</c:if>>${monthList } ???</option>
                                	</c:forEach>
                                </select>
                            </span>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su" id="btnAddExcel">?????????????????????</button>
                                <button class="btn-main" id="btnAddLedger">????????????</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                    	<div class="row f-box">
                    		<div class="portlet">
                                <h5><i class="ico-f1"></i><span>??? ??????</span></h5>
                                <span class="price">
                                	<c:if test="${not empty sumCostList[0] }">
	                                	<c:forEach var="list" items="${sumCostList }" varStatus="status">
	                                		<c:choose>
	                                			<c:when test="${empty list.ledgercarprice and empty list.ledgeracquisitioncost }">
	                                				0
	                                			</c:when>
	                                			<c:otherwise>
				                                	<fmt:formatNumber value="${list.ledgercarprice + list.ledgeracquisitioncost }" pattern="#,###"/>
	                                			</c:otherwise>
	                                		</c:choose>
	                                	</c:forEach>
                                	</c:if>
                                </span>
                            </div>
                        </div>
                        <div class="row f-box">
                            <div class="portlet">
                                <h5><i class="ico-f1"></i><span>????????? (??????)</span></h5>
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
                                <h5><i class="ico-f2"></i><span>???????????? (??????)</span></h5>
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
                                <h5><i class="ico-f3"></i><span>fee??????</span></h5>
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
                                <h5><i class="ico-f4"></i><span>???????????? ??????</span></h5>
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
                                <h5><i class="ico-f5"></i><span>??????fee ??????</span></h5>
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
                                        <li id="liAll" <c:if test="${empty ledgerVO.stateType or ledgerVO.stateType eq 'all' }">class="on"</c:if>>?????? <span class="badge-tab">${statusCount.total }</span></li>
                                        <li id="liRequest" <c:if test="${ledgerVO.stateType eq 'request' }">class="on"</c:if>>???????????? <span class="badge-tab">${statusCount.request }</span></li>
                                        <li id="liComplete" <c:if test="${ledgerVO.stateType eq 'complete' }">class="on"</c:if>>???????????? <span class="badge-tab">${statusCount.complete }</span></li>
                                        <li id="liLeft" <c:if test="${ledgerVO.stateType eq 'left' }">class="on"</c:if>>???????????? <span class="badge-tab">${statusCount.left }</span></li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                	<div class="form-control">
                                        <select class="col-2" id="selPagePerRows" style="width: 100px;">
	                                   		<option value="10" <c:if test="${ledgerVO.pagePerRows eq 10 }">selected="selected"</c:if>>10 ???</option>
	                                   		<option value="20" <c:if test="${ledgerVO.pagePerRows eq 20 }">selected="selected"</c:if>>20 ???</option>
	                                   		<option value="50" <c:if test="${ledgerVO.pagePerRows eq 50 }">selected="selected"</c:if>>50 ???</option>
	                                   		<option value="100" <c:if test="${ledgerVO.pagePerRows eq 100 }">selected="selected"</c:if>>100 ???</option>
	                                   	</select>
                                	</div>
                                	&nbsp;
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="??????" value="${ledgerVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${ledgerVO.searchText }">
											<input type="hidden" name="stateType" id="stateType" value="${ledgerVO.stateType }">
											<input type="hidden" name="ledgerCreateYear" id="ledgerCreateYear" value="${ledgerVO.ledgerCreateYear }">
											<input type="hidden" name="ledgerCreateMonth" id="ledgerCreateMonth" value="${ledgerVO.ledgerCreateMonth }">
											<input type='hidden' id="now_page" name="nowPage" value="${ledgerVO.nowPage }">
											<input type='hidden' id="pagePerRows" name="pagePerRows" value="${ledgerVO.pagePerRows }">
										</form>
                                    </div>
                                    <c:if test="${ledgerVO.stateType eq 'request' }">
										<button class="btn-bu" id="btnApprovalOk">??????</button>
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
	                                                <label for="radio-mr-1" class="radio-label">??????</label>
	                                            </li>
	                                            <li>
	                                                <input id="multiRequestY" name="multiRequest" type="radio" value="Y" <c:if test="${ledgerVO.multiRequestYn eq 'Y'}">checked='checked'</c:if>/>
	                                                <label for="multiRequestY" class="radio-label">?????? ????????????</label>
	                                            </li>
	                                            <li>
	                                                <input id="multiRequestN" name="multiRequest" type="radio" value="N" <c:if test="${ledgerVO.multiRequestYn eq 'N'}">checked='checked'</c:if>/>
	                                                <label for="multiRequestN" class="radio-label">?????? ????????????</label>
	                                            </li>
	                                        </ul>
	                                    </div>
                                    </c:if>
                                    <div class="filter" id="divFilter">
                                        <button class="btn-gr" id="btnClearFilter">?????????</button>
                                    </div>
                                </div>
                                <div class="table">
                                    <table>
                                    	<colgroup>
                                    		<c:choose>
                                    			<c:when test="${ledgerVO.stateType eq 'request' or ledgerVO.stateType eq 'left' }">
                                    				<col width="5%">
		                                            <!--????????????-->
		                                            <col width="6%">
		                                            <!--????????????-->
		                                            <col width="10%">
		                                            <!--??????-->
		                                            <col width="8%">
		                                            <!--?????????-->
		                                            <col width="10%">
		                                            <!--????????????-->
		                                            <col width="10%">
		                                            <!--????????????-->
		                                            <col width="4%">
		                                            <!--?????????-->
		                                            <col width="12%">
		                                            <!--?????????-->
		                                            <col width="5%">
		                                            <!--?????????-->
		                                            <col width="10%">
		                                            <!--????????????-->
		                                            <col width="8%">
		                                            <!--??????-->
		                                            <col width="9%">
		                                            <!--ag???-->
		                                            <col width="4%">
		                                            <!--??????-->
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
                                                <th>????????????</th>
                                                <th class="cur" id="thCodeType">??????<i class="ico-filter"></i></th>
                                                <th class="cur" id="thFinancialCompany">?????????<i class="ico-filter"></i></th>
                                                <c:choose>
                                                	<c:when test="${empty ledgerVO.sLedgerFinancialCompanyCd }">
                                                		<th>????????????</th>
                                                	</c:when>
                                                	<c:when test="${empty financialBranchCodelist }">
                                                		<th>????????????</th>
                                                	</c:when>
                                                	<c:otherwise>
                                                		<th class="cur" id="thFinancialBranch">????????????<i class="ico-filter"></i></th>
                                                	</c:otherwise>
                                                </c:choose>
                                                <th class="cur" id="thFinancialProduct">????????????<i class="ico-filter"></i></th>
                                                <th>?????????</th>
                                                <th>?????????</th>
                                                <th>?????????</th>
                                                <th>????????????</th>
                                                <th>??????</th>
                                                <th>AG???</th>
                                                <th>??????</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                            <tr onclick="LedgerList.ledgerInfo(${list.ledgerSeq });">
	                                            	<c:choose>
		                                    			<c:when test="${ledgerVO.stateType eq 'request' or ledgerVO.stateType eq 'left' }">
		                                    				<td onclick="event.cancelBubble=true">
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
	                                                <td onclick="event.cancelBubble=true">
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerOther }">
	                                                			<button class="btn-line-main" onclick="LedgerList.otherModal(${list.ledgerSeq }, '')">??????</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<button class="btn-main" onclick="LedgerList.otherModal(${list.ledgerSeq }, '${list.ledgerOther }')">??????</button>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>${list.ledgerTypeCdName }</td>
	                                                <td>${list.ledgerFinancialCompanyCdName }</td>
	                                                <td>${list.ledgerFinancialBranchCdName }</td>
	                                                <td>${list.ledgerFinancialProductCdName }</td>
	                                                <td>${fn:substring(list.ledgerDeliveryDate, 0, 10) }</td>
	                                                <td>${list.ledgerCustomerName }</td>
	                                                <td onclick="event.cancelBubble=true">
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerDealerCompanyCdName }">
	                                                			<button class="btn-main" onclick="LedgerList.dealerModal(${list.ledgerSeq }, 0, 0)">??????</button>
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
	                                                    <p><span class="font-blue">????????? </span><span><fmt:formatNumber value="${list.ledgerCarPrice }" pattern="#,###"/></span></p>
	                                                    <p><span class="font-red">???????????? </span><span><fmt:formatNumber value="${list.ledgerAcquisitionCost }" pattern="#,###"/></span></p>
	                                                </td>
	                                                <td onclick="event.cancelBubble=true">
	                                                	<c:choose>
	                                                		<c:when test="${list.cnt gt 1 }">
	                                                			<a class="text-line" style="color: red;" onclick="LedgerList.selectAgModal(${list.ledgerSeq }, 'Y')">??????</a>
	                                                		</c:when>
	                                                		<c:when test="${list.cnt eq 1 }">
	                                                			<a class="text-line" onclick="LedgerList.selectAgModal(${list.ledgerSeq }, 'Y')">${list.agUserName }</a>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<button class="btn-main" onclick="LedgerList.selectAgModal(${list.ledgerSeq }, 'N')">??????</button>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td onclick="event.cancelBubble=true"><button class="btn-pencil" onclick="LedgerList.inquiryModal(${list.ledgerSeq }, this)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
	                                            </tr>
                                            </c:forEach>
                                            <c:if test="${listCount eq 0 }">
	                                            <tr>
	                                                <td colspan="12">????????? ???????????? ????????????</td>
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
                                    
                                    <!--table-filter / ??????-->
                                    <div class="filter-modal" id="divCodeTypeFilter" style="display: none;">
                                        <div class="filter-body">
                                            <ul>
                                            	<c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
                                            		<c:if test="${list.codeName ne '??????'}">
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
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sCodeType', this)">??????</button>
                                                <button class="btn-line-cancel">??????</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    <!--table-filter / ?????????-->
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
		                                            		<c:if test="${list.codeName ne '??????'}">
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
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sFinancialCompany', this)">??????</button>
                                                <button class="btn-line-cancel">??????</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    <!--table-filter / ????????????-->
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
		                                            		<c:if test="${list.codeName ne '??????'}">
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
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sFinancialBranch', this)">??????</button>
                                                <button class="btn-line-cancel">??????</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::table-filter-->
                                    <!--table-filter / ????????????-->
                                    <div class="filter-modal radio goods" id="divFinancialProductFilter" style="display: none;">
                                        <div class="filter-body">
                                            <ul>
                                                <c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
                                            		<c:if test="${list.codeName ne '??????'}">
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
                                                <button class="btn-bu" onclick="LedgerList.addFilter('sFinancialProduct', this)">??????</button>
                                                <button class="btn-line-cancel">??????</button>
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
        
        <!--modal / ?????? ?????? ??????-->
		<div class="modal hide" id="addExcelModal">
		    <div class="modal-contents sm">
		        <div class="modal-head">
		            <h4>?????? Excel ?????????</h4>
		        </div>
		        <div class="modal-body">
		            <div class="modal-form input-sh">
		                <div>
		                    <div class="from-title">
		                        <h6>?????????</h6>
		                    </div>
		                    <select id="selFinancialCompanyCode">
                            	<c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
		                </div>
		                <div>
		                    <div class="from-title">
		                        <h6>????????????</h6>
		                    </div>
		                    <select id="selFinancialBranchCode">
		                    	<option value="">--???????????? ?????? ??????????????????--</option>
                            	<%-- <c:forEach var="list" items="${financialBranchCodelist2 }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach> --%>
		                    </select>
		                </div>
		            </div>
		            <div class="modal-form input-sh">
                        <div>
                            <div class="from-title">
                                <h6>????????????</h6>
                            </div>
                            <select id="selFinancialProduct">
                            	<c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>?????????</h6>
                            </div>
                            <select id="selCodeCompany">
		                        <c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
		                        	<c:if test="${list.codeName ne '??????'}">
		                        		<option value="${list.codeId }">${list.codeName }</option>
		                        	</c:if>
		                        </c:forEach>
		                    </select>
                        </div>
                    </div>
                    <div class="modal-form">
                    	<div>
                    		<div class="from-title">
                                <h6>Excel ??????</h6>
                            </div>
	                    	<div class="dropzone" id="my-dropzone">
							</div>
                    	</div>
                   	</div>
		        </div>
		        <div class="modal-footer">
		            <div class="modal-btn">
		                <button class="btn-bu" id="btnAddLedgerForExcel">??????</button>
		                <button class="btn-line-cancel">??????</button>
		            </div>
		        </div>
		    </div>
		</div>
		<!--end::modal-->
		
		<!--modal / ??????????????????-->
        <div class="modal hide" id="ledgerOtherModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>???????????? <span id="spanOtherModalHeader">??????</span></h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <textarea cols="30" rows="10" id="textOther"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="completeOtherOk">??????</button>
                        <button class="btn-line-cancel">??????</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
        <!--modal / ???????????????-->
        <div class="modal hide" id="dealerModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>????????? ??????</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6>???????????????</h6>
                            </div>
                            <select id="selDealerBrand">
                            	<option value="">--?????????????????? ??????????????????--</option>
                            	<c:forEach var="list" items="${dealerBrandCodeList }" varStatus="status">
	                                <option value="${list.codeId }">${list.codeName }</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6>?????????</h6>
                            </div>
                            <select id="selDealerCompany">
                                <option value="">--???????????? ??????????????????--</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddDealer">??????</button>
                        <button class="btn-line-cancel">??????</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
        <!--modal / AG ??????-->
        <div class="modal hide" id="agModal">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>AG ??????</h4>
                </div>
                <div class="modal-body">
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6>AG</h6>
                            </div>
                            <select id="selAgList">
                                <option value="">--AG??? ??????????????????--</option>
                            	<c:forEach var="list" items="${agList }" varStatus="status">
	                                <option value="${list.userId }">${list.userName }</option>
                                </c:forEach>
                            </select>
                        </div>
                        <div>
                            <div class="select-2" id="divSelectedAg">
                                <p class="on"><span>A AG???</span><i class="fa fa-times" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddAg">??????</button>
                        <button class="btn-line-cancel">??????</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
    </div>
    
    <script type="text/javascript">
		// dropzone ?????? 1??? ??????
		Dropzone.options.myDropzone = {
			url: 'http://localhost:508090', //???????????? url (ex)????????????)
            autoProcessQueue: false, // ??????????????? ?????? (true??? ??????, ?????? ????????? ????????????, false??? ??????, ???????????? ???????????? ?????? ????????? processQueue() ????????? ????????????.)
            autoQueue: false, // ????????? ?????? ??? ?????? ????????? ??????
            clickable: true, // ??????????????????
            createImageThumbnails: true, //?????? ????????? ????????? ??????
            thumbnailHeight: 90, // Upload icon size
            thumbnailWidth: 90, // Upload icon size
            maxFiles: 1, // ????????? ?????????
            maxFilesize: 10, // ????????????????????? : 10MB
            parallelUploads: 1, // ????????????????????? ???(?????? ????????? ??? ?????? ??????????????? ????????? ??????????????? ?????????.)
            addRemoveLinks: true, // ???????????? ?????? ??????
            dictRemoveFile: '??????', // ???????????? ?????? ?????????
            uploadMultiple: false, // ??????????????? ??????
            acceptedFiles: '.xlsx', // ?????? ????????? ??????
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