package com.web.config.mybatis;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ClobTypeHandler implements TypeHandler {

	private static final Logger log = LoggerFactory.getLogger(ClobTypeHandler.class);
	
	@Override
	public Object getResult(ResultSet resultset, String s) throws SQLException {
		log.debug("ClobTypeHandler");
		return resultset.getString(s);
	}

	@Override
	public Object getResult(CallableStatement callablestatement, int i)
			throws SQLException {
		log.debug("ClobTypeHandler");
		return callablestatement.getString(i);
	}

	@Override
	public void setParameter(PreparedStatement preparedstatement, int i,
			Object obj, JdbcType jdbctype) throws SQLException {
		log.debug("ClobTypeHandler");
		preparedstatement.setString(i, (String)obj);
	}
	
}
