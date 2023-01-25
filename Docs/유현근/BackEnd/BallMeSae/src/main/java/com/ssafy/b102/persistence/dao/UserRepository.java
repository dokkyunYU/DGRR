package com.ssafy.b102.persistence.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.b102.persistence.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	User findOneById(String id);
	User findByUsername(String username);
}