package com.example.demo.dto;


import lombok.Builder;

@Builder
public class ErrorDto {
  
  private String message;

  public ErrorDto(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }

  public ErrorDto() {
  }

  public void setMessage(String message) {
    this.message = message;
  }

}
