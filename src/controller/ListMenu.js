const menuEnums = require('../view/menuEnums')
const startApp = require('./startApp')
const Print = require('../view/Print')
const Database = require('../model/Database')

class ListMenu {

    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.print = new Print()
    }

    async runLists(option) {
        if (option === menuEnums.listMenu.AUTHORLIST) {
            const authors = await this.database.getAllAuthors()
            this.print.clearConsole()
            this.print.fromArray(authors)
            startApp.startUp()
        } else if (option === menuEnums.listMenu.AUTHORTIMESREAD) {
            const info = await this.database.getAuthorsAndTimesRead()
            this.print.clearConsole()
            for (let i = 0; i < info.length; i++) {
                this.print.authorList(info[i])
            }
            startApp.startUp()
        } else if (option === menuEnums.listMenu.BOOKTITLES) {
            const titles = await this.database.getAllBookTitles()
            this.print.clearConsole()
            this.print.fromArray(titles)
            startApp.startUp()
        } else if (option === menuEnums.listMenu.REVIEWEDBOOKS) {
            const books = await this.database.getReviewedBooks()
            this.print.clearConsole()
            for (let i = 0; i < books.length;i++) {
                this.print.reviewedBooks(books[i])
            }
            startApp.startUp()
        } else if (option === menuEnums.listMenu.MEMBERS) {
            const usernames = await this.database.getAllUsernames()
            this.print.clearConsole()
            this.print.fromArray(usernames)
            startApp.startUp()
        } else if (option === menuEnums.listMenu.RETURN) {
            startApp.startUp()
        }
    }

}

// Exports
module.exports = ListMenu