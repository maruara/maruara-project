package com.web.common.util.paginate;

import java.text.MessageFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.web.common.util.parameter.Parameter;


public class PaginationTagBackup extends TagSupport {

	private static final long serialVersionUID = -718003618588724082L;
	
	
	
	
	public int doEndTag() throws JspException {
		try {
			JspWriter out = pageContext.getOut();
			
			WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
			MessageSourceAccessor messageSourceAccessor = webApplicationContext.getBean(MessageSourceAccessor.class);
			
			
			String contextPath = pageContext.getServletContext().getContextPath();
			HttpServletRequest request = (HttpServletRequest)pageContext.getRequest();
			
			String prefix = "/WEB-INF/views";
			String uri = request.getRequestURI();
			uri = contextPath + uri.substring(uri.indexOf(prefix) + prefix.length(), uri.lastIndexOf(".")) + "?";
			String param = request.getQueryString();
			
			
			StringBuffer sb = new StringBuffer();
//			int firstPageNo = paginationInfo.getFirstPageNo();
			int firstPageNoOnPageList = paginationInfo.getFirstPageNoOnPageList();
			int totalPageCount = paginationInfo.getTotalPageCount();
			int pageSize = paginationInfo.getPageSize();
			int lastPageNoOnPageList = paginationInfo.getLastPageNoOnPageList();
			int currentPageNo = paginationInfo.getCurrentPageNo();
//			int lastPageNo = paginationInfo.getLastPageNo();
			

			
			sb.append("<div class=\"paginate\">");
			
			if (firstPageNoOnPageList > pageSize) {
//				sb.append(MessageFormat.format("<a class=\"pre\" href=\"{0}\">이전페이지</a> ", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (firstPageNoOnPageList - 1))}));
				sb.append(MessageFormat.format("<a class=\"pre\" href=\"{0}\">{1}</a> ", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (firstPageNoOnPageList - 1)), messageSourceAccessor.getMessage("paging.pre")}));
			} else {
//				sb.append("<span class=\"pre\">이전페이지</span> ");
				sb.append(MessageFormat.format("<span class=\"pre\">{0}</span> ", new Object[]{messageSourceAccessor.getMessage("paging.pre")}));
			}
			
			for (int i = firstPageNoOnPageList; i <= lastPageNoOnPageList; i++) {
				if(i == currentPageNo) {
					sb.append(MessageFormat.format("<strong>{0}</strong> ", new Object[]{i}));
				} else {
					sb.append(MessageFormat.format("<a href=\"{0}\">{1}</a> ", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (i)), i}));
				}
			}
			
			if(lastPageNoOnPageList < totalPageCount) {
//				sb.append(MessageFormat.format("<a class=\"next\" href=\"{0}\">다음페이지</a>", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (firstPageNoOnPageList + pageSize))}));
				sb.append(MessageFormat.format("<a class=\"next\" href=\"{0}\">{1}</a>", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (firstPageNoOnPageList + pageSize)), messageSourceAccessor.getMessage("paging.next")}));
			} else {
//				sb.append("<span class=\"next\">다음페이지</span>");
				sb.append(MessageFormat.format("<span class=\"next\">{0}</span>", new Object[]{messageSourceAccessor.getMessage("paging.next")}));
			}
			
			out.println(sb.toString());
			return EVAL_PAGE;
		} catch (Exception e) {
			throw new JspException(e.toString(), e);
		}
	}
	
	public PaginationInfo getPaginationInfo() {
		return paginationInfo;
	}
	public void setPaginationInfo(PaginationInfo paginationInfo) {
		this.paginationInfo = paginationInfo;
	}
	
	private PaginationInfo paginationInfo;
	
}
