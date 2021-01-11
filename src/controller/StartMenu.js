const Menu = require('../view/Menu')
const MemberMenu = require('../view/MemberMenu')
const BookMenu = require('../view/BookMenu')
const Print = require('../view/Print')
const menuEnums = require('../view/menuEnums') 
const Database = require('../model/Database')
const StatisticMenu = require('./StatisticMenu')
const ListMenu = require('./ListMenu')

class StartMenu {

    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.menuView = new Menu()
        this.print = new Print()
        this.memberMenu = new MemberMenu()
        this.bookMenu = new BookMenu()
        this.statisticMenu = new StatisticMenu()
        this.ListMenu = new ListMenu()
    }

    async run() {
        try {
            const answer = await this.menuView.getOptions()

            if (answer === menuEnums.startMenu.BOOKINFO) {
                const input = await this.bookMenu.getInput()
                if (this.inputChecker(input)) {
                    this.run()
                } else {
                const option = await this.bookMenu.getOptions()
                this.runBookMenu(option, input)
                }
            } else if (answer === menuEnums.startMenu.MEMBERINFO) {
                const input = await this.memberMenu.getInput()
                if (this.inputChecker(input)) {
                    this.run()
                } else {
                    const option = await this.memberMenu.getOptions()
                    this.runMemberMenu(option, input)
                }
            } else if (answer === menuEnums.startMenu.STATISTICS) {
                const option = await this.menuView.getStatisticsOptions()
                this.statisticMenu.runStatistics(option)
            } else if (answer === menuEnums.startMenu.LISTS) {
                const option = await this.menuView.getListOptions()
                this.ListMenu.runLists(option)
            } else if (answer === menuEnums.startMenu.QUIT) {
                this.print.exitMessage()
                process.exit(0)
            } 
        } catch (e) {
            console.log(e)
        }
    }

    // async runLists(option) {
    //     if (option === menuEnums.listMenu.AUTHORLIST) {
    //         const authors = await this.database.getAllAuthors()
    //         this.print.fromArray(authors)
    //     } else if (option === menuEnums.listMenu.AUTHORTIMESREAD) {
    //         const info = await this.database.getAuthorsAndTimesRead()
    //         for (let i = 0; i < info.length; i++) {
    //             this.print.authorList(info[i])
    //         }
    //     } else if (option === menuEnums.listMenu.BOOKTITLES) {
    //         const titles = await this.database.getAllBookTitles()
    //         this.print.fromArray(titles)
    //     } else if (option === menuEnums.listMenu.REVIEWEDBOOKS) {
    //         const books = await this.database.getReviewedBooks()
    //         for (let i = 0; i < books.length;i++) {
    //             this.print.reviewedBooks(books[i])
    //         }
    //     } else if (option === menuEnums.listMenu.MEMBERS) {
    //         const usernames = await this.database.getAllUsernames()
    //         this.print.fromArray(usernames)
    //     } else if (option === menuEnums.listMenu.RETURN) {
    //         this.run()
    //     }
    // }

    async runMemberMenu(answer, username) {
        if (answer === menuEnums.memberAndBookMenu.INFO) {
            const user = await this.database.getUserInfo(username)
            this.print.memberInfo(user)
        } else if (answer === menuEnums.memberAndBookMenu.REVIEWS) {
            const reviews = await this.database.getUserReviews(username)
            this.print.userReviews(reviews)
        } else if (answer === menuEnums.memberAndBookMenu.RETURN) {
            this.run()
        }
    }

    async runBookMenu(answer, title) {
        if (answer === menuEnums.memberAndBookMenu.INFO) {
            const book = await this.database.getBookInfo(title)
            this.print.bookInfo(book)
        } else if (answer === menuEnums.memberAndBookMenu.REVIEWS) {
            const reviews = await this.database.getBookReviews(title)
            this.print.bookReviews(reviews)
        } else if (answer ===  menuEnums.memberAndBookMenu.RETURN) {
            this.run()
        }
    }

    inputChecker(input) {
        if (input === '') {
            this.print.notValidInput()
            return true
        }
    }
}

// Exports
module.exports = StartMenu