package com.web.prototype.services;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("prototype.DBService")
public class DBService {

	private static final Logger log = LoggerFactory.getLogger(DBService.class);
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	
	public void tx1(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		oracleSqlSessionTemplate.insert("prototype.common.insert1", paramMap);
		oracleSqlSessionTemplate.insert("prototype.common.insert2", paramMap);
	}


	
	public void getTx2(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		oracleSqlSessionTemplate.insert("prototype.common.insert1", paramMap);
		oracleSqlSessionTemplate.insert("prototype.common.insert2", paramMap);
	}
	
	
	
	@Transactional
	public void getTx4(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		oracleSqlSessionTemplate.insert("prototype.common.insert1", paramMap);
		oracleSqlSessionTemplate.insert("prototype.common.insert2", paramMap);
	}
	
}
