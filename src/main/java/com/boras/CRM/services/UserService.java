package com.boras.CRM.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.UserMapper;
import com.boras.CRM.vo.UserVO;

@Service
public class UserService implements UserMapper {

	@Autowired
	UserMapper userMapper;

	@Override
	public int changeUserPw(UserVO userVO) {
		return userMapper.changeUserPw(userVO);
	}

	@Override
	public int checkUserId(UserVO userVO) {
		return userMapper.checkUserId(userVO);
	}

	@Override
	public UserVO selectUserInfo(UserVO userVO) {
		return userMapper.selectUserInfo(userVO);
	}

	@Override
	public List<UserVO> selectUserList(UserVO userVO) {
		return userMapper.selectUserList(userVO);
	}

	@Override
	public int selectUserListCount(UserVO userVO) {
		return userMapper.selectUserListCount(userVO);
	}

	@Override
	public int insertUser(UserVO userVO) {
		return userMapper.insertUser(userVO);
	}

	@Override
	public int updateUser(UserVO userVO) {
		return userMapper.updateUser(userVO);
	}

	@Override
	public int updateUserUseN(UserVO userVO) {
		return userMapper.updateUserUseN(userVO);
	}

	@Override
	public List<UserVO> selectUserListNew() {
		return userMapper.selectUserListNew();
	}

	@Override
	public List<Map<String, Object>> selectUserAgNewAdminCount() {
		return userMapper.selectUserAgNewAdminCount();
	}
	
	@Override
	public List<UserVO> selectUserListAg(UserVO userVO) {
		return userMapper.selectUserListAg(userVO);
	}

	@Override
	public UserVO selectUserInfoForImsiPw(UserVO userVO) {
		return userMapper.selectUserInfoForImsiPw(userVO);
	}
}
