package com.web.common.exception;


public class BizException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2950646063449121181L;
	
	private String messageKey;
	
	public BizException(String messageKey) {
		this.messageKey = messageKey;
	}

	public String getMessageKey() {
		return messageKey;
	}

	public void setMessageKey(String messageKey) {
		this.messageKey = messageKey;
	}
	
}
