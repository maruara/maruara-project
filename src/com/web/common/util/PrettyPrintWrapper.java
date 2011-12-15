/*------------------------------------------------------------------------------
 * NAME : PrettyPrintWrapper
 * DESC : List, Map 출력 포맷 Wrapper
 *
 * VER  : v1.0
 * PROJ : 
 *------------------------------------------------------------------------------
**                  변         경         사         항
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2011.08.25       	최초 프로그램 작성
 *------------------------------------------------------------------------------*/
package com.web.common.util;

import java.util.Map;



/**
 * <pre>List, Map 출력 포맷 Wrapper</pre>
 */
public class PrettyPrintWrapper {
	
	/*
	 * log.debug("request\n{}",new PrettyPrintWrapper(req));
	 */
	
	private Map<?,?> map;
	
	public PrettyPrintWrapper(Map<?,?> map){
		this.map = map;
	}
	
	public String toString(){
		if(map == null)
			return "";
		return PrettyPrint.out(map);
	}
	
}
