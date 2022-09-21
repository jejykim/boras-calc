<%@page import="com.boras.CRM.util.PermissionHelper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true" pageEncoding="UTF-8"%>
<%
	String uri = request.getRequestURI();
%>
<aside>
    <div class="menu">
        <div class="logo">
            <a href="<% if(PermissionHelper.isAdmin(request)) { %>/<% }else if(PermissionHelper.isLevel1AG(request)){ %>/ag/calc/list<% }else { %>/ag/ledger/list<% } %>">
                <img src="/static/assets/images/common/logo.png" alt="logo">
            </a>
            <i class="i-menu"></i>
        </div>
        <ul>
        	<% if(PermissionHelper.isAdmin(request)) { %>
            <li class="mainmenu <%=uri.contains("/dashboard/dashboard") ? "on" : "" %>"><a href="/dashboard"><i class="fa fa-home" aria-hidden="true"></i>Dashboard</a></li>
            <li class="mainmenu">
                <h4>사용자</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/user/") ? "class='on'" : "" %>><a href="/user/list"><i class="fa fa-user-o" aria-hidden="true"></i><span>사용자 목록</span></a></li>
                    </ul>
                </div>
            </li>
            <% } %>
            <% if(!PermissionHelper.isLevel1AG(request)) { %>
            <li class="mainmenu">
                <h4>원장</h4>
                <div class="submenu">
                    <ul>
                        <li title="AG" <%=uri.contains("/ledger/ledger") ? "class='on'" : "" %>><a href="/ag/ledger/list"><i class="fa fa-file-text-o" aria-hidden="true"></i><span>금융사 원장 목록</span></a></li>
                    	<% if(PermissionHelper.isAdmin(request)) { %>
                        <li title="관리자" <%=uri.contains("/ledger-admin/ledger") ? "class='on'" : "" %>><a href="/admin/ledger/list"><i class="fa fa-file-text-o" aria-hidden="true"></i><span>금융사 원장 목록(관리자)</span></a></li>
                        <% } %>
                    </ul>
                </div>
            </li>
            <% } %>
            <% if(PermissionHelper.isAdmin(request)) { %>
            <li class="mainmenu">
                <h4>계출</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/contract/contract") ? "class='on'" : "" %>><a href="/contract/list"><i class="fa fa-list-ul" aria-hidden="true"></i><span>계출 목록</span></a></li>
                    </ul>
                </div>
            </li>
            <% } %>
            <li class="mainmenu">
                <h4>정산</h4>
                <div class="submenu">
                    <ul>
                    	<% if(PermissionHelper.isAdmin(request)) { %>
                        <li <%=uri.contains("/calculate/dashboard") ? "class='on'" : "" %>><a href="/calc/dashboard"><i class="fa fa-television" aria-hidden="true"></i><span>정산 대시보드</span></a></li>
                        <% } %>
                        <li title="AG" <%=uri.contains("/calculate/calculate") ? "class='on'" : "" %>><a href="/ag/calc/list"><i class="fa fa-list-alt" aria-hidden="true"></i><span>정산 목록</span></a></li>
                        <% if(PermissionHelper.isAdmin(request)) { %>
                        <li title="관리자" <%=uri.contains("/calculate/calculate-admin") ? "class='on'" : "" %>><a href="/admin/calc/list"><i class="fa fa-list-alt" aria-hidden="true"></i><span>정산 목록(관리자)</span></a></li>
                        <% } %>
                    </ul>
                </div>
            </li>
            <% if(PermissionHelper.isAdmin(request)) { %>
            <li class="mainmenu">
                <h4>통계</h4>
                <div class="submenu">
                    <ul>
                        <li><a onclick="alert('공사중입니다');"><i class="fa fa-bar-chart" aria-hidden="true"></i><span>통계</span></a></li>
                    </ul>
                </div>
            </li>
            <li class="mainmenu">
                <h4>시스템</h4>
                <div class="submenu">
                    <ul>
                        <li><a onclick="alert('공사중입니다');"><i class="fa fa-file-code-o" aria-hidden="true"></i><span>금융사별 부가세 설정</span></a></li>
                        <li><a onclick="alert('공사중입니다');"><i class="fa fa-file-code-o" aria-hidden="true"></i><span>계출 공식 설정</span></a></li>
                        <li <%=uri.contains("/system/ledger-excel-list") ? "class='on'" : "" %>><a href="/system/ledger/excel/list"><i class="fa fa-file-excel-o" aria-hidden="true"></i><span>원장 Excel 설정</span></a></li>
                        <li><a onclick="alert('공사중입니다');"><i class="fa fa-file-code-o" aria-hidden="true"></i><span>공통코드</span></a></li>
                    </ul>
                </div>
            </li>
            <% } %>
        </ul>
    </div>
</aside>
