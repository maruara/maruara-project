package com.web.captcha.controllers;

import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.codec.binary.Base64InputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.octo.captcha.service.CaptchaServiceException;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;
import com.web.common.captcha.CaptchaService;


@Controller("captcha.CaptchaController")
@RequestMapping("captcha")
public class CaptchaController {

	public static final Logger log = LoggerFactory.getLogger(CaptchaController.class);
	
	@Autowired
	private MessageSourceAccessor messageSourceAccessor;
	
	@Autowired
	private CaptchaService captchaService;
	
	
	@RequestMapping(value="index", method=RequestMethod.GET)
	public void index(@RequestParam Map<String, Object> paramMap, ModelMap modelMap) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		modelMap.put("paramMap", paramMap);
	}
	
	
	@RequestMapping(value="jcaptcha", method=RequestMethod.GET)
	public void jcaptcha(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
		byte[] captchaChallengeAsJpeg = null;
		ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
		try {
			String captchaId = session.getId();
			BufferedImage challenge = captchaService.getInstance().getImageChallengeForID(captchaId, request.getLocale());
			JPEGImageEncoder jpegEncoder = JPEGCodec.createJPEGEncoder(jpegOutputStream);
			jpegEncoder.encode(challenge);
		} catch (IllegalArgumentException e) {
			response.sendError(HttpServletResponse.SC_NOT_FOUND);
			return;
		} catch (CaptchaServiceException e) {
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
		
		captchaChallengeAsJpeg = jpegOutputStream.toByteArray();
		response.setHeader("Cache-Control", "no-store");
		response.setHeader("Pragma", "no-cache");
		response.setDateHeader("Expires", 0);
		response.setContentType("image/jpeg");
		ServletOutputStream responseOutputStream = response.getOutputStream();
		responseOutputStream.write(captchaChallengeAsJpeg);
		responseOutputStream.flush();
		responseOutputStream.close();
	}
	
	
	@RequestMapping(value="jcaptchaImage.json")
	public String jcaptchaImage(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
		
		byte[] captchaChallengeAsJpeg = null;
		ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
		try {
			String captchaId = session.getId();
			BufferedImage challenge = captchaService.getInstance().getImageChallengeForID(captchaId, request.getLocale());
			JPEGImageEncoder jpegEncoder = JPEGCodec.createJPEGEncoder(jpegOutputStream);
			jpegEncoder.encode(challenge);
		} catch (IllegalArgumentException e) {
			response.sendError(HttpServletResponse.SC_NOT_FOUND);
			throw e;
		} catch (CaptchaServiceException e) {
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			throw e;
		}
		
		BufferedInputStream bis = null;
		ByteArrayOutputStream baos = null; 
		
		try {
			captchaChallengeAsJpeg = jpegOutputStream.toByteArray();
			BufferedInputStream captchaBis = new BufferedInputStream(new ByteArrayInputStream(captchaChallengeAsJpeg));
			Base64InputStream in = new Base64InputStream(captchaBis, true);
			
			bis = new BufferedInputStream(in);
			baos = new ByteArrayOutputStream();
			byte[] buffer = new byte[4096];
			int read = 0;
			while ((read = bis.read(buffer)) != -1) {
				baos.write(buffer, 0, read);
			}
			
			modelMap.put("captchaCode", baos.toString());
		} finally {
			if(baos != null) {
				baos.close();
			}
			if(bis != null) {
				bis.close();
			}
		}
		
		return "jsonView";
	}
	
	
	
	@RequestMapping(value="insert", method=RequestMethod.POST)
	public String insert(@RequestParam Map<String, Object> paramMap, ModelMap modelMap, HttpServletRequest request, HttpSession session) throws Exception {
		log.debug("=========================================================================================");
		log.debug("== paramMap : {}", paramMap);
		log.debug("=========================================================================================");
		
		modelMap.put("paramMap", paramMap);
		
		Boolean isResponseCorrect = Boolean.FALSE;
		String captchaId = session.getId();
		String jCaptchaResponse = (String)paramMap.get("j_captcha_response");
		try {
		    isResponseCorrect = captchaService.getInstance().validateResponseForID(captchaId, jCaptchaResponse);
		    log.debug("isResponseCorrect : {}", isResponseCorrect);
		    
		} catch (CaptchaServiceException e) {
		}
		
		return "captcha/index";
	}
		
}
