package com.web.common;

import java.io.Serializable;
import java.util.LinkedHashMap;

import org.apache.commons.lang3.StringUtils;

/**
 * <PRE>
 * Box 
 * </PRE>
 * 
 * @date	: $Date: 2010-05-25 15:51:15 +0900 (화, 25 5월 2010) $
 * @version : $Id: Box.java 10 2010-05-25 06:51:15Z jun60 $
 * @author	: $Author: jun60 $
 */
public class Box extends LinkedHashMap<String,Object> implements Serializable
{
	/** SerialVersionUID */
	private static final long serialVersionUID = -3331697294570864271L;
	
	/**
	 * Constructor
	 */
	public Box(){
		super();
	}
	
	/**
	 * Constructor
	 * @param key
	 * @param value
	 */
	public Box(String key,Object value){
		super();
		put(key, value);
	}
	
	/**
	 * get String Value
	 * @param obj
	 * @return String
	 */
	private String getStringValue(Object obj){
		String reval = null;
		if(obj != null)
		{
			if(obj instanceof String){
				reval = (String)obj;
			}
			else if(obj instanceof String[]){
				String[] valarr =  (String[])obj;
				if(valarr != null && valarr.length > 0 ) reval = valarr[0]; 
			}
			else if(obj instanceof int[]){
				int [] valarr = (int[])obj;
				if(valarr != null && valarr.length > 0 ) reval = String.valueOf(valarr[0]);
			}
			else {
				reval = obj.toString();
			}
		}
		return reval;
	}
	
	/**
	 * get Object
	 * @param id
	 * @param defaultObject
	 * @return Object
	 */
	public Object get(Object id,Object defaultObject){
	    Object obj = super.get(id);
	    if(obj == null) return defaultObject;
	    return obj;
	}
	
	/**
	 * get String
	 * @param columnName
	 * @return String
	 */
	public String getString(String id){
		Object obj = super.get(id);
		return getStringValue(obj);
	}
	
	/**
	 * get String 
	 * @param id
	 * @param defaultStr
	 * @return String
	 */
	public String getString(String id,String defaultStr){
	    Object obj = super.get(id);
	    if(obj == null){
	        return defaultStr;
	    }
	    return getStringValue(obj);
	}
	
	/**
	 * get Int
	 * @param id
	 * @return int
	 */
	public int getInt(String id){
	    return getInt(id,0);
	}
	
	/**
	 * get Int
	 * @param id
	 * @param defaultValue
	 * @return int
	 */
	public int getInt(String id,int defaultValue){
		int re = defaultValue;
		
		Object obj = super.get(id);
		if(obj == null) return re;
		if( obj instanceof Number ){
		    return ((Number)obj).intValue();
		}
		try{
			re = Integer.parseInt(getStringValue(obj));
		}catch(Exception ex){
		}
		return re;
	}
	
	/**
	 * get long
	 * @param id
	 * @return long
	 */
	public long getLong(String id){
	    return getLong(id,0);
	}
	
	/**
	 * get long
	 * @param id
	 * @param defaultValue
	 * @return long
	 */
	public long getLong(String id,long defaultValue){
		long re = defaultValue;
		
		Object obj = super.get(id);
		if(obj == null) return re;
		if( obj instanceof Number ){
		    return ((Number)obj).longValue();
		}
		try{
			re = Long.parseLong(getStringValue(obj));
		}catch(Exception ex){
		}
		return re;
	}
	
	/**
	 * get Double
	 * @param id
	 * @return double
	 */
	public double getDouble(String id){
	    double re = 0.0;
	    
		Object obj = super.get(id);
		if(obj == null) return re;
		if( obj instanceof Number ){
		    return ((Number)obj).doubleValue();
		}
		
		try{
			re = Double.parseDouble(getStringValue(obj));
		}catch(Exception ex){
		}
		return re;
	}
	
	/**
	 * get String Array
	 * @param id
	 * @return String []
	 */
	public String [] getStringArray(String id){
		Object obj = super.get(id);
		String [] reval = null;
		if(obj != null){
			if( obj instanceof String[]){
				reval = (String[])obj;
			} else {
				reval = new String[1];
				reval[0] = obj.toString();
			}
		}
		return reval;
	}
	
	/**
	 * isNotEmpty
	 * @param id
	 * @return boolean
	 */
	public boolean isNotEmpty(String id){
		String value = getString(id);
		return StringUtils.isNotEmpty(value);
	}
	
	/**
	 * isEmpty
	 * @param id
	 * @return boolean
	 */
	public boolean isEmpty(String id){
	    String value = getString(id);
	    return StringUtils.isEmpty(value);
	}
	
	/**
	 * value Equals
	 * @param id
	 * @param value
	 * @return boolean
	 */
	public boolean valueEquals(String id,String value){
		String value1 = getString(id);
		return StringUtils.equals(value1,value);
	}
	
	/**
     * add Data<br>
     * @param key
     * @param value
     */
    public void addData(String key,Object value){
    	super.put(key,value);
    }
    
    /**
     * sumInt
     * @param key
     * @param value
     */
    public void sum(String key, long value){
        long v = getLong(key,0);
        put(key,String.valueOf(v+value));
    }
}