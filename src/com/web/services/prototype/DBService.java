package com.web.services.prototype;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class DBService {

	private static final Logger log = LoggerFactory.getLogger(DBService.class);
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	public void insert(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		oracleSqlSessionTemplate.insert("prototype.insert1", paramMap);
		oracleSqlSessionTemplate.insert("prototype.insert2", paramMap);
	}
	
}
