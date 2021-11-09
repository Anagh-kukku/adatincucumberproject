package com.Adatin_baseclass;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Base_class {
	
	
	
	public static WebDriver driver;
	
	public static WebDriver get_driver() {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\Driver\\chromedriver.exe" );
		 driver = new ChromeDriver();
		driver.manage().window().maximize();
		return driver;

	}
	public static void launch_url (String url) {
		driver.get(url);

	}
	
	
	
	
	public static  void sendkeys(WebElement w,String s) {
		w.sendKeys(s);
		
		
	}
	
	public static void click(WebElement w) {
		w.click();
	}
	
	public static void waits(int i,String s) {
		WebDriverWait wait = new WebDriverWait(driver,i);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(s)));

	}
	
	public static void screenshot(String s) throws IOException{
		TakesScreenshot ts = (TakesScreenshot) driver;
		File f = ts.getScreenshotAs(OutputType.FILE);
		File  e = new File(System.getProperty("user.dir")+"\\Screen_shot\\"+s+".png");
        FileUtils.copyFile(f, e);
	}
	
	public static void select(WebElement w, String type,String value) {
		Select s = new Select(w);
		
		if(type.equalsIgnoreCase("selectbyvalue")) {
			s.selectByValue(value);
		}
		
		if(type.equalsIgnoreCase("selectbyvisibletext")) {
			s.selectByVisibleText(value);
		}
		if(type.equalsIgnoreCase("selectbyindex")) {
			int  parseint =Integer.parseInt(value);
			s.selectByIndex(parseint);
		}

	}
	
	public static void sleep(int i) throws InterruptedException {
		Thread.sleep(i);
		

	}
	
	
	

	
	
	
	
	
	
	

}
