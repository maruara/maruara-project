package test.aspect;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

/**
 * Aspect의 Advice 역할을 수행할 클래스
 * 
 * @author Administrator
 *
 */
public class LogAdvisor implements MethodInterceptor {

	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		System.out.println("[before : LogAdvisor]");
		Object object = invocation.proceed();
		System.out.println("[after : LogAdvisor]");		
		return object;
	}
	
}
