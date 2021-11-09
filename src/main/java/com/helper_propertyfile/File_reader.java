package com.helper_propertyfile;

import java.io.IOException;

public class File_reader {
	private File_reader() {
		
	}
	
	
	
	
	
	
	public static  File_reader getInstanceFR() {
		 File_reader frm = new  File_reader();
		 return frm;

	}
	
	
	
	public Configuration_reader getInstancecR() throws Throwable {
		Configuration_reader reader = new Configuration_reader();
		return  reader;

	}
	
	
	
	
	
	
	
	
	

}
