package com.web.actions.test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="test/message")
public class MessageTestAction {

	private static final Logger log = LoggerFactory.getLogger(MessageTestAction.class);
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	
	@RequestMapping(value="message1")
	public String request() {
		log.debug("===  START  ===");
		
				
		return "test/message/message1";
	}
	
	
}
