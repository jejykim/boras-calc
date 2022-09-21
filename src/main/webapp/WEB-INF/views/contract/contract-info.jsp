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
		var contractInfoSeq = ${contractVO.contractSeq };
		var ledgerCarPrice = ${contractVO.ledgerCarPrice };
		var ledgerAcquisitionCost = ${contractVO.ledgerAcquisitionCost };
		var ledgerFinancialProductCd = ${contractVO.ledgerFinancialProductCd };
		var ledgerFinancialCompanyCd = ${contractVO.ledgerFinancialCompanyCd };
	</script>
	
	<script src='/static/assets/js/contract/contractInfo.js'></script>
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
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-main btn-sm" id="btnUpdate">저장</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body pd-row">
                        <div class="row w-bg m-bmg-24 box-sh info-search-bar">
                            <div class="search-bar">
                                <div class="bar">
                                    <label>금융사</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerFinancialCompanyCdName }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>금융지점</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerFinancialBranchCd }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>금융상품</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerFinancialProductCdName }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>인도일</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerDeliveryDate }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>고객명</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerCustomerName }</span>
                                    </div>
                                </div>
                            </div>
                            <div class="search-bar">
                                <div class="bar">
                                    <label>딜러사</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerDealerBrandCdName } ${contractVO.ledgerDealerCompanyCdName }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>차량명</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerCarName }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>차량번호</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerCarNumber }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>차량가</label>
                                    <div class="bar-info">
                                        <span><fmt:formatNumber value="${contractVO.ledgerCarPrice }" pattern="#,###"/></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>취득원가</label>
                                    <div class="bar-info">
                                        <span><fmt:formatNumber value="${contractVO.ledgerAcquisitionCost }" pattern="#,###"/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="search-bar bar-2">
                                <div class="bar">
                                    <label>AG 사</label>
                                    <div class="bar-info">
                                        <span>${contractVO.userName }</span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>기타사항</label>
                                    <div class="bar-info">
                                        <span>${contractVO.ledgerOther }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--일반fee-->
                        <div class="row">
                            <div class="row w-bg main-content report report-info">
                                <div class="portlet-header">
                                    <h5>일반 fee</h5>
                                </div>
                                <div class="portlet-body">
                                    <div class="talble-info">
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractInfoNomalTotalFeePercent" 
                                                            type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractNomalTotalFeePercent }" pattern=".00"/>">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractInfoNomalTotalFeeSum" 
                                                            type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractNomalTotalFeeSum }" pattern="#,###"/>">
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
                                                            <input id="txtContractInfoNomalAgFeePercent" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractNomalAgFeePercent }" pattern=".00"/>">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractInfoNomalAgFeeSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractNomalAgFeeSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractInfoNomalDpFeePercent" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractNomalDpFeePercent }" pattern="0.00"/>">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractInfoNomalDpFeeSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractNomalDpFeeSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>fee VAT여부</h7>
                                                    <p class="info-result">
														 <select>
														 	<option disabled selected="selected">선택</option>
															<option value="N" <c:if test="${contractVO.contractAgFeeSurtaxSupportYn eq 'N' }">selected="selected"</c:if>>미지원</option>
                                                            <option value="Y" <c:if test="${contractVO.contractAgFeeSurtaxSupportYn eq 'Y' }">selected="selected"</c:if>>지원</option>
														</select>
													</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--end::일반fee-->
                        <!--추가fee-->
                        <div class="row">
                            <div class="row w-bg main-content report report-info">
                                <div class="portlet-header">
                                    <h5>추가 fee</h5>
                                </div>
                                <div class="portlet-body">
                                    <div class="talble-info">
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result single-input">
                                                       <span>
                                                            <input id="txtContractInfoAddTotalFeeSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractAddTotalFeeSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>AG fee</h7>
                                                    <p class="info-result single-input">
                                                       <span>
                                                            <input id="txtContractInfoAddAgFeeSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractAddAgFeeSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result single-input">
                                                       <span>
                                                            <input id="txtContractInfoAddDpFeeSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractAddDpFeeSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>추가 VAT여부</h7>
                                                    <p class="info-result">
														 <select>
														 	<option disabled selected="selected">선택</option>
															<option value="N" <c:if test="${contractVO.contractAddFeeSurtaxSupportYn eq 'N' }">selected="selected"</c:if>>미지원</option>
                                                            <option value="Y" <c:if test="${contractVO.contractAddFeeSurtaxSupportYn eq 'Y' }">selected="selected"</c:if>>지원</option>
														</select>
													</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end::추가fee-->
                        <!--슬라이딩-->
                        <div class="row">
                            <div class="row w-bg main-content report report-info">
                                <div class="portlet-header">
                                    <h5>슬라이딩</h5>
                                </div>
                                <div class="portlet-body">
                                    <div class="talble-info">
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractInfoTotalSlidingPercent" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractTotalSlidingPercent }" pattern="0.00"/>">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractInfoTotalSlidingSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractTotalSlidingSum }" pattern="#,###"/>">
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
                                                            <input id="txtContractInfoAgSlidingPercent" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractAgSlidingPercent }" pattern="0.00"/>">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractInfoAgSlidingSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractAgSlidingSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input id="txtContractInfoDpSlidingPercent" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractDpSlidingPercent }" pattern="0.00"/>">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input id="txtContractInfoDpSlidingSum" 
                                                             type="text" placeholder="0" value="<fmt:formatNumber value="${contractVO.contractDpSlidingSum }" pattern="#,###"/>">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>슬라이딩 VAT여부</h7>
                                                    <p class="info-result">
														 <select>
														 	<option disabled selected="selected">선택</option>
															<option value="N" <c:if test="${contractVO.contractSlidingSurtaxSupportYn eq 'N' }">selected="selected"</c:if>>미지원</option>
                                                            <option value="Y" <c:if test="${contractVO.contractSlidingSurtaxSupportYn eq 'Y' }">selected="selected"</c:if>>지원</option>
														</select>
													</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end::슬라이딩-->
                    </div>
                </div>
            </main>
        </div>
    </div>
    <!--script-->
    <script src='/static/assets/js/common/jquery-3.3.1.min.js'></script>
</body>
</html>