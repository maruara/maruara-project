package com.web.common.util;

import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.protocol.HTTP;

public class CookieManager {

	
	/**
	 * 쿠키 조회
	 * 
	 * @param request
	 * @param cookieName
	 * @return
	 */
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
	
	
	/**
	 * 쿠키 값 조회
	 * 
	 * @param request
	 * @param cookieName
	 * @return
	 * @throws Exception
	 */
	public static String getCookieValue(HttpServletRequest request, String cookieName) throws Exception {
		Cookie[] cookies = request.getCookies();
		if(cookies.length < 1) {
			return null;
		}
		
		String cookieValue = null;
		
		for(Cookie cookie : cookies) {
			if(StringUtils.equals(cookie.getName(), cookieName)) {
				cookieValue = URLDecoder.decode(cookie.getValue(), HTTP.UTF_8);
				break;			
			}
		}
		return cookieValue;
	}
	
	
	/**
	 * 쿠키 저장
	 * 
	 * @param response
	 * @param cookieName
	 * @param cookieValue
	 * @throws Exception
	 */
	public static void setCookie(HttpServletResponse response, String cookieName, String cookieValue) throws Exception {
		cookieValue = URLEncoder.encode(cookieValue, HTTP.UTF_8);
		Cookie cookie = new Cookie(cookieName, cookieValue);
		response.addCookie(cookie);
	}
	
	
	/**
	 * 쿠키 저장
	 * 
	 * @param response
	 * @param cookieName
	 * @param cookieValue
	 * @param path
	 * @throws Exception
	 */
	public static void setCookie(HttpServletResponse response, String cookieName, String cookieValue, String path) throws Exception {
		cookieValue = URLEncoder.encode(cookieValue, HTTP.UTF_8);
		Cookie cookie = new Cookie(cookieName, cookieValue);
		cookie.setPath(path);
		response.addCookie(cookie);
	}
	
	
	/**
	 * 쿠키 저장
	 * 
	 * @param response
	 * @param cookieName
	 * @param cookieValue
	 * @param expiry
	 * @throws Exception
	 */
	public static void setCookie(HttpServletResponse response, String cookieName, String cookieValue, int expiry) throws Exception {
		cookieValue = URLEncoder.encode(cookieValue, HTTP.UTF_8);
		Cookie cookie = new Cookie(cookieName, cookieValue);
		cookie.setMaxAge(expiry);  // 초단위 (기본은 -1, -1은 브라우저를 닫거나 세션이 끊겼을 경우 쿠키도 삭제됨. 0은 쿠키 바로 삭제)
		response.addCookie(cookie);
	}
	
	
	/**
	 * 쿠키 저장
	 * 
	 * @param response
	 * @param cookieName
	 * @param cookieValue
	 * @param path
	 * @param expiry
	 * @throws Exception
	 */
	public static void setCookie(HttpServletResponse response, String cookieName, String cookieValue, String path, int expiry) throws Exception {
		cookieValue = URLEncoder.encode(cookieValue, HTTP.UTF_8);
		Cookie cookie = new Cookie(cookieName, cookieValue);
		cookie.setPath(path);
		cookie.setMaxAge(expiry);  // 초단위 (기본은 -1, -1은 브라우저를 닫거나 세션이 끊겼을 경우 쿠키도 삭제됨. 0은 쿠키 바로 삭제)
		response.addCookie(cookie);
	}
	
}
