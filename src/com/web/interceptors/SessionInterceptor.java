package com.web.interceptors;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.ModelAndViewDefiningException;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.web.common.WebConstants;


public class SessionInterceptor extends HandlerInterceptorAdapter {
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
		Map<?, ?> user = (Map<?, ?>)request.getSession().getAttribute(WebConstants.SESSION_KEY);
		if(user == null) {
			throw new ModelAndViewDefiningException(new ModelAndView("redirect:/prototype/user/login.do"));
		}
		
		return true;
	}
	
	
}
