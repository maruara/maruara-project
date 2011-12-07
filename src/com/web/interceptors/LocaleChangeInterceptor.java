package com.web.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.support.RequestContextUtils;

public class LocaleChangeInterceptor extends HandlerInterceptorAdapter
{

	private static final Logger log = LoggerFactory.getLogger(LocaleChangeInterceptor.class);
	
    public LocaleChangeInterceptor()
    {
        paramName = "locale";
    }

    public void setParamName(String paramName)
    {
        this.paramName = paramName;
    }

    public String getParamName()
    {
        return paramName;
    }
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    	log.debug("=========================================================================================================");
        String newLocale = request.getParameter(paramName);
        log.debug("newLocale : {}", newLocale);
        if(newLocale != null) {
            LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
            if(localeResolver == null)
                throw new IllegalStateException("No LocaleResolver found: not in a DispatcherServlet request?");
            localeResolver.setLocale(request, response, StringUtils.parseLocaleString(newLocale));
        }
//        return super.preHandle(request, response, handler);
        return true;
    }
    
    

    public static final String DEFAULT_PARAM_NAME = "locale";
    private String paramName;
}

