package com.example.demo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

import lombok.RequiredArgsConstructor;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecConfig {

  private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
  private final UserAuthProvider userAuthenticationProvider;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .exceptionHandling(handling -> handling.authenticationEntryPoint(userAuthenticationEntryPoint))
        .addFilterBefore(new JwtAuthFilter(userAuthenticationProvider), BasicAuthenticationFilter.class)
        .csrf().disable()
        .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests((requests) -> requests
            .requestMatchers(HttpMethod.POST, "/login", "/register", "/appointments/create").permitAll()
            .requestMatchers(HttpMethod.GET, "/users", "/user/**").permitAll()
            .anyRequest().authenticated());
    return http.build();
  }

}