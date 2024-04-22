package com.be7a.EcommerceApp.entity;

import java.math.BigDecimal;
import java.sql.Date;
import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(name = "product_ang")
public class product_ang {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;

	@Column(name = "SKU")
	private String sku;

	@Column(name = "NAME")
	private String name;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "UNIT_PRICE")
	private BigDecimal unitPrice;

	@Column(name = "IMAGE_URL")
	private String imageUrl;

	@Column(name = "ACTIVE")
	private boolean active;

	@Column(name = "UNITS_IN_STOCK")
	private int unitsInStock;

	@Column(name = "DATE_CREATED")
	@CreationTimestamp
	private Date dataCreated;

	@Column(name = "LAST_UPDATED")
	@UpdateTimestamp
	private Date lastUpdated;

	@ManyToOne
	@JoinColumn(name = "CATEGORY_ID")
	private ProductCategory category;
	
	// Constructors, getters and setters
	public product_ang() {}
	
	public product_ang(tempooo p) {
		this.active = p.isActive();
		this.category = new ProductCategory();
		this.category.setId(p.getCategory());
		this.name = p.getName();
		this.sku = p.getSku();
		this.imageUrl = p.getImageUrl();
		this.unitPrice = p.getUnitPrice();
		this.unitsInStock = p.getUnitsInStock();
		this.description = p.getDescription();
	}

	public product_ang(long id, ProductCategory category,  String sku, String name, String description,
			BigDecimal unitPrice, String imageUrl, boolean active, int unitsInStock, Date dataCreated,
			Date lastUpdated) {
		super();
		this.id = id;
		this.category = category;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitPrice = unitPrice;
		this.imageUrl = imageUrl;
		this.active = active;
		this.unitsInStock = unitsInStock;
		this.dataCreated = dataCreated;
		this.lastUpdated = lastUpdated;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public ProductCategory getCategory() {
		return category;
	}

	public void setCategory(ProductCategory category) {
		this.category = category;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public int getUnitsInStock() {
		return unitsInStock;
	}

	public void setUnitsInStock(int unitsInStock) {
		this.unitsInStock = unitsInStock;
	}

	public Date getDataCreated() {
		return dataCreated;
	}

	public void setDataCreated(Date dataCreated) {
		this.dataCreated = dataCreated;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

}
