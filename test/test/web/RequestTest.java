package test.web;

import java.net.URI;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/spring/common-*.xml", "classpath:config/spring/context-*.xml", "classpath:config/spring/dispatcher-*.xml"})
public class RequestTest {

	
	private static final Logger log = LoggerFactory.getLogger(RequestTest.class);
	
	
	@Test
	public void testGet() throws Exception {
		RestTemplate rt = new RestTemplate();
		String result = rt.getForObject(new URI("http://localhost:8088/maruara-project/front/prototype/common/locale2"), String.class);
		log.debug("{}", result);
	}
	
	
	
	
	
	
}
