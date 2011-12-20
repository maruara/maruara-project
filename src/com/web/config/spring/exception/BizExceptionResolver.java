package com.web.config.spring.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

public class BizExceptionResolver implements HandlerExceptionResolver {

	
	private static final Logger log = LoggerFactory.getLogger(BizExceptionResolver.class);
	
	
	
	@Override
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception exception) {
		
		log.error("{}", exception);
		
		if(exception instanceof BizException) {
			log.debug("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
		}
		
		
		/*
		request.setAttribute("javax.servlet.error.exception",exception);
		String uri = request.getRequestURI();
		if(uri.lastIndexOf("_x.")>-1){
			ModelAndView mav = new ModelAndView(WebConstants.XML_BOX);
			return mav;
		} else if(uri.lastIndexOf("_j.")>-1){
			ModelAndView mav = new ModelAndView(WebConstants.XML_JSON);
			return mav;
		}
		String method = request.getParameter("_method");
		if(method.lastIndexOf("_xml")>-1){
			ModelAndView mav = new ModelAndView(WebConstants.XML_BOX);
			return mav;
		} else if(method.lastIndexOf("_json")>-1){
			ModelAndView mav = new ModelAndView(WebConstants.XML_JSON);
			return mav;
		}
		return null;
		*/
		
		return null;
	}

	
	
}
