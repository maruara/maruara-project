package com.web.interceptors;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.ModelAndViewDefiningException;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.UrlPathHelper;

import com.web.common.WebConstants;


public class LoginInterceptor extends HandlerInterceptorAdapter {
	
	private static final Logger log = LoggerFactory.getLogger(LoginInterceptor.class);
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		log.debug(">>>  LOGIN CHECK");
		
		Map<?, ?> user = (Map<?, ?>)request.getSession().getAttribute(WebConstants.SESSION_KEY);
		
		if(user == null) {
			
			String url = new UrlPathHelper().getRequestUri(request);
			String queryString = request.getQueryString();
			
			if(StringUtils.isEmpty(url)) {
				url = request.getContextPath() + "/prototype";
			} else {
				if(StringUtils.isNotEmpty(queryString)) {
					url += "?" + queryString;
				}
			}
			request.getSession().setAttribute(WebConstants.RETURN_URL, url);
			log.debug("RETURN URL : {}", url);
			
//		log.debug("getRemoteAddr : {}", request.getRemoteAddr());
//		log.debug("getRemoteHost : {}", request.getRemoteHost());
//		log.debug("referer : {}", request.getHeader("referer"));
//		log.debug("getPathInfo : {}", request.getPathInfo());
//		log.debug("getPathTranslated : {}", request.getPathTranslated());
//		log.debug("getQueryString : {}", request.getQueryString());
//		log.debug("getRequestUri : {}", new UrlPathHelper().getRequestUri(request));
//		log.debug("getServletPath : {}", new UrlPathHelper().getServletPath(request));
//		log.debug("getContextPath : {}", new UrlPathHelper().getContextPath(request));
//		log.debug("getLookupPathForRequest : {}", new UrlPathHelper().getLookupPathForRequest(request));
//		log.debug("getOriginatingContextPath : {}", new UrlPathHelper().getOriginatingContextPath(request));
//		log.debug("getOriginatingQueryString : {}", new UrlPathHelper().getOriginatingQueryString(request));
//		log.debug("getOriginatingRequestUri : {}", new UrlPathHelper().getOriginatingRequestUri(request));
//		log.debug("getPathWithinApplication : {}", new UrlPathHelper().getPathWithinApplication(request));
//		log.debug("getPathWithinServletMapping : {}", new UrlPathHelper().getPathWithinServletMapping(request));
			
			throw new ModelAndViewDefiningException(new ModelAndView("redirect:/prototype/user/login.view"));
		}
		
		return true;
	}
	
	
}
