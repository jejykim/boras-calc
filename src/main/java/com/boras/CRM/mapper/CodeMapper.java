package com.boras.CRM.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.CodeVO;

@Mapper
public interface CodeMapper {
	
	/**
	 * 대분류 코드등록
	 * @param 
	 * @return int
	 */
	public int insertParentCode(CodeVO codeVO);
	
	/**
	 * 소분류 코드등록
	 * @param 
	 * @return int
	 */
	public int insertCode(CodeVO codeVO);
	
	/**
	 * 대분류 코드조회
	 * @param 
	 * @return List<CodeVO>
	 */
	public List<CodeVO> selectParentCodeList();
	
	/**
	 * 소분류 코드조회
	 * @param 
	 * @return List<CodeVO>
	 */
	public List<CodeVO> selectCodeList(CodeVO codeVO);
	
	/**
	 * 코드 수정
	 * @param 
	 * @return int
	 */
	public int updateCode(CodeVO codeVO);

}
