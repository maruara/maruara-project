package test.aspect;

import org.springframework.aop.framework.ProxyFactory;

public class PrinterTest {

	public static void main(String[] args) {
		Printer printer = new Printer();
		
		ProxyFactory pf = new ProxyFactory();
		pf.addAdvice(new LogAdvisor());
		pf.setTarget(printer);
		
		Printer printerProxy = (Printer)pf.getProxy();
		
		printerProxy.print();
	}
	
}
