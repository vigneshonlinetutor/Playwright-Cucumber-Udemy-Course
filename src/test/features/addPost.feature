Feature: Conduit Add Post Functionality

Scenario: Login and Logout with valid credentials
Given I am on the conduit login page
When I login with valid credentials
And I Click on New Post button
And I fill up the require fields
And I Publish the article
Then I should see the Article posted