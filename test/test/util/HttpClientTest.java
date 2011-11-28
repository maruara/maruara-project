package test.util;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIUtils;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HttpClientTest {
	
	private static final Logger log = LoggerFactory.getLogger(HttpClientTest.class);
	

	@Test
	public void test() throws Exception {
		
		HttpClient httpClient = new DefaultHttpClient();
		
		/*
		 * http://www.wormstory.com/front/php/login/login_a.php
		 */
		
		HttpPost httpPost = new HttpPost();
		
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("id", "kimkw"));
		params.add(new BasicNameValuePair("passwd", "rlarhkddnr"));
		URI uri = URIUtils.createURI("http", "www.wormstory.com", 80, "/front/php/login/login_a.php", URLEncodedUtils.format(params, "UTF-8"), null);
		httpPost.setURI(uri);
		
		
		log.debug("Request URI : {}", httpPost.getURI());
		
		HttpResponse httpResponse = httpClient.execute(httpPost);
		log.debug("httpResponse : {}", httpResponse);
		
		
	}
	
}
