package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Appointment;
import com.example.demo.model.User;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class AppointmentController {

  AppointmentRepository appointmentRepository;
  UserRepository userRepository;

  public AppointmentController(AppointmentRepository appointmentRepository, UserRepository userRepository) {
    this.appointmentRepository = appointmentRepository;
    this.userRepository = userRepository;
  }

  @GetMapping("/appointments")
  public List<Appointment> getAppointments() {
    return appointmentRepository.findAll();
  }

  @GetMapping("/appointments/{id}")
  public Appointment getAppointment(Long id) {
    return appointmentRepository.findById(id).orElseThrow(() -> new RuntimeException());
  }

  @GetMapping("/appointments/user/{userId}")
  public List<Appointment> getAppointmentsByUserId(Long userId) {
    return appointmentRepository.findByUserId(userId);
  }

  @PostMapping("/appointments/create/{userId}")
  public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment, @PathVariable Long userId) {
    if (userRepository.findById(userId).isPresent()) {
      Appointment newAppointment = new Appointment();
      newAppointment.setUser(userRepository.findById(userId).get());
      newAppointment.setDate(appointment.getDate());
      newAppointment.setTime(appointment.getTime());
      newAppointment.setDescription(appointment.getDescription());
      appointmentRepository.save(newAppointment);
      return ResponseEntity.ok(newAppointment);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

}
