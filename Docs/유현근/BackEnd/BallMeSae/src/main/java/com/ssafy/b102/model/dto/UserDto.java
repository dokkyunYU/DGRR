package com.ssafy.b102.model.dto;

import java.security.Timestamp;
import java.util.Set;

//import com.ssafy.b102.persistence.model.Role;
import com.ssafy.b102.persistence.model.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
	private long id;
	
	private String username;
 
	private String password;
 
	private String name;
	
	private String email;
 
	private Timestamp creatTime;
	
	public User toEntity() {
		return User.builder().username(username).password(password).name(name).email(email).build();
	}
}