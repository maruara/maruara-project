package com.web.common.util.paginate;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class PaginationUtil {
	
	
	@Value("#{global['pageUnit']}")
	private int pageUnit;
	
	@Value("#{global['pageSize']}")
	private int pageSize;

	
	
	public PaginationInfo setPaginationInfo(Map<String, Object> map) throws Exception {
		PaginationInfo paginationInfo = new PaginationInfo();
		
		int pageIndex = StringUtils.isEmpty((String)map.get("pageIndex")) ? 1 : Integer.parseInt((String)map.get("pageIndex"));

		map.put("pageUnit", pageUnit);
		map.put("pageSize", pageSize);
		map.put("pageIndex", pageIndex);
		
		paginationInfo.setCurrentPageNo(pageIndex);
		paginationInfo.setRecordCountPerPage(pageUnit);
		paginationInfo.setPageSize(pageSize);
		
		map.put("firstIndex", paginationInfo.getFirstRecordIndex());
		map.put("lastIndex", paginationInfo.getLastRecordIndex());
		map.put("recordCountPerPage", paginationInfo.getRecordCountPerPage());
				
		return paginationInfo;
	}
	
}
