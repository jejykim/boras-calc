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
	<script src="/static/assets/js/login/login.js"></script>
	<script>
        var errorMsg = '${errorMsg}';
        if(errorMsg != '') {
        	alert(errorMsg);
        }
    </script>

</head>

<body>
    <div class="wrap">
        <div class="login">
            <div class="log-contents">
                <div class="logo">
                    <img src="/static/assets/images/common/logo.svg" alt="">
                    <span> 정산 시스템</span>
                </div>
                
                <form action="/login/check" method="post" id="formLogin">
	                <div class="login-info">
	                    <h7>로그인</h7>
	                    <input type="text" id="mId" name="userId" required="required" class="form-control m-input" placeholder="아이디">
	                    <input type="password" id="mPw" name="userPw" required="required"  class="form-control m-input" placeholder="패스워드">
	                    <div class="log-save">
	                        <span>
	                            <input class="styled-checkbox" name="idSave" id="idSave" type="checkbox"><label for="idSave">ID저장</label>
	                        </span>
	                    </div>
	                    <div class="log-btn">
	                        <button type="submit">로그인</button>
	                        <div class="log-info-btn">
	                            <ul>
	                                <li><a href="/find/password">비밀번호찾기</a></li>
	                                <li><a>회원가입</a></li>
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
