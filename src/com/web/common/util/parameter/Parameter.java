package com.web.common.util.parameter;

import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.junit.Test;

public class Parameter {

	/**
	 * QueryString 컨트롤러
	 * 
	 * @param parameter
	 * @param update
	 * @return
	 */
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
	
	
	
	
	/**
	 * Map Data를 QueryString으로 변환
	 * 
	 * @param params
	 * @return
	 */
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
	
	
	
	
	/**
	 * Request QueryString 컨트롤러
	 * 
	 * @param request
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getParameter(HttpServletRequest request) throws Exception {
		String queryString = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			queryString = request.getQueryString();
		
		return getParameter(null, URLDecoder.decode(queryString, "UTF-8"), null);
	}
	
	
	
	
	/**
	 * String Parameter 컨트롤러
	 * 
	 * @param parameter
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getParameter(String parameter, String update) throws Exception {
		return getParameter(null, parameter, update);
	}
	
	
	
	/**
	 * Request QueryString 컨트롤러
	 * 
	 * @param request
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getParameter(HttpServletRequest request, String update) throws Exception {
		String parameter = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			parameter = request.getQueryString();
		
		return getParameter(null, URLDecoder.decode(parameter, "UTF-8"), update);
	}
	
	
	
	
	/**
	 * Map Parameter 컨트롤러
	 * 
	 * @param params
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getParameter(Map<String, Object> params, String update) throws Exception {
		return getParameter(params, null, update);
	}
	
	
	
	
	/**
	 * Request QueryString Prefix 컨트롤러
	 * 
	 * @param request
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getPrefixParameter(HttpServletRequest request, String update, String prefix) throws Exception {
		String parameter = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString())) {
			parameter = request.getQueryString();
		}
		
		parameter = getParameter(null, URLDecoder.decode(parameter, "UTF-8"), update);
		if(StringUtils.isNotEmpty(parameter) && StringUtils.isNotEmpty(prefix)) {
			parameter = prefix + parameter;
		}
		
		return parameter;
	}
	
	
	
	/**
	 * Request QueryString Prefix 컨트롤러
	 * 
	 * @param request
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getPrefixParameter(HttpServletRequest request, String prefix) throws Exception {
		String parameter = "";
		if(request != null && StringUtils.isNotEmpty(request.getQueryString()))
			parameter = request.getQueryString();
		
		parameter = getParameter(null, URLDecoder.decode(parameter, "UTF-8"), null);
		if(StringUtils.isNotEmpty(parameter))
			parameter = prefix + parameter;
		
		return parameter;
	}
	
	
	/**
	 * Map Prefix 컨트롤러
	 * 
	 * @param request
	 * @param update
	 * @return
	 * @throws Exception
	 */
	public static String getPrefixParameter(Map<String, Object> params, String prefix) throws Exception {
		String parameter = getParameter(params);
		if(StringUtils.isNotEmpty(parameter))
			parameter = prefix + parameter;
		
		return parameter;
	}
	
	
	
	
	
	@Test
	public void test() throws Exception {
		
		String parameter = "search=title&date=2010-02-11&page=2";
		
		System.out.println("[ 현재 파라미터 ]");
		System.out.println(parameter + "\n");
		
		
		System.out.println("[ date 파라미터 변경하기 ]");
		System.out.println( getParameter(parameter, "date=2011-10-26"));
		System.out.println();
		
		
		System.out.println("[ page 파라미터 삭제하기 ]");
		System.out.println( getParameter(parameter, "page=") );
		System.out.println();
		
		System.out.println("[ page=1을 추가하고, search=title로 변경하며, date 파라미터는 삭제하기 ]");
		System.out.println( getParameter(parameter, "page=1&search=title&date=") );
		System.out.println();
		
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("protocal", "http");
		map.put("port", "80");
		System.out.println("[ Map을 파라미터 String으로 변환 ]");
		System.out.println( getParameter(map, null) );
		System.out.println();
		
		
		System.out.println("[ Map과 파라미터를 동시에 추가하여 변환 ]");
		System.out.println( getParameter(map, parameter, "page=") );
		System.out.println();
	}
	

}
