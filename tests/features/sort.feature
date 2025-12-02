Feature: Sort items

Scenario: Sort products by price
Given I am logged in as "standard_user" "secret_sauce"
When I sort products by "lohi"
Then Items should be sorted by price