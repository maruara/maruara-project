package com.web.common.util;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

public class TagUtility {

	private static final String CHARSET = "UTF-8";


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
	
    
    
    /**
	 * URL Encoding
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public static String encode(String input) throws Exception {
		return URLEncoder.encode(input, CHARSET);
	}
	
	
	
	/**
	 * URL Encoding
	 * 
	 * @param input
	 * @param charset
	 * @return
	 * @throws Exception
	 */
	public static String encode(String input, String charset) throws Exception {
		return URLEncoder.encode(input, charset);
	}
	
	
	
	
	/**
	 * URL Decoding
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public static String decode(String input) throws Exception {
		return URLDecoder.decode(input, CHARSET);
	}
	
	
	
	/**
	 * URL Decoding
	 * 
	 * @param input
	 * @param charset
	 * @return
	 * @throws Exception
	 */
	public static String decode(String input, String charset) throws Exception {
		return URLDecoder.decode(input, charset);
	}
	
	
	
	/**
	 * 바이트로 문자열 자르기
	 * 
	 * @param szText
	 * @param nLength
	 * @return
	 * @throws Exception
	 */
	public static String subbyte(String szText, int nLength) throws Exception {
		String r_val = szText;
		int oF = 0, oL = 0, rF = 0, rL = 0;
		int nLengthPrev = 0;
		byte[] bytes = r_val.getBytes(CHARSET);

		int byteLen = bytes.length;
		int j = 0;
		if (nLengthPrev > 0) {
			while (j < byteLen) {
				if ((bytes[j] & 0x80) != 0) {
					oF += 2;
					rF += 3;
					if (oF + 2 > nLengthPrev) {
						break;
					}
					j += 3;
				} else {
					if (oF + 1 > nLengthPrev) {
						break;
					}
					++oF;
					++rF;
					++j;
				}
			}
			j = rF;
		}
		
		while (j < byteLen) {
			if ((bytes[j] & 0x80) != 0) {
				if (oL + 2 > nLength) {
					break;
				}
				oL += 2;
				rL += 3;
				j += 3;
			} else {
				if (oL + 1 > nLength) {
					break;
				}
				++oL;
				++rL;
				++j;
			}
		}
		
		r_val = new String(bytes, rF, rL, CHARSET);

		return r_val;
	}
	
	
	
	/**
	 * 바이트로 문자열 자르기(말줄임 변수 추가)
	 * 
	 * @param szText
	 * @param nLength
	 * @return
	 * @throws Exception
	 */
	public static String subbyte(String szText, int nLength, String tail) throws Exception {
		String r_val = szText;
		int oF = 0, oL = 0, rF = 0, rL = 0;
		int nLengthPrev = 0;
		byte[] bytes = r_val.getBytes(CHARSET);

		int byteLen = bytes.length;
		int j = 0;
		if (nLengthPrev > 0) {
			while (j < byteLen) {
				if ((bytes[j] & 0x80) != 0) {
					oF += 2;
					rF += 3;
					if (oF + 2 > nLengthPrev) {
						break;
					}
					j += 3;
				} else {
					if (oF + 1 > nLengthPrev) {
						break;
					}
					++oF;
					++rF;
					++j;
				}
			}
			j = rF;
		}
		
		while (j < byteLen) {
			if ((bytes[j] & 0x80) != 0) {
				if (oL + 2 > nLength) {
					break;
				}
				oL += 2;
				rL += 3;
				j += 3;
			} else {
				if (oL + 1 > nLength) {
					break;
				}
				++oL;
				++rL;
				++j;
			}
		}
		
		r_val = new String(bytes, rF, rL, CHARSET);
		
		if(nLength <= oL ) {
			r_val = r_val + tail;
		}
		
		return r_val;
	}
	
	
	
	
	/**
	 * 문자열을 escape 한 후 \n 문자를 <br/> 태그로 교체
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public static String nl2br(String input) throws Exception {
		
		if(input == null || input.length() < 1) {
			return input;
		}
		
		/*
		char[] buffer = input.toCharArray();
		int length = input.length();
		StringBuffer sb = new StringBuffer();
		
		int start = 0;
        for(int i = 0; i < length; i++) {
        	char c = buffer[i];
            if(c > '>') {
                continue;
            }
            char escaped[] = specialCharactersRepresentation[c];
            if(escaped == null) {
                continue;
            }
            if(start < i) {
                sb.append(new String(buffer, start, i - start));
            }
            sb.append(escaped);
            start = i + 1;
        }

        if(start < length) {
        	sb.append(new String(buffer, start, length - start));
        }
		*/
        
		return escape(input).replaceAll("(\r)?\n", "<br />");
	}
	
	
	
	
	
	
	/**
	 * escape
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	private static String escape(String input) throws Exception {
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
	private static String unescape(String input) throws Exception {
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
