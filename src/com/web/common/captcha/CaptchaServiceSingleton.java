package com.web.common.captcha;

import com.octo.captcha.service.captchastore.FastHashMapCaptchaStore;
import com.octo.captcha.service.image.DefaultManageableImageCaptchaService;
import com.octo.captcha.service.image.ImageCaptchaService;

public class CaptchaServiceSingleton {
	private final static ImageCaptchaService instance;
	static {
		instance = new DefaultManageableImageCaptchaService(new FastHashMapCaptchaStore(), new ImageCaptchaEngine(), 180, 100000, 75000);
	}

	public static ImageCaptchaService getInstance() {
		return instance;
	}
	
	/*
	// 기본 설정 그대로 사용
	private static ImageCaptchaService instance = new DefaultManageableImageCaptchaService();
	public static ImageCaptchaService getInstance(){
        return instance;
    }
	
	// 기본 설정 옵션만 변경하여 사용
	private static ImageCaptchaService instance = initializeService();
    private static ImageCaptchaService initializeService(){
    	SimpleListImageCaptchaEngine engine = new SimpleListImageCaptchaEngine();
    	return new DefaultManageableImageCaptchaService(new FastHashMapCaptchaStore(), engine, 180, 100000, 75000);
    }
    
    public static ImageCaptchaService getInstance(){
        return instance;
    }
	*/
}
