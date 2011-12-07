package com.web.front.test.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/test/oracle")
public class OracleTestController {
	
	private static final Logger log = LoggerFactory.getLogger(OracleTestController.class);
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	@RequestMapping(value="connect")
	public String connect() {
		log.debug("oracleSqlSessionTemplate : {}", oracleSqlSessionTemplate);
		return "test/oracle/connect";
	}
	
	
	
	@RequestMapping(value="select")
	public String select(Model model) {
		
		List<?> list = oracleSqlSessionTemplate.selectList("test.connect.select");
		model.addAttribute("list", list);
		
		return "test/oracle/select";
	}
	
	
	@RequestMapping(value="select/{id}")
	public String select(@PathVariable String id, Model model) {
		
		Map<String, String> param = new HashMap<String, String>();
		param.put("ID", id);
		
		List<?> list = oracleSqlSessionTemplate.selectList("test.connect.select", param);
		model.addAttribute("list", list);
		
		return "test/oracle/select";
	}
	
	
	
}
