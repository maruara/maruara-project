package com.web.common.exception;

import java.util.Enumeration;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

/**
 * ExceptionResolver Customazing 
 * 
 * <bean id="exceptionResolver" class="com.web.common.exception.BaseExceptionResolver">
 * 		<property name="view" value="error" />
 * </bean>
 * 
 * @author Administrator
 *
 */
public class SimpleMessageExceptionResolver implements HandlerExceptionResolver {
//public class SimpleMessageExceptionResolver extends SimpleMappingExceptionResolver {
	
	private static final Logger logger = LoggerFactory.getLogger(SimpleMessageExceptionResolver.class);
	
	private Properties exceptionMappings;
	private String viewName;
	
	
	
	public void setViewName(String viewName) {
		this.viewName = viewName;
	}
	
	public void setExceptionMappings(Properties mappings) {
		exceptionMappings = mappings;
	}
	
	
	@Override
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception exception) {
		
		String messageCode = null;
		if(exceptionMappings != null) {
			messageCode = findMatchingViewName(this.exceptionMappings, exception);
		}
		
		ModelAndView mav = new ModelAndView(viewName);
		mav.addObject("messageCode", messageCode);
		mav.addObject("exception", exception);
		
		return mav;
	}
	
	
	/**
	 * Find a matching view name in the given exception mappings.
	 * @param exceptionMappings mappings between exception class names and error view names
	 * @param ex the exception that got thrown during handler execution
	 * @return the view name, or <code>null</code> if none found
	 * @see #setExceptionMappings
	 */
	protected String findMatchingViewName(Properties exceptionMappings, Exception ex) {
		String viewName = null;
		String dominantMapping = null;
		int deepest = Integer.MAX_VALUE;
		for (Enumeration<?> names = exceptionMappings.propertyNames(); names.hasMoreElements();) {
			String exceptionMapping = (String) names.nextElement();
			int depth = getDepth(exceptionMapping, ex);
			if (depth >= 0 && depth < deepest) {
				deepest = depth;
				dominantMapping = exceptionMapping;
				viewName = exceptionMappings.getProperty(exceptionMapping);
			}
		}
		if (viewName != null && logger.isDebugEnabled()) {
			logger.debug("Resolving to view '" + viewName + "' for exception of type [" + ex.getClass().getName() +
					"], based on exception mapping [" + dominantMapping + "]");
		}
		return viewName;
	}
	
	
	
	/**
	 * Return the depth to the superclass matching.
	 * <p>0 means ex matches exactly. Returns -1 if there's no match.
	 * Otherwise, returns depth. Lowest depth wins.
	 */
	protected int getDepth(String exceptionMapping, Exception ex) {
		return getDepth(exceptionMapping, ex.getClass(), 0);
	}

	private int getDepth(String exceptionMapping, Class<?> exceptionClass, int depth) {
		if (exceptionClass.getName().contains(exceptionMapping)) {
			// Found it!
			return depth;
		}
		// If we've gone as far as we can go and haven't found it...
		if (exceptionClass.equals(Throwable.class)) {
			return -1;
		}
		return getDepth(exceptionMapping, exceptionClass.getSuperclass(), depth + 1);
	}
	
	
}
