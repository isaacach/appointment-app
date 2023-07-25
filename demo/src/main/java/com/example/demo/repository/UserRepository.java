package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;
import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {
  User findByEmail(String email);
  Optional<User> findByUsername(String username);
  Optional<User> findById(Long id);
}
