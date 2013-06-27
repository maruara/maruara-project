package test;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.DESedeKeySpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.junit.Test;
import static org.hamcrest.CoreMatchers.is; 
import static org.junit.Assert.assertThat; 

public class CipherTest {

	
	@Test
	public void base64() throws Exception {
		String str = "password";
		String encStr = Base64.encodeBase64String(str.getBytes());
		String decStr = new String(Base64.decodeBase64(encStr));
		
		System.out.println("값 : " + str);
		System.out.println("Base64 Encode : " + encStr);
		System.out.println("Base64 Decode : " + decStr);
	}
	
	
	@Test
	public void md5() throws Exception {
		String str = "password";
		
		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(str.getBytes()); 
		byte byteData[] = md.digest();
		StringBuffer sb = new StringBuffer();
		for(int i = 0 ; i < byteData.length ; i++){
			sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
		}
		System.out.println("값 : " + str);
		System.out.println("MD5 : " + sb.toString());
	}
	
	
	@Test
	public void sha256() throws Exception {
		String str = "password";
		
		MessageDigest sha256 = MessageDigest.getInstance("SHA-256");
		sha256.update(str.getBytes()); 
		byte byteData[] = sha256.digest();
		StringBuffer sb = new StringBuffer(); 
		for(int i = 0 ; i < byteData.length ; i++){
			sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
		}
		System.out.println("값 : " + str);
		System.out.println("SHA-256 : " + sb.toString());
	}
	
	
	@Test
	public void sha512() throws Exception {
		String str = "password";
		
		MessageDigest sha256 = MessageDigest.getInstance("SHA-512");
		sha256.update(str.getBytes()); 
		byte byteData[] = sha256.digest();
		StringBuffer sb = new StringBuffer(); 
		for(int i = 0 ; i < byteData.length ; i++){
			sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
		}
		System.out.println("값 : " + str);
		System.out.println("SHA-256 : " + sb.toString());
	}
	
	
	@Test
	public void DES() throws Exception {
		Key key = generateKey("DES", ByteUtils.toBytes("68616e6765656e61", 16));

		String transformation = "DES/ECB/NoPadding";
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key);
		
		String str = "korea123";
		byte[] plain = str.getBytes();
		byte[] encrypt = cipher.doFinal(plain);
		System.out.println("원문 : " + ByteUtils.toHexString(plain));
		System.out.println("암호 : " + ByteUtils.toHexString(encrypt));
		
		cipher.init(Cipher.DECRYPT_MODE, key);
		byte[] decrypt = cipher.doFinal(encrypt);
		System.out.println("복호 : " + ByteUtils.toHexString(decrypt));

	}
	
	
	
	@Test
	public void DESPadding() throws Exception {
		Key key = generateKey("DES", ByteUtils.toBytes("68616e6765656e61", 16));

		String transformation = "DES/ECB/PKCS5Padding";
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key);
		
		String str = "korea";
		byte[] plain = str.getBytes();
		byte[] encrypt = cipher.doFinal(plain);
		System.out.println("원문 : " + ByteUtils.toHexString(plain));
		System.out.println("암호 : " + ByteUtils.toHexString(encrypt));
		
		cipher.init(Cipher.DECRYPT_MODE, key);
		byte[] decrypt = cipher.doFinal(encrypt);
		System.out.println("복호 : " + ByteUtils.toHexString(decrypt));
	}
	
	

	@Test
	public void DESede() throws Exception {
		Key key = generateKey("DESede", ByteUtils.toBytes("696d697373796f7568616e6765656e61696d697373796f75", 16));

		String transformation = "DESede/ECB/PKCS5Padding";
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key);
		
		String str = "hello123";
		byte[] plain = str.getBytes();
		byte[] encrypt = cipher.doFinal(plain);
		System.out.println("원문 : " + ByteUtils.toHexString(plain));
		System.out.println("암호 : " + ByteUtils.toHexString(encrypt));
		
		cipher.init(Cipher.DECRYPT_MODE, key);
		byte[] decrypt = cipher.doFinal(encrypt);
		System.out.println("복호 : " + ByteUtils.toHexString(decrypt));
	}
	
	
	@Test
	public void AES() throws Exception {
		Key key = generateKey("AES", ByteUtils.toBytes("696d697373796f7568616e6765656e61", 16));

		String transformation = "AES/ECB/PKCS5Padding";
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key);
		
		String str = "hello123";
		byte[] plain = str.getBytes();
		byte[] encrypt = cipher.doFinal(plain);
		System.out.println("원문 : " + ByteUtils.toHexString(plain));
		System.out.println("암호 : " + ByteUtils.toHexString(encrypt));
		
		cipher.init(Cipher.DECRYPT_MODE, key);
		byte[] decrypt = cipher.doFinal(encrypt);
		System.out.println("복호 : " + ByteUtils.toHexString(decrypt));
	}
	
	
	@Test
	public void AES_CBC() throws Exception {
		Key key = generateKey("AES", ByteUtils.toBytes("696d697373796f7568616e6765656e61", 16));
		byte[] iv = ByteUtils.toBytes("26c7d1d26c142de0a3b82f7e8f90860a", 16);
		String transformation = "AES/CBC/PKCS5Padding";

		IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key, ivParameterSpec);
		
		String str = "hello123";
		byte[] plain = str.getBytes();
		byte[] encrypt = cipher.doFinal(plain);
		System.out.println("원문 : " + ByteUtils.toHexString(plain));
		System.out.println("암호 : " + ByteUtils.toHexString(encrypt));
		
		cipher.init(Cipher.DECRYPT_MODE, key, ivParameterSpec);
		byte[] decrypt = cipher.doFinal(encrypt);
		System.out.println("복호 : " + ByteUtils.toHexString(decrypt));
	}
	
	

	@Test
	public void AESFile() throws Exception {
		Key key = generateKey("AES", ByteUtils.toBytes("696d697373796f7568616e6765656e61", 16));
		String transformation = "AES/ECB/PKCS5Padding";

		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key);

		File plainFile = new File("c:/plain.txt");
		File encryptFile = new File("c:/encrypt.txt");
		File decryptFile = new File("c:/decrypt.txt");
		
		BufferedInputStream input = null;
		BufferedOutputStream output = null;
		try {
			input = new BufferedInputStream(new FileInputStream(plainFile));
			output = new BufferedOutputStream(new FileOutputStream(encryptFile));
			
			int read = 0;
			byte[] inBuf = new byte[1024];
			byte[] outBuf = null;
			while ((read = input.read(inBuf)) != -1) {
				outBuf = cipher.update(inBuf, 0, read);
				if (outBuf != null) {
					output.write(outBuf);
				}
			}
			outBuf = cipher.doFinal();
			if (outBuf != null) {
				output.write(outBuf);
			}
		} finally {
			if (output != null) try {output.close();} catch(IOException ie) {}
			if (input != null) try {input.close();} catch(IOException ie) {}
		}
				
		cipher.init(Cipher.DECRYPT_MODE, key);
		try {
			input = new BufferedInputStream(new FileInputStream(encryptFile));
			output = new BufferedOutputStream(new FileOutputStream(decryptFile));
			
			int read = 0;
			byte[] inBuf = new byte[1024];
			byte[] outBuf = null;
			while ((read = input.read(inBuf)) != -1) {
				outBuf = cipher.update(inBuf, 0, read);
				if (outBuf != null) {
					output.write(outBuf);
				}
			}
			outBuf = cipher.doFinal();
			if (outBuf != null) {
				output.write(outBuf);
			}
		} finally {
			if (output != null) try {output.close();} catch(IOException ie) {}
			if (input != null) try {input.close();} catch(IOException ie) {}
		}
	}
	
	
	@Test
	public void password() throws Exception {
		String password = "mypassword";
		
		byte[] passwordBytes = password.getBytes();
		int len = passwordBytes.length;
		byte[] keyBytes = new byte[16];
		if (len >= 16) {
			System.arraycopy(passwordBytes, 0, keyBytes, 0, 16);
		} else {
			System.arraycopy(passwordBytes, 0, keyBytes, 0, len);
			for (int i = 0; i < (16 - len); i++) {
				keyBytes[len + i] = passwordBytes[i % len];
			}
		}
		
		Key key = generateKey("AES", keyBytes);
		String transformation = "AES/ECB/PKCS5Padding";
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key);
		
		byte[] plain = password.getBytes();
		byte[] encrypt = cipher.doFinal(plain);
		
		System.out.println("원문 : " + ByteUtils.toHexString(plain));
		System.out.println("암호 : " + ByteUtils.toHexString(encrypt));
		
		cipher.init(Cipher.DECRYPT_MODE, key);
		byte[] decrypt = cipher.doFinal(encrypt);
		System.out.println("복호 : " + ByteUtils.toHexString(decrypt));
	}
	
	
	/**
	 * 관리자가 지정한 키로 암호화/복호화 한다.
	 * 
	 * @throws Exception
	 */
	@Test
	public void passwordStr() throws Exception {
		String pasword = "mypassword";
		
		String encrypt = AESEncode(pasword);
		String decrypt = AESDecode(encrypt);
		
		System.out.println("원문 : " + pasword);
		System.out.println("암호 : " + encrypt);
		System.out.println("복호 : " + decrypt);
		
		assertThat(pasword, is(decrypt));
	}
	
	
	/**
	 * 비밀번호 자체를 키로 암호화/복호화 사용한다.
	 * 본인이 아니면 알 수 없으므로 보안에 좋음.
	 * 
	 * @throws Exception
	 */
	@Test
	public void passwordStr2() throws Exception {
		String password = "mypassword";
		
		String encrypt = AESEncode2(password);
		String decrypt = AESDecode2(encrypt, password);
		
		System.out.println("원문 : " + password);
		System.out.println("암호 : " + encrypt);
		System.out.println("복호 : " + decrypt);
		
		assertThat(password, is(decrypt));
	}
	
	
	
	/**
	 * 해당 알고리즘에 사용할 비밀키(SecretKey)를 생성한다.
	 * 
	 * @param algorithm
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	private static Key generateKey(String algorithm) throws NoSuchAlgorithmException {
		KeyGenerator keyGenerator = KeyGenerator.getInstance(algorithm);
		SecretKey secretKey = keyGenerator.generateKey();
		return secretKey;
	}
	
	/**
	 * 주어진 데이터로, 해당 알고리즘에 사용할 비밀키(SecretKey)를 생성한다.
	 * 
	 * @param algorithm
	 * @param keyData
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeyException
	 * @throws InvalidKeySpecException
	 */
	public static Key generateKey(String algorithm, byte[] keyData) throws NoSuchAlgorithmException, InvalidKeyException, InvalidKeySpecException {
		if ("DES".equals(algorithm)) {
			KeySpec keySpec = new DESKeySpec(keyData);
			SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance(algorithm);
			SecretKey secretKey = secretKeyFactory.generateSecret(keySpec);
			return secretKey;
		} else if ("DESede".equals(algorithm) || "TripleDES".equals(algorithm)) {
			KeySpec keySpec = new DESedeKeySpec(keyData);
			SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance(algorithm);
			SecretKey secretKey = secretKeyFactory.generateSecret(keySpec);
			return secretKey;
		} else {
			SecretKeySpec keySpec = new SecretKeySpec(keyData, algorithm);
			return keySpec;
		}
		/*
		String upper = algorithm.toUpperCase();
		if ("DES".equals(upper)) {
			KeySpec keySpec = new DESKeySpec(keyData);
			SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance(algorithm);
			SecretKey secretKey = secretKeyFactory.generateSecret(keySpec);
			return secretKey;
		} else if ("DESede".equals(upper) || "TripleDES".equals(upper)) {
			KeySpec keySpec = new DESedeKeySpec(keyData);
			SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance(algorithm);
			SecretKey secretKey = secretKeyFactory.generateSecret(keySpec);
			return secretKey;
		} else {
			SecretKeySpec keySpec = new SecretKeySpec(keyData, algorithm);
			return keySpec;
		}
		*/
	}
	
	
	public static String AESEncode(String str) throws InvalidKeySpecException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		Key key = generateKey("AES", ByteUtils.toBytes("696d697373796f7568616e6765656e61", 16));
		byte[] iv = ByteUtils.toBytes("26c7d1d26c142de0a3b82f7e8f90860a", 16);
		String transformation = "AES/CBC/PKCS5Padding";

		IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key, ivParameterSpec);
		
		byte[] encrypt = cipher.doFinal(str.getBytes("UTF-8"));
		String encryptStr = new String(Base64.encodeBase64(encrypt));
		return encryptStr;
	}
	
	public static String AESEncode2(String str) throws InvalidKeySpecException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		byte[] strBytes = str.getBytes();
		int len = strBytes.length;
		byte[] keyBytes = new byte[16];
		if (len >= 16) {
			System.arraycopy(strBytes, 0, keyBytes, 0, 16);
		} else {
			System.arraycopy(strBytes, 0, keyBytes, 0, len);
			for (int i = 0; i < (16 - len); i++) {
				keyBytes[len + i] = strBytes[i % len];
			}
		}
		
		
		Key key = generateKey("AES", keyBytes);
		byte[] iv = ByteUtils.toBytes("26c7d1d26c142de0a3b82f7e8f90860a", 16);
		String transformation = "AES/CBC/PKCS5Padding";

		IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.ENCRYPT_MODE, key, ivParameterSpec);
		
		byte[] encrypt = cipher.doFinal(str.getBytes("UTF-8"));
		String encryptStr = new String(Base64.encodeBase64(encrypt));
		return encryptStr;
	}
	
	
	public static String AESDecode(String str) throws InvalidKeySpecException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		Key key = generateKey("AES", ByteUtils.toBytes("696d697373796f7568616e6765656e61", 16));
		byte[] iv = ByteUtils.toBytes("26c7d1d26c142de0a3b82f7e8f90860a", 16);
		String transformation = "AES/CBC/PKCS5Padding";

		IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.DECRYPT_MODE, key, ivParameterSpec);
		
		byte[] encrypt = Base64.decodeBase64(str.getBytes());
		byte[] decrypt = cipher.doFinal(encrypt);
		String decryptStr = new String(decrypt, "UTF-8");
		return decryptStr;
	}
	
	
	public static String AESDecode2(String encryptStr, String str) throws InvalidKeySpecException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		byte[] strBytes = str.getBytes();
		int len = strBytes.length;
		byte[] keyBytes = new byte[16];
		if (len >= 16) {
			System.arraycopy(strBytes, 0, keyBytes, 0, 16);
		} else {
			System.arraycopy(strBytes, 0, keyBytes, 0, len);
			for (int i = 0; i < (16 - len); i++) {
				keyBytes[len + i] = strBytes[i % len];
			}
		}
		
		Key key = generateKey("AES", keyBytes);
		byte[] iv = ByteUtils.toBytes("26c7d1d26c142de0a3b82f7e8f90860a", 16);
		String transformation = "AES/CBC/PKCS5Padding";

		IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
		Cipher cipher = Cipher.getInstance(transformation);
		cipher.init(Cipher.DECRYPT_MODE, key, ivParameterSpec);
		
		byte[] encrypt = Base64.decodeBase64(encryptStr.getBytes());
		byte[] decrypt = cipher.doFinal(encrypt);
		String decryptStr = new String(decrypt, "UTF-8");
		return decryptStr;
	}
	
}
