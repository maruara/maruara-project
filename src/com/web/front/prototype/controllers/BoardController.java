package com.web.front.prototype.controllers;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.web.common.PaginationInfo;
import com.web.common.PaginationUtil;
import com.web.common.WebConstants;
import com.web.front.prototype.services.BoardService;


@Controller("front.prototype.BoardController")
@RequestMapping("front/prototype/board")
@SessionAttributes(WebConstants.SESSION_KEY)
public class BoardController {

	public static final Logger log = LoggerFactory.getLogger(BoardController.class);
	
	
	@Autowired
	@Qualifier("front.prototype.BoardService")
	private BoardService boardService;
	
	
	@Resource
	private PaginationUtil paginationUtil;
	
	
	
	
	@RequestMapping("list")
	public void list(Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		PaginationInfo paginationInfo = paginationUtil.setPaginationInfo(paramMap);
		modelMap.addAttribute("paginationInfo", paginationInfo);
		
		paginationInfo.setTotalRecordCount(boardService.selectCount(paramMap));
		
		modelMap.addAttribute("list", boardService.selectList(paramMap));
	}
	
	
	
	@RequestMapping(value="insert", method=RequestMethod.POST)
	public ModelAndView insert(Map<String, String> paramMap, @ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		paramMap.put("userId", (String)userSession.get("USER_ID"));
		
		int insertCount = boardService.insert(paramMap);
		log.debug("Insert Count : {}", insertCount);
		
		return new ModelAndView("redirect:/front/prototype/board/list");
	}
	
	
	
	
	@RequestMapping("view")
	public void view(Map<?, ?> paramMap, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		modelMap.addAttribute("data", boardService.select(paramMap));
	}
	
	
	
	
	@RequestMapping("delete")
	public ModelAndView delete(Map<?, ?> paramMap, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		int deleteCount = boardService.delete(paramMap);
		log.debug("Delete Count : {}", deleteCount);
		
		return new ModelAndView("redirect:/front/prototype/board/list");
	}
	
	
	
	@RequestMapping("modify")
	public String modify(Map<?, ?> paramMap, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		modelMap.addAttribute("data", boardService.select(paramMap));
		
		return "front/prototype/board/write";
	}
	
	
	
	@RequestMapping("update")
	public ModelAndView update(Map<?, ?> paramMap, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		
		int updateCount = boardService.update(paramMap);
		log.debug("Update Count : {}", updateCount);
		
		ModelAndView mav = new ModelAndView("redirect:/front/prototype/board/view");
		mav.addObject("no", paramMap.get("no"));
		
		return mav;
	}
	
	
}
