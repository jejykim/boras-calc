<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--modal / 딜러사선택-->
<div class="modal hide" id="changePwModal">
    <div class="modal-contents sm">
        <div class="modal-head">
            <h4>비밀번호 변경</h4>
        </div>
        <div class="modal-body">
            <div class="modal-form">
                <div>
                    <div class="from-title">
                        <h6><span style="color: red;">*</span> 현재 비밀번호</h6>
                    </div>
                    <input type="password" id="textNowPw">
                </div>
            </div>
            <div class="modal-form">
                <div>
                    <div class="from-title">
                        <h6><span style="color: red;">*</span> 새 비밀번호</h6>
                    </div>
                    <input type="password" id="textNewPw">
                </div>
            </div>
            <div class="modal-form">
                <div>
                    <div class="from-title">
                        <h6><span style="color: red;">*</span> 새 비밀번호 확인</h6>
                    </div>
                    <input type="password" id="textNewPwCheck">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="modal-btn">
                <button class="btn-bu" id="btnChangePw">완료</button>
                <button class="btn-line-cancel" id="btnCancelChangePw">취소</button>
            </div>
        </div>
    </div>
</div>
<!--end::modal-->
