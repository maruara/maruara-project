package com.web;

import java.util.Map;

import javax.annotation.Resource;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring-app.xml", "classpath:spring-dao.xml" })
public class PostFacadeCacheTest {
	
	@Resource
	private Map map;  
	
	@Before
	public void before() {
	}  
	
	@Test 
	public void test() {  
	}


	
}
