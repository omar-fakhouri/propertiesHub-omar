package com.example.firstWebApp.repository;

import com.example.firstWebApp.entities.realEstate;
import com.example.firstWebApp.entities.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface realEstateRepository  extends JpaRepository<realEstate,Long> {
}
