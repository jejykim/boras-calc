package com.boras.CRM.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.boras.CRM.vo.UserVO;

@Mapper
public interface UserMapper {
	
	/**
	 * 비밀번호 변경
	 * @param 
	 * @return int
	 */
	public int changeUserPw(UserVO userVO);
	
	/**
	 * ID 중복 확인
	 * @param 
	 * @return int
	 */
	public int checkUserId(UserVO userVO);
	
	/**
	 * 사용자 정보 조회
	 * @param 
	 * @return int
	 */
	public UserVO selectUserInfo(UserVO userVO);
	
	/**
	 * 사용자 목록 조회
	 * @param 
	 * @return List<UserVO>
	 */
	public List<UserVO> selectUserList(UserVO userVO);
	
	/**
	 * 사용자 목록 조회 count
	 * @param 
	 * @return int
	 */
	public int selectUserListCount(UserVO userVO);
	
	/**
	 * 사용자 추가
	 * @param 
	 * @return int
	 */
	public int insertUser(UserVO userVO);
	
	/**
	 * 사용자 수정
	 * @param 
	 * @return int
	 */
	public int updateUser(UserVO userVO);
	
	/**
	 * 사용자 삭제
	 * @param 
	 * @return int
	 */
	public int updateUserUseN(UserVO userVO);
	
	/**
	 * 신규 사용자 목록 조회
	 * @param 
	 * @return List<UserVO>
	 */
	public List<UserVO> selectUserListNew();
	
	/**
	 * 사용자별 계정 수
	 * @param 
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> selectUserAgNewAdminCount();
	
	/**
	 * AG 사 목록 조회
	 * @param 
	 * @return List<UserVO>
	 */
	public List<UserVO> selectUserListAg(UserVO userVO);

	/**
	 * 아이디 이메일 검증
	 * @param 
	 * @return int
	 */
	public UserVO selectUserInfoForImsiPw(UserVO userVO);
}
