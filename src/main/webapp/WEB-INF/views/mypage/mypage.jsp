<%@page import="com.boras.CRM.util.PermissionHelper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
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
	<link rel="stylesheet" href="/static/assets/css/custom.css">
	
	<link rel="stylesheet" href="/static/assets/css/dropzone.css" />
	<script src="/static/assets/js/common/dropzone.js"></script>

	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<script src='/static/assets/js/common/common.js'></script>
	<script src='/static/assets/js/mypage/mypage.js'></script>
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
                            <h3>마이페이지</h3>
                        </div>
                        <div class="header-sub">
                            <div class="btn">
                                <button class="btn-bu btn-sm" id="btnChangeMypage">수정</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row w-bg main-content">
                            <div class="portlet-header">
                                <h5>계정 정보</h5>
                            </div>
                            <div class="portlet-body">
                                <div class="portlet-contents">
                                    <div class="portlet-form">
                                        <div class="form-group row">
                                            <label class="text-input">
                                                아이디
                                            </label>
                                            <div class="form-control">
                                                <input type="text" class="col-1" id="textUserId" disabled="disabled" value="${userVO.userId }">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                <span style="color: red;">* </span>사용자명
                                            </label>
                                            <div class="form-control">
                                                <input type="text" class="col-1" id="textUserName" value="${userVO.userName }">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="text-input">
                                                <span style="color: red;">* </span>Email
                                            </label>
                                            <div class="form-control">
                                                <input type="text" class="col-1" id="textUserEmail" value="${userVO.userEmail }">
                                            </div>
                                        </div>
                                        <%if(!PermissionHelper.isAdmin(request)) { %>
	                                        <div class="form-group row">
	                                            <label class="text-input">
	                                                AG사 명 (옵션)
	                                            </label>
	                                            <div class="form-control">
	                                                <input type="text" class="col-1" id="textUserAgCompany" value="${userVO.userAgCompany }">
	                                            </div>
	                                        </div>
	                                        <div class="form-group row">
	                                            <label class="text-input">
	                                                <span style="color: red;">* </span>사업자 구분
	                                            </label>
	                                            <div class="form-control">
	                                                <select class="col-1" id="selUserBusinessType">
	                                                    <option value="">--사업자 구분을 선택해주세요--</option>
	                                                    <c:forEach var="list" items="${businessCodelist }" varStatus="status">
	                                                    	<option value="${list.codeId }" <c:if test="${list.codeId eq userVO.userBusinessTypeCd }">selected="selected"</c:if>>${list.codeName }</option>
	                                                    </c:forEach>
	                                                </select>
	                                            </div>
	                                        </div>
                                        <%} %>
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