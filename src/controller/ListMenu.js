const menuEnums = require('../view/menuEnums')
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
            this.print.fromArray(authors)
        } else if (option === menuEnums.listMenu.AUTHORTIMESREAD) {
            const info = await this.database.getAuthorsAndTimesRead()
            for (let i = 0; i < info.length; i++) {
                this.print.authorList(info[i])
            }
        } else if (option === menuEnums.listMenu.BOOKTITLES) {
            const titles = await this.database.getAllBookTitles()
            this.print.fromArray(titles)
        } else if (option === menuEnums.listMenu.REVIEWEDBOOKS) {
            const books = await this.database.getReviewedBooks()
            for (let i = 0; i < books.length;i++) {
                this.print.reviewedBooks(books[i])
            }
        } else if (option === menuEnums.listMenu.MEMBERS) {
            const usernames = await this.database.getAllUsernames()
            this.print.fromArray(usernames)
        } else if (option === menuEnums.listMenu.RETURN) {
            startApp.startUp()
        }
    }

}

// Exports
module.exports = ListMenu