package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class UserDto {


  private Long id;
  private String name;
  private String username;
  private String email;
  private String password;
  private String role;
  private String token;

}
