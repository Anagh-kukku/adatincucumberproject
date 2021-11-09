package com.pom_adatin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Booking_config {
	public WebDriver driver;
	
	@FindBy(id="my_itinerary")
	private WebElement literalyclck;

	public Booking_config(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	public WebElement getLiteralyclck() {
		return literalyclck;
	}
	

}
