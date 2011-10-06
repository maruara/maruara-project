package com.web.actions.board;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

// @RequestMapping(value={"", "/", "welcome", "*"})
@Controller
@RequestMapping("board")
public class BoardAction {

	private static final Logger log = Logger.getLogger(BoardAction.class); 
	
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
	
}
