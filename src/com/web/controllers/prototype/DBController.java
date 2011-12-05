package com.web.controllers.prototype;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.services.prototype.DBService;


@Controller
@RequestMapping("prototype/db")
public class DBController {

	private static final Logger log = LoggerFactory.getLogger(DBController.class);
	
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	@Autowired
	private DBService dbService;
	
	
	@RequestMapping("connect")
	public void connect(ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		
		String connect = (String)oracleSqlSessionTemplate.selectOne("prototype.connect");
		log.debug("connect : {}", connect);
		
		modelMap.addAttribute("connect", connect);
	}
	
	
	@RequestMapping("tx")
	public void tx(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== START");
		log.debug("=========================================================================================");
		
		paramMap.put("data1", "1");
		paramMap.put("data2", "abc");
		
		dbService.insert(paramMap);
	}
	
	
	
}
