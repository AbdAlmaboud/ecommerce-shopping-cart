package com.be7a.EcommerceApp.dao;

import com.be7a.EcommerceApp.entity.product_ang;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(path = "product_angs")
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<product_ang, Long> {

    Page<product_ang> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
    
    Page<product_ang> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}