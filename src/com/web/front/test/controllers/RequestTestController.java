package com.web.front.test.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value="test/request")
public class RequestTestController {

	private static final Logger log = LoggerFactory.getLogger(RequestTestController.class);
	
	
	
	/* 파라미터를 변수로 바로 받기
	 * @RequestParam을 사용하지 않았을 경우에는 필수는 아님 (required = false)
	 * http://localhost:8080/maruara-project/test/request/request1?parameter1=korea&parameter2=hangeul
	 */
	@RequestMapping(value="request1", method=RequestMethod.GET)
	public String request1(String parameter1, String parameter2) {
		log.debug("===  START  ===");
		
		log.debug("parameter1 : {}", parameter1);
		log.debug("parameter2 : {}", parameter2);
				
		return "test/request/request1";
	}
	
	
	
	/* 파라미터를 변수로 바로 받기
	 * @RequestParam의 기본값 : required = true
	 * http://localhost:8080/maruara-project/test/request/request2?parameter1=korea&parameter2=hangeul
	 */
	@RequestMapping(value="request2")
	public void request2(
			@RequestParam(value="parameter1") String param1, 
			@RequestParam(value="parameter2", required=false) String param2) {
		log.debug("===  START  ===");
		
		log.debug("parameter1 : {}", param1);
		log.debug("parameter2 : {}", param2);
	}
	
	
	
	/* 파라미터를 변수로 바로 받기
	 * 파라미터의 변수와 값이 정확히 일치하여야 함 (항상 required = true)
	 * http://localhost:8080/maruara-project/test/request/request3?parameter1=korea&parameter2=hangeul
	 */
	@RequestMapping(value="request3", params={"parameter1=korea", "parameter2=hangeul"})
	public void request3(@RequestParam String parameter1, @RequestParam String parameter2) {
		log.debug("===  START  ===");
		
		log.debug("parameter1 : {}", parameter1);
		log.debug("parameter2 : {}", parameter2);
	}
	
	
	
	/* URL Path 값 가져오기
	 * http://localhost:8080/maruara-project/test/request/request4/user1
	 */
	@RequestMapping(value="request4/{id}")
	public void request4(@PathVariable(value="id") String paramId) {
		log.debug("===  START  ===");
		
		log.debug("id : {}", paramId);
	}
	
	
	
	/* 파라미터를 변수로 바로 받기
	 * @RequestParam을 사용하지 않았을 경우에는 필수는 아님 (required = false)
	 * http://localhost:8080/maruara-project/test/request/request5?parameter1=korea&parameter2=hangeul
	 */
	@RequestMapping(value="request5.do")
	public String request5(String parameter1, String parameter2) {
		log.debug("===  START  ===");
		
		log.debug("parameter1 : {}", parameter1);
		log.debug("parameter2 : {}", parameter2);
				
//		return "test/request/request5";
		return ".test.request.request5";
	}
	
	
	
	/* headers 정의
	 * 
	 */
	@RequestMapping(value="request6", method=RequestMethod.POST, headers="content-type=text/*")
	public void request6() {
		log.debug("===  START  ===");
		
	}
	
	
	
	
	
	
}
