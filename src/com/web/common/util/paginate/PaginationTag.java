package com.web.common.util.paginate;

import java.text.MessageFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.web.common.util.parameter.Parameter;


public class PaginationTag extends TagSupport {

	private static final long serialVersionUID = -718003618588724082L;
	
	private Pagination pagination;
	private int totalRecords = -1;
	
	public Pagination getPagination() {
		return pagination;
	}

	public void setPagination(Pagination pagination) {
		this.pagination = pagination;
	}
	
	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}
	
	
	
	@Override
	public int doStartTag() throws JspException {
		if(totalRecords > -1) {
			pagination.setTotalRecords(totalRecords);
		}
		return SKIP_BODY;
	}
	
	
	@Override
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
			
			// 한 페이지당 목록 수
			int pageSize = pagination.getPageSize();
			
			// 페이지블럭의 페이지 수
			int blockSize = pagination.getBlockSize();
			
			// 현재 페이지
			int currentPage = pagination.getCurrentPage();
			
			// 총 목록수(총건수)
			int totalRecords = pagination.getTotalRecords();
			
			// 총 페이지수
			int totalPages = pagination.getTotalPages();
			
			// 총 블럭수
			int totalBlocks = pagination.getTotalBlocks();
			
			// 현재 블럭
			int currentBlock = pagination.getCurrentBlock();
			
			// 현재페이지 시작번호
			int startPageNum = pagination.getStartPageNum();
			
			// 현재페이지 종료번호
			int endPageNum = pagination.getEndPageNum();
			
			
			sb.append("<div class=\"paginate\">");
			
			if (currentBlock > blockSize) {
				sb.append(MessageFormat.format("<a class=\"pre\" href=\"{0}\">{1}</a> ", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (firstPageNoOnPageList - 1)), messageSourceAccessor.getMessage("paging.pre")}));
			} else {
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
				sb.append(MessageFormat.format("<a class=\"next\" href=\"{0}\">{1}</a>", new Object[]{uri + Parameter.getParameter(param, "pageIndex=" + (firstPageNoOnPageList + pageSize)), messageSourceAccessor.getMessage("paging.next")}));
			} else {
				sb.append(MessageFormat.format("<span class=\"next\">{0}</span>", new Object[]{messageSourceAccessor.getMessage("paging.next")}));
			}
			
			out.println(sb.toString());
			return EVAL_PAGE;
		} catch (Exception e) {
			throw new JspException(e.toString(), e);
		}
	}
	
}
