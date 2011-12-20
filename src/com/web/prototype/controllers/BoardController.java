package com.web.prototype.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.web.common.WebConstants;
import com.web.common.util.CommonUtil;
import com.web.common.util.CookieManager;
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
	
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	
	
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
//		modelMap.addAttribute("totalCount", totalCount);
		
		
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
	public String insert(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code,
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
		
		Map<String, String> handle = new HashMap<String, String>();
		handle.put("messsage", messageSourceAccessor.getMessage("common.msg.insert"));
		handle.put("url", "/prototype/board/" + code);
		modelMap.put("handle", handle);
		return WebConstants.HANDLE_URL;
		
//		ModelAndView mav = new ModelAndView("redirect:/prototype/board/" + code);
//		return mav;
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
	public String view(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code, @PathVariable("seq") int seq,
			HttpServletRequest request, HttpServletResponse response) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== seq : {}", seq);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		paramMap.put("seq", seq);
		modelMap.put("paramMap", paramMap);
		
		
		Cookie cookie = CookieManager.getCookie(request, WebConstants.COOKIE_BOARD_READ);
		log.debug("cookie : {}", cookie);
		if(cookie == null || cookie.getValue().length() < 1) {
			cookie = new Cookie(WebConstants.COOKIE_BOARD_READ, code + "_" + seq + ",");
			cookie.setMaxAge(-1);
			cookie.setPath("/");
			response.addCookie(cookie);
		} else {
			String readsStr = cookie.getValue();
			log.debug("readsStr : {}", readsStr);
			String[] reads = readsStr.split(",");
			String seqsStr = null;
			String[] seqs = null;
			for(int i=0, s=reads.length; i<s; i++) {
				seqsStr = reads[i];
				log.debug("seqsStr : {}", seqsStr);
				seqs = seqsStr.split("_");
				if(seqs.length == 2) {
					if(!(StringUtils.equals(code, seqs[0]) && StringUtils.equals(String.valueOf(seq), seqs[1]))) {
						cookie = new Cookie(WebConstants.COOKIE_BOARD_READ, readsStr + code + "_" + seq + ",");
						cookie.setMaxAge(-1);
//						cookie.setPath("/");
						response.addCookie(cookie);
						break;
					}
				}
			}
			
		}
		
		
		
		
		
		modelMap.addAttribute("data", boardService.selectDetail(paramMap));
		
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
	public String delete(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code, @PathVariable("seq") int seq,
			@ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		paramMap.put("seq", seq);
		modelMap.put("paramMap", paramMap);
		
		
		paramMap.put("CREATE_USER_ID", userSession.get("USER_ID"));
		
		Map<?, ?> boardData = boardService.select(paramMap);
		if(boardData == null) {
			throw new Exception(messageSourceAccessor.getMessage("common.msg.emptyData", "데이터가 없습니다."));
		}
		
		
		int deleteCount = boardService.delete(paramMap);
		log.debug("Delete Count : {}", deleteCount);
		
		
		
		Map<String, String> handle = new HashMap<String, String>();
//		handle.put("messsage", "삭제되었습니다.");
		handle.put("messsage", messageSourceAccessor.getMessage("common.msg.delete"));
		handle.put("url", "/prototype/board/" + code);
		modelMap.put("handle", handle);
		
		return WebConstants.HANDLE_URL;
//		return new ModelAndView("redirect:/prototype/board/" + code);
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
	public String modify(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code, @PathVariable("seq") int seq,
			@ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		paramMap.put("seq", seq);
		modelMap.put("paramMap", paramMap);
		
		
		paramMap.put("CREATE_USER_ID", userSession.get("USER_ID"));
		Map<?, ?> boardData = boardService.selectDetail(paramMap);
		if(boardData == null) {
			throw new Exception(messageSourceAccessor.getMessage("common.msg.emptyData", "데이터가 없습니다."));
		}
		
		modelMap.addAttribute("data", boardData);
		
		
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
	public String update(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code,
			HttpServletRequest request, @ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		modelMap.put("paramMap", paramMap);
		
		
		
		paramMap.put("CREATE_USER_ID", userSession.get("USER_ID"));
		
		Map<?, ?> boardData = boardService.select(paramMap);
		if(boardData == null) {
			throw new Exception(messageSourceAccessor.getMessage("common.msg.emptyData", "데이터가 없습니다."));
		}
		
		
		
		// 수정자 아이디
		paramMap.put("updateUserId", (String)userSession.get("USER_ID"));
		
		// 작성자 아이피
		paramMap.put("updateIp", CommonUtil.getRemoteAddr(request));
		
		
		// 수정
		int updateCount = boardService.update(paramMap);
		log.debug("Update Count : {}", updateCount);
		
		
		
		Map<String, String> handle = new HashMap<String, String>();
		handle.put("messsage", messageSourceAccessor.getMessage("common.msg.update"));
		handle.put("url", "/prototype/board/" + code + "/read/" + paramMap.get("seq"));
		modelMap.put("handle", handle);
		return WebConstants.HANDLE_URL;
		
		
//		ModelAndView mav = new ModelAndView("redirect:/prototype/board/" + code + "/read/" + paramMap.get("seq"));
//		return mav;
	}
	
	
	
	
	
	
	/**
	 * 답글 화면
	 * 
	 * @param paramMap
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="{code}/reply/{seq}", method=RequestMethod.GET)
	public String reply(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, @PathVariable("code") String code, @PathVariable("seq") int seq,
			HttpServletRequest request, @ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("code", code);
		modelMap.put("paramMap", paramMap);
		
		modelMap.put("mode", "reply");
		
		return ".prototype.board.write";
	}
	
	
}
