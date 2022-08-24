<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--modal / 딜러사선택-->
<div class="modal hide">
    <div class="modal-contents sm">
        <div class="modal-head">
            <h4>딜러사 선택</h4>
        </div>
        <div class="modal-body">
            <div class="modal-form">
                <div>
                    <div class="from-title">
                        <h6>딜러브랜드</h6>
                    </div>
                    <select>
                        <option>딜러브랜드</option>
                        <option>딜러브랜드</option>
                        <option>딜러브랜드</option>
                    </select>
                </div>
            </div>
            <div class="modal-form">
                <div>
                    <div class="from-title">
                        <h6>달러사</h6>
                    </div>
                    <select>
                        <option>달러사</option>
                        <option>달러사</option>
                        <option>달러사</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="modal-btn">
                <button class="btn-bu">완료</button>
                <button class="btn-line-cancel">취소</button>
            </div>
        </div>
    </div>
</div>
<!--end::modal-->
<!--modal / 기타사항추가-->
<div class="modal hide">
    <div class="modal-contents sm">
        <div class="modal-head">
            <h4>기타사항 추가</h4>
        </div>
        <div class="modal-body">
            <div class="modal-form">
                <textarea cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <div class="modal-btn">
                <button class="btn-bu">완료</button>
                <button class="btn-line-cancel">취소</button>
            </div>
        </div>
    </div>
</div>
<!--end::modal-->
<!--modal / AG사선택-->
<div class="modal hide">
    <div class="modal-contents sm">
        <div class="modal-head">
            <h4>AG사 선택</h4>
        </div>
        <div class="modal-body">
            <div class="modal-form">
                <div>
                    <div class="from-title">
                        <h6>AG사</h6>
                    </div>
                    <select>
                        <option>A AG사</option>
                        <option>B AG사</option>
                        <option>C AG사</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="modal-btn">
                <button class="btn-bu">완료</button>
                <button class="btn-line-cancel">취소</button>
            </div>
        </div>
    </div>
</div>
<!--end::modal-->
<!--modal / 사용자추가-->
<div class="modal hide">
    <div class="modal-contents sm">
        <div class="modal-head">
            <h4>사용자추가</h4>
        </div>
        <div class="modal-body">
            <div class="modal-form input-sh">
                <div>
                    <div class="from-title">
                        <h6>ID</h6>
                    </div>
                    <input type="text" placeholder="id를 입력해주세요">
                </div>
                <div>
                    <div class="from-title">
                        <h6>사용자명</h6>
                    </div>
                    <input type="text" placeholder="사용자명을 입력해주세요">
                </div>
            </div>
            <div class="form-guide">
                <span class="font-red"><i class="fa fa-info-circle" aria-hidden="true"></i>초기 비밀번호를 boras 1234! 입니다.</span>
            </div>
        </div>
        <div class="modal-footer">
            <div class="modal-btn">
                <button class="btn-bu">완료</button>
                <button class="btn-line-cancel">취소</button>
            </div>
        </div>
    </div>
</div>
<!--end::modal-->