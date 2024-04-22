package com.be7a.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.be7a.ecommerce.entity.product_ang;


public interface ProductRepository extends JpaRepository<product_ang, Long> {

}
