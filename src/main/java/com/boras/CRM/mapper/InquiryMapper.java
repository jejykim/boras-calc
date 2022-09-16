package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.InquiryVO;

@Mapper
public interface InquiryMapper {
	
	/**
	 * 문의 등록
	 * @param 
	 * @return int
	 */
	public int insertInquiryByTo(InquiryVO inquiryVO);
	
	/**
	 * 문의 답변
	 * @param 
	 * @return int
	 */
	public int insertInquiryByFrom(InquiryVO inquiryVO);
	
	/**
	 * 원장번호기준 문의 목록 조회
	 * @param 
	 * @return List<InquiryVO>
	 */
	public List<InquiryVO> selectInquiryListForLedger(InquiryVO inquiryVO);
	
	/**
	 * 사용자기준 문의 목록 조회
	 * @param 
	 * @return List<InquiryVO>
	 */
	public List<InquiryVO> selectInquiryListForUser(InquiryVO inquiryVO);
	
	/**
	 * AG용 문의 목록 조회
	 * @param 
	 * @return List<InquiryVO>
	 */
	public List<InquiryVO> selectInquiryListForAg(InquiryVO inquiryVO);
	
	/**
	 * AG용 문의 목록 count 조회
	 * @param 
	 * @return int
	 */
	public int selectInquiryListForAgCount(InquiryVO inquiryVO);
	
	/**
	 * 문의 상세
	 * @param 
	 * @return List<InquiryVO>
	 */
	public InquiryVO selectInquiryInfo(InquiryVO inquiryVO);
	
	/**
	 * 문의 수정
	 * @param 
	 * @return int
	 */
	public int updateInquiry(InquiryVO inquiryVO);
	
	/**
	 * 문의 삭제
	 * @param 
	 * @return int
	 */
	public int deleteInquiry(InquiryVO inquiryVO);

	/**
	 * 초기 문의 내역 세팅용
	 * @param 
	 * @return List<InquiryVO>
	 */
	public List<InquiryVO> selectAllInquiryList();
}
