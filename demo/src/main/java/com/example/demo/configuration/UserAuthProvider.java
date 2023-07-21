package com.example.demo.configuration;

import java.util.Base64;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import jakarta.annotation.PostConstruct;

@Component
public class UserAuthProvider {

  @Value("${security.jwt.token.secret-key:secret:value}")
  private String secret;

  private final UserService userService;

  public String getSecret() {
    return secret;
  }

  @PostConstruct
  protected void init() {
    secret = Base64.getEncoder().encodeToString(secret.getBytes());
  }

  public String generateToken(String login) {
    Date now = new Date();
    Date validity = new Date(now.getTime() + 3_600_000);

    return JWT.create()
        .withIssuer(login)
        .withIssuedAt(now)
        .withExpiresAt(validity)
        .sign(Algorithm.HMAC512(secret));
  }

  public Authentication validateToken(String token) {
    JWTVerifier verifier = JWT.require(Algorithm.HMAC512(secret)).build();

    DecodedJWT decoded = verifier.verify(token);

    UserDto user = userService.findByLogin(decoded.getIssuer());

    return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
}
