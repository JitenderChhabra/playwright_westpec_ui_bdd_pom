Feature: Login tests

Scenario: Valid login
Given I navigate to saucedemo
When I login with username "standard_user" and password "secret_sauce"
Then I should be logged in successfully


Scenario: Invalid login
Given I navigate to saucedemo
When I login with username "locked_out_user" and password "wrongpass"
Then I should see an error message