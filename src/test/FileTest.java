package test;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.channels.FileChannel;

import org.junit.Test;

public class FileTest {

	
	@Test
	public void copyStream() throws Exception {
		
		String sourceFile = "c:/grid.xls";
		String targetFile = "c:/grid_out.xls";
		
		FileInputStream fis = null;
		FileOutputStream fos = null;
		
		try {
			
			fis = new FileInputStream(sourceFile);
			fos = new FileOutputStream(targetFile);
			
			int read = 0;
			byte[] buffer = new byte[4096];
			while((read = fis.read(buffer)) != -1) {
				fos.write(buffer, 0, read);
			}
			
		} finally {
			if(fos != null) {
				fos.close();
			}
			if(fis != null) {
				fis.close();
			}
		}
	}
	
	
	@Test
	public void copyBuffer() throws Exception {
		
		String sourceFile = "c:/grid.xls";
		String targetFile = "c:/grid_out.xls";
		
		FileInputStream fis = null;
		FileOutputStream fos = null;
		
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
		
		try {
			
			fis = new FileInputStream(sourceFile);
			fos = new FileOutputStream(targetFile);
			
			bis = new BufferedInputStream(fis);
			bos = new BufferedOutputStream(fos);
			
			int read = 0;
			byte[] buffer = new byte[4096];
			while((read = bis.read(buffer)) != -1) {
				bos.write(buffer, 0, read);
			}
			
		} finally {
			if(bos != null) {
				bos.close();
			}
			if(bis != null) {
				bis.close();
			}
		}
	}
	
	
	
	@SuppressWarnings("resource")
	@Test
	public void copyNIO() throws Exception {
		
		String sourceFile = "c:/grid.xls";
		String targetFile = "c:/grid_out.xls";
		
		FileInputStream fis = null;
		FileOutputStream fos = null;
		
		FileChannel inChannel = null;
		FileChannel outChannel = null;
		
		try {
			
			fis = new FileInputStream(sourceFile);
			fos = new FileOutputStream(targetFile);
			
			inChannel = fis.getChannel();
			outChannel = fos.getChannel();
			
			long size = inChannel.size();
			inChannel.transferTo(0, size, outChannel);
			
		} finally {
			if(outChannel != null) {
				outChannel.close();
			}
			if(inChannel != null) {
				inChannel.close();
			}
		}
		
	}
	
	
}
