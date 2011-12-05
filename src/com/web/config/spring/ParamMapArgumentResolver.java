package com.web.config.spring;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebArgumentResolver;
import org.springframework.web.context.request.NativeWebRequest;

public class ParamMapArgumentResolver implements WebArgumentResolver {

	@Override
	public Object resolveArgument(MethodParameter methodparameter, NativeWebRequest nativewebrequest) throws Exception {
		
		Class<?> clazz = methodparameter.getParameterType();
        String paramName = methodparameter.getParameterName();
        
        if(clazz.equals(Map.class) && paramName.equals("paramMap")) {
            Map<String, Object> paramMap = new HashMap<String, Object>();
            HttpServletRequest request = (HttpServletRequest)nativewebrequest.getNativeRequest();
            Enumeration<?> enumeration = request.getParameterNames();
            
            while(enumeration.hasMoreElements()) {
            	String key = (String)enumeration.nextElement();
                String values[] = request.getParameterValues(key);
                if(values != null) {
                	paramMap.put(key, values.length <= 1 ? ((Object) (values[0])) : ((Object) (values)));
                }
            }
            
            return paramMap;
        } else {
            return UNRESOLVED;
        }
	}
	
}
