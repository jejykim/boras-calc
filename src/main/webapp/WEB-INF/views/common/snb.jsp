<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true" pageEncoding="UTF-8"%>
<%
	String uri = request.getRequestURI();
%>
<aside>
    <div class="menu">
        <div class="logo">
            <a href="/">
                <img src="/static/assets/images/common/logo.png" alt="logo">
            </a>
            <i class="i-menu"></i>
        </div>
        <ul>
            <li class="mainmenu"><a href="/dashboard"><i class="fa fa-home" aria-hidden="true"></i>Dashboard</a></li>
            <li class="mainmenu">
                <h4>사용자</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/user/") ? "class='on'" : "" %>><a href="/user/list"><i class="fa fa-user-o" aria-hidden="true"></i><span>사용자 목록</span></a></li>
                    </ul>
                </div>
            </li>
            <li class="mainmenu">
                <h4>원장</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/ledger/ledger") ? "class='on'" : "" %>><a href="/ag/ledger/list"><i class="fa fa-file-text-o" aria-hidden="true"></i><span>금융사 원장 목록</span></a></li>
                        <li <%=uri.contains("/ledger-admin/ledger") ? "class='on'" : "" %>><a href="/admin/ledger/list"><i class="fa fa-file-text-o" aria-hidden="true"></i><span>금융사 원장 목록</span></a></li>
                    </ul>
                </div>
            </li>
            <li class="mainmenu">
                <h4>계출</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/contract/contract") ? "class='on'" : "" %>><a href="/contract/list"><i class="fa fa-list-ul" aria-hidden="true"></i><span>계출 목록</span></a></li>
                    </ul>
                </div>
            </li>
            <li class="mainmenu">
                <h4>정산</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/") ? "class='on'" : "" %>><a href="/"><i class="fa fa-television" aria-hidden="true"></i><span>정산 대시보드</span></a></li>
                        <li <%=uri.contains("/") ? "class='on'" : "" %>><a href="/"><i class="fa fa-list-alt" aria-hidden="true"></i><span>정산 목록</span></a></li>
                        <li <%=uri.contains("/") ? "class='on'" : "" %>><a href="/"><i class="fa fa-list-alt" aria-hidden="true"></i><span>정산 목록</span></a></li>
                    </ul>
                </div>
            </li>
            <li class="mainmenu">
                <h4>통계</h4>
                <div class="submenu">
                    <ul>
                        <li><a><i class="fa fa-bar-chart" aria-hidden="true"></i><span>통계</span></a></li>
                    </ul>
                </div>
            </li>
            <li class="mainmenu">
                <h4>시스템</h4>
                <div class="submenu">
                    <ul>
                        <li <%=uri.contains("/system/ledger-excel-list") ? "class='on'" : "" %>><a href="/system/ledger/excel/list"><i class="fa fa-file-excel-o" aria-hidden="true"></i><span>원장 Excel 설정</span></a></li>
                        <li <%=uri.contains("/") ? "class='on'" : "" %>><a href="/"><i class="fa fa-file-code-o" aria-hidden="true"></i><span>공통코드</span></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</aside>
<!-- <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg scrollbar" id="sidebar">
   <div class="container-fluid">
      <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <a class="navbar-brand d-inline-block py-lg-2 mb-lg-5 px-lg-6 me-0" href="/"><img src="/static/assets/images/icon/1024-b.png" class="custom-logo-size" alt="..."></a>
      <div class="navbar-user d-lg-none">
         <div class="dropdown">
            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <div class="avatar-parent-child"><img alt="..." src="/img/people/img-profile.jpg" class="avatar avatar- rounded-circle"> <span class="avatar-child avatar-badge bg-success"></span></div>
            </a>
         </div>
      </div>
      <div class="collapse navbar-collapse" id="sidebarCollapse">
         <ul class="navbar-nav">
         	<li class="nav-item"><a class="nav-link py-2" href="/dashboard"><i class="bi bi-house"></i> Dashboard</a></li>
         </ul>
         <hr class="navbar-divider custom-hr-mg opacity-70">
         <ul class="navbar-nav">
             <li><span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">사용자</span></li>
            <li class="nav-item"><a class="nav-link py-2" href=""><i class="bi bi-people"></i> 사용자 목록</a></li>
         </ul>
         <hr class="navbar-divider custom-hr-mg opacity-70">
         <ul class="navbar-nav">
             <li><span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">원장</span></li>
            <li class="nav-item"><a class="nav-link py-2" href="/ag/ledger/list"><i class="bi bi-list-check"></i> 금융사 원장 목록</a></li>
            <li class="nav-item"><a class="nav-link py-2 d-flex align-items-center" href="/admin/ledger/list"><i class="bi bi-list-check"></i> <span>금융사 원장 목록</span> <span class="badge badge-sm bg-soft-success text-success rounded-pill ms-auto">관리자용</span></a></li>
         </ul>
         <hr class="navbar-divider custom-hr-mg opacity-70">
         <ul class="navbar-nav">
             <li><span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">계출</span></li>
            <li class="nav-item"><a class="nav-link py-2" href=""><i class="bi bi-code-square"></i> 계출 목록</a></li>
         </ul>
         <hr class="navbar-divider custom-hr-mg opacity-70">
         <ul class="navbar-nav">
             <li><span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">정산</span></li>
             <li class="nav-item"><a class="nav-link py-2 d-flex align-items-center" href="/calc/dashboard"><i class="bi bi-display"></i> <span>정산 대시보드</span> <span class="badge badge-sm bg-soft-success text-success rounded-pill ms-auto">관리자용</span></a></li>
            <li class="nav-item"><a class="nav-link py-2" href=""><i class="bi bi-journal-text"></i> 정산 목록</a></li>
            <li class="nav-item"><a class="nav-link py-2 d-flex align-items-center" href=""><i class="bi bi-journal-text"></i> <span>정산 목록</span> <span class="badge badge-sm bg-soft-success text-success rounded-pill ms-auto">관리자용</span></a></li>
         </ul>
         <hr class="navbar-divider custom-hr-mg opacity-70">
         <ul class="navbar-nav">
             <li><span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">통계</span></li>
            <li class="nav-item"><a class="nav-link py-2" href=""><i class="bi bi-bar-chart"></i> 통계</a></li>
         </ul>
         <hr class="navbar-divider custom-hr-mg opacity-70">
         <ul class="navbar-nav">
             <li><span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">시스템</span></li>
            <li class="nav-item"><a class="nav-link py-2" href=""><i class="bi bi-file-earmark-excel"></i> 원장 Excel 설정</a></li>
            <li class="nav-item"><a class="nav-link py-2" href=""><i class="bi bi-code-square"></i> 공통코드</a></li>
         </ul>
         <div class="mt-auto"></div>
      </div>
   </div>
</nav> -->