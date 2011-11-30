package test.util;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.Header;
import org.apache.http.HeaderElement;
import org.apache.http.HeaderElementIterator;
import org.apache.http.HttpEntity;
import org.apache.http.HttpException;
import org.apache.http.HttpRequest;
import org.apache.http.HttpRequestInterceptor;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.HttpVersion;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIUtils;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.cookie.Cookie;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeaderElementIterator;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.CoreProtocolPNames;
import org.apache.http.protocol.HTTP;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HttpClientTest {

	private static final Logger log = LoggerFactory.getLogger(HttpClientTest.class);
	
	
	
	
	/**
	 * 네이버 검색
	 * 
	 * @throws Exception
	 */
	@Test
	public void get() throws Exception {
		
		/* 네이버 쿠키 얻어오기
		 * http://lcs.naver.com/m?u=http%3A%2F%2Fwww.naver.com%2F&e=&i=&os=Win32&ln=ko-KR&sr=1366x768&bw=1349&bh=322&c=24&j=N&jv=1.8&k=Y&fv=11.0&sl=&ct=&cta=N&p=Shockwave%20Flash%3BAhnLab%20Online%20Security%3BTouchEn%20Key%20for%20Multi-Browser%3BMicrosoft%20Office%202010%3BSoftForum%20XecureWeb%20File%20Control%20Plug-in%3BSoftForum%20XecureWeb%20Control%20Plug-in%3BAdobe%20Acrobat&EOU
		 * http://lcs.naver.com/m?u=http://www.naver.com/&e=&i=&os=Win32&ln=ko-KR&sr=1366x768&bw=1349&bh=322&c=24&j=N&jv=1.8&k=Y&fv=11.0&sl=&ct=&cta=N&p=Shockwave Flash;AhnLab Online Security;TouchEn Key for Multi-Browser;Microsoft Office 2010;SoftForum XecureWeb File Control Plug-in;SoftForum XecureWeb Control Plug-in;Adobe Acrobat&EOU
		 */
		
		HttpClient httpClient = new DefaultHttpClient();
		
		List<NameValuePair> nvpList = new ArrayList<NameValuePair>();
		nvpList.add(new BasicNameValuePair("u", "http://www.naver.com/"));
		nvpList.add(new BasicNameValuePair("e", ""));
		nvpList.add(new BasicNameValuePair("i", ""));
		nvpList.add(new BasicNameValuePair("os", "Win32"));
		nvpList.add(new BasicNameValuePair("ln", "ko-KR"));
		nvpList.add(new BasicNameValuePair("sr", "1366x768"));
		nvpList.add(new BasicNameValuePair("bw", "1349"));
		nvpList.add(new BasicNameValuePair("bh", "322"));
		nvpList.add(new BasicNameValuePair("c", "24"));
		nvpList.add(new BasicNameValuePair("j", "N"));
		nvpList.add(new BasicNameValuePair("jv", "1.8"));
		nvpList.add(new BasicNameValuePair("k", "Y"));
		nvpList.add(new BasicNameValuePair("fv", "11.0"));
		nvpList.add(new BasicNameValuePair("sl", ""));
		nvpList.add(new BasicNameValuePair("ct", ""));
		nvpList.add(new BasicNameValuePair("cta", "N"));
		nvpList.add(new BasicNameValuePair("p", "Shockwave Flash;AhnLab Online Security;TouchEn Key for Multi-Browser;Microsoft Office 2010;SoftForum XecureWeb File Control Plug-in;SoftForum XecureWeb Control Plug-in;Adobe Acrobat&EOU"));
		URI uri = URIUtils.createURI("http", "lcs.naver.com", 80, "/m", URLEncodedUtils.format(nvpList, HTTP.UTF_8), null);
		
		HttpGet httpGet = new HttpGet(uri);
		log.debug("Request Post : {}", httpGet.getURI());
		
		
		HttpResponse response = httpClient.execute(httpGet);
		outResponse(response);
		
		
		
		
		//--> 네이버 검색
		nvpList = new ArrayList<NameValuePair>();
		nvpList.add(new BasicNameValuePair("where", "nexearch"));
		nvpList.add(new BasicNameValuePair("query", "검색"));
		nvpList.add(new BasicNameValuePair("ie", "utf8"));
		httpGet.setURI(URIUtils.createURI("http", "search.naver.com", 80, "/search.naver", URLEncodedUtils.format(nvpList, HTTP.UTF_8), null));
		log.debug("Request Post : {}", httpGet.getURI());
		
		
		response = httpClient.execute(httpGet);
		outResponse(response);
		
		
		httpClient.getConnectionManager().shutdown();
	}
	
	
	
	
	
	/**
	 * HttpClient Parameter 테스트
	 * 
	 * @throws Exception
	 */
	@Test
	public void paramTest() throws Exception {
		
		DefaultHttpClient httpclient = new DefaultHttpClient();
		httpclient.getParams().setParameter(CoreProtocolPNames.PROTOCOL_VERSION, HttpVersion.HTTP_1_0);
		httpclient.getParams().setParameter(CoreProtocolPNames.HTTP_CONTENT_CHARSET, HTTP.UTF_8);
		
		HttpGet httpget = new HttpGet("http://www.google.com/");
		httpget.getParams().setParameter(CoreProtocolPNames.PROTOCOL_VERSION, HttpVersion.HTTP_1_1);
		httpget.getParams().setParameter(CoreProtocolPNames.USE_EXPECT_CONTINUE, Boolean.FALSE);
		
		httpclient.addRequestInterceptor(new HttpRequestInterceptor() {
		    public void process(
		            final HttpRequest request, 
		            final HttpContext context) throws HttpException, IOException {
		        System.out.println(request.getParams().getParameter(
		                CoreProtocolPNames.PROTOCOL_VERSION));
		        System.out.println(request.getParams().getParameter(
		                CoreProtocolPNames.HTTP_CONTENT_CHARSET));
		        System.out.println(request.getParams().getParameter(
		                CoreProtocolPNames.USE_EXPECT_CONTINUE));
		        System.out.println(request.getParams().getParameter(
		                CoreProtocolPNames.STRICT_TRANSFER_ENCODING));
		    }
		});
		
		
		log.debug("Request Post : {}", httpget.getURI());
		httpclient.execute(httpget);
		
		
	}
	
	
	
	
	
	
	/**
	 * GET 샘플
	 * 
	 * @throws Exception
	 */
	@Test
	public void getTest() throws Exception {
		
		DefaultHttpClient httpClient = new DefaultHttpClient();
		
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("userId", "test01"));
		params.add(new BasicNameValuePair("password", "1"));
		URI uri = URIUtils.createURI("http", "localhost", 8080, "/mgov/front/loginProc.do", URLEncodedUtils.format(params, "UTF-8"), null);
		HttpGet httpGet = new HttpGet(uri); 
		
		/*
		 * Header 추가 하는 방법
		
		httpGet.addHeader(new BasicHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*   /*;q=0.8"));
		httpGet.addHeader(new BasicHeader("Accept-Charset", "EUC-KR,utf-8;q=0.7,*;q=0.7"));
		httpGet.addHeader("Connection", "Keep-Alive");
		httpGet.addHeader("Content-Type", "text/html;charset=UTF8");
		
		Cookie Policy
		httpGet.getParams().setParameter(ClientPNames.COOKIE_POLICY, CookiePolicy.BROWSER_COMPATIBILITY);
		
		Cookie Set
		httpClient.setCookieStore(cookiesList);
		httpClient.setCookieStore(new BasicCookieStore().addCookie(cookie));
		*/
		
		log.debug("Request Post : {}", httpGet.getURI());
		
		
		HttpResponse response = httpClient.execute(httpGet);
		outResponse(response);
		
		
		List<Cookie> cookiesList = httpClient.getCookieStore().getCookies();
		log.debug("----------------------------------------------------------------------------------------------");
		log.debug("--  Cookie");
		for(int i=0; i<cookiesList.size(); i++) {
			Cookie cookie = cookiesList.get(i);
			log.debug("--  Cookie {}", i);
			log.debug("--  Cookie Name : {}", cookie.getName());			
			log.debug("--  Cookie Value : {}", cookie.getValue());			
			log.debug("--  Cookie Path : {}", cookie.getPath());			
			log.debug("--  Cookie Version : {}", cookie.getVersion());			
			log.debug("--  Cookie Domain : {}", cookie.getDomain());			
			log.debug("--  Cookie ExpiryDate : {}", cookie.getExpiryDate());			
		}
		log.debug("----------------------------------------------------------------------------------------------");
		
	}
	
	
	
	
	/**
	 * POST
	 * 
	 * @throws Exception
	 */
	@Test
	public void form() throws Exception {
		HttpClient httpClient = new DefaultHttpClient();
		
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("userId", "test01"));
		params.add(new BasicNameValuePair("password", "1"));
		UrlEncodedFormEntity formEntity = new UrlEncodedFormEntity(params, "UTF-8");
		HttpPost httpPost = new HttpPost("http://localhost:8080/mgov/front/loginProc.do");
		httpPost.setEntity(formEntity);
		
		
		
		log.debug("Request Post : {}", httpPost.getURI());
		
		
		HttpResponse response = httpClient.execute(httpPost);
		outResponse(response);
		
		
		if(response.getStatusLine().getStatusCode() == HttpStatus.SC_MOVED_TEMPORARILY) {
			Header[] header = response.getHeaders("Location");
			log.debug(header[0].getValue());
			
			
			HttpGet httpGet = new HttpGet(header[0].getValue());
			response = httpClient.execute(httpGet);
			outResponse(response);
		}
		
	}
	
	
	
	
	@Test
	public void form2() throws Exception {
		HttpClient httpClient = new DefaultHttpClient();
		
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("userId", "test01"));
		params.add(new BasicNameValuePair("password", "1"));
		UrlEncodedFormEntity formEntity = new UrlEncodedFormEntity(params, "UTF-8");
		HttpPost httpPost = new HttpPost("http://localhost:8080/mgov/front/loginProc.do");
		httpPost.setEntity(formEntity);
		
		
		log.debug("Request Post : {}", httpPost.getURI());
		
		
		HttpResponse response = httpClient.execute(httpPost);
		outResponse(response);
		
		
		if(response.getStatusLine().getStatusCode() == HttpStatus.SC_MOVED_TEMPORARILY) {
			Header[] header = response.getHeaders("Location");
			log.debug(header[0].getValue());
			
			
			HttpGet httpGet = new HttpGet(header[0].getValue());
			log.debug("Request Post : {}", httpGet.getURI());
			response = httpClient.execute(httpGet);
			outResponse(response);
			
			
			httpGet = new HttpGet("http://localhost:8080/mgov/front/service/pbads_fspwrite.do");
			log.debug("Request Post : {}", httpGet.getURI());
			response = httpClient.execute(httpGet);
			outResponse(response);
			
		}
		
	}
	
	
	
	
	private void outResponse(HttpResponse response) throws Exception {
		log.debug("=================================================================================================");
		log.debug("==  Response");
		log.debug("==  Response : {}", response);
		log.debug("==  Response Protocal Version : {}", response.getProtocolVersion());
		log.debug("==  Response Status Line : {}", response.getStatusLine());
		log.debug("==  Response Status Line Status Code : {}", response.getStatusLine().getStatusCode());
		log.debug("==  Response Status Line Reason Phrase : {}", response.getStatusLine().getReasonPhrase());
		log.debug("==  Response OK : {}", (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK));
		log.debug("=================================================================================================\n");
		
		
		log.debug("=================================================================================================");
		log.debug("==  Header");
		Header[] headers = response.getAllHeaders();
		log.debug("Response Header Length : {}", headers.length);
		for(int i=0, s=headers.length; i<s; i++) {
			Header header = headers[i];
			log.debug("==  Header{} Name : {}", (i+1), header.getName());
			log.debug("==  Header{} Value : {}", (i+1), header.getValue());
		}
		log.debug("=================================================================================================\n");
		
		
		
		log.debug("=================================================================================================");
		log.debug("==  Cookie");
		log.debug("==  Set Cookie : {}", response.getLastHeader("Set-Cookie"));
		HeaderElementIterator iter = new BasicHeaderElementIterator(response.headerIterator("Set-Cookie"));
		int j = 1;
		while(iter.hasNext()) {
			HeaderElement he = iter.nextElement();
			log.debug("==  Header{} Name : {}", j, he.getName());
			log.debug("==  Header{} Value : {}", j, he.getValue());
			NameValuePair[] nvp = he.getParameters();
			for(int i=0; i<nvp.length; i++) {
				log.debug("==  Header Parameter : {}", nvp[i]);
			}
			j++;
		}
		log.debug("=================================================================================================\n");
		
		
		log.debug("=================================================================================================");
		log.debug("==  Entity");
		HttpEntity entity = response.getEntity();
		log.debug("==  Content Type : {}", entity.getContentType());
		log.debug("==  Content Length : {}", entity.getContentLength());
		log.debug("==  Content Encoding : {}", entity.getContentEncoding());
		log.debug("==  Content CharSet : {}", EntityUtils.getContentCharSet(entity));
		log.debug("==  Content Mime Type : {}", EntityUtils.getContentMimeType(entity));
		if(entity != null) {
			log.debug("Entity : {}", EntityUtils.toString(entity, "UTF-8"));
		}
		log.debug("=================================================================================================");
		
		
		EntityUtils.consume(entity);
	}
	
}
