Feature: Hotel Booking 

Scenario Outline: login
Given user launch "https://adactinhotelapp.com/index.php" the application
When user enter the Username "<username>" in username field
And user Enter The Password "<password>" In Password Field
Then user Click on The Login Button And It Navigaates To The Search Hotel Page

Examples:
|username|password|
|anagh|12345|
|anaghkk|12345|
|Anaghkukku|anaghkukku|




Scenario: Search Hotel
When user select "New York" the location
And user select  the hotel
And user select  the room type
And user select  the Number of rooms
And user select  the datein
And user select the dateout
And user select the adult perroom
And user select the children per room 
Then click searc it navigates to Select Hotel page


Scenario: Select Hotel
When click the radio box
Then click continue Button It navigates to Book a Hotel Page


Scenario: Book a Hotel
When user enter  the first name
And user enter the last name
And user enter the billing address
And  user enter the credit card no
And user enter the credit card type
And user select the month
And user select the year
And use enter the cvv
Then click the Bok now Button it navigate to Booking Configuration page


Scenario: Confirmation Boooking
Then click the my ltinerarly Buutton it navigates to Booked Itinerary
