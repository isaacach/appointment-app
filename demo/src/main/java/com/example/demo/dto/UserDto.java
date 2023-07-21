package com.example.demo.dto;

import org.springframework.stereotype.Component;

@Component
public class UserDto {


  private Long id;
  private String name;
  private String login;
  private String token;

  public UserDto() {
  }

  public UserDto(Long id, String name, String login, String token) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.token = token;
  }
  
}
