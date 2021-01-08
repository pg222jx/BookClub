const Menu = require('../view/Menu')
const Print = require('../view/Print')
const Database = require('../model/Database') 

class StartMenu {
    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.menuView = new Menu()
        this.printView = new Print()
    }

    async run() {
        const answer = await this.menuView.getOptions()

        if (answer === 'List all Books') {
            let titles = this.database.getAllBookTitles()
            for(let i = 0; i<titles.length; i++) {
                console.log(titles[i])
            }
            // titles.forEach(element => {
            //     console.log(element)
            // })
            // this.printView.printBookTitles(titles)
            
        }
    }
}


// Exports
module.exports = StartMenu