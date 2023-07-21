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

}
