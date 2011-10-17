package com.web.controllers.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

// @RequestMapping(value={"", "/", "welcome", "*"})
@Controller
@RequestMapping("board")
public class BoardController {

	private static final Logger log = LoggerFactory.getLogger(BoardController.class); 
	
	@RequestMapping(value="list")
	public String list() {
		log.debug("start");
		
		return "board/list";
	}
	
	@RequestMapping("form")
	public ModelAndView form() {
		log.debug("start");
		
		return new ModelAndView("board/form");
	}
	
	@RequestMapping("layout")
	public ModelAndView layout() {
		log.debug("start");
		
		return new ModelAndView(".default");
	}
	
}
