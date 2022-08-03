<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<nav class="navbar navbar-light position-lg-sticky top-lg-0 d-none d-lg-block overlap-10 flex-none bg-white border-bottom px-0 py-3" id="topbar">
   <div class="container-fluid">
      <div class="hstack gap-2"></div>

      <div class="navbar-user d-none d-sm-block">
         <div class="hstack gap-3 ms-4">
            <div class="dropdown">
               <a class="d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                  <div class="d-none d-sm-block ms-3"><span class="h6">{사용자 이름}</span></div>
                  <div class="d-none d-md-block ms-md-2"><i class="bi bi-chevron-down text-muted text-xs"></i></div>
               </a>
               <div class="dropdown-menu dropdown-menu-end">
                  <div class="dropdown-header">
                    <span class="d-block text-sm text-muted mb-1">로그인 계정</span>
                    <span class="d-block text-heading font-semibold">{계정 아이디}</span>
                    <span class="d-block text-heading font-semibold">{IP 주소}</span>
                  </div>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="bi bi-house me-3"></i>Dashboard </a><a class="dropdown-item" href="#"><i class="bi bi-person me-3"></i>마이 페이지</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="bi bi-chat-right-dots me-3"></i>문의 내역</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-3"></i>로그아웃</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</nav>