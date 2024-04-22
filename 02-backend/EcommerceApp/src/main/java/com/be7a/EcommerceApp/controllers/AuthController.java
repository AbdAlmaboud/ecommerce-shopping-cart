package com.be7a.EcommerceApp.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.be7a.EcommerceApp.auth.JwtUtil;
import com.be7a.EcommerceApp.entity.Uesr;
import com.be7a.EcommerceApp.model.request.LoginReq;
import com.be7a.EcommerceApp.model.response.ErrorRes;
import com.be7a.EcommerceApp.model.response.LoginRes;
import com.be7a.EcommerceApp.dao.UserRepository;

@Controller
@RequestMapping("/rest/auth")
@CrossOrigin("http://localhost:4200")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    
    @Autowired
    private UserRepository userDto;


    private JwtUtil jwtUtil;
    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;

    }

    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public LoginRes login(@RequestBody LoginReq loginReq)  {

        try {
            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));
            String email = authentication.getName();
            Uesr user = new Uesr();
            user.setEmail(email);
            String token = jwtUtil.createToken(user);
            LoginRes loginRes = new LoginRes(email,token);

            return loginRes;

        }catch (BadCredentialsException e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST,"Invalid username or password");
            return null;
        }catch (Exception e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return null;
        }
    }
    
    @ResponseBody
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody Uesr user)  {
		user = userDto.save(user);
    	return ResponseEntity.ok(user);
    }
}




