<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- 생성 모달 -->
<div class="offcanvas offcanvas-end w-full w-lg-1/3" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="ledgerAddModal" aria-labelledby="offcanvasCreateLabel" style="visibility: hidden;" aria-hidden="true">
   <div class="offcanvas-header border-bottom py-5 bg-surface-secondary">
      <h5 class="offcanvas-title" id="offcanvasCreateLabel">원장 추가<small class="d-block text-xs text-muted">원장 추가 시 목록이 새로고침 됩니다.</small></h5>
      <button type="button" class="btn-close text-reset text-xs" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div class="offcanvas-body">
      <div class="vstack gap-8">
      	<div class="btn-group">
			<select class="form-select">
        		<option value="" selected="selected">금융사</option>
        		<option value="">미래에셋</option>
        		<option value="">삼성카드</option>
        		<option value="">산은 캐피탈</option>
       		</select>
       		<div class="custom-pd-left"></div>
			<select class="form-select">
        		<option value="" selected="selected">금융상품</option>
        		<option value="">렌탈</option>
        		<option value="">리스</option>
       		</select>
       		<div class="custom-pd-left"></div>
			<select class="form-select">
        		<option value="" selected="selected">금융지점</option>
        		<option value="">미래에셋</option>
        		<option value="">삼성카드</option>
        		<option value="">산은 캐피탈</option>
       		</select>
        </div>
        <div class="btn-group" style="width: 100%">
			<div>
				<label class="form-label">고객명</label>
				<input type="text" class="form-control" id="">
			</div>
       		<div class="custom-pd-left"></div>
			<div>
				<label class="form-label">인도일</label>
				<input type="text" class="form-control" id="">
			</div>
        </div>
      
         <div class="border rounded">
            <div>
               <div class="textarea-autosize"><textarea class="form-control border-0 shadow-none p-4" rows="3" placeholder="Enter description" oninput="this.parentNode.dataset.replicatedValue = this.value"></textarea></div>
               <div class="d-flex align-items-center px-6 py-3 border-top">
                  <div class="flex-fill d-flex align-items-center">
                     <h6 class="font-semibold text-xs text-muted text-opacity-60">Markdown formatting</h6>
                  </div>
                  <div class="text-end">
                     <div class="hstack gap-5 align-items-center"><a href="#!" class="text-lg text-muted text-primary-hover"><i class="bi bi-images"></i> </a><a href="#!" class="text-lg text-muted text-primary-hover"><i class="bi bi-emoji-smile"></i> </a><a href="#!" class="text-lg text-muted text-primary-hover"><i class="bi bi-paperclip"></i></a></div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <h6 class="mb-4">Subtasks</h6>
            <div class="vstack gap-3">
               <div>
                  <div class="form-check form-check-linethrough"><input class="form-check-input w-5 h-5 mt-0 rounded-circle border-dashed flex-none" type="checkbox" checked="checked"> <a href="#offcanvas-show-task" class="form-check-label font-regular ms-2" data-bs-toggle="offcanvas">Keep my mentality healthy by taking walks outside</a></div>
               </div>
               <div>
                  <div class="form-check form-check-linethrough"><input class="form-check-input w-5 h-5 mt-0 rounded-circle border-dashed flex-none" type="checkbox"> <a href="#offcanvas-show-task" class="form-check-label font-regular ms-2" data-bs-toggle="offcanvas">Build some new components in Figma</a></div>
               </div>
               <div>
                  <div class="form-check form-check-linethrough"><input class="form-check-input w-5 h-5 mt-0 rounded-circle border-dashed flex-none" type="checkbox"> <a href="#offcanvas-show-task" class="form-check-label font-regular ms-2" data-bs-toggle="offcanvas">Figure out how to use Clever from the help center!</a></div>
               </div>
               <div>
                  <div class="form-check form-check-linethrough"><input class="form-check-input w-5 h-5 mt-0 rounded-circle border-dashed flex-none" type="checkbox"> <a href="#offcanvas-show-task" class="form-check-label font-regular ms-2" data-bs-toggle="offcanvas">Create wireframes for the new dashboard</a></div>
               </div>
            </div>
            <div>
               <input type="text" class="form-control form-control-sm mt-4 mb-3" placeholder="Add another subtask">
               <div class="d-flex gap-3"><button type="button" class="btn btn-link p-0 text-muted text-danger-hover text-sm font-semibold">Cancel</button> <button type="button" class="btn btn-link p-0 link-success text-sm font-semibold">Save task</button></div>
            </div>
         </div>
         <hr class="m-0">
         <div>
            <h6 class="mb-3">Attachments</h6>
            <div>
               <div class="rounded border-2 border-dashed border-primary-hover position-relative">
                  <div class="d-flex justify-content-center px-5 py-5">
                     <label for="file_upload" class="position-absolute w-full h-full top-0 start-0 cursor-pointer"><input id="file_upload" name="file_upload" type="file" class="visually-hidden"></label>
                     <div class="text-center">
                        <div class="text-2xl text-muted"><i class="bi bi-upload"></i></div>
                        <div class="d-flex text-sm mt-3">
                           <p class="font-semibold">Upload a file or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
                     </div>
                  </div>
               </div>
               <div class="list-group list-group-flush mt-2">
                  <div class="list-group-item py-3 d-flex align-items-center">
                     <div class="flex-fill"><span class="d-block h6 text-sm font-semibold mb-1">task-img-1.png</span><span class="d-block text-xs text-muted">350 kb</span></div>
                     <div class="ms-auto">
                        <div class="dropdown">
                           <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
                           <div class="dropdown-menu"><a href="#!" class="dropdown-item">Action </a><a href="#!" class="dropdown-item">Another action </a><a href="#!" class="dropdown-item">Something else here</a></div>
                        </div>
                     </div>
                  </div>
                  <div class="list-group-item py-3 d-flex align-items-center">
                     <div class="flex-fill"><span class="d-block h6 text-sm font-semibold mb-1">task-img-1.png</span><span class="d-block text-xs text-muted">350 kb</span></div>
                     <div class="ms-auto">
                        <div class="dropdown">
                           <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
                           <div class="dropdown-menu"><a href="#!" class="dropdown-item">Action </a><a href="#!" class="dropdown-item">Another action </a><a href="#!" class="dropdown-item">Something else here</a></div>
                        </div>
                     </div>
                  </div>
                  <div class="list-group-item py-3 d-flex align-items-center">
                     <div class="flex-fill"><span class="d-block h6 text-sm font-semibold mb-1">task-img-1.png</span><span class="d-block text-xs text-muted">350 kb</span></div>
                     <div class="ms-auto">
                        <div class="dropdown">
                           <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
                           <div class="dropdown-menu"><a href="#!" class="dropdown-item">Action </a><a href="#!" class="dropdown-item">Another action </a><a href="#!" class="dropdown-item">Something else here</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="modal-footer py-2 bg-surface-secondary"><button type="button" class="btn btn-sm btn-neutral" data-bs-dismiss="offcanvas">Close</button> <button type="button" class="btn btn-sm btn-primary">Save</button></div>
</div>
<!-- //생성모달 -->
      	
<!-- 엑셀 업로드 모달 -->
<div class="modal fade" id="excelUploadModal" tabindex="-1" aria-labelledby="modalExport" style="display: none;" aria-hidden="true">
 <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content shadow-3">
       <div class="modal-header">
          <div class="icon icon-shape rounded-3 bg-soft-success text-success text-lg me-4"><i class="bi bi-file-earmark-excel"></i></div>
          <div style="width: 100%">
               <h5 class="mb-1">원장 엑셀 업로드</h5>
               <small class="d-block text-xs text-muted">금융사, 금융상품, 금융지점을 선택하여 원장을 업로드 해주세요!</small>
            </div>
         </div>
         <div class="modal-body">
            <div class="d-flex align-items-center mb-5">
               <div class="btn-group">
					<select class="form-select" style="width: 150px;">
		         		<option value="" selected="selected">금융사</option>
		         		<option value="">미래에셋</option>
		         		<option value="">삼성카드</option>
		         		<option value="">산은 캐피탈</option>
	         		</select>
		         </div>
		         <div class="btn-group custom-pd-left" style="width: 120px;">
					<select class="form-select">
		         		<option value="" selected="selected">상품</option>
		         		<option value="">렌탈</option>
		         		<option value="">리스</option>
	         		</select>
		         </div>
		         <div class="btn-group custom-pd-left" style="width: 180px;">
					<select class="form-select">
		         		<option value="" selected="selected">금융지점</option>
		         		<option value="">렌트-올카(대전)</option>
		         		<option value="">렌트-올카(마포)</option>
		         		<option value="">수입리스-올카(마포)</option>
	         		</select>
		         </div>
            </div>
            <div>
               <div class="rounded border-2 border-dashed border-primary-hover position-relative">
                  <div class="d-flex justify-content-center px-5 py-5">
                     <label for="ledgerExcelFile" class="position-absolute w-full h-full top-0 start-0 cursor-pointer"><input id="ledgerExcelFile" name="file_upload" type="file" class="visually-hidden"></label>
                     <div class="text-center">
                        <div class="text-2xl text-muted"><i class="bi bi-upload"></i></div>
                        <div class="d-flex text-sm mt-3">
                           <p class="font-semibold">드래그 앤 드랍 아직 미구현</p>
                           <!-- <p class="font-semibold">Upload a file or drag and drop</p> -->
                        </div>
                        <p class="text-xs text-gray-500">XLSX up to 10MB</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-neutral" data-bs-dismiss="modal">닫기</button> <button type="button" class="btn btn-sm btn-success">업로드</button>
         </div>
      </div>
   </div>
</div>
<!-- //엑셀 업로드 모달 -->