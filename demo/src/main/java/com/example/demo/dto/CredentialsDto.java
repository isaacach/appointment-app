package com.example.demo.dto;

import org.springframework.stereotype.Component;

@Component
public class CredentialsDto {

  private String username;
  private char[] password;

  public CredentialsDto() {
  }

  public CredentialsDto(String username, char[] password) {
    this.username = username;
    this.password = password;
  }

  public String getUsername() {
    return username;
  }

  public char[] getPassword() {
    return password;
  }

  

 

  
}
