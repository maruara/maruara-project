package com.web.common.util;

import org.apache.commons.lang3.StringUtils;

/**
 * <PRE>
 * BoxParam
 * </PRE>
 * 
 * @date	: $Date: 2010-05-25 15:51:15 +0900 (화, 25 5월 2010) $
 * @version	: $Id: BoxParam.java 10 2010-05-25 06:51:15Z jun60 $
 * @author	: $Author: jun60 $
 */
public class BoxParam extends Box
{
	/** Serial Version ID */
	private static final long serialVersionUID = 1L;

	/**
	 * Constructor
	 */
	public BoxParam(){
	}
	
	/**
	 * Constructor
	 * @param id
	 * @param value
	 */
	public BoxParam(String id,String value){
	    this.put(id,value);
	}
	
	/**
	 * set Default
	 * @param id
	 * @param value
	 */
	public void setDefault(String id,String value){
		if(isNotEmpty(id)==false) put(id, value);
	}
		
	/**
	 * put String
	 * @param id
	 * @param value
	 */
	public void putString(String id,int value){
		put(id,String.valueOf(value));
	}
	
	/**
	 * put
	 * @param id
	 * @param value
	 * @param defaultValue
	 */
	public void put(String id,String value,String defaultValue){
		if(StringUtils.isEmpty(value)) put(id,defaultValue);
		else put(id,value);
	}
	
    /**
     * containsOfArray
     * @param id
     * @param value
     * @return boolean
     */
    public boolean containsOfArray(String id,String value){
        String [] arr = getStringArray(id);
        if(arr != null){
            for(int i=0;i<arr.length;i++){
                if(StringUtils.equals(value,arr[i])) return true;
            }
        }
        return false;
    }
}