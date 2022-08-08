<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
<html lang="ko" data-theme="dark">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
      <meta name="color-scheme" content="dark light">
      <title>Boras 정산</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
      <link rel="stylesheet" type="text/css" href="/static/assets/css/main.css">
      <link rel="stylesheet" type="text/css" href="/static/assets/css/utilities.css">
      <link rel="stylesheet" type="text/css" href="/static/assets/common/form-check.scss">
      <link rel="stylesheet" type="text/css" href="/static/assets/css/custom.css">

      <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
      <script src='/static/assets/js/common/Chart.min.js'></script>
      <script src='/static/assets/js/common/Chart.bundle.min.js'></script>
      <script src='/static/assets/js/common/tether.min.js'></script>
      <script src='/static/assets/js/common/popper.min.js'></script>
      <script src='/static/assets/js/common/bootstrap.min.js'></script>
      <script src='/static/assets/js/common/lazysizes.min.js'></script>
      
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
                           <h1 class="h2 ls-tight">금융사 원장 목록 <span class="badge badge-sm bg-soft-success text-success rounded-pill ms-auto custom-header-badge">관리자용</span></h1>
                        </div>
                        <div class="col-sm-auto col-12 mt-4 mt-sm-0">
                        	<div class="hstack gap-2 justify-content-sm-end">
                        		<a href="#excelUploadModal" class="btn btn-sm btn-excel border-base" data-bs-toggle="modal">
                        			<span class="pe-2">
                        				<i class="bi bi-file-earmark-excel"></i>
                        			</span><span>원장 엑셀 업로드</span>
                        		</a>
                        		<a href="#ledgerAddModal" class="btn btn-sm btn-primary" data-bs-toggle="offcanvas">
                        			<span class="pe-2">
                        				<i class="bi bi-plus-square-dotted"></i>
									</span>
									<span>원장 추가</span>
								</a>
							</div>
						</div>
                     </div>
                     <div class="custom-mg-bt-15"></div>
                  </div>
               </div>
            </header>
            
            <main class="py-6 bg-surface-secondary">
            	
            	<!-- modal -->
		        <jsp:include page="../common/modal.jsp" />
		        <!-- //modal -->
            
			   <div class="container-fluid">
			      <div class="vstack gap-6">
			         <div class="card custom-card-bottom">
			         	<div class="px-4 py-4 d-flex flex-column flex-sm-row gap-3">
					      <div class="scrollable-x">
					         <div class="btn-group">
					         	<select class="form-select" aria-label="Default select example">
					         		<option value="2022" selected="selected">2022 년</option>
					         		<option value="2023">2023 년</option>
					         		<option value="2024">2024 년</option>
					         		<option value="2025">2025 년</option>
				         		</select>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">1월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">2월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">3월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">4월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">5월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">6월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">7월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-primary">8월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">9월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">10월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">11월</a>
					         </div>
					         <div class="btn-group custom-pd-left">
					         	<a href="" class="btn btn-sm btn-square btn-neutral">12월</a>
					         </div>
					      </div>
					   </div>
			         </div>
			         
			         <div class="card" style="margin-bottom: 60px;">
					   <div class="card-header d-flex align-items-center text-center">
							<table class="table table-hover table-nowrap custom-table-bottom-border">
								<tbody>
									<tr class="text-bold">
										<td class="text-end" style="color: #5c60f5; font-weight: bold;">
											<i class="bi bi-pin me-3"></i>차량가
										</td>
										<td class="text-start">
											10,000,000,000
										</td>
										<td class="text-end" style="color: #5c60f5; font-weight: bold;">
											<i class="bi bi-pin-fill me-3"></i>취득원가
										</td>
										<td class="text-start">
											10,000,000,000
										</td>
										<td class="text-end" style="color: #5c60f5; font-weight: bold;">
											<i class="bi bi-pin me-3"></i>Fee 합계
										</td>
										<td class="text-start">
											10,000,000,000
										</td>
										<td class="text-end" style="color: #5c60f5; font-weight: bold;">
											<i class="bi bi-pin-fill me-3"></i>슬라이딩 합계
										</td>
										<td class="text-start">
											10,000,000,000
										</td>
										<td class="text-end" style="color: #5c60f5; font-weight: bold;">
											<i class="bi bi-pin me-3"></i>추가 Fee 합계
										</td>
										<td class="text-start">
											10,000,000,000
										</td>
									</tr>
								</tbody>
							</table>
					   </div>
					   <div class="px-4 py-4 border-top border-bottom d-flex flex-column flex-sm-row gap-3">
					      <div class="scrollable-x">
					         <div class="btn-group" style="min-width:300px">
					         	<a href="" class="btn btn-sm btn-neutral text-primary" aria-current="page">전체</a>
					         	<a href="" class="btn btn-sm btn-neutral">제출목록 <span class="text-muted text-xs">(5)</span></a>
					         </div>
					      </div>
				         <div class="ms-auto hstack gap-2">
				         	<div>
				         		<span class="badge badge-sm bg-soft-warning text-warning rounded-pill ms-auto">필터 초기화</span>
				         	</div>
				         	<div class="input-group input-group-sm input-group-inline">
				         		<span class="input-group-text pe-2"><i class="bi bi-search"></i> </span>
				         		<input type="email" class="form-control" placeholder="Search" aria-label="Search">
			         		</div>
			         		<div>
			         			<button type="button" class="btn btn-sm px-3 btn-neutral d-flex align-items-center">
				         			<i class="bi bi-funnel me-2"></i>
				         			<span>Filters</span>
				         			<span class="vr opacity-20 mx-3"></span>
				         			<span class="text-xs text-primary">2</span>
			         			</button>
			         		</div>
			         		<div>
			         			<button type="button" class="btn btn-sm px-3 btn-primary d-flex align-items-center text-center" style="width: 110px;">
				         			<i class="bi bi-check2-circle me-2"></i>
				         			<span>승인요청</span>
			         			</button>
			         		</div>
			         	</div>
					   </div>
					   <div class="table-responsive">
					      <table class="table table-hover table-nowrap">
					         <thead class="custom-table-thead">
					            <tr style="text-align: center;">
					               <th scope="col" class="custom-table-th" width="20">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" >
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </th>
					               <th scope="col" class="custom-table-th">
										기타사항
					               	</th>
					               <th scope="col" class="custom-table-th">
										<nav class="navbar custom-navber">
										      <div class="navbar-user" style="width: 100%">
									            <div class="dropdown">
									               <a class="align-items-center" style="color: white;" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
									                  <span>금융사</span> <i class="bi bi-filter-square text-xs"></i>
									               </a>
									               <div class="dropdown-menu dropdown-menu-center">
									                  <div class="dropdown-header" style="width: 48%; display: inline-block;">
									                  	<span class="d-block text-sm text-muted mb-1">금융사</span>
									                  	<div class="dropdown-divider"></div>
									                  	<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋 캐피탈</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">산은 캐피탈</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">신한카드</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋</label>
														</div>
									                  </div>
									                  <div class="dropdown-header" style="width: 48%; display: inline-block;">
									                  	<span class="d-block text-sm text-muted mb-1">금융지점</span>
									                  	<div class="dropdown-divider"></div>
									                  	<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">미래에셋</label>
														</div>
									                  </div>
									               </div>
									            </div>
										   </div>
										</nav>
					               </th>
					               <th scope="col" class="custom-table-th">
										<nav class="navbar custom-navber">
										      <div class="navbar-user" style="width: 100%">
									            <div class="dropdown">
									               <a class="align-items-center" style="color: white;" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
									                  <span>금융상품</span> <i class="bi bi-filter-square text-xs"></i>
									               </a>
									               <div class="dropdown-menu dropdown-menu-center">
									                  <div class="dropdown-header" style="width: 48%; display: inline-block;">
									                  	<span class="d-block text-sm text-muted mb-1">금융상품</span>
									                  	<div class="dropdown-divider"></div>
									                  	<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">렌탈</label>
														</div>
														<div class="form-check">
															<input class="form-check-input" type="checkbox" id="checkApi1">
															<label class="form-check-label" for="checkApi1">리스</label>
														</div>
									                  </div>
									               </div>
									            </div>
										   </div>
										</nav>
									</th>
					               <th scope="col" class="custom-table-th">딜러사</th>
					               <th scope="col" class="custom-table-th">인도일</th>
					               <th scope="col" class="custom-table-th">고객명</th>
					               <th scope="col" class="custom-table-th">차량정보</th>
					               <th scope="col" class="custom-table-th" width="40">금액</th>
					               <th scope="col" class="custom-table-th">문의</th>
					            </tr>
					         </thead>
					         <tbody>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					            <tr class="text-center">
					               <td>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" id="checkApi1" checked="checked">
											<label class="form-check-label" for="checkApi1"></label>
										</div>
					               </td>
					               <td>어쩌구 저쩌구</td>
					               <td>미래에셋 캐피탈<br>강남 지구 어떤 지구</td>
					               <td>리스</td>
					               <td>한성자동차(벤츠)</td>
					               <td>2022.08.03</td>
					               <td>주식회사 보라스 엔터테이먼트</td>
					               <td>벤츠 CLS-1111111<br>000가0000</td>
					               <td class="text-end">
					               	<span class="text-warning ms-auto">차량가 </span>1,000,000,000
					               	<br>
					               	<span class="text-success ms-auto">취득원가 </span>1,000,000,000
					               </td>
					               <td><a class="btn btn-sm btn-square btn-neutral me-1"><i class="bi bi-pencil"></i></a></td>
					            </tr>
					         </tbody>
					      </table>
					   </div>
					</div>
			         
			      </div>
			   </div>
			</main>
			
         </div>
      </div>
   </body>
</html>