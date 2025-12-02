Feature: Cart & Checkout

Scenario: Add multiple items and checkout
Given I am logged in as "standard_user" "secret_sauce"
When I add products to cart
Then I should see items in cart
When I complete checkout
Then I should see order confirmation