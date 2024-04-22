package com.be7a.EcommerceApp;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.be7a.EcommerceApp.entity.ProductCategory;
import com.be7a.EcommerceApp.entity.product_ang;



@Configuration
public class IDConfig implements RepositoryRestConfigurer{
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
      config.exposeIdsFor(product_ang.class);
      config.exposeIdsFor(ProductCategory.class);
	}
}