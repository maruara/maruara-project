package com.web.prototype.services;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("prototype.BoardService")
public class BoardService {

	
	private static final Logger log = LoggerFactory.getLogger(BoardService.class);
	
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	public int selectCount(Map<?, ?> param) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", param);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Integer)oracleSqlSessionTemplate.selectOne("prototype.board.selectCount", param);
	}
	
	
	
	public List<?> selectList(Map<?, ?> param) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  param : {}", param);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.selectList("prototype.board.selectList", param);
	}
	
	
	
	public int insert(Map<?, ?> param) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  param : {}", param);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.insert("prototype.board.insert", param);
	}
	
	
	
	
	public Map<?, ?> select(int no) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  no : {}", no);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Map<?, ?>)oracleSqlSessionTemplate.selectOne("prototype.board.select", no);
	}
	
	
	
	public int delete(int no) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  param : {}", no);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.delete("prototype.board.delete", no);
	}
	
	
	
	public int update(Map<?, ?> param) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  param : {}", param);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.update("prototype.board.update", param);
	}
	
}
