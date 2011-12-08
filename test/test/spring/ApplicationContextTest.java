package test.spring;

/*
 * Jnit에서 session, request 라는 scope를 applicationContext에 넣으려면 Thread에 넣을 수 없다고 오류가 나온다.
 * applicationContext 자체가 session, request 를 제공하는 GenericWebApplicationContext을 사용하면 해결되는데 applicationContext clss를 변경하려면
 * applicationContextLoader를 사용하면 되는데 직접 구현한다. (참고. http://d.hatena.ne.jp/yehara/20090317/1237276275)
 */

import static org.junit.Assert.assertEquals;

import javax.annotation.Resource;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.HandlerAdapter;

import com.web.front.test.controllers.TestController;


@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = {"classpath:config/spring/*.xml"})
public class ApplicationContextTest {
	
	private MockHttpServletRequest request;
	private MockHttpServletResponse response;
	
	
	private HandlerAdapter handlerAdapter;
	
	
	TestController controller;
	
	
	
	@BeforeClass
	public void setUp() {
//		request = new MockHttpServletRequest();
//		request.setSession(new MockHttpSession());
//		response = new MockHttpServletResponse();
//		controller = super.applicationContext.getBean(TestController.class);
//		RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
	}
	
	
	@Test
	public void getResult() throws Exception {
//		request.setRequestURI("/test");
//		handlerAdapter.handle(request, response, controller);
//		assertEquals("hello", response.getContentAsString());
	}
	
}
