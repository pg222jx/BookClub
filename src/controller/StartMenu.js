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
    }

    async run() {
        try {
            const answer = await this.menuView.getOptions()

            if (answer === 'List all Members') {
                const usernames = await this.database.getAllUsernames()
                this.printView.printFromArray(usernames)
            } else if (answer === 'Member Information') {
                const input = await this.memberMenu.getInput()
                const option = await this.memberMenu.getOptions()
                this.runMemberMenu(option, input)
            } else if (answer === 'Member Statistics') {
                console.log('MEMBER STATISTICS')
            } else if (answer === 'List all Books') {
                const titles = await this.database.getAllBookTitles()
                this.printView.printFromArray(titles)
            } else if (answer === 'Book Information') {
                const input = await this.bookMenu.getInput()
                const option = await this.bookMenu.getOptions()
                this.runBookMenu(option, input)
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

    async runMemberMenu(answer, username) {
        if (answer === 'Information') {
            const user = await this.database.getUserInfo(username)
            this.printView.printUser(user)
        } else if (answer === 'Reviews') {
            const reviews = await this.database.getUserReviews(username)
            this.printView.printUserReviews(reviews)
        }
    }

    async runBookMenu(answer, title) {
        if (answer === 'Information') {
            const book = await this.database.getBookInfo(title)
            this.printView.printBook(book)
        } else if (answer === 'Reviews') {
            const reviews = await this.database.getBookReviews(title)
            this.printView.printBookReviews(reviews)
        }
    }
}

// Exports
module.exports = StartMenu