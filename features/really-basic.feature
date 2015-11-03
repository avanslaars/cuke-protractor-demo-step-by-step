Feature: Pointless feature
  As a person with a name
  I want a page that will say hello to me
  So I don't have to be lonely anymore

  Scenario: Pointless Interaction
    Given I am on the home page with an empty input
    And I have typed my name into the input
    When I click on the button
    Then The message should include my name

  # Notice the matching text on steps - run specs for output
  Scenario: No Input Value Supplied
    Given I am on the home page with an empty input
    When I click on the button
