package com.web.prototype.services;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("prototype.DBServiceTest")
public class DBServiceTest {

	private static final Logger log = LoggerFactory.getLogger(DBServiceTest.class);
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	@Transactional
	public void tx3(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		oracleSqlSessionTemplate.insert("prototype.common.insert1", paramMap);
		oracleSqlSessionTemplate.insert("prototype.common.insert2", paramMap);
	}
	
	
	
	public void tx5(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		oracleSqlSessionTemplate.insert("prototype.common.insert1", paramMap);
		oracleSqlSessionTemplate.insert("prototype.common.insert2", paramMap);
	}
	
	
	
}
