package com.web.front.request.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="test/response")
public class ResponseTestController {
	
	private static final Logger log = LoggerFactory.getLogger(ResponseTestController.class);
	
	
	/* Model에 객체 담아서 보내기
	 * http://localhost:8080/maruara-project/test/response/response1
	 */
	@RequestMapping(value="response1")
	public void response1(Model model) {
		log.debug("===  START  ===");
		
		model.addAttribute("str1", "대한민국");

//		return "test/response/response1";
	}
	
	
	
	/* ModelAndView로 View 설정
	 * http://localhost:8080/maruara-project/test/response/response2
	 */
	@RequestMapping(value="response2")
	public ModelAndView response2(ModelAndView mav) {
		log.debug("===  START  ===");
		
		mav.addObject("str1", "코리아");
//		mav.setViewName("test/response/response2");
		return mav;
	}
	
	
	
	/* Tiles View 설정
	 * http://localhost:8080/maruara-project/test/response/response3
	 */
	@RequestMapping(value="response3")
	public ModelAndView response3(ModelAndView mav) {
		log.debug("===  START  ===");
		
		mav.setViewName(".test.response.response3");
		return mav;
	}
	
	
	
	
	
	
	
	
	

}
