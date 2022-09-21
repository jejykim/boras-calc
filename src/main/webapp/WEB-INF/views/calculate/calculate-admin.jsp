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
		
		var financialCompany = ${calculateVO0.ledgerFinancialCompanyCd};
		var financialBranch = ${calculateVO0.ledgerFinancialBranchCd};
		var dealerBrand = ${calculateVO0.ledgerDealerBrandCd};
		var dealerCompany = ${calculateVO0.ledgerDealerCompanyCd};
	</script>
	
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
                                <select>
                                    <option>2022 년</option>
                                </select>
                                <select>
                                    <option>08 월</option>
                                </select>
                            </span>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-su">엑셀다운로드</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row f-box list">
                            <div class="portlet">
                                <h5><i class="ico-f1"></i><span>AG fee 총 차액</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f2"></i><span>원장 fee 총 입금</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f3"></i><span>AG fee 총&#40;+&#41; 출금</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li class="on">전체</li>
                                        <li>사업자</li>
                                        <li>개인</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table">
                                    <table>
                                        <colgroup>
                                            <col widht="10%" />
                                            <col widht="15%" />
                                            <col widht="12.5%" />
                                            <col widht="12.5%" />
                                            <col widht="12.5%" />
                                            <col widht="12.5%" />
                                            <col widht="12.5%" />
                                            <col widht="12.5%" />
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
                                            <tr>
                                                <td>구분</td>
                                                <td>이름</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
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