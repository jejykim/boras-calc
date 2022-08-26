<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
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
	<script src='/static/assets/js/contract/contract.js'></script>

</head>
<body>
    <div class="wrap">
        <header>
            <div class="user">
                <span>홍길동</span>
            </div>
        </header>
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
                    </div>
                    <div class="main-body">
                        <div class="row w-bg m-bmg-12 box-sh">
                            <div class="search-bar">
                                <div class="bar">
                                    <label>금융사</label>
                                    <div class="bar-info">
                                        <select id="selFinancialCompanyCode">
                                        	<option value="all">전체</option>
			                            	<c:forEach var="list" items="${financialCompanyCodelist }" varStatus="status">
					                        	<option value="${list.codeId }">${list.codeName }</option>
					                        </c:forEach>
		                    </select>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>금융상품</label>
                                    <div class="bar-info">
                                        <select id="selFinancialProduct">
                                        <option value="all">전체</option>
				                        	<c:forEach var="list" items="${financialProductCodelist }" varStatus="status">
						                      	<option value="${list.codeId }">${list.codeName }</option>
					                      	</c:forEach>
					                 	 </select>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>AG</label>
                                    <div class="bar-info">
                                        <select id="selUserAg">
                                        	<option value="all">전체</option>
					                        <c:forEach var="list" items="${userAglist }" varStatus="status">
				                        		<option value="${list.userId }">${list.userName }</option>
					                        </c:forEach>
					                    </select>
                                    </div>
                                </div>
                                <div class="bar">
                                    <label>검색</label>
                                    <div class="bar-info">
                                        <input type="text" placeholder="검색">
                                    </div>
                                </div>
                                <div class="bar btn">
                                    <button class="btn-main">검색</button>
                                    <button class="btn-gr" style="margin-left: 10">초기화</button>
                                </div>
                            </div>
                        </div>
                        <div class="row con-2">
                            <div class="row w-bg main-content report">
                                <div class="portlet-body">
                                    <div class="table fix-table">
                                        <table>
                                            <colgroup>
                                                <col width="18%">
                                                <col width="12%">
                                                <col width="15%">
                                                <col width="20%">
                                                <col width="25%">
                                                <col width="10%">
                                            </colgroup>
                                            <thead>
                                                <th>금융사</th>
                                                <th>금융상품</th>
                                                <th>AG</th>
                                                <th>차량명</th>
                                                <th>고객명</th>
                                                <th>상세</th>
                                            </thead>
                                            <tbody>
                                                <tr class="on">
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>
                                                <tr>
                                                    <td>미래에셋캐피탈</td>
                                                    <td>리스</td>
                                                    <td>A AG사</td>
                                                    <td>벤츠 CLS-11111</td>
                                                    <td>(주)주식회사 어쩌고저쩌고</td>
                                                    <td><button class="btn-bu">상세</button></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="row w-bg main-content">
                                <div class="portlet-body">
                                    <!--일반fee-->
                                    <div class="talble-info">
                                        <div class="info-head">
                                            <h6>일반fee</h6>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
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
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>fee VAT여부</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::일반fee-->
                                    <!--추가fee-->
                                    <div class="talble-info">
                                        <div class="info-head">
                                            <h6>추가 fee</h6>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
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
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>fee VAT여부</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::추가fee-->
                                    <!--슬라이딩-->
                                    <div class="talble-info">
                                        <div class="info-head">
                                            <h6>슬라이딩</h6>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>총fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
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
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info-body">
                                            <div class="info-row">
                                                <div>
                                                    <h7>DP fee</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="info-row">
                                                <div>
                                                    <h7>fee VAT여부</h7>
                                                    <p class="info-result">
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>%</strong>
                                                        </span>
                                                        <span>
                                                            <input type="text" placeholder="0">
                                                            <strong>원</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::슬라이딩-->
                                    <div class="table-info footer">
                                        <button class="btn-bu">저장</button>
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