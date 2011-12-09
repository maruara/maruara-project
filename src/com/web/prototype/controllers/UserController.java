package com.web.prototype.controllers;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.web.common.WebConstants;


@Controller("prototype.UserController")
@RequestMapping("prototype/user")
public class UserController {

	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	
	
	@RequestMapping(value="loginproc", method=RequestMethod.POST)
	public void loginproc(Map<?, ?> paramMap, ModelMap modelMap, HttpSession session) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		
		Map<?, ?> user = (Map<?, ?>)oracleSqlSessionTemplate.selectOne("prototype.user.select", paramMap);
		log.debug("USER Data : {}", user);
		
		
		if(user != null) {
			modelMap.addAttribute("userData", user);
			session.setAttribute(WebConstants.SESSION_KEY, user);
		}
		
	}
	
	
	
	@RequestMapping(value="logout")
	public ModelAndView logout(Map<?, ?> paramMap, ModelMap modelMap, HttpSession session) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		session.removeAttribute(WebConstants.SESSION_KEY);
		session.invalidate();
		
		return new ModelAndView("redirect:/prototype/user/login.view");
	}
	
	
}
