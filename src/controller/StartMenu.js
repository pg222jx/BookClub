const Menu = require('../view/Menu')
const MemberMenu = require('../view/MemberMenu')
const BookMenu = require('../view/BookMenu')
const Print = require('../view/Print')
const menuEnums = require('../view/menuEnums') 
const Database = require('../model/Database')
const StatisticMenu = require('./StatisticMenu')
const ListMenu = require('./ListMenu')
const InputChecker = require('../model/InputChecker')


class StartMenu {
    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.menuView = new Menu()
        this.print = new Print()
        this.memberMenu = new MemberMenu()
        this.bookMenu = new BookMenu()
        this.statisticMenu = new StatisticMenu()
        this.listMenu = new ListMenu()
        this.inputChecker = new InputChecker()
    }

    /**
    * Handles logic for the startmenu
    *
    */
    async run() {
        try {
            const answer = await this.menuView.getOptions()

            if (answer === menuEnums.startMenu.BOOKINFO) {
                const input = await this.bookMenu.getTitleInput()
                const titles = await this.database.getAllBookTitles()
                if (this.inputChecker.isValidInput(input, titles)) {
                    const option = await this.bookMenu.getOptions()
                    this.runBookMenu(option, input) 
                } else {
                    this.print.notValidInput()
                    this.run()
                }
            } else if (answer === menuEnums.startMenu.MEMBERINFO) {
                const input = await this.memberMenu.getInput()
                const members = await this.database.getAllUsernames()
                if (this.inputChecker.isValidInput(input, members)) {
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
                this.listMenu.runLists(option)
            } else if (answer === menuEnums.startMenu.QUIT) {
                this.print.exitMessage()
                process.exit(0)
            } 
        } catch (e) {
            console.log(e)
        }
    }

    /**
    * Handles logic for the member submenu
    *
    * @param {string} answer - Menu option from user.
    * @param {string} username - The username the user searches for.
    */
    async runMemberMenu(answer, username) {
        if (answer === menuEnums.memberAndBookMenu.INFO) {
            const user = await this.database.getUserInfo(username)
            this.print.clearConsole()
            this.print.memberInfo(user)
            this.run()
        } else if (answer === menuEnums.memberAndBookMenu.REVIEWS) {
            const reviews = await this.database.getUserReviews(username)
            this.print.clearConsole()
            this.print.userReviews(reviews)
            this.run()
        } else if (answer === menuEnums.memberAndBookMenu.RETURN) {
            this.run()
        }
    }

    /**
    * Handles logic for the book submenu
    *
    * @param {string} answer - Menu option from user.
    * @param {string} username - The title the user searches for.
    */
    async runBookMenu(answer, title) {
        if (answer === menuEnums.memberAndBookMenu.INFO) {
            const book = await this.database.getBookInfo(title)
            this.print.clearConsole()
            this.print.bookInfo(book)
            this.run()
        } else if (answer === menuEnums.memberAndBookMenu.REVIEWS) {
            const reviews = await this.database.getBookReviews(title)
            this.print.clearConsole()
            this.print.bookReviews(reviews)
            this.run()
        } else if (answer ===  menuEnums.memberAndBookMenu.RETURN) {
            this.run()
        }
    }
}

// Exports
module.exports = StartMenu