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
	<!-- 
	<script type="text/javascript">
		console.log(${list})
		console.log(${calculateVO})
	</script> -->
	
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
                            <h3>정산 상세 - 관리자용</h3>
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
                        <div class="board-info">
                            <div class="board-info-haed">
                                <h5 class="list-info">
                                    <ul>
                                        <li>디피</li>
                                        <li>신철수</li>
                                    </ul>
                                </h5>
                                <span class="badge-text-business">사업자</span>
                                <span class="badge-text-person">개인</span>
                            </div>
                            <div class="board-info-nav">
                                <div class="total">
                                    <i class="ico-coin"></i>
                                    <span class="num"><strong>71,000,000</strong></span>
                                    <span class="text">AG fee 총 차액</span>
                                </div>
                                <div>
                                    <i class="ico-deposit"></i>
                                    <span class="num"><strong>71,000,000</strong></span>
                                    <span class="text">원장 fee 총 입금</span>
                                </div>
                                <div>
                                    <i class="ico-withdrawal"></i>
                                    <span class="num"><strong>71,000,000</strong></span>
                                    <span class="text">AG fee 총&#40;+&#41; 출금</span>
                                </div>
                            </div>
                            <div class="board-info-nav2">
                                <div>
                                    <h8>개인 총 지급합계</h8>
                                    <span><i class="ico-b-krw"></i><strong>100,000,000</strong></span>
                                </div>
                                <div>
                                    <h8>개인 총 지급공급</h8>
                                    <span><i class="ico-b-krw"></i><strong>100,000,000</strong></span>
                                </div>
                                <div>
                                    <h8>사업소득 신고액</h8>
                                    <span><i class="ico-b-krw"></i><strong>100,000,000</strong></span>
                                </div>
                                <div>
                                    <h8>사업 소득 지급액</h8>
                                    <span><i class="ico-b-krw"></i><strong>100,000,000</strong></span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li class="on">산은</li>
                                        <li>DGB</li>
                                        <li>미래</li>
                                        <li>하나강남</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table">
                                    <table class="n-hover">
                                        <colgroup>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>총 합계</th>
                                                <th>계산서 발급</th>
                                                <th>개인지급</th>
                                                <th>개인지급 공급가</th>
                                                <th>개인지급 부가세</th>
                                                <th>3.3공제</th>
                                                <th>사업소득</th>
                                            </tr>
                                        </thead>
                                        <tdoby>
                                            <tr>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                            <tr>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                                <td>100,000,000</td>
                                            </tr>
                                        </tdoby>
                                    </table>
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