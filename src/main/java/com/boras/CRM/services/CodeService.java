package com.boras.CRM.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.CodeMapper;
import com.boras.CRM.vo.CodeVO;

@Service
public class CodeService implements CodeMapper {

	@Autowired
	CodeMapper codeMapper;
	
	@Override
	public int insertParentCode(CodeVO codeVO) {
		return codeMapper.insertParentCode(codeVO);
	}

	@Override
	public int insertCode(CodeVO codeVO) {
		return codeMapper.insertCode(codeVO);
	}

	@Override
	public List<CodeVO> selectParentCodeList() {
		return codeMapper.selectParentCodeList();
	}

	@Override
	public List<CodeVO> selectCodeList(CodeVO codeVO) {
		return codeMapper.selectCodeList(codeVO);
	}

	@Override
	public int updateCode(CodeVO codeVO) {
		return codeMapper.updateCode(codeVO);
	}

	
}
