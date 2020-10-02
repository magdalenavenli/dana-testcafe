const {Given, When, Then} = require('cucumber')
import GamePage from '../pages/GamePage'
import MainData from '../components/MainData'

const gamePage = new GamePage()
const gameData = new MainData()

Given(/^User go to game page$/, async (t) => {
    await t.navigateTo(gameData.url)
    gamePage.accessGamePage()
})

When(/^User search for game name "([^"]*)"$/, async (t, [gameName]) => {
    await t.typeText(gamePage.search_box, gameName,{ paste: true, replace: true })
})

Then(/^User see searched game name "([^"]*)" on the list$/, async (t, [validGameName]) => {
    await t.expect(gamePage.game_placeholder.innerText).contains(validGameName)
})

Then(/^User didn't see searched game on the list$/, async (t) => {
    await t.expect(gamePage.game_placeholder.exists).notOk()
})