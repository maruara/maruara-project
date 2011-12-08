package com.web.front.test.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="test")
public class TestController {

	
	
	@RequestMapping("hello")
	public @ResponseBody String sayHello() {
		return "hello";
	}
	
	
	
}
