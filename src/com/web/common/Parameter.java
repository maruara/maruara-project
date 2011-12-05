package com.web.common;

import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;

public class Parameter {

	public static String getParameter(Map<String, Object> params, String parameter, String update) throws Exception {
		
		if(params == null)
			params = new HashMap<String, Object>();
		
		
		String patten = "^(.*)=(.*)$";
		Pattern para_patten = Pattern.compile(patten, Pattern.MULTILINE);

		if (StringUtils.isNotEmpty(parameter)) {
			String para = parameter.replaceAll("^\\?", "");
			String para_tokens[] = para.split("&");
			int para_cnt = para_tokens.length;
			for (int i = 0; i < para_cnt; i++) {
				Matcher para_matcher = para_patten.matcher(para_tokens[i]);
				String para_name = para_matcher.replaceAll("$1");
				String para_value = para_matcher.replaceAll("$2");
				params.put(para_name, para_value);
			}
		}

		if (StringUtils.isNotEmpty(update)) {
			String new_para = update.replaceAll("^\\?", "");
			String new_para_tokens[] = new_para.split("&");
			int new_para_cnt = new_para_tokens.length;
			for (int x = 0; x < new_para_cnt; x++) {
				Matcher new_para_matcher = para_patten
						.matcher(new_para_tokens[x]);
				String new_para_name = new_para_matcher.replaceAll("$1");
				String new_para_value = new_para_matcher.replaceAll("$2");
				params.put(new_para_name, new_para_value);
			}
		}
		
		return getParameter(params);
	}
	
	
	public static String getParameter(Map<?, ?> params) {
		StringBuffer sb = new StringBuffer();
		Iterator<?> iter = params.keySet().iterator();
		
		String key = null;
		String value = null;
		while (iter.hasNext()) {
			key = (String)iter.next();
			value = (String) params.get(key);
			if (StringUtils.isNotEmpty(value))
				sb.append(key + "=" + value + "&");
		}
		return sb.toString().replaceAll("&$", "");
	}
	

	public static String getParameter(HttpServletRequest request) throws Exception {
		String queryString = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			queryString = request.getQueryString();
		
		return getParameter(null, URLDecoder.decode(queryString, "UTF-8"), null);
	}
	
	
	public static String getParameter(String parameter, String update) throws Exception {
		return getParameter(null, parameter, update);
	}
	

	public static String getParameter(HttpServletRequest request, String update) throws Exception {
		String parameter = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			parameter = request.getQueryString();
		
		return getParameter(null, URLDecoder.decode(parameter, "UTF-8"), update);
	}

	
	public static String getParameter(Map<String, Object> params, String update) throws Exception {
		return getParameter(params, null, update);
	}
	

	public static String getPrefixParameter(HttpServletRequest request, String update, String prefix) throws Exception {
		String parameter = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			parameter = request.getQueryString();
		
		parameter = getParameter(null, URLDecoder.decode(parameter, "UTF-8"), update);
		if(StringUtils.isNotEmpty(parameter))
			parameter = prefix + parameter;
		
		return parameter;
	}

	
	public static String getPrefixParameter(HttpServletRequest request, String prefix) throws Exception {
		String parameter = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			parameter = request.getQueryString();
		
		parameter = getParameter(null, URLDecoder.decode(parameter, "UTF-8"), null);
		if(StringUtils.isNotEmpty(parameter))
			parameter = prefix + parameter;
		
		return parameter;
	}
	
	
	
	public static String getPrefixParameter(Map<String, Object> params, String prefix) throws Exception {
		String parameter = getParameter(params);
		if(StringUtils.isNotEmpty(parameter))
			parameter = prefix + parameter;
		
		return parameter;
	}
	

}
