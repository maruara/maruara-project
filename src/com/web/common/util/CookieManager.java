package com.web.common.util;

import java.net.URLDecoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;

public class CookieManager {

	
	public static Cookie getCookie(HttpServletRequest request, String cookieName) {
		Cookie[] cookies = request.getCookies();
		if(cookies.length < 1) {
			return null;
		}
		
		Cookie cookie = null;
		for(Cookie c : cookies) {
			if(StringUtils.equals(c.getName(), cookieName)) {
				cookie = c;
				break;			
			}
		}
		return cookie;
	}
	
	
	public static String getCookieValue(HttpServletRequest request, String cookieName) throws Exception {
		Cookie[] cookies = request.getCookies();
		if(cookies.length < 1) {
			return null;
		}
		
		String cookieValue = null;
		
		for(Cookie cookie : cookies) {
			if(StringUtils.equals(cookie.getName(), cookieName)) {
				cookieValue = URLDecoder.decode(cookie.getValue(), "UTF-8");
				break;			
			}
		}
		return cookieValue;
	}
	
}
