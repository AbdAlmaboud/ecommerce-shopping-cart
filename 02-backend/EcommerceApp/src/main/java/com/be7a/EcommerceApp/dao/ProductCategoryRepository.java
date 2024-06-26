package com.be7a.EcommerceApp.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.be7a.EcommerceApp.entity.ProductCategory;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(path = "product_category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
