package com.web;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.http.server.ServletServerHttpRequest;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class Test1 {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Map map = new HashMap();
		map.put("a", "11");
		map.put("b", "22");
		
		MappingJacksonHttpMessageConverter converter = new MappingJacksonHttpMessageConverter();
		//converter.writeInternal(map, );
		//converter.write(t, contentType, outputMessage);
		//converter.write("", "", "");
	}
	
	
	@Test
	public void test() {
		Map<String, String> data = new HashMap<String, String>();
		data.put("id", "user1");
		
		assertThat(data.get("id").toString(), is("user2"));
		
		assertEquals(data.get("id").toString(), "user1");
	}
	

}
