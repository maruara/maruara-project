package com.web.prototype.controllers;

import java.util.Map;

import javax.annotation.Resource;

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

import com.web.common.PaginationInfo;
import com.web.common.PaginationUtil;
import com.web.common.WebConstants;
import com.web.prototype.services.BoardService;


@Controller("prototype.BoardController")
@RequestMapping("prototype/board")
@SessionAttributes(WebConstants.SESSION_KEY)
public class BoardController {

	public static final Logger log = LoggerFactory.getLogger(BoardController.class);
	
	
	@Autowired
	@Qualifier("prototype.BoardService")
	private BoardService boardService;
	
	
	@Resource
	private PaginationUtil paginationUtil;
	
	
	
	
	/* headers="Accept=application/xml, application/json") */
	@RequestMapping(method=RequestMethod.GET)
	public String list(@RequestParam Map<String, Object> param, ModelMap modelMap) throws Exception {
		
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		PaginationInfo paginationInfo = paginationUtil.setPaginationInfo(param);
		modelMap.addAttribute("paginationInfo", paginationInfo);
		
		paginationInfo.setTotalRecordCount(boardService.selectCount(param));
		
		modelMap.addAttribute("list", boardService.selectList(param));
		
		
//		return "prototype/board/list";
		return ".prototype.board.list";
	}
	
	
	
	
	@RequestMapping(value="write")
	public String write() {
		return ".prototype.board.write";
	}
	
	
	
	
	@RequestMapping(method=RequestMethod.POST)
	public ModelAndView insert(@RequestParam Map<String, Object> param, @ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		// @RequestParam MultiValueMap<String, Object> multiParam
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		param.put("userId", (String)userSession.get("USER_ID"));
		
		int insertCount = boardService.insert(param);
		log.debug("Insert Count : {}", insertCount);
		
		return new ModelAndView("redirect:/prototype/board");
	}
	
	
	
	
	@RequestMapping(value="read/{no:\\d+}")
	public String view(@RequestParam Map<?, ?> param, ModelMap modelMap, @PathVariable("no") int no) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== no : {}", no);
		log.debug("=========================================================================================");
		
		modelMap.addAttribute("data", boardService.select(no));
		
//		return "prototype/board/read";
		return ".prototype.board.read";
	}
	
	
	
	
	@RequestMapping(method=RequestMethod.DELETE)
	public ModelAndView delete(@RequestParam Map<?, ?> param, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		int deleteCount = boardService.delete(param);
		log.debug("Delete Count : {}", deleteCount);
		
		return new ModelAndView("redirect:/prototype/board");
	}
	
	
	
	
	
	@RequestMapping(value="modify/{no:\\d+}", method=RequestMethod.GET)
	public String modify(@RequestParam Map<?, ?> param, @PathVariable("no") int no, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== no : {}", no);
		log.debug("=========================================================================================");
		
		modelMap.addAttribute("data", boardService.select(no));
		
//		return "prototype/board/write";
		return ".prototype.board.write";
	}
	
	
	
	
	
	@RequestMapping(method=RequestMethod.PUT)
	public ModelAndView update(@RequestParam Map<?, ?> param, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		
		int updateCount = boardService.update(param);
		log.debug("Update Count : {}", updateCount);
		
		ModelAndView mav = new ModelAndView("redirect:/prototype/board/read/" + param.get("no"));
//		mav.addObject("no", param.get("no"));
		
		return mav;
	}
	
	
}
