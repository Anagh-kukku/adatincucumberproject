package com.helper_propertyfile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Configuration_reader {
	
	public static Properties p;
	
	public Configuration_reader() throws Throwable {
		File f = new File("C:\\Users\\jayar\\eclipse-workspace\\Maven_Adactin_project\\src\\main\\java\\com\\config\\properties\\adatin.properties");
		FileInputStream fis = new FileInputStream(f);
		 p = new Properties();
		 p.load(fis);

	}
	
	public  String getusername() throws IOException {
		
		String usrname= p.getProperty("username");
		return usrname;
		
		
	}
	
	public String getpassword() throws IOException {
		
		String psword = p.getProperty("password");
		return psword;
		
	}
	
	public String geturl() {
		String urll = p.getProperty("url");
		return urll;
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
