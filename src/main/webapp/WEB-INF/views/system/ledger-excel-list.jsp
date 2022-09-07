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
                            <h3>원장 Excel 목록</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su" id="btnDlCommonExcel">통합 Excel 다운</button>
                                <button class="btn-main" id="btnAddExcel">원장 Excel 추가</button>
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
	                                            <tr onclick="LedgerExcelList.getledgerExcelInfo(${list.ledgerExcelSeq });">
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
        
        <!--modal / 원장 엑셀 추가-->
        <div class="modal hide" id="modalAddExcel">
            <div class="modal-contents" style="width: 580px;">
                <div class="modal-head">
                    <h4>원장 Excel 추가</h4>
                </div>
                <div class="modal-body">
		            <div class="modal-form custom-modal-input-3">
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
		                        <c:forEach var="list" items="${financialBranchCodelist }" varStatus="status">
		                        	<c:if test="${list.codeName ne '전체'}">
		                        		<option value="${list.codeId }">${list.codeName }</option>
		                        	</c:if>
		                        </c:forEach>
		                    </select>
                        </div>
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
                    </div>
                    <div class="modal-form input-sh">
		            	<div>
                            <div class="from-title">
                                <h6>자동화 사용여부</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arY" class="radio-button" type="radio" name="auto-radio" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="arY" class="radio-tile-label">사용</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arN" class="radio-button" type="radio" name="auto-radio" value="N"/>
									      <div class="radio-tile">
									        <label for="arN" class="radio-tile-label">미사용</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>통합 엑셀 사용여부</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crY" class="radio-button" type="radio" name="common-radio" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="crY" class="radio-tile-label">사용</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crN" class="radio-button" type="radio" name="common-radio" value="N"/>
									      <div class="radio-tile">
									        <label for="crN" class="radio-tile-label">미사용</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>엑셀 헤더 열 위치</h6>
                            </div>
                            <input type="text" placeholder="예) A3" id="textExcelHeader">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>엑셀 시트 명</h6>
                            </div>
                            <input type="text" placeholder="예) sheet1" id="textExcelSheet">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>차량가 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCarPrice">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>취득원가</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textAcquisitionCost">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>인도일 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textDeliveryDate">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>고객명 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCustomerName">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>차량명 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCarName">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>차량번호 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCarNumber">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>총 fee % 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeePercent">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>총 fee 합계 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeeSum">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>총 fee 공급가 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeeSupplyPrice">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>총 fee 부가세 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeeSurtax">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>슬라이딩 % 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingPercent">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>슬라이딩 합계 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingSum">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>슬라이딩 공급가 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingSupplyPrice">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>슬라이딩 부가세 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingSurtax">
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
                        <button class="btn-bu" id="btnAddExcelSettingOk">완료</button>
		                <button class="btn-line-cancel" id="btnCancelModal">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
        
        <!--modal / 원장 엑셀 상세-->
        <div class="modal hide" id="modalInfoExcel">
            <div class="modal-contents" style="width: 580px;">
                <div class="modal-head">
                    <h4>원장 Excel 수정</h4>
                </div>
                <div class="modal-body">
		            <div class="modal-form custom-modal-input-3">
		            	<div>
                            <div class="from-title">
                                <h6>금융사</h6>
                            </div>
                            <input type="text" disabled="disabled" id="textFinancialCompanyCode2">
                            <input type="hidden" id="textFinancialCompanyCd">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>금융지점</h6>
                            </div>
                            <input type="text" disabled="disabled" id="textFinancialBranchCode2">
                            <input type="hidden" id="textFinancialBranchCd">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>금융상품</h6>
                            </div>
                            <input type="text" disabled="disabled" id="textFinancialProduct2">
                            <input type="hidden" id="textFinancialProductcd">
                        </div>
                    </div>
                    <div class="modal-form input-sh">
		            	<div>
                            <div class="from-title">
                                <h6>자동화 사용여부</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arY2" class="radio-button" type="radio" name="auto-radio2" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="arY2" class="radio-tile-label">사용</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="arN2" class="radio-button" type="radio" name="auto-radio2" value="N"/>
									      <div class="radio-tile">
									        <label for="arN2" class="radio-tile-label">미사용</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>통합 엑셀 사용여부</h6>
                            </div>
                            <div>
	                            <div class="from-title">
	                                <div class="radio-tile-group">
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crY2" class="radio-button" type="radio" name="common-radio2" checked="checked" value="Y"/>
									      <div class="radio-tile">
									        <label for="crY2" class="radio-tile-label">사용</label>
									      </div>
									    </div>
									    <div class="input-container" style="width: 30%; height: 10px; margin-top: 0;">
									      <input id="crN2" class="radio-button" type="radio" name="common-radio2" value="N"/>
									      <div class="radio-tile">
									        <label for="crN2" class="radio-tile-label">미사용</label>
									      </div>
									    </div>
									  </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>엑셀 헤더 열 위치</h6>
                            </div>
                            <input type="text" placeholder="예) A3" id="textExcelHeader2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>엑셀 시트 명</h6>
                            </div>
                            <input type="text" placeholder="예) sheet1" id="textExcelSheet2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>차량가 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCarPrice2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>취득원가</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textAcquisitionCost2">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>인도일 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textDeliveryDate2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>고객명 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCustomerName2">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>차량명 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCarName2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>차량번호 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textCarNumber2">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>총 fee % 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeePercent2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>총 fee 합계 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeeSum2">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>총 fee 공급가 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeeSupplyPrice2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>총 fee 부가세 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textTotalFeeSurtax2">
                        </div>
                    </div>
                    <div class="modal-form custom-modal-input-4">
		            	<div>
                            <div class="from-title">
                                <h6>슬라이딩 % 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingPercent2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>슬라이딩 합계 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingSum2">
                        </div>
		            	<div>
                            <div class="from-title">
                                <h6>슬라이딩 공급가 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingSupplyPrice2">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>슬라이딩 부가세 위치</h6>
                            </div>
                            <input type="text" placeholder="예) B2" id="textSlidingSurtax2">
                        </div>
                    </div>
                    <div class="modal-form">
                    	<div>
                    		<div class="from-title">
                                <h6>Excel 파일</h6>
                            </div>
	                    	<div class="dropzone" id="my-dropzone2">
							</div>
                    	</div>
                   	</div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnModifyExcelSettingOk">완료</button>
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
			url: 'http://localhost:58090', //업로드할 url (ex)컨트롤러)
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
					LedgerExcelList.files = [];
					LedgerExcelList.files.push(file);
				});
				this.on("removedfile", function(file) {
					var index = LedgerExcelList.files.indexOf(file);
					LedgerExcelList.files.splice(index, 1);
				});
			},
		};
		
		// dropzone 파일 1개 설정
		Dropzone.options.myDropzone2 = {
			url: 'http://localhost:58090', //업로드할 url (ex)컨트롤러)
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