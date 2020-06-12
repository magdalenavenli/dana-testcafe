import {Selector, t} from 'testcafe'

class GamePage{
    constructor(){

        this.title_game= Selector("a").withText('Games')
        this.search_box= Selector("input").withAttribute('placeholder','Find the most challenging game')
        this.game_placeholder=Selector(".service-title")
    }

    async accessGamePage() {
        await t.click(this.title_game)
    }
    async searchValidGame(validGameName){
        await t
        .typeText(this.search_box,validGameName,{ paste: true, replace: true })
    }
    async searchInvalidGame(invalidGameName){
        await t
        .typeText(this.search_box,invalidGameName,{ paste: true, replace: true })
    }
}

export default GamePage