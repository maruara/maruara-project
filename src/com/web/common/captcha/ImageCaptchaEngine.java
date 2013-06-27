package com.web.common.captcha;

import java.awt.Font;

import com.octo.captcha.component.image.backgroundgenerator.BackgroundGenerator;
import com.octo.captcha.component.image.backgroundgenerator.FunkyBackgroundGenerator;
import com.octo.captcha.component.image.color.RandomRangeColorGenerator;
import com.octo.captcha.component.image.fontgenerator.FontGenerator;
import com.octo.captcha.component.image.fontgenerator.RandomFontGenerator;
import com.octo.captcha.component.image.textpaster.RandomTextPaster;
import com.octo.captcha.component.image.textpaster.TextPaster;
import com.octo.captcha.component.image.wordtoimage.ComposedWordToImage;
import com.octo.captcha.component.image.wordtoimage.WordToImage;
import com.octo.captcha.component.word.wordgenerator.RandomWordGenerator;
import com.octo.captcha.component.word.wordgenerator.WordGenerator;
import com.octo.captcha.engine.image.ListImageCaptchaEngine;
import com.octo.captcha.image.gimpy.GimpyFactory;

public class ImageCaptchaEngine extends ListImageCaptchaEngine {
	protected void buildInitialFactories() {
		// 랜덤 문자 설정
		WordGenerator wgen = new RandomWordGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789");
		
		// Text 색 설정
		RandomRangeColorGenerator cgen = new RandomRangeColorGenerator(
				new int[] { 0, 100 }, 
				new int[] { 0, 100 }, 
				new int[] { 0, 100 });
		
		// Text 설정 (랜덤 시작 Text Size, 랜덤 종료 Text Size, 색)
		TextPaster textPaster = new RandomTextPaster(new Integer(4), new Integer(7), cgen, true);
		
		// 백그라운드 색 설정
		RandomRangeColorGenerator bcgen = new RandomRangeColorGenerator(
				new int[] { 150, 255 }, 
				new int[] { 150, 255 }, 
				new int[] { 150, 255 });
		
		// 백그라운드 설정 (가로 크기, 세로 크기, 색)
		BackgroundGenerator backgroundGenerator = new FunkyBackgroundGenerator(new Integer(150), new Integer(50), bcgen);
		
		// 백그라운드 기본 설정
		// BackgroundGenerator backgroundGenerator = new FunkyBackgroundGenerator(new Integer(150), new Integer(50));
		
		// 글꼴 설정
		Font[] fontsList = new Font[] { 
				new Font("Arial", 0, 10), 
				new Font("Tahoma", 0, 10), 
				new Font("Verdana", 0, 10)
		};
		
		// 폰트 설정 (랜덤 시작 폰트 Size, 랜덤 종료 폰트 Size)
		FontGenerator fontGenerator = new RandomFontGenerator(new Integer(20), new Integer(35), fontsList);
		
		WordToImage wordToImage = new ComposedWordToImage(fontGenerator, backgroundGenerator, textPaster);
		this.addFactory(new GimpyFactory(wgen, wordToImage));
	}
}
