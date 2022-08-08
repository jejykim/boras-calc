package com.boras.CRM.services;

import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.LoginMapper;
import com.boras.CRM.vo.UserVO;

@Service
public class LoginService implements LoginMapper {

	@Override
	public int login(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int loginDateUpdate(UserVO userVO) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String selectUserSalt(UserVO userVO) {
		// TODO Auto-generated method stub
		return null;
	}

}
