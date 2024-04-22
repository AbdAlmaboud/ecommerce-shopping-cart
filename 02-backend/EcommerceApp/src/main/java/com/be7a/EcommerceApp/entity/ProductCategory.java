package com.be7a.EcommerceApp.entity;

import java.util.List;
import javax.persistence.*;


@Entity
@Table(name = "product_category")
public class ProductCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	@Column(name = "category_name")
	private String categoryName;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	private List<product_ang> Products;

	// Constructors, getters and setters

	public ProductCategory() {
		
	}
	public ProductCategory(long id, String categoryName, List<product_ang> products) {
		
		this.id = id;
		this.categoryName = categoryName;
		Products = products;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<product_ang> getProducts() {
		return Products;
	}

	public void setProducts(List<product_ang> products) {
		Products = products;
	}
	
	public void addProducts(List<product_ang> products) {
		for (product_ang tempproductang : products) {
			Products.add(tempproductang);
		}
	}
	
}
