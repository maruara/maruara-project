package com.web.config.spring.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Component;

public class BizException extends Exception {
	
	private static final long serialVersionUID = 2950646063449121181L;
	private static final Logger log = LoggerFactory.getLogger(BizException.class);
	
	private String messageKey;
	private String message;
	
	
	public BizException() {
		
	}
	
	public BizException(String messageKey) {
		this.messageKey = messageKey;
	}

	public String getMessageKey() {
		return messageKey;
	}

	public void setMessageKey(String messageKey) {
		this.messageKey = messageKey;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
}
