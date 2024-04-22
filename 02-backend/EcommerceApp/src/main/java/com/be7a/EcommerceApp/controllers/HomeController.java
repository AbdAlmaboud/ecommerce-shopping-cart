package com.be7a.EcommerceApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.be7a.EcommerceApp.dao.ProductCategoryRepository;
import com.be7a.EcommerceApp.dao.ProductRepository;
import com.be7a.EcommerceApp.entity.ProductCategory;
import com.be7a.EcommerceApp.entity.product_ang;
import com.be7a.EcommerceApp.entity.tempooo;

@RestController
@RequestMapping("/rest/auth/add")
@CrossOrigin("http://localhost:4200")
public class HomeController {
	
	@Autowired
	private ProductRepository ProducDto;
	
	@Autowired
	private ProductCategoryRepository productCategoryDto;

	@ResponseBody
	@RequestMapping(value = "/Product", method = RequestMethod.POST)
	public ResponseEntity<product_ang> addProduct(@RequestBody tempooo p) {
		product_ang product = new product_ang(p);
		ProducDto.save(product);
		return ResponseEntity.ok(product);
	}

	@ResponseBody
	@RequestMapping(value = "/Category", method = RequestMethod.POST)
	public ResponseEntity addProductCategory(@RequestBody ProductCategory Product) {
		Product = productCategoryDto.save(Product);
		return ResponseEntity.ok(Product);
	}

}