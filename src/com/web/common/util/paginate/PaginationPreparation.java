package com.web.common.util.paginate;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class PaginationPreparation {

	// 한 페이지당 목록 수
	@Value("#{global['paginate.page.size']}")
	private int pageSize;
	
	// 페이지블럭의 페이지 수
	@Value("#{global['paginate.block.size']}")
	private int blockSize;
	
	
	public Pagination initialize(Map<String, Object> param, int totalRecords) {

		Pagination pagination = new Pagination();
		pagination.setPageSize(pageSize);
		pagination.setBlockSize(blockSize);
		pagination.initialize(param, totalRecords);
		
		return pagination;
	}
	
}
