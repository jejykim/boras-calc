package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.InquiryMapper;
import com.boras.CRM.vo.InquiryVO;


@Service
public class InquiryService implements InquiryMapper {

	@Autowired
	InquiryMapper inquiryMapper;

	@Override
	public int insertInquiryByTo(InquiryVO inquiryVO) {
		return inquiryMapper.insertInquiryByTo(inquiryVO);
	}

	@Override
	public int insertInquiryByFrom(InquiryVO inquiryVO) {
		return inquiryMapper.insertInquiryByFrom(inquiryVO);
	}

	@Override
	public List<InquiryVO> selectInquiryListForLedger(InquiryVO inquiryVO) {
		return inquiryMapper.selectInquiryListForLedger(inquiryVO);
	}

	@Override
	public List<InquiryVO> selectInquiryListForUser(InquiryVO inquiryVO) {
		return inquiryMapper.selectInquiryListForUser(inquiryVO);
	}

	@Override
	public InquiryVO selectInquiryInfo(InquiryVO inquiryVO) {
		return inquiryMapper.selectInquiryInfo(inquiryVO);
	}

	@Override
	public int updateInquiry(InquiryVO inquiryVO) {
		return inquiryMapper.updateInquiry(inquiryVO);
	}

	@Override
	public int deleteInquiry(InquiryVO inquiryVO) {
		return inquiryMapper.deleteInquiry(inquiryVO);
	}
	
	
}
