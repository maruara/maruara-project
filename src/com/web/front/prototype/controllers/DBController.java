package com.web.front.prototype.controllers;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.front.prototype.services.DBService;
import com.web.front.prototype.services.DBServiceTest;


@Controller("front.prototype.DBController")
@RequestMapping("front/prototype/db")
public class DBController {

	private static final Logger log = LoggerFactory.getLogger(DBController.class);
	
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	@Autowired
	@Qualifier("front.prototype.DBService")
	private DBService dbService;
	
	
	@Autowired
	@Qualifier("front.prototype.DBServiceTest")
	private DBServiceTest dbServiceTest;
	
	
	
	@RequestMapping("connect")
	public void connect(ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		
		String connect = (String)oracleSqlSessionTemplate.selectOne("front.prototype.common.connect");
		log.debug("connect : {}", connect);
		
		modelMap.addAttribute("connect", connect);
	}
	
	
	@RequestMapping("tx1")
	public void tx1(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		paramMap.put("data1", "1");
		paramMap.put("data2", "abc");
		
		dbService.tx1(paramMap);
	}
	
	
	@RequestMapping("tx2")
	public void tx2(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		paramMap.put("data1", "1");
		paramMap.put("data2", "abc");
		
		dbService.getTx2(paramMap);
	}
	
	
	
	@RequestMapping("tx3")
	public void tx3(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		paramMap.put("data1", "1");
		paramMap.put("data2", "abc");
		
		dbServiceTest.tx3(paramMap);
	}
	
	
	
	@RequestMapping("tx4")
	public void tx4(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		paramMap.put("data1", "1");
		paramMap.put("data2", "abc");
		
		dbService.getTx4(paramMap);
	}
	
	
	
	@RequestMapping("tx5")
	public void tx5(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		paramMap.put("data1", "1");
		paramMap.put("data2", "abc");
		
		dbServiceTest.tx5(paramMap);
	}
	
	
	
}
