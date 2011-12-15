package com.web.common.util.paginate;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;


public class Pagination {
	
	// 한 페이지당 목록 수
	@Value("#{global['paginate.page.size']}")
	private int pageSize;
	
	// 페이지블럭의 페이지 수
	@Value("#{global['paginate.block.size']}")
	private int blockSize;
	
	// 현재 페이지
	private int currentPage;
	
	// 총 목록수(총건수)
	private int totalRecords;
	
	// 총 페이지수
	private int totalPages;
	
	// 총 블럭수
	private int totalBlocks;
	
	// 현재 블럭
	private int currentBlock;
	
	// 현재페이지 시작번호
	private int startPageNum;
	
	// 현재페이지 종료번호
	private int endPageNum;
	
	// 이전 블럭의 마지막 페이지
	private int preBlock;
	
	// 다음 블럭의 첫번째 페이지
	private int nextBlock;
	
	
	
	public Pagination(Map<String, Object> param) {
		initalize(param);
	}
    
	
	public void initalize(Map<String, Object> param) {
		String currentPageStr = (String)param.get("currentPage");
		int currentPage = StringUtils.isEmpty(currentPageStr) ? 1 : Integer.parseInt(currentPageStr);
		if(currentPage<1) {
			currentPage = 1;
		}
		setCurrentPage(currentPage);
		
		setCurrentBlock((int)Math.ceil((double)((getCurrentPage() - 1) / getBlockSize())) + 1);
		setStartPageNum(((getCurrentBlock() - 1) * getPageSize()) + 1);
		setEndPageNum(getStartPageNum() + getPageSize());
		
		param.put("currentPage", getCurrentPage());
		param.put("pageSize", getPageSize());
		param.put("blockSize", getBlockSize());
		param.put("startPageNum", getStartPageNum());
		param.put("endPageNum", getEndPageNum());
		
		/*
		currentPage = StringUtils.isEmpty(currentPageStr) ? 1 : Integer.parseInt(currentPageStr);
		
		totalPages = (int)Math.ceil((double)totalRecords / pageSize);
		totalBlocks = (int)Math.ceil((double)totalPages / blockSize);
		currentBlock = (int)Math.ceil((double)((currentPage - 1) / blockSize)) + 1;
		startPageNum = ((this.currentBlock - 1) * pageSize) + 1;
		endPageNum = startPageNum + pageSize;
		
		param.put("currentPage", currentPage);
		param.put("pageSize", pageSize);
		param.put("blockSize", blockSize);
		param.put("startPageNum", startPageNum);
		param.put("endPageNum", endPageNum);
		*/
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
		totalPages = (int)Math.ceil((double)getTotalRecords() / getPageSize());
		return totalPages;
	}

	public int getTotalBlocks() {
		totalBlocks = (int)Math.ceil((double)getTotalPages() / getBlockSize());
		return totalBlocks;
	}

	public int getCurrentBlock() {
		return currentBlock;
	}

	public void setCurrentBlock(int currentBlock) {
		this.currentBlock = currentBlock;
	}

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

	public int getPreBlock() {
		preBlock = ((getCurrentPage() - 1) / getPageSize()) * getPageSize();
//		if(preBlock < 1) {
//			preBlock = 1;
//		}
		return preBlock;
	}

	public int getNextBlock() {
		nextBlock = getPreBlock() + getPageSize() + 1;
		int totalBlocks = getTotalBlocks();
		if(nextBlock > totalBlocks) {
			nextBlock = totalBlocks;
		}
		return nextBlock;
	}

	public void setNextBlock(int nextBlock) {
		this.nextBlock = nextBlock;
	}
	
}
