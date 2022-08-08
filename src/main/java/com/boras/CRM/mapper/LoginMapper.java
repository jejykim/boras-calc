package com.boras.CRM.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.UserVO;

@Mapper
public interface LoginMapper {

	/**
	 * 로그인
	 * @param 
	 * @return int
	 */
	public int login(UserVO userVO);
	
	/**
	 * 최근 로그인 기록
	 * @param 
	 * @return int
	 */
	public int loginDateUpdate(UserVO userVO);
	
	/**
	 * 사용자 고유키(Salt) 조회
	 * @param 
	 * @return String
	 */
	public String selectUserSalt(UserVO userVO);
}
