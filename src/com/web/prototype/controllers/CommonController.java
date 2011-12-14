package com.web.prototype.controllers;

import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.util.WebUtils;


@Controller("prototype.CommonController")
@RequestMapping("prototype/common")
public class CommonController {

	private static final Logger log = LoggerFactory.getLogger(CommonController.class);
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	
	@Autowired
	private LocaleResolver localeResolver;
	
	
	
	@RequestMapping("locale")
	public String lang(@RequestParam Map<String, Object> param, HttpServletRequest request, HttpServletResponse response, Locale locale, HttpSession session) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		if(StringUtils.isEmpty((String)param.get("locale"))) {
			log.debug("LOCALE_SESSION_ATTRIBUTE_NAME : {}", SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME);
			 session.setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME, null); 
		}
		
		log.debug("Locale getDisplayName : {}", locale.getDisplayName());
		log.debug("Locale getDisplayLanguage : {}", locale.getDisplayLanguage());
		log.debug("Locale toLanguageTag : {}", locale.toLanguageTag());
		log.debug("Locale getLanguage : {}", locale.getLanguage());
		log.debug("Locale getDisplayCountry : {}", locale.getDisplayCountry());
		log.debug("Locale : {}", locale);
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.common.errorPage"));
		
//		return response;
//		return "prototype/common/locale";
		return ".prototype.common.locale";
	}
	
	
	
	@RequestMapping("locale2")
	public String lang2(@RequestParam Map<String, Object> param, HttpServletRequest request, HttpServletResponse response, ModelMap modelMap, Model model) {
		
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		
		if(StringUtils.isNotEmpty((String)param.get("locale"))) {
			WebUtils.setSessionAttribute(request, SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME, org.springframework.util.StringUtils.parseLocaleString((String)param.get("locale")));
			log.debug("Current Locale : {}", localeResolver.resolveLocale(request));
		}
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.common.errorPage"));
		modelMap.addAttribute("aaa", "bbb");
		model.addAttribute("ccc", "ddd");
		
		return "prototype/common/locale";
	}
	
	
	
	
	@RequestMapping("locale3")
	public String lang3(@RequestParam Map<String, Object> param, HttpServletRequest request, HttpServletResponse response) {
		
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.test"));
		
		if(StringUtils.isNotEmpty((String)param.get("locale"))) {
			Locale locale = new Locale((String)param.get("locale"));
			localeResolver.setLocale(request, response, locale);
			log.debug("Current Locale : {}", localeResolver.resolveLocale(request));
		}
		
		log.debug("Message : {}", messageSourceAccessor.getMessage("messages.common.errorPage"));
		
		
		return "prototype/common/locale";
	}
	
	
	
	
}
