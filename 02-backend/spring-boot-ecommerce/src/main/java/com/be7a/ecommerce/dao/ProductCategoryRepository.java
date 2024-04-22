package com.be7a.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.be7a.ecommerce.entity.ProductCategory;

@RepositoryRestResource(collectionResourceRel = "ProductCategory",path = "/product_category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

}
