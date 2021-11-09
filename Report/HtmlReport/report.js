$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/featurefile/Adatin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking",
  "description": "",
  "id": "hotel-booking",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login",
  "description": "",
  "id": "hotel-booking;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch \"https://adactinhotelapp.com/index.php\" the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter the Username \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click on The Login Button And It Navigaates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking;login;;1"
    },
    {
      "cells": [
        "anagh",
        "12345"
      ],
      "line": 11,
      "id": "hotel-booking;login;;2"
    },
    {
      "cells": [
        "anaghkk",
        "12345"
      ],
      "line": 12,
      "id": "hotel-booking;login;;3"
    },
    {
      "cells": [
        "Anaghkukku",
        "anaghkukku"
      ],
      "line": 13,
      "id": "hotel-booking;login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "login",
  "description": "",
  "id": "hotel-booking;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch \"https://adactinhotelapp.com/index.php\" the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter the Username \"anagh\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password \"12345\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click on The Login Button And It Navigaates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://adactinhotelapp.com/index.php",
      "offset": 13
    }
  ],
  "location": "Step_definition.user_launch_the_application(String)"
});
formatter.result({
  "duration": 7433933100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anagh",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_enter_the_Username_in_username_field(String)"
});
formatter.result({
  "duration": 662956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_Enter_The_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 189699400,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_on_The_Login_Button_And_It_Navigaates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 704116300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login",
  "description": "",
  "id": "hotel-booking;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch \"https://adactinhotelapp.com/index.php\" the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter the Username \"anaghkk\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password \"12345\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click on The Login Button And It Navigaates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://adactinhotelapp.com/index.php",
      "offset": 13
    }
  ],
  "location": "Step_definition.user_launch_the_application(String)"
});
formatter.result({
  "duration": 1040383800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anaghkk",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_enter_the_Username_in_username_field(String)"
});
formatter.result({
  "duration": 229334900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_Enter_The_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 189471100,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_on_The_Login_Button_And_It_Navigaates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 523231200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login",
  "description": "",
  "id": "hotel-booking;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user launch \"https://adactinhotelapp.com/index.php\" the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter the Username \"Anaghkukku\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password \"anaghkukku\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click on The Login Button And It Navigaates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://adactinhotelapp.com/index.php",
      "offset": 13
    }
  ],
  "location": "Step_definition.user_launch_the_application(String)"
});
formatter.result({
  "duration": 493073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anaghkukku",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_enter_the_Username_in_username_field(String)"
});
formatter.result({
  "duration": 176723600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anaghkukku",
      "offset": 25
    }
  ],
  "location": "Step_definition.user_Enter_The_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 173871200,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_on_The_Login_Button_And_It_Navigaates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1694313200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user select \"New York\" the location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user select  the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user select  the room type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user select  the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user select  the datein",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user select the dateout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user select the adult perroom",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user select the children per room",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click searc it navigates to Select Hotel page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 13
    }
  ],
  "location": "Step_definition.user_select_the_location(String)"
});
formatter.result({
  "duration": 739584300,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_hotel()"
});
formatter.result({
  "duration": 401303500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_room_type()"
});
formatter.result({
  "duration": 508400400,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_Number_of_rooms()"
});
formatter.result({
  "duration": 263578900,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_datein()"
});
formatter.result({
  "duration": 167763800,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_dateout()"
});
formatter.result({
  "duration": 277311400,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_adult_perroom()"
});
formatter.result({
  "duration": 420121000,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_children_per_room()"
});
formatter.result({
  "duration": 266992900,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.click_searc_it_navigates_to_Select_Hotel_page()"
});
formatter.result({
  "duration": 986976100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "click the radio box",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click continue Button It navigates to Book a Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.click_the_radio_box()"
});
formatter.result({
  "duration": 181052400,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.click_continue_Button_It_navigates_to_Book_a_Hotel_Page()"
});
formatter.result({
  "duration": 892219700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Book a Hotel",
  "description": "",
  "id": "hotel-booking;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user enter  the first name",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enter the last name",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter the billing address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enter the credit card no",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user enter the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user select the month",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user select the year",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "use enter the cvv",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click the Bok now Button it navigate to Booking Configuration page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_enter_the_first_name()"
});
formatter.result({
  "duration": 430795500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_enter_the_last_name()"
});
formatter.result({
  "duration": 325111400,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_enter_the_billing_address()"
});
formatter.result({
  "duration": 203410300,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_enter_the_credit_card_no()"
});
formatter.result({
  "duration": 265737700,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_enter_the_credit_card_type()"
});
formatter.result({
  "duration": 289569000,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_month()"
});
formatter.result({
  "duration": 371969800,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_select_the_year()"
});
formatter.result({
  "duration": 362563100,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.use_enter_the_cvv()"
});
formatter.result({
  "duration": 197987600,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.click_the_Bok_now_Button_it_navigate_to_Booking_Configuration_page()"
});
formatter.result({
  "duration": 7025581300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Confirmation Boooking",
  "description": "",
  "id": "hotel-booking;confirmation-boooking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "click the my ltinerarly Buutton it navigates to Booked Itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.click_the_my_ltinerarly_Buutton_it_navigates_to_Booked_Itinerary()"
});
formatter.result({
  "duration": 937784900,
  "status": "passed"
});
});