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
        try {
            const answer = await this.menuView.getOptions()

            if (answer === 'List all Members') {
                const usernames = await this.database.getAllUsernames()
                this.printView.printUsernames(usernames)
            }else if (answer === 'List all Books') {
                const titles = await this.database.getAllBookTitles()
                this.printView.printBookTitles(titles)
            }
        } catch (e) {
            console.log(e)
        }

    }
}


// Exports
module.exports = StartMenu