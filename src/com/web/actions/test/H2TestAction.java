package com.web.actions.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping(value="test/h2")
public class H2TestAction {

	private static final Logger log = LoggerFactory.getLogger(H2TestAction.class);
	
	@Autowired
	private SqlSessionTemplate h2SqlSessionTemplate;
	
	
	
	@RequestMapping(value="connect")
	public ModelAndView connect() throws Exception {
		log.debug("start");
		
		log.debug("h2SqlSessionTemplate : {}", h2SqlSessionTemplate);
		
		return new ModelAndView("test/h2/connect");
	}
	
	
	
	@RequestMapping(value="create")
	public ModelAndView create() throws Exception {
		log.debug("start");
		
		h2SqlSessionTemplate.insert("test.connect.create");
		
		return new ModelAndView("test/h2/create");
	}
	
	
	
	@RequestMapping(value="insert")
	public ModelAndView insert() throws Exception {
		log.debug("start");
		
		Map<String, String> param = new HashMap<String, String>();
		param.put("COL2", "hello");
		param.put("COL3", "안녕하세요!");
		param.put("COL4", "반갑습니다..");
		param.put("COL5", "2011-10-12");
		param.put("COL6", "2011-10-12 12:44:21");
		
		h2SqlSessionTemplate.insert("test.connect.insert", param);
		
		return new ModelAndView("test/h2/insert");
	}
	
	
	@RequestMapping(value="select")
	public ModelAndView select() throws Exception {
		log.debug("start");
		
		Map<String, String> param = new HashMap<String, String>();
		param.put("COL1", "1");
		
		List<?> list = h2SqlSessionTemplate.selectList("test.connect.select", param);
		
		ModelAndView mav = new ModelAndView("test/h2/select");
		mav.addObject("list", list);
		
		return mav;
	}
	
	
	@RequestMapping(value="select2")
	public ModelAndView select2() throws Exception {
		log.debug("start");
		
		Map<String, String> param = new HashMap<String, String>();
		param.put("COL1", "1");
		
		List<?> list = h2SqlSessionTemplate.selectList("test.connect.select2", param);
		
		ModelAndView mav = new ModelAndView("test/h2/select2");
		mav.addObject("list", list);
		
		return mav;
	}
	
	
	@RequestMapping(value="select3/{col1}", method=RequestMethod.GET)
	public String select3(@PathVariable String col1, Model model) {
		Map<String, String> param = new HashMap<String, String>();
		param.put("COL1", col1);
		
		List<?> list = h2SqlSessionTemplate.selectList("test.connect.select", param);
		
		model.addAttribute("list", list);
		
		return "test/h2/select3";
	}
	
	
	
	
	
}
