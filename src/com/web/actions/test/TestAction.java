package com.web.actions.test;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/test")
public class TestAction {

	@RequestMapping(method=RequestMethod.GET)
	public void form(@RequestHeader(value="X-Requested-With", required=false) String requestedWith, HttpSession session, Model model) {
		session.getAttribute("form");
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public void processSubmit() {
		
	}
	
}
