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
                            <div class="board-nav">
                                <div class="board-info-haed">
                                    <h5><span>디피</span>-<span>신철수</span></h5>
                                    <span class="badge-text-business">사업자</span>
                                    <span class="badge-text-person" style="display: none;">개인</span>
                                </div>
                                <div class="board-info-result th">
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
                                        <span class="tag badge-p">AG fee 총 차액</span>
                                    </div>
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
                                        <span class="tag badge-b">원장 fee 총 입금</span>
                                    </div>
                                    <div>
                                        <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
                                        <span class="tag badge-o">AG fee 총(+) 출금</span>
                                    </div>
                                </div>
                            </div>
                            <div class="board-nav price-box">
                                <div>
                                    <span class="title"><i class="i-badge"></i>개인총 지급 합계</span>
                                    <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>개인총 지급 공급</span>
                                    <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>사업소득 신고액</span>
                                    <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
                                </div>
                                <div>
                                    <span class="title"><i class="i-badge"></i>사업소득 지급액</span>
                                    <span><i class="ico-b-krw"></i><strong>71,000,000</strong></span>
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
                                <div class="table fix-table">
                                    <table class="n-hover">
                                        <colgroup>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>총합계</th>
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