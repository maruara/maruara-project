package com.web.common.util.paginate;

import java.text.MessageFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.util.UrlPathHelper;

import com.web.common.util.parameter.Parameter;


public class PaginationTag extends TagSupport {

	private static final long serialVersionUID = 6527429050501972066L;
	private static final Logger log = LoggerFactory.getLogger(PaginationTag.class);
	
	private Pagination pagination;
	
	public Pagination getPagination() {
		return pagination;
	}

	public void setPagination(Pagination pagination) {
		this.pagination = pagination;
	}
	
	
	@Override
	public int doEndTag() throws JspException {
		try {
			JspWriter out = pageContext.getOut();
			
			WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(pageContext.getServletContext());
			MessageSourceAccessor messageSourceAccessor = webApplicationContext.getBean(MessageSourceAccessor.class);
			
			HttpServletRequest request = (HttpServletRequest)pageContext.getRequest();
			String url = new UrlPathHelper().getOriginatingRequestUri(request) + "?";
			String queryString = request.getQueryString();
			
//			String contextPath = pageContext.getServletContext().getContextPath();
//			HttpServletRequest request = (HttpServletRequest)pageContext.getRequest();
//			
//			String prefix = "/WEB-INF/views";
//			String uri = request.getRequestURI();
//			uri = contextPath + uri.substring(uri.indexOf(prefix) + prefix.length(), uri.lastIndexOf(".")) + "?";
//			String param = request.getQueryString();
			
			
			StringBuffer sb = new StringBuffer();
			
			// 한 페이지당 목록 수
//			int pageSize = pagination.getPageSize();
			
			// 페이지블럭의 페이지 수
			int blockSize = pagination.getBlockSize();
			
			// 현재 페이지
			int currentPage = pagination.getCurrentPage();
			
			// 총 목록수(총건수)
//			int totalRecords = pagination.getTotalRecords();
			
			// 총 페이지수
			int totalPages = pagination.getTotalPages();
			
			// 총 블럭수
//			int totalBlocks = pagination.getTotalBlocks();
			
			// 현재블럭 시작번호
			int startBlockNum = pagination.getStartBlockNum();
			
			// 현재블럭 종료번호
			int endBlockNum = pagination.getEndBlockNum();
			
			// 현재페이지 시작번호
//			int startPageNum = pagination.getStartPageNum();
			
			// 현재페이지 종료번호
//			int endPageNum = pagination.getEndPageNum();
			
			// 이전 블럭의 마지막 페이지
			int preBlockPage = pagination.getPreBlockPage();
			
			// 다음 블럭의 첫번째 페이지
			int nextBlockPage = pagination.getNextBlockPage();
			
			
			
			sb.append("<div class=\"paginate\">");
			
//			if (preBlockPage > 0) {
			if(preBlockPage >= blockSize) {
				sb.append(MessageFormat.format("<a class=\"pre\" href=\"{0}\">{1}</a> ", new Object[]{url + Parameter.getParameter(queryString, "currentPage=" + preBlockPage), messageSourceAccessor.getMessage("paging.pre")}));
			} else {
				sb.append(MessageFormat.format("<span class=\"pre\">{0}</span> ", new Object[]{messageSourceAccessor.getMessage("paging.pre")}));
			}
			
			for (int i = startBlockNum; i <= endBlockNum; i++) {
				if(i == currentPage) {
					sb.append(MessageFormat.format("<strong>{0}</strong> ", new Object[]{i}));
				} else {
					sb.append(MessageFormat.format("<a href=\"{0}\">{1}</a> ", new Object[]{url + Parameter.getParameter(queryString, "currentPage=" + (i)), i}));
				}
			}
			
			if(nextBlockPage <= totalPages) {
				sb.append(MessageFormat.format("<a class=\"next\" href=\"{0}\">{1}</a>", new Object[]{url + Parameter.getParameter(queryString, "currentPage=" + nextBlockPage), messageSourceAccessor.getMessage("paging.next")}));
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
