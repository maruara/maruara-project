package com.web.prototype.controllers;

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
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.util.WebUtils;


@Controller("prototype.MainController")
@RequestMapping("prototype")
public class MainController {

	private static final Logger log = LoggerFactory.getLogger(MainController.class);
	
	
	@RequestMapping("index")
	public String index() throws Exception {
		log.debug("---------------------------------------------------------");
		return ".prototype.index";
	}
	
}
