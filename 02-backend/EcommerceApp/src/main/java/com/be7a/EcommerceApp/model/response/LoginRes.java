package com.be7a.EcommerceApp.model.response;


public class LoginRes {
    private String email;
    private String token;

   

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

	public LoginRes(String email, String token) {
		super();
		this.email = email;
		this.token = token;
	}
    
    
    
}