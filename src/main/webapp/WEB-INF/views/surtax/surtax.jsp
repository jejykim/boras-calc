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
	
	<script src='/static/assets/js/surtax/surtax.js'></script>
	<script type="text/javascript">
		Surtax.SurtaxSeq=${list[0].surtaxSupportByFinancialSeq};
	</script>
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
                            <h3>부가세 지원여부 설정</h3>
                        </div>
                    </div>
                    <div class="main-body">
                        <div class="row main-content">
                            <div class="portlet-body dashboard code w-50">
                                <div class="board">
                                    <div class="box wait">
                                        <div class="portlet-header">
                                            <h5>금융사 목록 <br></h5>
                                            <button class="btn-main btn-head" id="btnAdd">추가</button>
                                        </div>
                                        <div class="box-body table fix-table">
                                            <table>
                                                <colgroup>
                                                    <col width="50%">
                                                    <col width="30%">
                                                    <col width="20%">
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>금융사</th>
                                                        <th>금융상품</th>
                                                        <th>사용여부</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <c:forEach var="list" items="${list }" varStatus="status">
	                                                    <tr class="<c:if test='${status.count eq 1 }'>on</c:if>" onclick="Surtax.selectSurtaxInfo('${list.surtaxSupportByFinancialSeq}',this)">
	                                                        <td>${list.surtaxSupportByFinancialCompanyCdName }</td>
	                                                        <td>${list.surtaxSupportByFinancialProductCdName }</td>
	                                                        <td>${list.surtaxSupportByFinancialUseYn }</td>
	                                                    </tr>
	                                                </c:forEach>
	                                                <c:if test="${listCount eq 0 }">
	                                                    <tr>
	                                                        <td colspan="12">조회된 데이터가 없습니다</td>
	                                                    </tr>
	                                                </c:if>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="board">
                                    <div class="box add">
                                        <div class="portlet-header">
                                        	<c:if test="${listCount ne 0 }">
                                            	<h5 class="changeHead">부가세 지원여부 수정</h5>
                                            </c:if>
                                            <c:if test="${listCount eq 0 }">
                                            	<h5 class="changeHead">부가세 지원여부 추가</h5>
                                            </c:if>
                                        </div>
                                        <div class="box-body code-add">
                                            <table class="n-hover">
                                                <tr>
                                                    <th>금융사</th>
                                                    <td id="tdCompanyInput" <c:if test="${listCount eq 0 }">style="display: none"</c:if>>
	                                                   <input id="txtSurtaxSupportByFinancialCompanyCdName" type="text" placeholder="금융사명" value="${surtaxSupportByFinancialVO.surtaxSupportByFinancialCompanyCdName }" disabled="disabled">
	                                                   <input id="txtSurtaxSupportByFinancialCompanyCd" type="hidden" value="${surtaxSupportByFinancialVO.surtaxSupportByFinancialCompanyCd }">
	                                                </td>
	                                                <td id="tdCompanySelect" <c:if test="${listCount ne 0 }">style="display: none"</c:if>>
	                                                   <select>
                                                            <option value="0"  disabled="disabled" selected="selected" >금융사를 선택해주세요</option>
				                                            <c:forEach var="list" items="${financialList }" varStatus="status">
				                                                <option value="${list.codeId }" <c:if test="${list.codeId eq surtaxSupportByFinancialVO.surtaxSupportByFinancialCompanyCd }">selected="selected"</c:if>>${list.codeName }</option>
				                                            </c:forEach>
                                                        </select>
	                                                </td>
                                                </tr>
                                                <tr>
                                                    <th>금융상품</th>
                                                   	<td id="tdProductInput" <c:if test="${listCount eq 0 }">style="display: none"</c:if>>
	                                                   <input id="txtSurtaxSupportByFinancialProductCdName" type="text" placeholder="금융상품" value="${surtaxSupportByFinancialVO.surtaxSupportByFinancialProductCdName }" disabled="disabled">
	                                                   <input id="txtSurtaxSupportByFinancialProductCd" type="hidden" value="${surtaxSupportByFinancialVO.surtaxSupportByFinancialProductCd }">
                                                    </td>
                                              		<td id="tdProductSelect" <c:if test="${listCount ne 0 }">style="display: none"</c:if>>
                                                  		<select>
                                                        	<option value="0" disabled="disabled" selected="selected">금융상품을 선택해주세요</option>
		                                            		<c:forEach var="list" items="${financialProductList }" varStatus="status">
		                                                		<option value="${list.codeId }" <c:if test="${list.codeId eq surtaxSupportByFinancialVO.surtaxSupportByFinancialProductCd }">selected="selected"</c:if>>${list.codeName }</option>
		                                            		</c:forEach>
                                                      	</select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>AGfee 부가세 지원여부</th>
                                                    <td>
                                                        <div class="table-radio">
                                                            <ul>
                                                                <li>
                                                                	<input id="radio-1" name="radio" type="radio" value="Y" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialAgFeeSurtaxSupportYn eq 'Y'}">checked</c:if> />
                                                                    <label for="radio-1" class="radio-label">지원</label>
                                                                </li>
                                                                <li>
                                                                    <input id="radio-2" name="radio" type="radio" value="N" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialAgFeeSurtaxSupportYn eq 'N'}">checked</c:if> />
                                                                    <label for="radio-2" class="radio-label">미지원</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>슬라이딩 부가세 지원여부</th>
                                                    <td>
                                                        <div class="table-radio">
                                                            <ul>
                                                                <li>
                                                                	<input id="radio-3" name="radio2" type="radio" value="Y" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialSlidingSurtaxSupportYn eq 'Y'}">checked</c:if> />
                                                                    <label for="radio-3" class="radio-label">지원</label>
                                                                </li>
                                                                <li>
                                                                    <input id="radio-4" name="radio2" type="radio" value="N" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialSlidingSurtaxSupportYn eq 'N'}">checked</c:if> />
                                                                    <label for="radio-4" class="radio-label">미지원</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>추가fee 부가세 지원여부</th>
                                                    <td>
                                                        <div class="table-radio">
                                                            <ul>
                                                                <li>
                                                                	<input id="radio-5" name="radio3" type="radio" value="Y" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialAddFeeSurtaxSupportYn eq 'Y'}">checked</c:if> />
                                                                    <label for="radio-5" class="radio-label">지원</label>
                                                                </li>
                                                                <li>
                                                                    <input id="radio-6" name="radio3" type="radio" value="N" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialAddFeeSurtaxSupportYn eq 'N'}">checked</c:if> />
                                                                    <label for="radio-6" class="radio-label">미지원</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>사용여부</th>
                                                    <td>
                                                        <div class="table-radio">
                                                            <ul>
                                                                <li>
                                                                    <input id="radio-7" name="radio4" type="radio" value="Y" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialUseYn eq 'Y'}">checked</c:if> />
                                                                    <label for="radio-7" class="radio-label">사용</label>
                                                                </li>
                                                                <li>
                                                                    <input id="radio-8" name="radio4" type="radio" value="N" <c:if test="${surtaxSupportByFinancialVO.surtaxSupportByFinancialUseYn eq 'N'}">checked</c:if> />
                                                                    <label for="radio-8" class="radio-label">미사용</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="box-footer">
                                            <button class="btn-line-cancel">취소</button>
                                            <button class="btn-main" id="btnInsert" <c:if test="${listCount ne 0 }">style="display: none"</c:if>>추가</button>
                                            <button class="btn-main" id="btnUpdate" <c:if test="${listCount eq 0 }">style="display: none"</c:if>>수정</button>
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