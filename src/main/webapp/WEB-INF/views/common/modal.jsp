<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--modal / 비밀번호 변경-->
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

<!--modal / 문의-->
<div class="contact-modal" id="inquiryModal" style="display: none;">
    <div class="modal-contents">
        <div class="modal-head">
            <h4>문의하기</h4>
            <i class="fa fa-times" aria-hidden="true" id="iCloseInquiryModal"></i>
        </div>
        <div class="modal-body">
            <div class="contact-chat">
                <div class="answer">
                    <div class="nav">
                        <p class="date">2022.09.15-15:44</p>
                        <div class="text">안녕하세요. 문의하기입니다. 도움이 필요한내용을 남겨주시면 빠른시일내에 답변을 드리겠습니다.</div>
                    </div>
                </div>
                <div class="asking">
                    <div class="nav">
                        <p class="date">2022.09.15-15:44</p>
                        <div class="text">안녕하세요. 문의하기입니다. 도움이 필요한내용을 남겨주시면 빠른시일내에 답변을 드리겠습니다.</div>
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <textarea cols="30" rows="10" placeholder="내용입력"></textarea>
                <button>작성</button>
            </div>
        </div>
    </div>
</div>