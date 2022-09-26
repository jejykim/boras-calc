<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!doctype html>
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
	
</head>
<body>
    <div class="wrap">
        <!-- gnb -->
        <jsp:include page="../common/gnb.jsp" />
        <!-- //gnb -->

        <!-- snb -->
        <jsp:include page="../common/snb.jsp" />
        <!-- //snb -->

       <div class="contents">
            <main>
                <div class="wrapper">
                    <div class="main-header">
                        <div class="header-title">
                            <h3>공통코드</h3>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row main-content">
                            <div class="portlet-body dashboard code">
                                <div class="board">
                                    <div class="box confirm">
                                        <div class="portlet-header">
                                            <h5>코드 그룹</h5>
                                            <button class="btn-main btn-head">추가</button>
                                        </div>
                                        <div class="box-body table fix-table">
                                            <table>
                                                <colgroup>
                                                    <col width="37.5%">
                                                    <col width="27.5%">
                                                    <col width="15%">
                                                    <col width="10%">
                                                    <col width="10%">
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>그룹ID</th>
                                                        <th>그룹명</th>
                                                        <th>사용여부</th>
                                                        <th>수정</th>
                                                        <th>삭제</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>financialCorporation</td>
                                                        <td>금융사</td>
                                                        <td>Y</td>
                                                        <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="board">
                                    <div class="box wait">
                                        <div class="portlet-header">
                                            <h5>코드 상세 <br></h5>
                                            <button class="btn-main btn-head">추가</button>
                                        </div>
                                        <span class="code-id">
                                            <i class="badge-id"></i> 코드그룹
                                            <strong>financialCorporation</strong>
                                        </span>
                                        <div class="box-body table fix-table">
                                            <table>
                                                <colgroup>
                                                    <col width="37.5%">
                                                    <col width="27.5%">
                                                    <col width="15%">
                                                    <col width="10%">
                                                    <col width="10%">
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>코드ID</th>
                                                        <th>그룹명</th>
                                                        <th>사용여부</th>
                                                        <th>수정</th>
                                                        <th>삭제</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>financialCorporation</td>
                                                        <td>금융사</td>
                                                        <td>Y</td>
                                                        <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="board">
                                    <div class="box add">
                                        <div class="portlet-header">
                                            <h5>코드 상세 추가</h5>
                                        </div>
                                        <div class="box-body code-add">
                                            <table class="n-hover">
                                                <tr>
                                                    <th>코드그룹</th>
                                                    <td>
                                                        <select>
                                                            <option>코드그룹1</option>
                                                            <option>코드그룹1</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>코드ID</th>
                                                    <td>
                                                        <input type="text" placeholder="코드ID">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>코드명</th>
                                                    <td>
                                                        <input type="text" placeholder="코드명">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>사용여부</th>
                                                    <td>
                                                        <div class="table-radio">
                                                            <ul>
                                                                <li>
                                                                    <input id="radio-1" name="radio" type="radio" checked />
                                                                    <label for="radio-1" class="radio-label">사용</label>
                                                                </li>
                                                                <li>
                                                                    <input id="radio-2" name="radio" type="radio">
                                                                    <label for="radio-2" class="radio-label">미사용</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>비고</th>
                                                    <td>
                                                        <input type="text" placeholder="비고">
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="box-footer">
                                            <button class="btn-line-cancel">취소</button>
                                            <button class="btn-main">저장</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <!--script-->
    <script src='/static/assets/js/common/jquery-3.3.1.min.js'></script>
</body>
</html>