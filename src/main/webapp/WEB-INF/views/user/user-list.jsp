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
                                        <li id="liAg" <c:if test="${empty userVO.agOrAdmin or userVO.agOrAdmin eq 'ag' }">class="on"</c:if>>AG (${agCount })</li>
                                        <li id="liNewAg" <c:if test="${userVO.agOrAdmin eq 'new' }">class="on"</c:if>>신규 AG (${newCount })</li>
                                        <li id="liAdmin" <c:if test="${userVO.agOrAdmin eq 'admin' }">class="on"</c:if>>관리자 (${adminCount })</li>
                                    </ul>
                                </div>
                                <div class="header-sub">
                                    <div class="search">
                                        <input id="inputSearchText" type="text" placeholder="검색" value="${userVO.searchText }">
                                        <button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        
                                        <form class="search-form" id="searchForm" name="searchForm" action="/user/list" method="get">
											<input type="hidden" name="searchText" id="searchText" value="${userVO.searchText }">
											<input type="hidden" name="agOrAdmin" id="agOrAdmin" value="${userVO.agOrAdmin }">
											<input type='hidden' id="now_page" name="nowPage" value="${userVO.nowPage }">
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
                                                <th>코드사 구분</th>
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
	                                            <tr style="cursor: pointer;" onclick="UserList.userDetail('${list.userId }')">
	                                                <td>${list.userId }</td>
	                                                <td>${list.userName }</td>
	                                                <td>${list.userEmail }</td>
	                                                <td>${list.userCodeCompanyCdName }</td>
	                                                <td>${list.userBusinessTypeCdName }</td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${empty list.userAgCompany }">
	                                                			-
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			${list.userAgCompany }
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.userPermissionCd ne 0 }">
	                                                			${list.userPermissionCdName }
	                                                		</c:when>
	                                                		<c:when test="${list.userPermissionCd eq 0 }">
	                                                			<button class="btn-main">권한부여</button>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<span style="color: gray;">계정 오류</span>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	${fn:substring(list.userJoinDate, 0, 19) }
	                                                </td>
	                                                <td>
	                                                	<c:choose>
	                                                		<c:when test="${list.userUseYn eq 'Y' }">
	                                                			<span style="color: green;">활성화</span>
	                                                		</c:when>
	                                                		<c:when test="${list.userUseYn eq 'N' }">
	                                                			<span style="color: red;">비활성화</span>
	                                                		</c:when>
	                                                		<c:otherwise>
	                                                			<span style="color: gray;">계정 오류</span>
	                                                		</c:otherwise>
	                                                	</c:choose>
	                                                </td>
	                                                <td>
	                                                	${fn:substring(list.userLastAccessDate, 0, 19) }
	                                                </td>
	                                                <td>${list.userLastAccessIp }</td>
	                                                <td>${list.sessionLive }</td>
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
	                                            <a class="arrow prev" style="cursor: pointer;" onclick="UserList.Paging(${pagingVO.startPage })"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
	                                            <c:forEach var="list" varStatus="status" begin="${pagingVO.firstPage }" end="${pagingVO.lastPage }">
	                                            	<c:choose>
                                                        <c:when test="${pagingVO.nowPage eq list }">
                                                            <a class="active">${list }</a>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <a onclick="UserList.Paging(${list })" style="cursor: pointer;">${list }</a>
                                                        </c:otherwise>
                                                    </c:choose>
	                                            </c:forEach>
	                                            <a class="arrow next" style="cursor: pointer;" onclick="UserList.Paging(${pagingVO.endPage })"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
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
        
        <!--modal / 사용자추가-->
        <div class="modal" style="display: none;" id="modalAddUser">
            <div class="modal-contents sm">
                <div class="modal-head">
                    <h4>사용자추가</h4>
                </div>
                <div class="modal-body">
                	<div class="modal-form">
                        <div>
                            <div class="from-title">
                                <div class="radio-tile-group">
                                	
								    <div class="input-container">
								      <input id="rAg" class="radio-button" type="radio" name="radio" checked="checked" value="ag"/>
								      <div class="radio-tile">
								        <label for="rAg" class="radio-tile-label">AG</label>
								      </div>
								    </div>
								
								    <div class="input-container">
								      <input id="rAdmin" class="radio-button" type="radio" name="radio" value="admin"/>
								      <div class="radio-tile">
								        <label for="rAdmin" class="radio-tile-label">관리자</label>
								      </div>
								    </div>
								
								  </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-form input-sh">
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>ID <span id="spanIdCheck"></span></h6>
                            </div>
                            <input type="text" placeholder="아이디를 입력해주세요" id="textUserId">
                        </div>
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>사용자명</h6>
                            </div>
                            <input type="text" placeholder="사용자명을 입력해주세요" id="textUserName">
                        </div>
                    </div>
                    <div class="form-guide">
                        <span class="font-red"><i class="fa fa-info-circle" aria-hidden="true"></i>초기 비밀번호는 <span style="font-weight: bold;">boras1234!</span> 입니다.</span>
                    </div>
                    <br>
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>Email</h6>
                            </div>
                            <input type="text" placeholder="이메일 주소를 입력해주세요" id="textUserEmail">
                        </div>
                    </div>
                    <div class="modal-form">
                        <div>
                            <div class="from-title">
                                <h6><span style="color: red;">* </span>권한</h6>
                            </div>
                            <select id="selPermissionCode">
		                    </select>
                        </div>
                    </div>
                    <div class="modal-form ag-box">
                        <div>
                            <div class="from-title">
                                <h6>AG사 명 (옵션)</h6>
                            </div>
                            <input type="text" placeholder="AG사 명를 입력해주세요" id="textAgCompanyName">
                        </div>
                    </div>
                    <div class="modal-form input-sh ag-box">
                        <div>
                            <div class="from-title">
                                <h6>코드사 구분</h6>
                            </div>
                            <select id="selCodeCompany">
                            	<c:forEach var="list" items="${codeCompanyCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
                        </div>
                        <div>
                            <div class="from-title">
                                <h6>사업자 구분</h6>
                            </div>
                            <select id="selBusinessCode">
		                        <c:forEach var="list" items="${businessCodelist }" varStatus="status">
		                        	<option value="${list.codeId }">${list.codeName }</option>
		                        </c:forEach>
		                    </select>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu" id="btnAddUserOk">완료</button>
		                <button class="btn-line-cancel" id="btnCancelModal">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
		
    </div>
</body>
</html>