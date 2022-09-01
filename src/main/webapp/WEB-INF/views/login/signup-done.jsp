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

</head>

<body>
    <div class="wrap">
        <div class="login">
            <div class="log-contents">
                <div class="logo">
                    <img src="/static/assets/images/common/logo.svg" alt="">
                    <span> 정산 시스템</span>
                </div>
                
                <div class="login-info signup">
                    <div class="signup-mesege">
                        <img src="/static/assets/images/common/check.png"> <br>
                        <strong>회원가입이 <span>완료</span>되었습니다.</strong>
                        담당자가 확인 후 가입 완료 처리 되면 로그인이 가능합니다.
                    </div>
                    <div class="log-btn">
                        <button onclick="location.href='/login'">로그인</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</body>

</html>
