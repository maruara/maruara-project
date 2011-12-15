package com.web.common.util;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommonUtil {

	private static final Logger log = LoggerFactory.getLogger(CommonUtil.class);
	
	
	/**
	 * Client IP 조회
	 * 
	 * @param request
	 * @return
	 */
	public static String getRemoteAddr(HttpServletRequest request) {
		
		// 거의 다 됨
		String clientIP = request.getHeader("Proxy-Client-IP");
		
		if(StringUtils.isEmpty(clientIP)) {
			
			// 웹로직 9.x이상부턴 default로 누락
			// 웹로직 콘솔에서 서버 > 구성 > 일반 > 고급옵션 표시를 선택 후 'WebLogic 플러그인 사용 가능'에 체크하면 getRemoteAddr()을 사용시 자동으로 clientIP 검색 하지만 default는 false
			clientIP = request.getHeader("WL-Proxy-Client-IP");
			
			if(StringUtils.isEmpty(clientIP)) {
				
				// ms 환경에서 누락
				clientIP = request.getHeader("X-Forwared-For");  
				if(StringUtils.isEmpty(clientIP)) {
					clientIP = request.getRemoteAddr();
				}
			}
		}

		return clientIP;
	}
	
}
