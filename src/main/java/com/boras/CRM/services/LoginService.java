package com.boras.CRM.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.LoginMapper;
import com.boras.CRM.vo.UserVO;

@Service
public class LoginService implements LoginMapper {

	@Autowired
	LoginMapper loginMapper;
	
	@Override
	public int login(UserVO userVO) {
		return loginMapper.login(userVO);
	}

	@Override
	public int loginDateUpdate(UserVO userVO) {
		return loginMapper.loginDateUpdate(userVO);
	}

	@Override
	public String selectUserSalt(UserVO userVO) {
		return loginMapper.selectUserSalt(userVO);
	}

}
