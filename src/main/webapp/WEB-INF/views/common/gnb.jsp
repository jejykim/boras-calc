<%@page import="com.boras.CRM.util.PermissionHelper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String uri = request.getRequestURI();
%>
<header>
    <div class="user">
    	<%=uri %>
        <span><%=PermissionHelper.getSessionUserName(request) %></span>
    </div>
</header>