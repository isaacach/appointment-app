package com.example.demo.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

  private final UserRepository userRepo;

  public UserController(UserRepository userRepo) {
    this.userRepo = userRepo;
  }

  @GetMapping("/users")
  public List<User> getUsers() {
    return userRepo.findAll();
  }

  @GetMapping("/user/{id}")
  public User getUser(@PathVariable Long id) {
    return userRepo.findById(id).orElseThrow(RuntimeException::new);
  }

  @PostMapping("/user/create")
  public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException {
    User savedUser = userRepo.save(user);
    return ResponseEntity.created(new URI("/user/" + savedUser.getId())).body(savedUser);
  }

  @PutMapping("/user/{id}")
  public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user) {
    User currentUser = userRepo.findById(id).orElseThrow(RuntimeException::new);
    currentUser.setName(user.getName());
    currentUser.setEmail(user.getEmail());
    currentUser.setPassword(user.getPassword());
    currentUser.setRole(user.getRole());
    User savedUser = userRepo.save(currentUser);
    return ResponseEntity.ok(savedUser);
  }

  @DeleteMapping("/user/{id}")
  public ResponseEntity deleteUser(@PathVariable Long id) {
    userRepo.deleteById(id);
    return ResponseEntity.ok().build();
  }

}
