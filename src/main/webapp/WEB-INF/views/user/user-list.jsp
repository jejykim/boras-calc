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
	<script src='/static/assets/js/user/userList.js'></script>
	
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
                            <h3>사용자 목록</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-main" id="btnAddUser">사용자 추가</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <div class="tab">
                                    <ul>
                                        <li class="on">AG</li>
                                        <li>신규 AG</li>
                                        <li>관리자</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input type="text" placeholder="검색">
                                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="/user/list" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${userVO.searchText }">
											<input type="hidden" name="agOrAdmin" id="agOrAdmin" value="<c:if test="${empty userVO.agOrAdmin }">ag</c:if>">
											<input type='hidden' id="now_page" name="nowPage">
										</form>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>사용자명</th>
                                                <th>이메일</th>
                                                <th>사업자 구분</th>
                                                <th>AG사명</th>
                                                <th>권한</th>
                                                <th>가입일</th>
                                                <th>활성화</th>
                                                <th>마지막 접속일</th>
                                                <th>접속 IP</th>
                                                <th>로그인 여부</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	<c:forEach var="list" items="${list }" varStatus="status">
	                                            <tr>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                                <td></td>
	                                            </tr>
                                        	</c:forEach>
                                        	<c:if test="${listCount eq 0 }">
	                                            <tr>
	                                                <td colspan="11">조회된 데이터가 없습니다</td>
	                                            </tr>
	                                        </c:if>
                                        </tbody>
                                    </table>
                                    
                                    <c:if test="${listCount ne 0}">
	                                    <div class="page_wrap">
	                                        <div class="page_nation">
	                                            <a class="arrow prev" href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
	                                            <c:forEach var="list" varStatus="status" begin="${pagingVO.firstPage }" end="${pagingVO.lastPage }">
	                                            	<c:choose>
                                                        <c:when test="${pagingVO.nowPage eq list }">
                                                            <a class="active" style="cursor: pointer;">${list }</a>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <a onclick="UserList.Paging(${list })" style="cursor: pointer;">${list }</a>
                                                        </c:otherwise>
                                                    </c:choose>
	                                            </c:forEach>
	                                            <a class="arrow next" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
	                                        </div>
	                                    </div>
                                    </c:if>
                                    
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