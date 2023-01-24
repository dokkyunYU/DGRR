package com.ssafy.b102.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.b102.model.dto.UserDto;
//import com.ssafy.b102.persistence.dao.RoleRepository;
import com.ssafy.b102.persistence.dao.UserRepository;
//import com.ssafy.b102.persistence.model.Role;
import com.ssafy.b102.persistence.model.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
 
	private final UserRepository userRepository;
 
//	private final RoleRepository roleRepository;
 
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
 
	public void insert(UserDto userDto) {
		userDto.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
//		Set<Role> rolesSet = new HashSet<Role>();
//		rolesSet.add(roleRepository.findQneById(2L)); // id : 2 ROLE_USER 역할
		userRepository.save(userDto.toEntity());

	}
}