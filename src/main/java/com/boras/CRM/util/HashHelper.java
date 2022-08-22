package com.boras.CRM.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import org.jasypt.salt.RandomSaltGenerator;

public class HashHelper {

	 /**
     * SHA-256으로 해싱하는 메소드
     * 
     * @param bytes
     * @return
     * @throws NoSuchAlgorithmException 
     */
	/*
    public String sha256(String msg, String salt) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(salt.getBytes());
        md.update(msg.getBytes());
        
        return bytesToHex(md.digest());
    }
    */
    
    /**
     * SHA-512으로 해싱하는 메소드
     * 
     * @param bytes
     * @return
     * @throws NoSuchAlgorithmException 
     */
    public String sha512(String msg, String salt) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-512");
        md.update(salt.getBytes());
        md.update(msg.getBytes());
        
        return bytesToHex(md.digest());
    }
    
    /**
     * 바이트를 헥스값으로 변환한다
     * 
     * @param bytes
     * @return
     */
    public String bytesToHex(byte[] bytes) {
        StringBuilder builder = new StringBuilder();
        for (byte b: bytes) {
          builder.append(String.format("%02x", b));
        }
        return builder.toString();
    }

    /**
     * salt 값을 반환한다
     * 
     * @param 
     * @return String
     */
    public String makeSalt() {
        byte[] bytes = new RandomSaltGenerator().generateSalt(16);
        return new String(Base64.getEncoder().encode(bytes));
    }
    
    public static void main(String[] args) {
		byte[] bytes = new RandomSaltGenerator().generateSalt(16);
        
		String salt = new String(Base64.getEncoder().encode(bytes));
		System.out.println(salt);
        MessageDigest md = null;
		try {
			md = MessageDigest.getInstance("SHA-512");
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
        md.update(salt.getBytes());
        md.update("1234".getBytes());
        
        StringBuilder builder = new StringBuilder();
        for (byte b: md.digest()) {
          builder.append(String.format("%02x", b));
        }
        
        String rvt = builder.toString();
        
        System.out.println(rvt);
	}
}