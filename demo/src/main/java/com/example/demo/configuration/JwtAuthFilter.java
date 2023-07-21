package com.example.demo.configuration;

import java.io.IOException;
import java.net.http.HttpHeaders;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthFilter extends OncePerRequestFilter {

  private final UserAuthProvider userAuthProvider;

  @Override
  protected void doFilterInternal(
      HttpServletRequest request,
      HttpServletResponse response,
      FilterChain filterChain) throws ServletException, IOException {
    String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
      try {
        SecurityContextHolder.getContext().setAuthentication(
            userAuthProvider.validateToken(authorizationHeader.substring(7)));
      } catch (Exception e) {
        SecurityContextHolder.clearContext();
      }

    }
    filterChain.doFilter(request, response);

  }
}
