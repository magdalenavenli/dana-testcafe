import MainData from '../page objects/components/MainData'
import GamePage from '../page objects/pages/GamePage'

const testData = new MainData()
const gamePage = new GamePage()


fixture `Open DANA Page`
.page `https://dana.id/`
.beforeEach(async t => {
    // Runs before each test
    await t.setPageLoadTimeout(0);
    await gamePage.accessGamePage()
})
test.only("Open Page",async t=>{
    await t.expect(gamePage.search_box).ok()

})
test.only('Search Valid Game Name',async t=>{

    gamePage.searchValidGame(testData.validGameName)
    await t.expect(gamePage.game_placeholder.innerText).contains(testData.validGameName)
})
test.only('Search Invalid Game Name',async t=>{

    gamePage.searchInvalidGame(testData.invalidGameName)
    await t.expect(gamePage.game_placeholder).notOk()
})
