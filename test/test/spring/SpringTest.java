package test.spring;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.web.services.ServiceTest;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/spring/common-*.xml", "classpath:config/spring/context-*.xml"})
//@TransactionConfiguration(transactionManager = "txMgr", defaultRollback = false)
//@Transactional
public class SpringTest {
	
//	@Autowired
//	BoardAction boardAction;
	
	@Autowired
	private ApplicationContext context;
	
	
	@BeforeClass
	public static void setUp() {
		/*
		try {
			// -Dlog4j.configuration=classpath:config/log/log4j.xml
			Log4jConfigurer.initLogging("classpath:log4j.xml");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
	}
	
	
	@Test
	public void test() {
		//ApplicationContext context = new GenericXmlApplicationContext("classpath:config/spring/common-*.xml", "classpath:config/spring/context-*.xml");
		assertNotNull(context.getBean("serviceTest"));
		
		ServiceTest serviceTest = context.getBean("serviceTest", ServiceTest.class);
		assertThat(serviceTest, is(ServiceTest.class));
	}
	
}
