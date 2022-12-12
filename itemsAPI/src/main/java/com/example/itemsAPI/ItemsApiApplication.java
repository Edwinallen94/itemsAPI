package com.example.itemsAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.example.itemsAPI.ItemController")

@SpringBootApplication
public class ItemsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItemsApiApplication.class, args);
	}

}
