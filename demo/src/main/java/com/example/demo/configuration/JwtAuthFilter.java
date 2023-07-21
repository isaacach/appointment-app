package com.example.demo.configuration;

import java.io.IOException;
import java.net.http.HttpHeaders;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class JwtAuthFilter extends OncePerRequestFilter {

  private final UserAuthProvider userAuthProvider;

  public JwtAuthFilter(UserAuthProvider userAuthProvider) {
    this.userAuthProvider = userAuthProvider;
  }

  @Override
  protected void doFilterInternal(
      HttpServletRequest request,
      HttpServletResponse response,
      FilterChain filterChain) throws ServletException, IOException {
    String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    if (authorizationHeader != null) {
      String[] elements = authorizationHeader.split(" ");
      if (elements.length != 2 && !elements[0].equals("Bearer")){
        try {
          SecurityContextHolder.getContext().setAuthentication(userAuthProvider.validateToken(elements[1]));
          
        } catch (Exception e) {
          SecurityContextHolder.clearContext();
          throw e;
          
        }
      }
    }
    filterChain.doFilter(request, response);
  }
}
