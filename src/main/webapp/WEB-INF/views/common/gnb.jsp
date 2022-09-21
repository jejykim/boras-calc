<%@page import="com.boras.CRM.util.PermissionHelper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String uri = request.getRequestURI();
%>
<script src='/static/assets/js/common/gnb.js'></script>

<header>
    <div class="user">
        <span class="alarm">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
            <span class="badge-alarm">9</span>
        </span>
        <span class="user-name"><%=PermissionHelper.getSessionUserName(request).isEmpty() ? "세션아웃" : PermissionHelper.getSessionUserName(request) %></span>
    </div>
    <div class="user-sub" style="display: none;">
        <ul>
            <li><a><%=PermissionHelper.getSessionUserId(request).isEmpty() ? "세션아웃" : PermissionHelper.getSessionUserId(request) %></a></li>
            <li><a><%=request.getRemoteHost() %></a></li>
            <li><a href="/mypage">마이페이지</a></li>
            <li><a onclick="Common.ChangePwModal();">비밀번호 변경</a></li>
            <li><a href="<%if(PermissionHelper.isAdmin(request)) { %>/admin/inquiry/list<%}else { %>/ag/inquiry/list<%} %>">문의내역</a></li>
            <li class="logout"><a href="/logout">로그아웃</a></li>
        </ul>
    </div>
</header>

<!-- modal -->
<jsp:include page="../common/modal.jsp" />
<!-- //modal -->