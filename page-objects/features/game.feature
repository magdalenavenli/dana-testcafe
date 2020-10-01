@GameFeature
Feature: Game Feature

    @ValidGameName
    Scenario Outline: Search for valid game with title "<gameName>"
    Given User go to game page
    When User search for game name "<gameName>"
    Then User see searched game name "<gameName>" on the list
    Examples:
        | gameName |
        | Call     |
        | PUBG     |
        | Valorant |

    @InvalidGameName
    Scenario: Search for invalid game with title "<gameName>"
    Given User go to game page
    When User search for game name "<gameName>"
    Then User didn't see searched game on the list
    Examples:
        | gameName |
        | Dota     |
        | Counter  |
        | Among Us |