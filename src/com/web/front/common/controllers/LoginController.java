package com.web.front.common.controllers;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/*
@Component
@Scope(value="prototype", proxyMode=ScopedProxyMode.TARGET_CLASS)
ScopedProxyMode 에 정의된 열거값

* NO - 프록시를 생성하지 않음
* INTERFACES - 인터페이스에 대한 프록시를 생성한다
(JDK 다이나믹 프록시를이용해서 프록시 생성)
* TARGET_CLASS - 클래스에 대해 프록시를 생성 (CGLIB 이용)
* DEFAULT - 기본값.
별도의 설정을 하지 않았다면, NO 와 동일하다.
<context:component-scan> 태그에서 설정을 변경 할 수 있다 (Spring 3.0)
*/
@Controller
public class LoginController {
	
	private static final Logger log = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private MessageSource messageSource;
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	@RequestMapping(value="/login")
	public ModelAndView getLogin() {
		System.out.println(messageSource.getMessage("messages.test", null, Locale.KOREA));
		System.out.println(messageSource.getMessage("messages.test", null, Locale.US));
		System.out.println(messageSourceAccessor.getMessage("messages.test"));
		
		return new ModelAndView("login/login");
	}
	
	
	@RequestMapping(value="/login2")
	public ModelAndView test(HttpServletRequest request, HttpServletResponse response, BindingResult result, HttpSession session, Model model) {
		log.debug(request.getParameter("a"));
		return new ModelAndView("login/login");
	}
	
}
