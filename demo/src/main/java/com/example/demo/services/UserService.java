package com.example.demo.services;

import java.nio.CharBuffer;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CredentialsDto;
import com.example.demo.dto.UserDto;
import com.example.demo.mappers.UserMapper;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;
  private final PasswordEncoder passwordEncoder;

  public UserDto login(String login) {
    User user = userRepository.findByLogin(login).orElseThrow(() -> new RuntimeException("User not found"));
    return userMapper.toUserDto(user);
  }

  public UserDto login(CredentialsDto credentialsDto) {
      User user = userRepository.findByLogin(credentialsDto.getLogin()).orElseThrow(() -> new RuntimeException("User not found"));
      if (passwordEncoder.matches(CharBuffer.wrap(CredentialsDto.getPassword(), user.getPassword()))) {
        return userMapper.toUserDto(user);
      }
  }
  
}
