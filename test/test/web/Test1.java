package test.web;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

public class Test1 {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Map<String, String> map = new HashMap<String, String>();
		map.put("a", "11");
		map.put("b", "22");
		
//		MappingJacksonHttpMessageConverter converter = new MappingJacksonHttpMessageConverter();
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
	
	
	@Test
	public void test2() {
		System.out.println("log");
	}

}
