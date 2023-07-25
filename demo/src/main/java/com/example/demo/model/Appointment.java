package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

import com.example.demo.repository.UserRepository;

import jakarta.persistence.*;

@Data
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "appointments")
public class Appointment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String date;

  @Column(nullable = false)
  private String time;

  @Column(nullable = false)
  private String description;


  @ManyToOne
  @JoinColumn(name = "user_id")
  public User user;

}
