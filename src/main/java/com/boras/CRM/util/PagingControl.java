package com.boras.CRM.util;

import com.boras.CRM.vo.PagingVO;

public class PagingControl {
	
	public PagingVO paging(int totalCount, int page, int pagePerRows){
		PagingVO vo = new PagingVO();
		
		vo.setTotalCount(totalCount);
		vo.setNowPage(page);
		vo.setPagePerRows(pagePerRows);
		
		// 전체 페이지 (마지막 페이지)
		vo.setEndPage(totalCount%pagePerRows > 0 ? (totalCount/pagePerRows) + 1 : totalCount/pagePerRows);
		
		// 보여질 첫 페이지
		vo.setFirstPage(vo.getNowPage() > 3 ? vo.getNowPage()-2 : 1);
		
		// 보여질 마지막 페이지
		int tmp = vo.getNowPage() < 3 ? 5 : vo.getNowPage()+2;
		vo.setLastPage(vo.getNowPage()+2 < vo.getEndPage() ? tmp > vo.getEndPage() ? vo.getEndPage() : tmp : vo.getEndPage());
		
		// 이전 페이지
		vo.setPrePage(vo.getNowPage()-1 < 1 ? 1 : vo.getNowPage()-1);
		
		// 다음 페이지
		vo.setNextPage(vo.getNowPage()+1 > vo.getEndPage() ? vo.getEndPage() : vo.getNowPage()+1);
		
		return vo;
	}
	
}