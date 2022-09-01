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
	<script src="/static/assets/js/login/changePassword.js"></script>

</head>

<body>
    <div class="wrap">
        <div class="login">
            <div class="log-contents">
                <div class="logo">
                    <img src="/static/assets/images/common/logo.svg" alt="">
                    <span> 정산 시스템</span>
                </div>
                <form action="/change/password/ok" method="post" id="formChangePassword">
	                <div class="login-info signup">
	                    <h7>비밀번호 변경</h7>
	                    <input type="password" name="userPw" id="userPw" placeholder="새 비밀번호" required="required">
	                    <input type="password" name="userPwCheck" id="userPwCheck" placeholder="새 비밀번호 확인" required="required">
	                    <div class="log-btn">
	                        <button id="btnchangePassword">변경</button>
	                    </div>
	                </div>
                </form>
            </div>
        </div>

    </div>
</body>

</html>
