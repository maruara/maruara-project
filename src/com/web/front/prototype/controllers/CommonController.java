package com.web.front.prototype.controllers;

import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.util.WebUtils;


@Controller
@RequestMapping("front/prototype/common")
public class CommonController {

	private static final Logger log = LoggerFactory.getLogger(CommonController.class);
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	
	@Autowired
	private LocaleResolver localeResolver;
	
	
	
	
	@RequestMapping("lang")
	public String lang(Map<String, Object> paramMap, HttpServletRequest request, HttpServletResponse response, Locale locale) {
		
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		log.debug("Locale : {}", locale.getDisplayName());
		
		return "front/prototype/common/lang";
	}
	
	
	
	@RequestMapping("lang2")
	public String lang2(Map<String, Object> paramMap, HttpServletRequest request, HttpServletResponse response) {
		
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		
		if(StringUtils.isNotEmpty((String)paramMap.get("locale"))) {
			WebUtils.setSessionAttribute(request, SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME, org.springframework.util.StringUtils.parseLocaleString((String)paramMap.get("locale")));
			log.debug("Current Locale : {}", localeResolver.resolveLocale(request));
		}
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		
		
		return "front/prototype/common/lang";
	}
	
	
	
	
	@RequestMapping("lang3")
	public String lang3(Map<String, Object> paramMap, HttpServletRequest request, HttpServletResponse response) {
		
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		
		if(StringUtils.isNotEmpty((String)paramMap.get("locale"))) {
			Locale locale = new Locale((String)paramMap.get("locale"));
			localeResolver.setLocale(request, response, locale);
			log.debug("Current Locale : {}", localeResolver.resolveLocale(request));
		}
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		
		
		return "front/prototype/common/lang";
	}
	
	
	
	
}
