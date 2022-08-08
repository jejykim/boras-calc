<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <meta name="description" content="Latest updates and statistic charts">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <style>
        .m-widget24 .m-widget24__item .m-widget24__title {
            margin-top: 1.5rem !important
        }
    </style>
	<title>로그인</title>
    
    <script src="/static/assets/js/common/jquery-3.3.1.min.js"></script>
    <script src="/static/assets/js/login/login.js"></script>
	<script>
        var errorMsg = '${errorMsg}';
        if(errorMsg != '') {
        	alert(errorMsg);
        }
    </script>
</head>
<body>
<div class="body">
	<div class="img-section">
		<img src="/static/assets/back/images/main.png">
	</div>
    
    <div class="login-contents">	    
	    <div class="title">
	        <div class="main-title">Boras 정산 시스템</div>
	    </div>
	    <div class="login-box">
	        <div class="sub-section">
	            <div class="sub-title">Login</div>
	        </div>
	        <div class="main-section">
	            <form action="/login/check" method="post">
	                <div class="log-section">
	                    <input type="text" id="mId" name="userId" required="required" class="form-control m-input" placeholder="관리자ID">
	                </div>
	                <div class="log-section">
	                    <input type="password" id="mPw" name="userPw" required="required"  class="form-control m-input" placeholder="비밀번호">
	                </div>
	                <div class="log-section btn">
	                    <button type="submit" class="btn m-btn m-btn--gradient-from-info m-btn--gradient-to-accent">로그인</button>
	                </div>
	            </form>
	        </div>
	    </div>
	</div>
</div>
</body>
</html>