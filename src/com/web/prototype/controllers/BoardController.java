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

import com.web.common.ComponentTest;
import com.web.common.WebConstants;
import com.web.common.util.CommonUtil;
import com.web.common.util.paginate.Pagination;
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
	private Pagination pagination;
	
	
	@Autowired
	private ComponentTest componentTest;
	
	
	/* headers="Accept=application/xml, application/json") */
	@RequestMapping(method=RequestMethod.GET)
	public String list(@RequestParam Map<String, Object> param, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		componentTest.plus();
		log.debug("num : {}", componentTest.getNum());
		
		// 총건수 
		int totalCount = boardService.selectCount(param);
		
		
		// 페이징
		pagination.initalize(param, totalCount);
		modelMap.addAttribute("pagination", pagination);
		
		// 총건수
		modelMap.addAttribute("totalCount", totalCount);
		
		
		// 목록 조회
		modelMap.addAttribute("list", boardService.selectList(param));
		
//		return "prototype/board/list";
		return ".prototype.board.list";
	}
	
	
	
	
	@RequestMapping(value="write")
	public String write() {
		return ".prototype.board.write";
	}
	
	
	
	
	@RequestMapping(method=RequestMethod.POST)
	public ModelAndView insert(@RequestParam Map<String, Object> param, HttpServletRequest request,
			@ModelAttribute(WebConstants.SESSION_KEY) Map<?, ?> userSession) throws Exception {
		// @RequestParam MultiValueMap<String, Object> multiParam
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("=========================================================================================");
		
		// 작성자 아이디
		param.put("createUserId", (String)userSession.get("USER_ID"));
		
		// 작성자 아이피
		param.put("createIp", CommonUtil.getRemoteAddr(request));
		
		// 저장
		int insertCount = boardService.insert(param);
		log.debug("Insert Count : {}", insertCount);
		
		
		// 목록으로 이동
		ModelAndView mav = new ModelAndView("redirect:/prototype/board");
		mav.addObject("code", param.get("code"));
		
		return mav;
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
	
	
	
	
	@RequestMapping(value="delete/{no}", method=RequestMethod.GET)
	public ModelAndView delete(@RequestParam Map<?, ?> param, @PathVariable("no") int no, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
		log.debug("== no : {}", no);
		log.debug("=========================================================================================");
		
		int deleteCount = boardService.delete(no);
		log.debug("Delete Count : {}", deleteCount);
		
		return new ModelAndView("redirect:/prototype/board");
	}
	
	
	
	
	
	@RequestMapping(value="modify/{no:\\d+}", method=RequestMethod.GET)
	public String modify(@RequestParam Map<?, ?> param, @PathVariable("no") int no, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== param : {}", param);
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
