package com.example.demo.dto;

import org.springframework.stereotype.Component;

@Component
public class ErrorDto {
  
  private String message;

  public ErrorDto(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }
}
