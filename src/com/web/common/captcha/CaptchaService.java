package com.web.common.captcha;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.octo.captcha.service.captchastore.FastHashMapCaptchaStore;
import com.octo.captcha.service.image.DefaultManageableImageCaptchaService;
import com.octo.captcha.service.image.ImageCaptchaService;

@Service
@Scope(value="singleton")
public class CaptchaService {
	
	private final static ImageCaptchaService instance;
	
	static {
		instance = new DefaultManageableImageCaptchaService(new FastHashMapCaptchaStore(), new ImageCaptchaEngine(), 180, 100000, 75000);
	}
	
	public ImageCaptchaService getInstance() {
		return instance;
	}
	
	/*
	@PostConstruct
	public void init() {
		
	}
	
	@PreDestroy
	public void close() {
		
	}
	*/
	
}
