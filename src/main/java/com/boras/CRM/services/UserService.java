package com.boras.CRM.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boras.CRM.mapper.UserMapper;

@Service
public class UserService implements UserMapper {

	@Autowired
	UserMapper userMapper;
}
