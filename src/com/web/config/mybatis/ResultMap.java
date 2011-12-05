package com.web.config.mybatis;

import java.io.Reader;
import java.sql.Clob;

import oracle.sql.CLOB;

import org.apache.commons.collections.map.CaseInsensitiveMap;

public class ResultMap extends CaseInsensitiveMap {

	private static final long serialVersionUID = -5819981224866944868L;

	public Object put(Object key, Object value) {
		if (value != null) {
			if (value.getClass().equals(CLOB.class)) {
				try {
					Clob clob = (Clob)value;
					StringBuffer strOut = new StringBuffer();
					int bufferSize = 1024;
					char[]buf = new char[bufferSize];
					int readcnt;
					Reader rd = clob.getCharacterStream();
					while ((readcnt = rd.read(buf,0,bufferSize)) !=-1) {
						strOut.append(buf,0,readcnt);
					}
					value = strOut.toString();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		
		return super.put(key, value);
	}
	
}
