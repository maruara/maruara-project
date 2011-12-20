package test.aspect;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PrinterTest2 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("test/aspect/context-aspect.xml");
		Printer printer = (Printer) context.getBean("printer");
		printer.print();
	}
	
}
