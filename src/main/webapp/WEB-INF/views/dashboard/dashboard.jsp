<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="ko" data-theme="dark">
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
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
         
		<!-- snb -->
        <jsp:include page="../common/snb.jsp" />
        <!-- //snb -->

         <div class="flex-lg-1 h-screen overflow-y-lg-auto">

			<!-- gnb -->
			<jsp:include page="../common/gnb.jsp" />
			<!-- //gnb -->

            <header>
               <div class="container-fluid">
                  <div class="border-bottom pt-6">
                     <div class="row align-items-center">
                        <div class="col-sm col-12">
                           <h1 class="h2 ls-tight">Dashboard</h1>
                        </div>
                     </div>
                     <ul class="nav nav-tabs overflow-x border-0">
                        <li class="nav-item"><a href="" class="nav-link active">전체</a></li>
                        <li class="nav-item"><a href="" class="nav-link"><span class="text-warning me-2">●</span>확인필요</a></li>
                        <li class="nav-item"><a href="" class="nav-link"><span class="text-danger me-2">●</span>입출금예정</a></li>
                        <li class="nav-item"><a href="" class="nav-link"><span class="text-success me-2">●</span>정산완료</a></li>
                     </ul>
                  </div>
               </div>
            </header>
            
            <main class="py-6 bg-surface-secondary">
			   <div class="container-fluid">
			      <div class="vstack gap-6">
			         <div class="d-flex flex-column flex-md-row gap-3 justify-content-between">
			            <div class="d-flex gap-3">
			               <div class="input-group input-group-sm input-group-inline">
								<span class="input-group-text pe-2"><i class="bi bi-search"></i> </span>
								<input type="text" class="form-control" placeholder="Search" aria-label="Search">
			               </div>
			            </div>
			         </div>
			         <div class="row g-6">
			         
			         <c:forEach var="list" items="${list }">
			            <div class="col-xl-4 col-sm-6">
			               <div class="card">
			                  <div class="card-header border-0">
			                     <div class="d-flex justify-content-between align-items-center">
			                        <div><span class="h6 custom-card-font-size font-bold"><span class="text-warning me-2">●</span> 산은 캐피탈 - ${list.name }</span></div>
			                        <div class="text-end mx-n2 d-flex align-items-center">
			                        	<div>
			                        		<span class="h6 text-sm font-bold"><span class="badge text-uppercase bg-soft-primary text-primary rounded-pill">총 합계</span> ￦ 71,689,090</span>
			                        	</div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="card-body row g-5">
								   <div class="col-md-6">
								   	 <div class="card custom-bg-gray border-0 shadow-none ml-md-4">
								         <div class="card-body custom-card-block">
								            <div class="text-black font-bold text-sm">계산서 발급</div>
								            <div class="text-sm text-black">￦ 71,689,090</div>
								         </div>
								      </div>
								   </div>
								   <div class="col-md-6">
								   	  <div class="card custom-bg-gray border-0 shadow-none ml-md-4">
								         <div class="card-body custom-card-block">
								            <div class="text-black font-bold text-sm">개인 지급</div>
								            <div class="text-sm text-black">￦ 71,689,090</div>
								         </div>
								      </div>
								   </div>
								   <div class="col-md-6">
										<div class="card-body custom-card-block">
								            <span class="text-black text-sm">추가 금액1</span>
								            <span class="text-sm text-black">￦ 71,689,090</span>
								         </div>
									</div>
									<div class="col-md-6">
										<div class="card-body custom-card-block">
								            <span class="text-black text-sm">추가 금액2</span>
								            <span class="text-sm text-black">￦ 71,689,090</span>
								         </div>
									</div>
								</div>
								<hr class="custom-mg-none">
			                  <div class="card-body text-center">
			                     <div class="d-flex justify-content-between px-4">
			                     	<a href="#" class="px-2 text-muted text-primary-hover">
			                     		<i class="bi bi-journal-text"></i> 정산 목록
			                     	</a>
			                     	<a href="#" class="px-2 text-muted text-primary-hover">
			                     		<i class="bi bi-box-arrow-in-right"></i> 상세보기
			                     	</a>
			                     </div>
			                  </div>
			               </div>
			            </div>
		            </c:forEach>
			            
			         </div>
			      </div>
			   </div>
			</main>
			
         </div>
      </div>
      
   </body>
   
</html>