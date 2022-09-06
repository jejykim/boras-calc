<%@page import="com.boras.CRM.util.PermissionHelper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String uri = request.getRequestURI();
%>
<header>
    <div class="user">
    	<span>jsp 경로(개발용) <%=uri %></span> ||
        <span> 사용자명 : <%=PermissionHelper.getSessionUserName(request).isEmpty() ? "세션아웃" : PermissionHelper.getSessionUserName(request) %></span>
        &nbsp;
        <a href="/logout">로그아웃</a>
        <button onclick="Common.ChangePwModal();">비밀번호 변경</button>
    </div>
</header>

<!-- modal -->
<jsp:include page="../common/modal.jsp" />
<!-- //modal -->