package com.example.demo.dto;

public class CredentialsDto {

  private String login;
  private char[] password;

  public CredentialsDto() {
  }

  public CredentialsDto(String login, char[] password) {
    this.login = login;
    this.password = password;
  }

  
}
