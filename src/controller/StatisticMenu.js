const startApp = require('./startApp')
const menuEnums = require('../view/menuEnums')
const BookStatistics = require('../view/BookStatistics')
const MemberStatistics = require('../view/MemberStatistics')
const MemberMenu = require('../view/MemberMenu')
const BookMenu = require('../view/BookMenu')
const Print = require('../view/Print')
const Database = require('../model/Database')
const InputChecker = require('../model/InputChecker')


class StatisticMenu {
    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.memberStatistics = new MemberStatistics()
        this.bookStatistics = new BookStatistics()
        this.memberMenu = new MemberMenu()
        this.bookMenu = new BookMenu()
        this.print = new Print()
        this.inputChecker = new InputChecker()
    }

    /**
    * Handles logic for the statistics submenu
    *
    * @param {string} option - Menu option from user.
    */
    async runStatistics(option) {
        if (option === menuEnums.statisticsMenu.BOOKSTAT) {
            const option = await this.bookStatistics.getOptions()
            this.runBookStatistics(option)
        } else if (option === menuEnums.statisticsMenu.MEMBERSTAT) {
            const option = await this.memberStatistics.getOptions()
            this.runMemberStatistics(option)
        } else if (option === menuEnums.statisticsMenu.RETURN) {
            startApp.startUp()
        }
    }

    /**
    * Handles logic for the member statistics submenu
    *
    * @param {string} option - Menu option from user.
    */
    async runMemberStatistics(option) {
        let gender
        let result
        if (option === menuEnums.memberStatMenu.MEMBERFEMALES) {
            gender = menuEnums.genderMenu.FEMALE
            result = await this.database.countMembers(gender)
            this.print.clearConsole()
            this.print.singleValue(result)
            startApp.startUp()
        } else if (option === menuEnums.memberStatMenu.MEMBERMALES) {
            gender = menuEnums.genderMenu.MALE
            result = await this.database.countMembers(gender)
            this.print.clearConsole()
            this.print.singleValue(result)
            startApp.startUp()
        } else if (option === menuEnums.memberStatMenu.AGETITLE) {
            const age = await this.memberMenu.getAgeInput()

            if (this.inputChecker.isValidAge(age)) {
                const title = await this.bookMenu.getTitleInput()
                const titles = await this.database.getAllBookTitles()
                if (this.inputChecker.isValidInput(title, titles)) {
                    result = await this.database.getAgeTitleStatistics(age, title)
                    this.print.clearConsole()
                    this.print.singleValue(result)
                    startApp.startUp() 
                } else {
                    this.print.notValidInput()
                    startApp.startUp()
                }
            } else {
                this.print.notValidInput()
                startApp.startUp()
            }
        } else if (option === menuEnums.memberStatMenu.GENDERYEAR) {
            const gender = await this.memberMenu.getGenderOptions()
            const year = await this.bookMenu.getYearInput()
            if (this.inputChecker.isValidYear(year)) {
                result = await this.database.getGenderYearStatistics(gender, year)
                this.print.clearConsole()
                        for (let i = 0; i < result.length; i++) {
                this.print.genderYear(result[i])
            }
                startApp.startUp()
            } else {
                this.print.notValidInput()
                startApp.startUp()
            }

        } else if (option === menuEnums.memberStatMenu.RETURN) {
            startApp.startUp()
        } 
    }

    /**
    * Handles logic for the book statistics submenu
    *
    * @param {string} option - Menu option from user.
    */
    async runBookStatistics(option) {
        if (option === menuEnums.bookStatMenu.MOSTPOP) {
            const option = await this.bookMenu.getPopularOptions()
            this.runPopularOptions(option)
        } else if (option === menuEnums.bookStatMenu.SEARCHAUTH) {
            const author = await this.bookMenu.getAuthorInput() 
            const titles = await this.database.getTitles(author)
            this.print.clearConsole()
            for (let i = 0; i < titles.length; i++) {
                this.print.singleValue(titles[i].title)
            }
            startApp.startUp()
        } else if (option === menuEnums.bookStatMenu.SEARCHTITLE) {
            const title = await this.bookMenu.getTitleInput()
            const info = await this.database.getStatistics(title)
            this.print.clearConsole()
            this.print.statistics(info)
            startApp.startUp()
        } else if (option === menuEnums.bookStatMenu.AUTHORTIMESREAD) {
            const info = await this.database.getAuthorsAndTimesRead()
            this.print.clearConsole()
            for (let i = 0; i < info.length; i++) {
                this.print.authorList(info[i])
            }
            startApp.startUp()
        } else if (option === menuEnums.bookStatMenu.RETURN) {
            startApp.startUp()
        } 
    }

    /**
    * Handles logic for the most popular book submenu
    *
    * @param {string} option - Menu option from user.
    */
    async runPopularOptions(option) {
        if (option === menuEnums.popularMenu.TIMESREAD) {
            const book = await this.database.getMostReadBook()
            this.print.clearConsole()
            this.print.mostReadBook(book)
            startApp.startUp()
        } else if (option === menuEnums.popularMenu.TOTALSCORE) {
            const book = await this.database.getHighestTotalScore()
            this.print.clearConsole()
            this.print.highestTotalScore(book)
            startApp.startUp()
        } else if (option === menuEnums.popularMenu.AVGSCORE) {
            const book = await this.database.getPopularBookAvgScore()
            this.print.clearConsole()
            this.print.highestAvgScore(book)
            startApp.startUp()
        } else if (option === menuEnums.popularMenu.RETURN) {
            startApp.startUp()
        }
    }
}

// Exports
module.exports = StatisticMenu