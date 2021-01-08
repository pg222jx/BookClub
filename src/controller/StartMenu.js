const Menu = require('../view/Menu')
const MemberMenu = require('../view/MemberMenu')
const BookMenu = require('../view/BookMenu')
const Print = require('../view/Print')
const Database = require('../model/Database') 

class StartMenu {
    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.menuView = new Menu()
        this.printView = new Print()
        this.memberMenu = new MemberMenu()
        this.bookMenu = new BookMenu()
    }'Book Statistics'

    async run() {
        try {
            const answer = await this.menuView.getOptions()

            if (answer === 'List all Members') {
                const usernames = await this.database.getAllUsernames()
                this.printView.printFromArray(usernames)
            } else if (answer === 'Member Information') {
                const input = this.memberMenu.getInput()
                const info = await this.database.getUserInfo(input)
                this.printView.printSingleValue(info)
            } else if (answer === 'Member Statistics') {
                console.log('MEMBER STATISTICS')
            } else if (answer === 'List all Books') {
                const titles = await this.database.getAllBookTitles()
                this.printView.printFromArray(titles)
            } else if (answer === 'Book Information') {
                const input = this.bookMenu.getInput()
                const info = await this.database.getBookInfo(input)
                this.printView.printSingleValue(info)
            } else if (answer === 'Book Statistics') {
                console.log('Book Statistics')
            } else if (answer === 'Quit') {
                this.printView.printExitMessage()
                process.exit(0)
            } 
        } catch (e) {
            console.log(e)
        }

    }
}


// Exports
module.exports = StartMenu