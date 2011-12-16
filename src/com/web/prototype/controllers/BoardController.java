package com.web.prototype.controllers;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.web.common.WebConstants;
import com.web.common.util.CommonUtil;
import com.web.common.util.paginate.Pagination;
import com.web.common.util.paginate.PaginationPreparation;
import com.web.prototype.services.BoardService;


@Controller("prototype.BoardController")
@RequestMapping("prototype/board")
@SessionAttributes(WebConstants.SESSION_KEY)
public class BoardController {

	public static final Logger log = LoggerFactory.getLogger(BoardController.class);
	
	
	@Autowired
	@Qualifier("prototype.BoardService")
	private BoardService boardService;
	
	
	@Autowired
	private PaginationPreparation paginationPreparation;
	
	
	
	/**
	 * 목록 
	 * 
	 * @param paramMap
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	/* headers="Accept=application/xml, application/json") */
	@RequestMapping(value="{code}", method=RequestMethod.GET)
	public String list(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		modelMap.put("paramMap", paramMap);
		
		
		// 총건수 
		int totalCount = boardService.selectCount(paramMap);
		
		
		// 페이징
		Pagination pagination = paginationPreparation.initialize(paramMap, totalCount);
		modelMap.addAttribute("pagination", pagination);
		/*
		PaginationInfo paginationInfo = paginationUtil.setPaginationInfo(commandMap);
		paginationInfo.setTotalRecordCount(totalCount);
		model.addAttribute("paginationInfo", paginationInfo);
		 */
		
		
		// 총건수
		modelMap.addAttribute("totalCount", totalCount);
		
		
		// 목록 조회
		modelMap.addAttribute("list", boardService.selectList(paramMap));
		
//		return "prototype/board/list";
		return ".prototype.board.list";
	}
	
	
	
	
	/**
	 * 작성 화면
	 * 
	 * @return
	 */
	@RequestMapping(value="{code}/write")
	public String write(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code) {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		modelMap.put("paramMap", paramMap);
		
		return ".prototype.board.write";
	}
	
	
	
	
	/**
	 * 저장
	 * 
	 * @param paramMap
	 * @param request
	 * @param userSession
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="{code}", method=RequestMethod.POST)
	public ModelAndView insert(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code,
			HttpServletRequest request, @ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		// @RequestParam MultiValueMap<String, Object> multiParam
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		
		paramMap.put("code", code);
		modelMap.put("paramMap", paramMap);
		
		
		
		// 작성자 아이디
		paramMap.put("createUserId", (String)userSession.get("USER_ID"));
		
		// 작성자 아이피
		paramMap.put("createIp", CommonUtil.getRemoteAddr(request));
		
		// 저장
		int insertCount = boardService.insert(paramMap);
		log.debug("Insert Count : {}", insertCount);
		
		
		// 목록으로 이동
		ModelAndView mav = new ModelAndView("redirect:/prototype/board/" + code);
		
		return mav;
	}
	
	
	
	
	/**
	 * 상세보기
	 * 
	 * @param paramMap
	 * @param code
	 * @param modelMap
	 * @param seq
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="{code}/read/{seq:\\d+}")
	public String view(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code, @PathVariable("seq") int seq) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== seq : {}", seq);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		paramMap.put("seq", seq);
		modelMap.put("paramMap", paramMap);
		
		
		
		modelMap.addAttribute("data", boardService.select(paramMap));
		
//		return "prototype/board/read";
		return ".prototype.board.read";
	}
	
	
	
	
	/**
	 * 삭제
	 * 
	 * @param paramMap
	 * @param no
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="{code}/delete/{seq}", method=RequestMethod.GET)
	public ModelAndView delete(@RequestParam Map<String, Object> paramMap, ModelMap modelMap,
			@PathVariable("code") String code, @PathVariable("seq") int seq) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		paramMap.put("seq", seq);
		modelMap.put("paramMap", paramMap);
		
		
		int deleteCount = boardService.delete(paramMap);
		log.debug("Delete Count : {}", deleteCount);
		
		return new ModelAndView("redirect:/prototype/board/" + code);
	}
	
	
	
	
	
	/**
	 * 수정 화면
	 * 
	 * @param paramMap
	 * @param seq
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="{code}/modify/{seq:\\d+}", method=RequestMethod.GET)
	public String modify(@RequestParam Map<String, Object> paramMap, ModelMap modelMap,
			@PathVariable("code") String code, @PathVariable("seq") int seq) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		paramMap.put("seq", seq);
		modelMap.put("paramMap", paramMap);
		
		
		modelMap.addAttribute("data", boardService.select(paramMap));
		
//		return "prototype/board/write";
		return ".prototype.board.write";
	}
	
	
	
	
	
	/**
	 * 수정
	 * 
	 * @param paramMap
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="{code}", method=RequestMethod.PUT)
	public ModelAndView update(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code,
			HttpServletRequest request, @ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		modelMap.put("paramMap", paramMap);
		
		
		// 수정자 아이디
		paramMap.put("updateUserId", (String)userSession.get("USER_ID"));
		
		// 작성자 아이피
		paramMap.put("updateIp", CommonUtil.getRemoteAddr(request));
		
		
		// 수정
		int updateCount = boardService.update(paramMap);
		log.debug("Update Count : {}", updateCount);
		
		
		ModelAndView mav = new ModelAndView("redirect:/prototype/board/" + code + "/read/" + paramMap.get("seq"));
//		mav.addObject("no", paramMap.get("no"));
		
		return mav;
	}
	
	
}
