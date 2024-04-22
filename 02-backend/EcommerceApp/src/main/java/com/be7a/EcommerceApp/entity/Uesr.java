package com.be7a.EcommerceApp.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.context.annotation.SessionScope;

@Entity
@SessionScope
@Table(name = "Uesr")
public class Uesr {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "username", nullable = false)
    private String username;
    
    @Column(name = "password", nullable = false)
    private String password;
    
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    
    @Column(name = "Card")
    private String card;

    @Column(name = "admin", nullable = true)
    private boolean admin;

	public Uesr() {
		
	}

	public Uesr(int id, String username, String password, String email, String card) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.card = card;
		this.admin = false;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCard() {
		return card;
	}

	public void setCard(String card) {
		this.card = card;
	}
	
	public boolean getAdmin() {
		return admin;
	}
	
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	
	
	public boolean valid () {
		
		if(this.card==null)return false;

		if(this.username==null)return false;

		if(this.email==null)return false;

		if(this.password==null)return false;
		
		
		return true;
	}

	@Override
	public String toString() {
		return "Uesr [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email + ", card="
				+ card + "]";
	}
}
