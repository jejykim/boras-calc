<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
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
	<script src="/static/assets/js/login/signup.js"></script>

</head>

<body>
    <div class="wrap">
        <div class="login">
            <div class="log-contents">
                <div class="logo">
                    <img src="/static/assets/images/common/logo.svg" alt="">
                    <span> 정산 시스템</span>
                </div>
                
                <form action="/signup/ok" method="post" id="formSignup">
	                <div class="login-info signup">
	                    <h7>회원가입</h7>
	                    <input type="text" placeholder="아이디" id="userId" name="userId" required="required">
	                    <input type="password" placeholder="패스워드" id="userPw" name="userPw" required="required">
	                    <input type="password" placeholder="패스워드 확인" id="userPwCheck" name="userPwCheck" required="required">
	                    <input type="text" placeholder="이름" id="userName" name="userName">
	                    <input type="text" placeholder="이메일" id="userEmail" name="userEmail" required="required">
	                    <!-- <input type="text" placeholder="전화번호" id=""> -->
	                    <select id="selBusinessType" name="userBusinessTypeCd">
	                    	<option value="">--사업자 형태--</option>
	                    	<c:forEach var="list" items="${businessCodeList }" varStatus="status">
	                    		<c:if test="${list.codeName ne '전체'}">
	                    			<option value="${list.codeId }">${list.codeName }</option>
	                    		</c:if>
	                    	</c:forEach>
	                    </select>
	                    <input type="text" placeholder="회사명(사업자의 경우 필수)" id="userAgCompany" name="userAgCompany">
	                    <div class="log-btn">
	                        <button type="button" id="btnSignup">회원가입</button>
	                        <div class="log-info-btn">
	                            <ul>
	                                <li><a href="/login">로그인</a></li>
	                                <li><a href="/find/password">비밀번호찾기</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
                </form>
                
            </div>
        </div>
    </div>
</body>

</html>
