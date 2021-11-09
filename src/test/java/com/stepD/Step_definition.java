package com.stepD;

import org.openqa.selenium.WebDriver;

import com.Adatin_baseclass.Base_class;
import com.runnerclass.Test_runner;
import com.sdp.page_object_manager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_definition extends Base_class {
	
	public static WebDriver driver = Test_runner.driver;
	page_object_manager pom = new page_object_manager(driver);
	
	@Given("^user launch \"([^\"]*)\" the application$")
	public void user_launch_the_application(String url) throws Throwable {
		launch_url(url);
	   	}


	@When("^user enter the Username \"([^\"]*)\" in username field$")
	public void user_enter_the_Username_in_username_field(String username) throws Throwable {
		sendkeys(pom.getlogin().getusername(), username);
	   	}

	   
	@When("^user Enter The Password \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_Password_In_Password_Field(String password) throws Throwable {
		sendkeys(pom.getlogin().getPassword(), password);
	   }
	@Then("^user Click on The Login Button And It Navigaates To The Search Hotel Page$")
	public void user_Click_on_The_Login_Button_And_It_Navigaates_To_The_Search_Hotel_Page() throws Throwable {
		click(pom.getlogin().getLogin());
	   }
     
	@When("^user select \"([^\"]*)\" the location$")
	public void user_select_the_location(String newyork) throws Throwable {
		select(pom.gethotel().getlocation(), "selectByValue", newyork);
	   
	}
	@When("^user select  the hotel$")
	public void user_select_the_hotel() throws Throwable {
	    select(pom.gethotel().getHotel(), "selectByValue", "Hotel Sunshine");
	}

	@When("^user select  the room type$")
	public void user_select_the_room_type() throws Throwable {
	   select(pom.gethotel().getRoom(), "selectByValue", "Double");
	}

	@When("^user select  the Number of rooms$")
	public void user_select_the_Number_of_rooms() throws Throwable {
	select(pom.gethotel().getRoomno(), "selectByValue", "5");   
	}

	@When("^user select  the datein$")
	public void user_select_the_datein() throws Throwable {
	   sendkeys(pom.gethotel().getDatein(), "27/10/2021");
	}

@When("^user select the dateout$")
public void user_select_the_dateout() throws Throwable {
	sendkeys(pom.gethotel().getDateout(), "28/10/2021");
    
}

@When("^user select the adult perroom$")
public void user_select_the_adult_perroom() throws Throwable {
	select(pom.gethotel().getRoomperson(), "selectByValue", "3");
   
}

@When("^user select the children per room$")
public void user_select_the_children_per_room() throws Throwable {
	select(pom.gethotel().getChildren(), "selectByValue", "2");
	
  }

@Then("^click searc it navigates to Select Hotel page$")
public void click_searc_it_navigates_to_Select_Hotel_page() throws Throwable {
	click(pom.gethotel().getSearch());
   }

@When("^click the radio box$")
public void click_the_radio_box() throws Throwable {
	click(pom.getselecthotel().getClickradio());
  
}

@Then("^click continue Button It navigates to Book a Hotel Page$")
public void click_continue_Button_It_navigates_to_Book_a_Hotel_Page() throws Throwable {
	click(pom.getselecthotel().getClkcontinue());
    
}

@When("^user enter  the first name$")
public void user_enter_the_first_name() throws Throwable {
	sendkeys(pom.getbook().getFrstname(),"Anagh");
   
}

@When("^user enter the last name$")
public void user_enter_the_last_name() throws Throwable {
	sendkeys(pom.getbook().getLastname(), "kukku");
   
}

@When("^user enter the billing address$")
public void user_enter_the_billing_address() throws Throwable {
	sendkeys(pom.getbook().getAddress(), "t.nagar");
   
}


@When("^user enter the credit card no$")
public void user_enter_the_credit_card_no() throws Throwable {
	sendkeys(pom.getbook().getCrdcard(), "1234567898765432");
   
}

@When("^user enter the credit card type$")
public void user_enter_the_credit_card_type() throws Throwable {
  select(pom.getbook().getCctype(), "selectByValue", "VISA");
}



@When("^user select the month$")
public void user_select_the_month() throws Throwable {
	select(pom.getbook().getExpmonth(), "selectByValue", "4");
    }

@When("^user select the year$")
public void user_select_the_year() throws Throwable {
	select(pom.getbook().getExpiryyear(), "selectByValue", "2022");
   
}

@When("^use enter the cvv$")
public void use_enter_the_cvv() throws Throwable {
	sendkeys(pom.getbook().getCvv(), "123");
   
}

@Then("^click the Bok now Button it navigate to Booking Configuration page$")
public void click_the_Bok_now_Button_it_navigate_to_Booking_Configuration_page() throws Throwable {
	click(pom.getbook().getBooknow());
	waits(10, "my_itinerary");
    
}

@Then("^click the my ltinerarly Buutton it navigates to Booked Itinerary$")
public void click_the_my_ltinerarly_Buutton_it_navigates_to_Booked_Itinerary() throws Throwable {
	click(pom.getconfig().getLiteralyclck());
    
}
}
