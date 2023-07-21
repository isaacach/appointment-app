package com.example.demo.services;

import java.nio.CharBuffer;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CredentialsDto;
import com.example.demo.dto.UserDto;
import com.example.demo.exceptions.AppException;
import com.example.demo.mappers.UserMapper;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;
  private final PasswordEncoder passwordEncoder;

  public UserService(UserRepository userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.userMapper = userMapper;
    this.passwordEncoder = passwordEncoder;
  }

  public UserDto login(String login) {
    User user = userRepository.findByUsername(login)
      .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));
    return userMapper.toUserDto(user);
  }

  public UserDto login(CredentialsDto credentialsDto) {
      User user = userRepository.findByUsername(credentialsDto.getUsername())
        .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));
      if (passwordEncoder.matches(CharBuffer.wrap(CredentialsDto.getPassword()), null)) {
        return userMapper.toUserDto(user);
      }

      throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
  }

  public UserDto register(SignUpDto userDto) {
    User optionalUser = userRepository.findByUsername(userDto.getUsername())
      .orElse(null);
  }
  
}
