package test.util;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringEscapeUtils;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EscapeTest {

	private static final Logger log = LoggerFactory.getLogger(EscapeTest.class);
	
	
	/*
	public static char specialCharactersRepresentation[][];
	
    static {
        specialCharactersRepresentation = new char[63][];
        specialCharactersRepresentation[38] = "&amp;".toCharArray();
        specialCharactersRepresentation[60] = "&lt;".toCharArray();
        specialCharactersRepresentation[62] = "&gt;".toCharArray();
        specialCharactersRepresentation[34] = "&#034;".toCharArray();
        specialCharactersRepresentation[39] = "&#039;".toCharArray();
    }
    */
	
	
	/**
	 * escape 적용할 문자
	 */
	private static final String[] ESCAPES;
	
	
	/**
	 * unescape 적용할 문자
	 */
	private static final Map<String, Integer> UNESCAPES;

	
    static {
        int size = '>' + 1;
        ESCAPES = new String[size];
        ESCAPES['"'] = "&#034;";  // 34
        ESCAPES['&'] = "&amp;";  // 38
        ESCAPES['\''] = "&#039;";  // 39
        ESCAPES['<'] = "&lt;";  // 60
        ESCAPES['>'] = "&gt;";  // 62
        
        UNESCAPES = new HashMap<String, Integer>();
        UNESCAPES.put("quot", 34);
        UNESCAPES.put("amp", 38);
        UNESCAPES.put("apos", 39);
        UNESCAPES.put("lt", 60);
        UNESCAPES.put("gt", 62);
    }
	
    
    
	@Test
	public void test1() throws Exception {
		String str = "abc!@#$%^*()&<>\"'한글ab";
		String escapeStr = StringEscapeUtils.escapeHtml3(str);
		log.debug("escapeHtml3 : {}", escapeStr);
		log.debug("unescapeHtml3 : {}", StringEscapeUtils.unescapeHtml3(escapeStr));
		
		
		escapeStr = StringEscapeUtils.escapeHtml4(str);
		log.debug("escapeHtml4 : {}", escapeStr);
		log.debug("unescapeHtml4 : {}", StringEscapeUtils.unescapeHtml4(escapeStr));
		
		
		escapeStr = StringEscapeUtils.escapeXml(str);
		log.debug("escapeXml : {}", escapeStr);
		log.debug("escapeXml : {}", StringEscapeUtils.unescapeXml(escapeStr));
		
		
		escapeStr = StringEscapeUtils.escapeJava(str);
		log.debug("escapeJava : {}", escapeStr);
		log.debug("unescapeJava : {}", StringEscapeUtils.unescapeJava(escapeStr));
		
		escapeStr = StringEscapeUtils.escapeCsv(str);
		log.debug("escapeCsv : {}", escapeStr);
		log.debug("unescapeCsv : {}", StringEscapeUtils.unescapeCsv(escapeStr));
		
		escapeStr = escape(str);
		log.debug("escape : {}", escapeStr);
		log.debug("unescape : {}", unescape(escapeStr));
	}
	
	
	
	/**
	 * escape
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	private String escape(String input) throws Exception {
		if(input == null || input.length() < 1) {
			return null;
		}
		
		char[] buffer = input.toCharArray();
		int end = buffer.length;
		StringBuffer sb = new StringBuffer();
		
		int from = 0;
		char c = 0;
		String escaped = null;
		int escapesCount = ESCAPES.length;
        
		for(int to = from; to < end; to++) {
        	
			c = buffer[to];
			
//        	if(c > '>') {
            if(c > escapesCount) {
                continue;
            }
            
            escaped = ESCAPES[c];
            
            if(escaped == null) {
                continue;
            }
            
            if(from < to) {
                sb.append(new String(buffer, from, to - from));
            }
            
            sb.append(escaped);
            from = to + 1;
        }
		
        if(from < end) {
        	sb.append(new String(buffer, from, end - from));
        }
        
        return sb.toString();
	}
	
	
	
	/**
	 * unescape
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	private String unescape(String input) throws Exception {
		if(input == null || input.length() < 1) {
			return null;
		}
		
		int firstAmp = input.indexOf('&');
		StringBuffer sb = new StringBuffer();
		
		if(firstAmp < 0) {
			return input;
		}
		
    	char[] buffer = input.toCharArray();
    	sb.append(new String(buffer, 0, firstAmp));
        int len = buffer.length;
        char c = 0;
        int nextIdx = -1;
        int semiColonIdx = -1;
        int amphersandIdx = -1;
        String entityContent = null;
        int entityValue = -1;
        int entityContentLen = -1;
        char isHexChar = 0;
        
        for(int i = firstAmp; i < len; i++) {
            c = buffer[i];
            if(c == '&') {
                nextIdx = i + 1;
                semiColonIdx = input.indexOf(';', nextIdx);
                if(semiColonIdx == -1) {
                	sb.append(c);
                	continue;
                }
                amphersandIdx = input.indexOf('&', i + 1);
                if(amphersandIdx != -1 && amphersandIdx < semiColonIdx) {
                	sb.append(c);
                    continue;
                }
                
                entityContent = input.substring(nextIdx, semiColonIdx);
                entityValue = -1;
                entityContentLen = entityContent.length();
                if(entityContentLen > 0) {
                    if(entityContent.charAt(0) == '#') {
                        if(entityContentLen > 1) {
                            isHexChar = entityContent.charAt(1);
                            try {
                                switch(isHexChar) {
	                                case 88: // 'X'
	                                case 120: // 'x'
	                                    entityValue = Integer.parseInt(entityContent.substring(2), 16);
	                                    break;
	
	                                default:
	                                    entityValue = Integer.parseInt(entityContent.substring(1), 10);
	                                    break;
                                }
                                if(entityValue > 65535) {
                                    entityValue = -1;
                                }
                            } catch(NumberFormatException e) {
                                entityValue = -1;
                            }
                        }
                    } else {
                        entityValue = UNESCAPES.get(entityContent);
                    }
                }
                
                if(entityValue == -1) {
                	sb.append((char)38).append(entityContent).append((char)59);
                } else {
                	sb.append((char)entityValue);
                }
                i = semiColonIdx;
            } else {
            	sb.append(c);
            }
        }
		
		return sb.toString();
	}
	
}
