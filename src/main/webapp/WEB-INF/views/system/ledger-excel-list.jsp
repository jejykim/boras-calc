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
	<link rel="stylesheet" href="/static/assets/css/custom_radio.css">
	<link rel="stylesheet" href="/static/assets/css/custom.css">
	
	<link rel="stylesheet" href="/static/assets/css/dropzone.css" />
	<script src="/static/assets/js/common/dropzone.js"></script>
	
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
                            <h3>?????? Excel ??????</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su" id="btnDlCommonExcel">?????? Excel ??????</button>
                                <button class="btn-main" id="btnAddExcel">?????? Excel ??????</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li id="liAll" <c:if test="${empty ledgerExcelVO.ledgerExcelCommonYn }">class="on"</c:if>>??????</li>
                                        <li id="liCommonN" <c:if test="${ledgerExcelVO.ledgerExcelCommonYn eq 'N'}">class="on"</c:if>>?????? ?????? ??????</li>
                                        <li id="liCommonY" <c:if test="${ledgerExcelVO.ledgerExcelCommonYn eq 'Y'}">class="on"</c:if>>?????? ?????? ??????</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="??????" value="${ledgerExcelVO.searchText }">
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
                                                <th>?????????</th>
                                                <th>????????????</th>
                                                <th>????????????</th>
                                                <th>??????/??????</th>
                                                <th>????????????</th>
                                                <th>?????????</th>
                                                <th>?????????</th>
                                                <th>????????????</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                            <tr onclick="LedgerExcelList.getledgerExcelInfo(${list.ledgerExcelSeq });">
	                                                <td>${list.ledgerFinancialCompanyCdName }</td>
	                                                <td>${list.ledgerFinancialBranchCdName }</td>
	                                                <td>${list.ledgerFinancialProductCdName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.ledgerExcelCommonYn eq 'Y' }">
	                                                			<span style="color: green;">??????</span>
	                                                		</c:when>
	                                                		<c:when test="${list.ledgerExcelCommonYn eq 'N' }">
	                                                			??????
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<span style="color: gray;">??????</span>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>${list.ledgerExcelFileName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.ledgerExcelUseYn eq 'Y' }">
	                                                			<span style="color: green;">?????????</span>
	                                                		</c:when>
	                                                		<c:when test="${list.ledgerExcelUseYn eq 'N' }">
	                                                			<span style="color: red;">????????????</span>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<span style="color: gray;">??????</span>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerExcelUpdateId }">
	                                                			${list.ledgerExcelCreateId }
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			${list.ledgerExcelUpdateId }
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.ledgerExcelUpdateDate }">
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
	                                                <td colspan="8">????????? ???????????? ????????????</td>
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
        
        <!--modal / ?????? ?????? ??????-->
        <div class="modal hide" id="modalAddExcel">
            <div class="modal-contents" style="width: 800px;">
                <div class="modal-head">
                    <h4>?????? Excel ??????</h4>
                </div>
                <div class="modal-body">
		            <div class="modal-form custom-modal-input-3">
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????????</h6>
                            </div>
                            <select id="selFinancialCompanyCode">
                            	<c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????????</h6>
                            </div>
                            <select id="selFinancialBranchCode">
		                        <c:forEach var="list" items="${financialBranchCodelist }" varStatus="status">
		                        	<c:if test="${list.codeName ne '??????'}">
		                        		<option value="${list.codeId }">${list.codeName }</option>
		                        	</c:if>
		                        </c:forEach>
		                    </select>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????????</h6>
                            </div>
                            <select id="selFinancialProduct">
                            	<c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
                        </div>
                    </div>
                    <div class="modal-form input-sh">
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????? ????????????</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arY" class="radio-button" type="radio" name="auto-radio" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="arY" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arN" class="radio-button" type="radio" name="auto-radio" value="N"/>
									      <div class="radio-tile">
									        <label for="arN" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????? ?????? ????????????</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crY" class="radio-button" type="radio" name="common-radio" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="crY" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crN" class="radio-button" type="radio" name="common-radio" value="N"/>
									      <div class="radio-tile">
									        <label for="crN" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-5">
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????? ?????? ??? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) A3" id="textExcelHeader">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????? ?????? ???</h6>
                            </div>
                            <input type="text" placeholder="???) sheet1" id="textExcelSheet">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCustomerName">
                        </div>
                       	<div>
                            <div class="from-title">
                                <h6>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textDeliveryDate">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>????????????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textAcquisitionCost">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-5">
                         <div>
                            <div class="from-title">
                                <h6>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCarPrice">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCarName">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCarNumber">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ?????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textPromotionFee">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>??????????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textPromotionName">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>??? fee % ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeePercent">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>??? fee ?????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeeSum">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>??? fee ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeeSupplyPrice">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>??? fee ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeeSurtax">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>???????????? % ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingPercent">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ?????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingSum">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>???????????? ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingSupplyPrice">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingSurtax">
                        </div>
                    </div>
                    <div class="modal-form">
                    	<div>
                    		<div class="from-title">
                                <h6><span style="color: red;">* </span>Excel ??????</h6>
                            </div>
	                    	<div class="dropzone" id="my-dropzone">
							</div>
                    	</div>
                   	</div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddExcelSettingOk">??????</button>
		                <button class="btn-line-cancel" id="btnCancelModal">??????</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
        <!--modal / ?????? ?????? ??????-->
        <div class="modal hide" id="modalInfoExcel">
            <div class="modal-contents" style="width: 800px;">
                <div class="modal-head">
                    <h4>?????? Excel ??????</h4>
                </div>
                <div class="modal-body">
		            <div class="modal-form custom-modal-input-3">
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????????</h6>
                            </div>
                            <input type="text" disabled="disabled" id="textFinancialCompanyCode2">
                            <input type="hidden" id="textFinancialCompanyCd">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????????</h6>
                            </div>
                            <input type="text" disabled="disabled" id="textFinancialBranchCode2">
                            <input type="hidden" id="textFinancialBranchCd">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????????</h6>
                            </div>
                            <input type="text" disabled="disabled" id="textFinancialProduct2">
                            <input type="hidden" id="textFinancialProductcd">
                        </div>
                    </div>
                    <div class="modal-form input-sh">
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????? ????????????</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arY2" class="radio-button" type="radio" name="auto-radio2" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="arY2" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arN2" class="radio-button" type="radio" name="auto-radio2" value="N"/>
									      <div class="radio-tile">
									        <label for="arN2" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????? ?????? ????????????</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crY2" class="radio-button" type="radio" name="common-radio2" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="crY2" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crN2" class="radio-button" type="radio" name="common-radio2" value="N"/>
									      <div class="radio-tile">
									        <label for="crN2" class="radio-tile-label">??????</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-5">
		            	<div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????? ?????? ??? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) A3" id="textExcelHeader2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>?????? ?????? ???</h6>
                            </div>
                            <input type="text" placeholder="???) sheet1" id="textExcelSheet2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCustomerName2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textDeliveryDate2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>????????????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textAcquisitionCost2">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-5">
		            	<div>
                            <div class="from-title">
                                <h6>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCarPrice2">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCarName2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textCarNumber2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ?????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textPromotionFee2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>??????????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textPromotionName2">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>??? fee % ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeePercent2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>??? fee ?????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeeSum2">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>??? fee ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeeSupplyPrice2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>??? fee ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textTotalFeeSurtax2">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>???????????? % ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingPercent2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ?????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingSum2">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>???????????? ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingSupplyPrice2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>???????????? ????????? ??????</h6>
                            </div>
                            <input type="text" placeholder="???) B2" id="textSlidingSurtax2">
                        </div>
                    </div>
                    <div class="modal-form">
                    	<div>
                    		<div class="from-title">
                                <h6><span style="color: red;">* </span>Excel ??????</h6>
                            </div>
	                    	<div class="dropzone" id="my-dropzone2">
							</div>
                    	</div>
                   	</div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnModifyExcelSettingOk">??????</button>
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
			url: 'http://localhost:58090', //???????????? url (ex)????????????)
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
					LedgerExcelList.files = [];
					LedgerExcelList.files.push(file);
				});
				this.on("removedfile", function(file) {
					var index = LedgerExcelList.files.indexOf(file);
					LedgerExcelList.files.splice(index, 1);
				});
			},
		};
		
		// dropzone ?????? 1??? ??????
		Dropzone.options.myDropzone2 = {
			url: 'http://localhost:58090', //???????????? url (ex)????????????)
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
					LedgerExcelList.files = [];
					LedgerExcelList.files.push(file);
				});
				this.on("removedfile", function(file) {
					var index = LedgerExcelList.files.indexOf(file);
					LedgerExcelList.files.splice(index, 1);
				});
			},
		};
    </script>
</body>
</html>