package com.web.common.util.paginate;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


//@Component
//@Scope(value="prototype")
public class Pagination {
	
	private static final Logger log = LoggerFactory.getLogger(Pagination.class);
	
	// 한 페이지당 목록 수
	private int pageSize;
	
	// 페이지블럭의 페이지 수
	private int blockSize;
	
	// 현재 페이지
	private int currentPage;
	
	// 총 목록수(총건수)
	private int totalRecords;
	
	// 총 페이지수
	private int totalPages;
	
	// 총 블럭수
//	private int totalBlocks;
	
	// 현재페이지 시작번호
	private int startPageNum;
	
	// 현재페이지 종료번호
	private int endPageNum;
	
	// 현재블럭 시작번호
	private int startBlockNum;
	
	// 현재블럭 종료번호
	private int endBlockNum;
	
	// 이전 블럭의 마지막 페이지
	private int preBlockPage;
	
	// 다음 블럭의 첫번째 페이지
	private int nextBlockPage;
	
	
	public void initialize(Map<String, Object> param, int totalRecords) {
		
		this.totalRecords = totalRecords;
		
		String currentPageStr = (String)param.get("currentPage");
		currentPage = StringUtils.isEmpty(currentPageStr) ? 1 : Integer.parseInt(currentPageStr);
		if(currentPage<1) {
			currentPage = 1;
		}
		
		totalPages = (totalRecords - 1) / pageSize + 1;
//		totalBlocks = (int)Math.ceil((double)totalPages / blockSize);
		
		if(currentPage > totalPages) {
			currentPage = totalPages;
		}
		
		startPageNum = (currentPage - 1) * pageSize + 1;
		endPageNum = currentPage * pageSize;
		
		startBlockNum = ((currentPage - 1) / blockSize) * blockSize + 1;
		endBlockNum = (startBlockNum + blockSize) - 1;
		if(endBlockNum > totalPages) {
			endBlockNum = totalPages;
		}
		
		preBlockPage = ((currentPage - 1) / blockSize) * blockSize;
		nextBlockPage = preBlockPage + blockSize + 1;
		
		param.put("currentPage", currentPage);
		param.put("pageSize", pageSize);
		param.put("blockSize", blockSize);
		param.put("startPageNum", startPageNum);
		param.put("endPageNum", endPageNum);
		param.put("totalRecords", totalRecords);
	}
	

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getBlockSize() {
		return blockSize;
	}

	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

	public int getTotalPages() {
		return totalPages;
	}
	
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

//	public int getTotalBlocks() {
//		return totalBlocks;
//	}

	public int getStartPageNum() {
		return startPageNum;
	}

	public void setStartPageNum(int startPageNum) {
		this.startPageNum = startPageNum;
	}

	public int getEndPageNum() {
		return endPageNum;
	}

	public void setEndPageNum(int endPageNum) {
		this.endPageNum = endPageNum;
	}

	public int getPreBlockPage() {
		return preBlockPage;
	}
	
	public void setPreBlockPage(int preBlockPage) {
		this.preBlockPage = preBlockPage;
	}

	public int getNextBlockPage() {
		return nextBlockPage;
	}

	public void setNextBlockPage(int nextBlockPage) {
		this.nextBlockPage = nextBlockPage;
	}

	public int getStartBlockNum() {
		return startBlockNum;
	}

	public void setStartBlockNum(int startBlockNum) {
		this.startBlockNum = startBlockNum;
	}

	public int getEndBlockNum() {
		return endBlockNum;
	}

	public void setEndBlockNum(int endBlockNum) {
		this.endBlockNum = endBlockNum;
	}
	
}
