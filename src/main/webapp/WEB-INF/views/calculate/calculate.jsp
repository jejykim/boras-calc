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
                            <h3>정산목록</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su">엑셀다운로드</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body pd-row">
                        <div class="row w-bg m-bmg-24 box-sh info-search-bar calculate">
                            <div class="search-main">
                                <div class="search-bar">
                                    <div class="bar">
                                        <label>금융사</label>
                                        <div class="bar-info">
                                            <select>
                                                <option>금융사</option>
                                                <option>금융사</option>
                                                <option>금융사</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="bar">
                                        <label>금융지점</label>
                                        <div class="bar-info">
                                            <select>
                                                <option>금융지점</option>
                                                <option>금융지점</option>
                                                <option>금융지점</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="bar">
                                        <label>금융상품</label>
                                        <div class="bar-info">
                                            <select>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="search-bar bar-2">
                                    <div class="bar">
                                        <label>AG 사</label>
                                        <div class="bar-info sel-2">
                                            <select>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                            </select>
                                            <select>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="bar input-2">
                                        <label>검색필터</label>
                                        <div class="bar-info ">
                                            <select>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                                <option>금융상품</option>
                                            </select>
                                            <input type="text" placeholder="검색어를 입력하세요">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="search-btn">
                                <button class="btn-main">검색</button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="row main-content">
                                <div class="cal-value">
                                    <div class="table w-bg">
                                        <table class="n-hover">
                                            <thead>
                                                <tr>
                                                    <th>AG수수료</th>
                                                    <th>프로모션 수수료</th>
                                                    <th>공급가액</th>
                                                    <th>부가세액</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span>200,000,000</span>원</td>
                                                    <td><span>200,000,000</span>원</td>
                                                    <td><span>200,000,000</span>원</td>
                                                    <td><span>200,000,000</span>원</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="table-value w-bg">
                                        <table class="n-hover">
                                            <tr>
                                                <th>총합계&#40;VAT포함&#41;</th>
                                                <td colspan="3" class="font-red"><span>200,000,000</span>원</td>
                                            </tr>
                                            <tr>
                                                <th>개인AG</th>
                                                <td><span>200,000,000</span>원</td>
                                                <th>사업자AG</th>
                                                <td><span>200,000,000</span>원</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row main-content">
                                <div class="cal-value">
                                    <div class="nav-table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>금융사</th>
                                                    <th>금융상품</th>
                                                    <th>고객명</th>
                                                    <th>차량가</th>
                                                    <th>취득원가</th>
                                                    <th>인도일</th>
                                                    <th>수수료합</th>
                                                    <th>상세</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>DGB 캐피탈</td>
                                                    <td>리스</td>
                                                    <td>주식회사 에스티케어</td>
                                                    <td>100,000,000</td>
                                                    <td>100,000,000</td>
                                                    <td>22/07/26</td>
                                                    <td>100,000,000</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                               <c:forEach var="list" items="${list }" varStatus="status">
                                                    <%-- <c:if test="${status.count eq 1 }">
                                            			<script type="text/javascript">
		                                            		Contract.contractInfo('${list.contractSeq}');
														</script>
                                            		</c:if> --%>
                                                    <%-- <tr <c:if test="${status.count eq 1 }"> class="on" </c:if> onclick="Contract.selectContractInfo('${list.contractSeq}')"> --%>
                                                    <tr class="<c:if test='${status.count eq 1 }'>on</c:if>" onclick="Contract.selectContractInfo('${list.contractSeq}')">
                                                    	<td>${status.count }</td>
                                                        <td>${list.ledgerFinancialCompanyCdName }</td>
                                                        <td>${list.ledgerFinancialProductCdName }</td>
                                                        <td>${list.ledgerCustomerName }</td>
                                                        <td>${list.ledgerCarPrice }</td>
                                                        <td>${list.ledgerAcquisitionCost }</td>
                                                        <td>${list.ledgerDeliveryDate }</td>
                                                        <td>${list.calculateFeeSum }</td>
                                                        <td><button class="btn-bu">상세</button></td>
                                                    </tr>
                                                </c:forEach>
                                            </tbody>
                                        </table>
                                        <div class="page_wrap">
                                            <div class="page_nation">
                                                <a class="arrow prev" href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
                                                <a href="#" class="active">1</a>
                                                <a href="#">2</a>
                                                <a href="#">3</a>
                                                <a href="#">4</a>
                                                <a href="#">5</a>
                                                <a href="#">6</a>
                                                <a href="#">7</a>
                                                <a href="#">8</a>
                                                <a href="#">9</a>
                                                <a href="#">10</a>
                                                <a class="arrow next" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nav-table-value">
                                        <div class="m-bmg-24 w-bg">
                                            <div class="portlet-header">
                                                <h5>수수료</h5>
                                            </div>
                                            <div class="portlet-body m-pa-20">
                                                <div class="commission">
                                                    <div class="comm-row">
                                                        <p class="percent"><i class="i-percent"></i></p>
                                                        <div>
                                                            <h7>2.5</h7>
                                                            <p class="row-guide">CM수수료&#40;%&#41;</p>
                                                        </div>
                                                    </div>
                                                    <div class="comm-row">
                                                        <p class="krw"><i class="i-krw"></i></p>
                                                        <div>
                                                            <h7>100.000.000</h7>
                                                            <p class="row-guide">CM수수료&#40;원&#41;</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="commission">
                                                    <div class="comm-row">
                                                        <p class="percent"><i class="i-percent"></i></p>
                                                        <div>
                                                            <h7>2.5</h7>
                                                            <p class="row-guide">AG수수료&#40;%&#41;</p>
                                                        </div>
                                                    </div>
                                                    <div class="comm-row">
                                                        <p class="krw"><i class="i-krw"></i></p>
                                                        <div>
                                                            <h7>100.000.000</h7>
                                                            <p class="row-guide">AG수수료&#40;원&#41;</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="commission">
                                                    <div class="comm-row">
                                                        <p class="krw"><i class="i-krw"></i></p>
                                                        <div>
                                                            <h7>2.5</h7>
                                                            <p class="row-guide">프로모션수수료1&#40;원&#41;</p>
                                                        </div>
                                                    </div>
                                                    <div class="comm-row">
                                                        <p class="krw"><i class="i-krw"></i></p>
                                                        <div>
                                                            <h7>100.000.000</h7>
                                                            <p class="row-guide">프로모션수수료1&#40;원&#41;</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-bg">
                                            <div class="portlet-header">
                                                <h5>상세정보</h5>
                                            </div>
                                            <div class="portlet-body m-pa-20">
                                                <div class="table-info">
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>진행</h7>
                                                        <p><span>진행</span></p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>기타사항</h7>
                                                        <p>기타사항이 입력되는공간입니다.</p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>금융지점</h7>
                                                        <p>금융지점을 입력하는 공간입니다.</p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>대리점 / 특판</h7>
                                                        <p>대리점</p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>국산 / 수입</h7>
                                                        <p>국산</p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>딜러사</h7>
                                                        <p>딜러사사아아아아아</p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>차량명</h7>
                                                        <p>차량며어어어어어어ㅇ</p>
                                                    </div>
                                                    <div class="info-row">
                                                        <h7><span class="badge-normal"></span>차량번호</h7>
                                                        <p><span>12하3456</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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