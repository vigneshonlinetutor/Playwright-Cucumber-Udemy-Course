Feature: Conduit Login Functionality

Scenario: Login and Logout with valid credentials
Given I am on the conduit login page
When I login with valid credentials
And I click on the settings button 
And I click on the logout button
Then I route back to the login page