package com.sdp;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.pom_adatin.Book_hotel;
import com.pom_adatin.Booking_config;
import com.pom_adatin.Login_page;
import com.pom_adatin.Search_hotel;
import com.pom_adatin.Select_hotel;

public class page_object_manager {
	
	public WebDriver driver;
	
	private Login_page login;
	private Search_hotel hotel;
	private Select_hotel selhotel;
	private Book_hotel book;
	private Booking_config config;
	
	public page_object_manager(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}

	public Login_page getlogin() {
		 login = new Login_page(driver);
		 return login;
		}
	
	public Search_hotel gethotel() {
		 hotel = new Search_hotel(driver);
		return hotel;
       }
	
	public Select_hotel getselecthotel() {
		 selhotel = new Select_hotel(driver);
       return selhotel;	
	}
	public Book_hotel getbook() {
		 book = new Book_hotel(driver);
        return book;
	}
	
	public Booking_config getconfig() {
		 config = new Booking_config(driver);
		 return config;

	}
	
	
	
	
	
	
	
	
	
	
	
	

}
