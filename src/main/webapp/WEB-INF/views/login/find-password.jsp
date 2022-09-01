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
	<script src="/static/assets/js/login/findPassword.js"></script>

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
                    <h7>비밀번호 찾기</h7>
                    <input type="text" name="userId" id="userId" placeholder="아이디" required="required">
                    <input type="text" name="userEmail" id="userEmail" placeholder="이메일" required="required">
                    <div class="log-btn">
                        <button id="btnFindPassword">전송</button>
                    </div>
                </div>
            </div>
        </div>

        <!--modal-->
        <div class="modal log hide" id="completeFindPasswordModal">
            <div class="modal-contents sm">
                <div class="modal-body">
                    <div class="modal-form">
                        <span>
                            해당 이메일로 임시비밀번호가 전송되었습니다. <br>
                            로그인 후에 비밀번호를 변경해주세요.
                        </span>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-btn">
                        <button class="btn-bu">재전송</button>
                        <button class="btn-line-cancel">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!--end::modal-->
    </div>
</body>

</html>
