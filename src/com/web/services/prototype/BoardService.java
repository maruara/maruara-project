package com.web.services.prototype;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("prototypeBoardService")
public class BoardService {

	
	private static final Logger log = LoggerFactory.getLogger(BoardService.class);
	
	
	@Autowired
	private SqlSessionTemplate oracleSqlSessionTemplate;
	
	
	public int selectCount(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Integer)oracleSqlSessionTemplate.selectOne("prototype.board.selectCount", paramMap);
	}
	
	
	
	public List<?> selectList(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.selectList("prototype.board.selectList", paramMap);
	}
	
	
	
	public int insert(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.insert("prototype.board.insert", paramMap);
	}
	
	
	
	
	public Map<?, ?> select(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Map<?, ?>)oracleSqlSessionTemplate.selectOne("prototype.board.select", paramMap);
	}
	
	
	
	public int delete(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.delete("prototype.board.delete", paramMap);
	}
	
	
	
	public int update(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  START");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.update("prototype.board.update", paramMap);
	}
	
}
