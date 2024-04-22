package com.be7a.EcommerceApp.dao;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.jpa.repository.JpaRepository;

import com.be7a.EcommerceApp.entity.Uesr;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<Uesr , Long> {
	Uesr findUserByEmail(@RequestParam("email")String email);
}
