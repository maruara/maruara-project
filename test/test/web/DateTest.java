package test.web;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DateTest {

	private static final Logger log = LoggerFactory.getLogger(DateTest.class);
	
	
	
	
	@Test
	public void age() throws Exception {
		String birthStr = "19821219";
		log.debug(" age : {}", getAge(birthStr));
	}
	private int getAge(String birthStr) throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.KOREAN);
		Date birthDay = sdf.parse(birthStr);
		
		GregorianCalendar today = new GregorianCalendar();
		GregorianCalendar birth = new GregorianCalendar();
		birth.setTime(birthDay);
		
		int factor = 0;
		if(today.get(Calendar.DAY_OF_YEAR)<birth.get(Calendar.DAY_OF_YEAR)) {
			factor = -1;
		}
		return today.get(Calendar.YEAR) - birth.get(Calendar.YEAR) + factor;
	}
	
	
	
	
	@Test
	public void age2() throws Exception {
		String birthStr = "19821219";
		log.debug(" age : {}", getAge2(birthStr));
	}
	private int getAge2(String birthStr) throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.KOREAN);
		sdf.setLenient(false);
		Date birthDay = sdf.parse(birthStr);
		
		GregorianCalendar gc = new GregorianCalendar();
		gc.setTime(birthDay);
		
		int birthYear = gc.get(Calendar.YEAR);
		int birthMonth = gc.get(Calendar.MONTH);
		int birthDate = gc.get(Calendar.DATE);
		
		gc.setTime(new Date());
		int nowYear = gc.get(Calendar.YEAR);
		int nowMonth = gc.get(Calendar.MONTH);
		int nowDate = gc.get(Calendar.DATE);
		
		if(nowMonth > birthMonth) {
			return nowYear - birthYear;
		} else if(nowMonth == birthMonth && nowDate >= birthDate) {
			return nowYear - birthYear;
		} else {
			return nowYear - birthYear -1;
		}
	}
	
	
	
	@Test
	public void age3() throws Exception {
		String jumin = "821219-1000000";
		log.debug(" age : {}", getAge3(jumin));
	}
	private int getAge3(String jumin) throws Exception {
		int juminGubun = jumin.indexOf("-");
		String birthStr = jumin.substring(0, juminGubun);
		
		int century = Integer.parseInt(jumin.substring(juminGubun+1, juminGubun+2));
		if(century == 9 || century == 0) {
			birthStr = "18" + birthStr;
		} else if(century == 1 || century == 2 || century == 5 || century == 6) {
			birthStr = "19" + birthStr;
		} else if(century == 3 || century == 4 || century == 7 || century == 8) {
			birthStr = "20" + birthStr;
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.KOREAN);
		Date birthDay = sdf.parse(birthStr);
		
		GregorianCalendar today = new GregorianCalendar();
		GregorianCalendar birth = new GregorianCalendar();
		birth.setTime(birthDay);
		
		int factor = 0;
		if(today.get(Calendar.DAY_OF_YEAR)<birth.get(Calendar.DAY_OF_YEAR)) {
			factor = -1;
		}
		return today.get(Calendar.YEAR) - birth.get(Calendar.YEAR) + factor;
	}
	
	
	
}
