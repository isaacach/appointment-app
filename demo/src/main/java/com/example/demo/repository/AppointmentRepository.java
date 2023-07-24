package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Appointment;

import java.util.List;
import java.util.Optional;


public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

  Optional<Appointment> findById(Long id);

  List<Appointment> findByUserId(Long userId);
  
}