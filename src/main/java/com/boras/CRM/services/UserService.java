package com.boras.CRM.services;

import java.util.List;

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
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int checkUserId(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public UserVO selectUserInfo(UserVO userVO) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserVO> selectUserList(UserVO userVO) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int selectUserListCount(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertUser(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateUser(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateUserUseN(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<UserVO> selectEmailList(UserVO userVO) {
		// TODO Auto-generated method stub
		return null;
	}
}
