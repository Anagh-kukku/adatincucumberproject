package com.pom_adatin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_hotel {
	public WebDriver driver;
	
	
	
	@FindBy(xpath="//input[@type='radio']")
    private	WebElement clickradio;
	
	@FindBy(id="continue")
	private WebElement clkcontinue;


	

	public Select_hotel(WebDriver driver2) {
		this.driver =driver2;
		PageFactory.initElements(driver, this);
	}

	public WebElement getClickradio() {
		return clickradio;
	}
	
	public WebElement getClkcontinue() {
		return clkcontinue;
	}


}
