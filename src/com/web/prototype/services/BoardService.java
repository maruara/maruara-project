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
	
	
	/**
	 * 총건수
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public int selectCount(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Integer)oracleSqlSessionTemplate.selectOne("prototype.board.select-count", paramMap);
	}
	
	
	
	/**
	 * 목록
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public List<?> selectList(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.selectList("prototype.board.select-list", paramMap);
	}
	
	
	
	/**
	 * 저장
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public int insert(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.insert("prototype.board.insert", paramMap);
	}
	
	
	
	
	/**
	 * 상세조회
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public Map<?, ?> selectDetail(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Map<?, ?>)oracleSqlSessionTemplate.selectOne("prototype.board.select-detail", paramMap);
	}
	
	
	
	/**
	 * 현재글 이전/다음 글 조회
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public List<?> selectPreNext(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.selectList("prototype.board.select-pre-next", paramMap);
	}
	
	
	
	
	/**
	 * 한건조회
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public Map<?, ?> select(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return (Map<?, ?>)oracleSqlSessionTemplate.selectOne("prototype.board.select", paramMap);
	}
	
	
	
	
	/**
	 * 삭제
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public int delete(Map<?, ?> paramMap) throws Exception {
		
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
//		return oracleSqlSessionTemplate.delete("prototype.board.delete", paramMap);
		return oracleSqlSessionTemplate.update("prototype.board.delete", paramMap);
	}
	
	
	
	/**
	 * 수정
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public int update(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.update("prototype.board.update", paramMap);
	}
	
	
	
	/**
	 * 조회수 증가
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public int updateReadCnt(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.update("prototype.board.update-read-count", paramMap);
	}
	
	
	
	
	/**
	 * 답글 저장
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public int insertReply(Map<?, ?> paramMap) throws Exception {
		log.debug("----------------------------------------------------------------------------------------");
		log.debug("--  paramMap : {}", paramMap);
		log.debug("----------------------------------------------------------------------------------------");
		
		return oracleSqlSessionTemplate.insert("prototype.board.insert-reply", paramMap);
	}
	
	
	
	
}
