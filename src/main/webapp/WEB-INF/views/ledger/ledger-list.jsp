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
                                <button class="btn-su">원장엑셀업로드</button>
                                <button class="btn-main">원장추가</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row f-box">
                            <div class="portlet">
                                <h5><i class="ico-f1"></i><span>차량가</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f2"></i><span>취득원가</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f3"></i><span>fee합계</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f4"></i><span>슬라이딩 합계</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                            <div class="portlet">
                                <h5><i class="ico-f5"></i><span>추가fee 합계</span></h5>
                                <span class="price">100,000,000</span>
                            </div>
                        </div>
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li class="on">전체</li>
                                        <li>승인요청</li>
                                        <li>승인완료</li>
                                        <li>잉여원장</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input type="text" placeholder="검색">
                                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-filter">
                                    <span>
                                        <strong>인도일</strong>
                                        <span class="filter">2022.08.03</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>금융상품</strong>
                                        <span class="filter">리스</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>금융지점</strong>
                                        <span class="filter">강남지구 어떤지구</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>구분</strong>
                                        <span class="filter">성문/올카</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <strong>금융상품</strong>
                                        <span class="filter">리스</span>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </span>
                                    <button class="btn-gr">초기화</button>
                                </div>
                                <div class="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>기타사항</th>
                                                <th class="cur">구분<i class="ico-filter"></i></th>
                                                <th class="cur">금융사<i class="ico-filter"></i></th>
                                                <th class="cur">금융지점<i class="ico-filter"></i></th>
                                                <th class="cur">금융상품<i class="ico-filter"></i></th>
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
                                            <tr>
                                                <td><button class="btn-line-main">추가</button></td>
                                                <td>성문</td>
                                                <td>미래에셋캐피탈</td>
                                                <td>강남지구 어떤지구</td>
                                                <td>리스</td>
                                                <td>2022.08.03</td>
                                                <td>주식회사보라스 엔터테이먼트</td>
                                                <td><button class="btn-main">선택</button></td>
                                                <td>
                                                    <p>벤츠 CLS-11111</p>
                                                    <p>00가1234</p>
                                                </td>
                                                <td class="align-right">
                                                    <p><span>차량가</span><span>100,000,000</span></p>
                                                    <p><span>취득원가</span><span>100,000,000</span></p>
                                                </td>
                                                <td><button class="btn-main">선택</button></td>
                                                <td><button class="btn-pencil"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                                            </tr>
                                            <tr>
                                                <td><button class="btn-main">보기</button></td>
                                                <td>성문</td>
                                                <td>미래에셋캐피탈</td>
                                                <td>강남지구 어떤지구</td>
                                                <td>리스</td>
                                                <td>2022.08.03</td>
                                                <td>주식회사보라스 엔터테이먼트</td>
                                                <td><a class="text-line">달러사</a></td>
                                                <td>
                                                    <p>벤츠 CLS-11111</p>
                                                    <p>00가1234</p>
                                                </td>
                                                <td class="align-right">
                                                    <p><span>차량가</span><span>100,000,000</span></p>
                                                    <p><span>취득원가</span><span>100,000,000</span></p>
                                                </td>
                                                <td><a class="text-line">달러사</a></td>
                                                <td><button class="btn-pencil"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
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
</body>
</html>