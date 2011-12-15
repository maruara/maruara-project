package com.web.common.util.parameter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;


public class ParameterTag extends TagSupport {

	private static final long serialVersionUID = -718003618588724082L;
	private String value;
	private String prefix;
	
	
	public int doEndTag() throws JspException {
		try {
			JspWriter out = pageContext.getOut();
			
			out = pageContext.getOut();
			HttpServletRequest request = (HttpServletRequest)pageContext.getRequest();
			String parameter = Parameter.getPrefixParameter(request, value, prefix);
			
			out.print(parameter);
			
			return SKIP_BODY;
		} catch (Exception e) {
			throw new JspException(e.toString(), e);
		}
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}
	
}
