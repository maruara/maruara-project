/*------------------------------------------------------------------------------
 * NAME : PrettyPrint
 * DESC : List, Map 출력 포맷
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
package com.web.common;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;



/**
 * <pre>List, Map 출력 포맷</pre>
 */
public class PrettyPrint {
	
	public static String out(Object obj, int level, int indent, String padding) {
		PrettyPrint.level = level;
		PrettyPrint.indent = indent;
		PrettyPrint.padding = padding;
		
		StringBuffer sb = new StringBuffer();
		if(obj instanceof Map)
			prettyMap((Map<?, ?>)obj, sb);
		else if(obj instanceof List)
			prettyList((List<?>)obj, sb);
		else
			sb.append(obj.toString());
		return sb.toString();
	}
	
	private static void prettyMap(Map<?, ?> map, StringBuffer sb) {
		if(map != null) {
			Set<?> entries = map.entrySet();
			Iterator<?> iterator = entries.iterator();
			Entry<?, ?> entry = null;
			Object obj = null;
		    while (iterator.hasNext()) {
		    	entry = (Entry<?, ?>)iterator.next();
		    	if(level != -1 && level == rLevel) {
		    		repeat(padding, indent, sb);
		    		sb.append(entry.getKey()).append("=").append(entry.getValue()).append("\n");
		    	} else {
			    	obj = entry.getValue();
			    	if(obj instanceof Map) {
			    		processMap((Map<?, ?>)obj, (String)entry.getKey(), sb);
			    	} else if(obj instanceof List) {
			    		processList((List<?>)obj, (String)entry.getKey(), sb);
			    	} else {
			    		repeat(padding, indent, sb);
			    		sb.append(entry.getKey()).append("=").append(entry.getValue()).append("\n");
			    	}
		    	}
		    }
		}
	}
	
	private static void prettyList(List<?> list, StringBuffer sb) {
		if(list != null) {
			Iterator<?> iterator = list.iterator();
		    while (iterator.hasNext()) {
		    	Object obj = iterator.next();
		    	
		    	if(level != -1 && level == rLevel) {
		    		repeat(padding, indent, sb);
		    		sb.append(obj.toString()).append("\n");
		    	} else {
			    	if(obj instanceof Map) {
			    		processMap((Map<?, ?>)obj, null, sb);
			    	} else if(obj instanceof List) {
			    		processList((List<?>)obj, null, sb);
			    	} else {
			    		repeat(padding, indent, sb);
			    		sb.append(obj.toString()).append("\n");
			    	}
		    	}
		    }
		}
	}
	
	private static void processMap(Map<?, ?> map, String key, StringBuffer sb) {
		repeat(padding, indent, sb);
		if(key != null && key.length() > 0)
			sb.append(key).append("=");
		sb.append("{\n");
		indent++;
		rLevel++;
		
		prettyMap(map, sb);
		
		indent--;
		rLevel--;
		repeat(padding, indent, sb);
	    sb.append("}\n");
	}
	
	private static void processList(List<?> list, String key, StringBuffer sb) {
		repeat(padding, indent, sb);
		if(key != null && key.length() > 0)
			sb.append(key).append("=");
		sb.append("[\n");
		indent++;
		rLevel++;
		
		prettyList(list, sb);
		
		indent--;
		rLevel--;
		repeat(padding, indent, sb);
	    sb.append("]\n");
	}
	
	private static void repeat(String str, int repeat, StringBuffer sb) {
		if(str == null)
			return;
		if(repeat <= 0)
			return;
		int inputLength = str.length();
		if(repeat == 1 || inputLength == 0) {
			sb.append(str);
			return;
		}
		for(int i=0; i<repeat; i++) {
			sb.append(str);
		}
	}
	
	public static String out(Object obj) {
		return out(obj, levelDefault, indentDefault, paddingDefault);
	}
	
	public static String out(Object obj, int indent) {
		return out(obj, levelDefault, indent, paddingDefault);
	}
	
	public static String out(Object obj, String padding) {
		return out(obj, levelDefault, indentDefault, padding);
	}
	
	public static String out(Object obj, int indent, String padding) {
		return out(obj, levelDefault, indent, padding);
	}
	
	public static String out(int level, Object obj) {
		return out(obj, level, indentDefault, paddingDefault);
	}
	
	public static String out(int level, Object obj, int indent) {
		return out(obj, level, indent, paddingDefault);
	}
	
	public static String out(int level, Object obj, String padding) {
		return out(obj, level, indentDefault, padding);
	}
	
	public static String out(int level, Object obj, int indent, String padding) {
		return out(obj, level, indent, padding);
	}
	
	public static void print(Object obj) {
		System.out.println(out(obj, levelDefault, indentDefault, paddingDefault));
	}
	
	public static void print(Object obj, int indent) {
		System.out.println(out(obj, indent));
	}
	
	public static void print(Object obj, String padding) {
		System.out.println(out(obj, padding));
	}
	
	public static void print(Object obj, int indent, String padding) {
		System.out.println(out(obj, indent, padding));
	}
	
	public static void print(int level, Object obj) {
		System.out.println(out(level, obj));
	}
	
	public static void print(int level, Object obj, int indent) {
		System.out.println(out(level, obj, indent));
	}
	
	public static void print(int level, Object obj, String padding) {
		System.out.println(out(level, obj, padding));
	}
	
	public static void print(int level, Object obj, int indent, String padding) {
		System.out.println(out(level, obj, indent, padding));
	}
	
	
	private static int indent = 0;  // 들여쓰기
	private static int indentDefault = 0; // 들여쓰기 (기본설정)
	private static String padding = " ";  // 들여쓰기할 때 문자
	private static String paddingDefault = "    ";  // 들여쓰기할 때 문자 (기본설정)
	private static int level = -1;  // 레벨을 설정하면 현재 레벨까지만 들여쓰기하여 출력
	private static int levelDefault = 1; // 레벨을 설정하면 현재 레벨까지만 들여쓰기하여 출력 (기본설정)
	private static int rLevel = 0;  // 실제 레벨 (설정 불가)
	
	
	
	public static void main(String[] args) {
		Map<String, Object> map1 = new HashMap<String, Object>();
		Map<String, Object> map2 = new HashMap<String, Object>();
		Map<String, Object> map3 = new HashMap<String, Object>();
		List<Object> list1 = new ArrayList<Object>();
		List<Object> list2 = new ArrayList<Object>();
		List<Object> list3 = new ArrayList<Object>();
		
		map1.put("a", "1");
		map1.put("b", map2);
		map1.put("c", "3");
		
		map2.put("aa", "11");
		map2.put("bb", list1);
		map2.put("cc", list2);
		
		list1.add("list1 1");
		list1.add("list1 2");
		list1.add(map3);
		
		map3.put("aaa", "111");
		map3.put("bbb", "222");
		
		list2.add("list2 1");
		list2.add("list2 2");
		list2.add(list3);
		
		list3.add("list3 1");
		list3.add("list3 2");
		
		System.out.println(PrettyPrint.out(map1));
		System.out.println(PrettyPrint.out(1, map1, 3));
		PrettyPrint.print(map1);		
	}

}
