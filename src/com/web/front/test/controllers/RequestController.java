package com.web.front.test.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Response;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.SqlSessionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.NoSuchRequestHandlingMethodException;

@Controller("front.test.RequestController")
@RequestMapping("front/test")
@SuppressWarnings(value={"unused", "rawtypes", "unchecked"})
public class RequestController {

	private static final Logger log = LoggerFactory.getLogger(RequestController.class);
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	@Autowired
	@Qualifier("h2SqlSessionTemplate")
	private SqlSessionTemplate h2SqlSessionTemplate;
	
	//@Autowired
	//private SqlSessionTemplate h2SqlSessionTemplate2;
	
	@Autowired
	private SqlSessionFactory oracleSqlSessionFactory;
	
	@Autowired
	private SqlSessionFactory h2SqlSessionFactory;
	
	//@Autowired
	//private SqlSessionFactory h2SqlSessionFactory2;
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	
	@RequestMapping(value="/request1")
	public String request1(String param1, String param2) {
		log.debug("param1 : " + param1);
		log.debug("param2 : " + param2);
		return "test/request";
	}
	
	@RequestMapping(value="/request2")
	public String request2(
		@RequestParam(value="param1", required=true) String param1,
		@RequestParam(value="param2", required=false) String param2) {
		log.debug("param1 : " + param1);
		log.debug("param2 : " + param2);
		return "test/request";
	}
	
	@RequestMapping(value="/request3")
	public ModelAndView request3(@RequestParam("param1") String param1) {
		log.debug("param1 : " + param1);		
		return new ModelAndView("test/request", "message", param1);
	}
	
	@RequestMapping(value="/request4", method=RequestMethod.GET)
	public String request4() {
		log.debug("");
		return "test/request";
	}
	
	@RequestMapping(value="/request5")
	@ResponseBody
	public String request5() throws Exception {
		String outStr = "Not Hangle";
		return outStr;
	}
	
	@RequestMapping(value="/request6/{id}")
	public String request6(@PathVariable("id") String id) throws Exception {
		log.debug("id : " + id);
		return "test/request";
	}
	
	@RequestMapping(value="/request7")
	public ResponseEntity<String> request7() throws Exception {
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("출력", responseHeaders, HttpStatus.CREATED);
	}
	
	
	//--> param1 파라미터 값이 param1 이어야 함
	@RequestMapping(value="/request8", params="param1=param1")
	public String request8(String param1) throws Exception {
		log.debug("param1 : " + param1);
		return "test/request";
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/request9/{id}")
	public @ResponseBody Employee request9(@PathVariable("id") String id) {
		log.debug("id : " + id);
		Employee e = new Employee();
		e.setId(id);
		e.setName("홍길동");
		return e;
	}
	class Employee {
		String id;
		String name;
		
		public void setId(String id) {
			this.id = id;
		}
		
		public void setName(String name) {
			this.name = name;
		}
		
		public String getId() {
			return id;
		}
		
		public String getName() {
			return name;
		}
	}
	
	@RequestMapping(value="/request10")
	public @ResponseBody Map request10() {
		log.debug("");
		Map map = new HashMap();
		Map child = new HashMap();
		map.put("a", child);
		child.put("aa", "aa");
		child.put("bb", "bb");
		child.put("cc", "cc");
		child.clear();
		map.put("b", child);
		child.put("11", "11");
		child.put("22", "22");
		child.put("33", "33");
		return map;
	}
	
	@RequestMapping("request11")
	@ResponseBody
	public ResponseEntity<Map> request11() {
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		
		Map map = new HashMap();
		Map child = new HashMap();
		map.put("a", child);
		child.put("가가가", "나나나");
		child.put("bb", "bb");
		return new ResponseEntity<Map>(map, responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping("request12")
	@ResponseStatus(value=HttpStatus.OK)
	@ResponseBody
	public String request12(@CookieValue("JSESSIONID") String cookie) {
		return cookie;
	}
	
	@RequestMapping("request13")
	@ResponseBody
	public String request13(@RequestHeader("Host") String host,
		@RequestHeader("Accept") String accept,
		@RequestHeader("Accept-Language") String language,
		@RequestHeader("Accept-Encoding") String encoding ) {
		log.debug("host : " + host);
		log.debug("accept : " + accept);
		log.debug("language : " + language);
		log.debug("encoding : " + encoding);
		return "";
	}
	
	
	@RequestMapping("request14")
	public void request14() throws Exception {
		if(true)
			throw new Exception("에러~");
		log.debug("aa{}bb{}", "11", "22");
		log.debug("aa{}bb{}cc{}", new Object[]{"11", "22", "33"});
	}
	
	
	@RequestMapping("request15/{id:\\d+}")
	@ResponseBody
	@ExceptionHandler(NoSuchRequestHandlingMethodException.class)
	public Map<String, Object> request15(
			final Exception e, 
			final HttpServletRequest request,
			@PathVariable("id") String id ) {
		final Map<String, Object> map = new HashMap<String, Object>();
		map.put("errorCode", 1234);
		map.put("errorMessage", "Some error message"); 
		
		return map;
	}
	
	
	@ExceptionHandler(IOException.class)
    public String handleException(IOException ex, HttpServletResponse response) {
		log.debug("exception : "+ex);
		/*
		response.sendError(500);
        response.setStatus(HttpStatus.METHOD_NOT_ALLOWED.value());
        ModelMap model = new ModelMap();
        model.addAttribute("class", ClassUtils.getShortName(ex.getClass()));
        model.addAttribute("message", ex.getMessage());
        return new ModelAndView("error", model);
        */
		return ClassUtils.getShortName(ex.getClass());
    }

	
	
	@RequestMapping(value={"request16", "request16/*"}, method=RequestMethod.POST, headers={"content-type=application/json"})
	public @ResponseBody Map request16(HttpServletRequest request) throws Exception {
		Map map = new HashMap();
		Map child = new HashMap();
		map.put("a", child);
		child.put("가가가", "나나나");
		child.put("bb", "bb");
		
		if(true)
			throw new Exception("에러");
		
		return map;
	}
	
	
	
	@RequestMapping(value="request17", headers={"Accept=application/json"})
	@ResponseBody
	public Map request17(HttpServletRequest request, HttpServletResponse response, 
			@RequestHeader Map header
			//, @RequestBody String body
			, HttpEntity<String> entry
			, @RequestHeader(value="X-Test", required=false) String xtest
			, @RequestHeader("Accept") String accept
			) {
		log.debug("header : " + header);
		log.debug("xtest : " + xtest);
		log.debug("accept : " + accept);
		//log.debug("body : " + body);
		log.debug("entry header : " + entry.getHeaders());
		log.debug("entry body : " + entry.getBody());
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("aaa", "bbb");
		
		return map;
	}
	
	
	
	@RequestMapping(value="request18", params="!param1")
	@ResponseBody
	public void request18(String param1) {
		log.debug("param1 : " + param1);
	}
	
	
	@RequestMapping(value="request19", method={RequestMethod.PUT})
	@ResponseBody
	public void request19() {
		log.debug("put");
	}
	
	
	@RequestMapping("request20/{id}")
	@ResponseBody
	public Map request20(@PathVariable("id") int id, HttpServletResponse response) {
		log.debug("");
		Map map = new HashMap();
		map.put("한글", "나나나");
		map.put("에러", "에러1");
		
		return map;
	}
	
	
	@RequestMapping("request21")
	@ResponseBody
	public Map request21(HttpServletResponse response) {
		log.debug("");
		Map map = new HashMap();
		try {
			if(true)
				throw new Exception("error");
			map.put("한글", "나나나");
		} catch (Exception e) {
			map.put("에러", "에러1");
			response.setStatus(Response. SC_INTERNAL_SERVER_ERROR);
		}
		return map;
	}
	
	
	@RequestMapping("request22")
	@ResponseBody
	public void request22(@RequestBody Map body) {
	//public void request22(@RequestBody Map req, HttpEntity<String> entry) {
	//public void request22(HttpEntity<String> entry) {
		//log.debug("entry body : " + entry.getBody());
		log.debug("body : " + body.get("req"));
		
		//Map map = new HashMap();
		//map.put("한글", "나나나");
		//return map;
	}
	
	
	@RequestMapping("request23")
	public ModelAndView request23(ModelAndView model) {
		log.debug("");
		model.setViewName(".default");
		return model;
	}
	
	@RequestMapping("request24")
	public ModelAndView request24() {
		log.debug("");
		return new ModelAndView(".default");
	}
	
	@RequestMapping("request25")
	public ModelAndView request25() {
		log.debug("");
		return new ModelAndView("test.request25");
	}
	
	
	@RequestMapping("request26")
	@ResponseBody
	@Transactional
	public String request26() {
		log.debug("");
		Map map = new HashMap();
		map.put("PW", "비밀번호");
		map.put("NAME", "이름");
		oracleSqlSessionTemplate.insert("test.user.insert", map);
		
		return "insert OK";
	}
	
	
	
	@RequestMapping("request27")
	@ResponseBody
	@Transactional
	public ResponseEntity<String> request27() throws Exception {
		log.debug("");
		
		Map map = new HashMap();
		
		try {
			map.put("PW", "비밀번호");
			map.put("NAME", "이름");
			oracleSqlSessionTemplate.insert("test.user.insert", map);
		} catch(Exception e) {
			e.printStackTrace();
			throw e;
		}
		
		log.debug("{}", map);
		
		map.clear();
		
		try {
			map.put("PW", "비밀번호");
			map.put("NAME", "이름");
			oracleSqlSessionTemplate.insert("test.user.insert2", map);
			int i = 1/0;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("insert OK", responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping("request28")
	@ResponseBody
	@Transactional
	public ResponseEntity<String> request28() throws Exception {
		log.debug("");
		
		Map<String, String> map = new HashMap<String, String>();
		
		SqlSession session = oracleSqlSessionTemplate.getSqlSessionFactory().openSession(false);
		
		map.put("PW", "비밀번호");
		map.put("NAME", "이름");
		session.insert("test.user.insert", map);
		//session.commit();
		
		log.debug("{}", map);
		map.clear();
		
		map.put("PW", "비밀번호");
		map.put("NAME", "이름");
		session.insert("test.user.insert2", map);
		int i = 1/0;
		//session.commit();
		
		session.close();
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("insert2 OK", responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping("request29")
	@ResponseBody
	public ResponseEntity<List> request29() {
		List list = oracleSqlSessionTemplate.selectList("test.user.select", 2);
		log.debug("{}", list);
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<List>(list, responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping("request30")
	@ResponseBody
	public ResponseEntity<List> request30() {
		List list = oracleSqlSessionTemplate.selectList("test.user.select", "1");
		log.debug("{}", list);
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<List>(list, responseHeaders, HttpStatus.CREATED);
	}
	
	@RequestMapping("request31")
	@ResponseBody
	public ResponseEntity<String> request31() {
		
		SqlSession session = SqlSessionUtils.getSqlSession(oracleSqlSessionFactory);
		Map map = new HashMap();
		
		map.put("PW", "비밀번호");
		map.put("NAME", "이름");
		session.insert("test.user.insert", map);
		//session.commit();
		
		log.debug("{}", map);
		map.clear();
		
		map.put("PW", "비밀번호");
		map.put("NAME", "이름");
		session.insert("test.user.insert2", map);
		int i = 1/0;
		//session.commit();
		
		SqlSessionUtils.closeSqlSession(session, oracleSqlSessionFactory);
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("Insert OK", responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping("request32")
	@ResponseBody
	@Transactional
	public ResponseEntity<String> request32() throws Exception {
		
		SqlSession session = null;
		Map map = new HashMap();
		
		try {
			session = oracleSqlSessionFactory.openSession();
			map.put("PW", "비밀번호");
			map.put("NAME", "이름");
			session.insert("test.user.insert", map);
			session.commit();
			
			map.put("PW", "비밀번호");
			map.put("NAME", "이름");
			session.insert("test.user.insert2", map);
			int i=1/0;
			session.commit();
		} catch (Exception e) {
			session.rollback();
			throw e;
		} finally {
			session.close();
		}
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("Insert OK", responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping("request33")
	@ResponseBody
	@Transactional
	public ResponseEntity<String> request33() throws Exception {
		
		SqlSession session = null;
		Map map = new HashMap();
		
		try {
			session = h2SqlSessionFactory.openSession();
			map.put("PW", "비밀번호");
			map.put("NAME", "이름");
			session.insert("test.user.insert", map);
			session.commit();
			
			map.put("PW", "비밀번호1");
			map.put("NAME", "이름1");
			session.insert("test.user.insert", map);
			int i=1/0;
			session.commit();
		} catch (Exception e) {
			session.rollback();
			throw e;
		} finally {
			session.close();
		}
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("Insert OK", responseHeaders, HttpStatus.CREATED);
	}
	
	
	
	@RequestMapping("request34")
	@ResponseBody
	@Transactional
	public ResponseEntity<String> request34() {
		
		Map map = new HashMap();
		map.put("PW", "비밀번호");
		map.put("NAME", "이름");
		log.debug("{}", map);
		h2SqlSessionTemplate.insert("test.user.insert", map);
		
		map.put("PW", "비밀번호1");
		map.put("NAME", "이름1");
		h2SqlSessionTemplate.insert("test.user.insert", map);
		
		int i = 1/0;
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<String>("Insert OK", responseHeaders, HttpStatus.CREATED);
	}
	
	
	@RequestMapping(value="request35", headers={"content-type=application/xml,text/xml"})
	@ResponseBody
	public Map request35() {
		Map map = new HashMap();
		List list = new ArrayList();
		
		map.put("11", list);
		list.add("aa");
		list.add("bb");
		
		return map;
	}
	
	@RequestMapping("request36")
	@ResponseBody
	public ResponseEntity<List> request36() {
		List list = h2SqlSessionTemplate.selectList("test.user.select", 1);
		log.debug("{}", list);
		
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Content-Type", "text/html; charset=utf-8");
		return new ResponseEntity<List>(list, responseHeaders, HttpStatus.CREATED);
	}
	
	
	
}
