package com.example.demo.mappers;

import org.mapstruct.Mapper;

import com.example.demo.dto.UserDto;
import com.example.demo.model.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

  UserDto toUserDto(User user);
  
}
