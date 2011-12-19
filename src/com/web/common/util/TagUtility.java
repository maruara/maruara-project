package com.web.common.util;

import java.net.URLDecoder;
import java.net.URLEncoder;

public class TagUtility {

	private static final String CHARSET = "UTF-8";
	public static char specialCharactersRepresentation[][];
    static {
        specialCharactersRepresentation = new char[63][];
        specialCharactersRepresentation[38] = "&amp;".toCharArray();
        specialCharactersRepresentation[60] = "&lt;".toCharArray();
        specialCharactersRepresentation[62] = "&gt;".toCharArray();
        specialCharactersRepresentation[34] = "&#034;".toCharArray();
        specialCharactersRepresentation[39] = "&#039;".toCharArray();
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
		
		return sb.toString().replaceAll("\n", "<br/>");
	}
	
	
}
