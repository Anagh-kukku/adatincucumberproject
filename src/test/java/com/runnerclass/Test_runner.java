package com.runnerclass;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adatin_baseclass.Base_class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\java\\com\\featurefile\\Adatin.feature",glue="com.stepD"
,plugin= {"html:Report/HtmlReport","pretty","json:jsonReport/Report.json",
		"com.cucumber.listener.ExtentCucumberFormatter:ReportNew/File.html"
		
		}
,monochrome= true,dryRun = false,strict = true
)


public class Test_runner {
	
	public static WebDriver driver;
	@BeforeClass
	public static  void set_up() {
		driver=Base_class.get_driver();
	}
	@AfterClass
	public static void tear_down() {
		driver.close();
	}

}
//"com.cucumber.listner.ExtentCucumberFormatter:ReportNew/File.html"