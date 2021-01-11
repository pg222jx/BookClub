const Menu = require('../view/Menu')
const MemberMenu = require('../view/MemberMenu')
const BookMenu = require('../view/BookMenu')
const MemberStatistics = require('../view/MemberStatistics')
const BookStatistics = require('../view/BookStatistics')
const Print = require('../view/Print')
const menuEnums = require('../view/menuEnums') 
const Database = require('../model/Database')
const StatisticMenu = require('./StatisticMenu')

class StartMenu {

    constructor() {
        this.database = new Database()
        this.database.connectToDatabase()
        this.menuView = new Menu()
        this.print = new Print()
        this.memberMenu = new MemberMenu()
        this.bookMenu = new BookMenu()
        this.memberStatistics = new MemberStatistics()
        this.bookStatistics = new BookStatistics()
        this.statisticMenu = new StatisticMenu()
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
                this.runLists(option)
            } else if (answer === menuEnums.startMenu.QUIT) {
                this.print.exitMessage()
                process.exit(0)
            } 
        } catch (e) {
            console.log(e)
        }
    }

    // async runStatistics(option) {
    //     if (option === menuEnums.statisticsMenu.BOOKSTAT) {
    //         const option = await this.bookStatistics.getOptions()
    //         this.runBookStatistics(option)
    //     } else if (option === menuEnums.statisticsMenu.MEMBERSTAT) {
    //         const option = await this.memberStatistics.getOptions()
    //         this.runMemberStatistics(option)
    //     } else if (option === menuEnums.statisticsMenu.RETURN) {
    //         this.run()
    //     }
    // }

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
            this.run()
        }
    }

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

    async runMemberStatistics(option) {
        let gender
        let result
        if (option === menuEnums.memberStatMenu.MEMBERFEMALES) {
            gender = menuEnums.genderMenu.FEMALE
            result = await this.database.countMembers(gender)
        } else if (option === menuEnums.memberStatMenu.MEMBERMALES) {
            gender = menuEnums.genderMenu.MALE
            result = await this.database.countMembers(gender)
        } else if (option === menuEnums.memberStatMenu.AGETITLE) {
            const age = await this.memberMenu.getAgeInput()
            const title = await this.bookMenu.getTitleInput()
            result = await this.database.getAgeTitleStatistics(age, title)
     
        } else if (option === menuEnums.memberStatMenu.GENDERYEAR) {
            const gender = await this.memberMenu.getGenderOptions()
            const year = await this.bookMenu.getYearInput()
            result = await this.database.getGenderYearStatistics(gender, year)
        } else if (option === menuEnums.memberStatMenu.RETURN) {
            this.run()
        } 
        
        this.print.singleValue(result)
    }

    async runBookStatistics(option) {
        if (option === menuEnums.bookStatMenu.MOSTPOP) {
            const option = await this.bookMenu.getPopularOptions()
            this.runPopularOptions(option)
        } else if (option === menuEnums.bookStatMenu.SEARCHAUTH) {
            const author = await this.bookMenu.getAuthorInput() 
            const titles = await this.database.getTitles(author)
            for (let i = 0; i < titles.length; i++) {
                this.print.singleValue(titles[i].title)
            }
        } else if (option === menuEnums.bookStatMenu.SEARCHTITLE) {
            const title = await this.bookMenu.getInput()
            const info = await this.database.getStatistics(title)
            this.print.statistics(info)
        } else if (option === menuEnums.bookStatMenu.AUTHORTIMESREAD) {
            const info = await this.database.getAuthorsAndTimesRead()
            for (let i = 0; i < info.length; i++) {
                this.print.authorList(info[i])
            }
        } else if (option === menuEnums.bookStatMenu.RETURN) {
            this.run()
        } 
    }

    async runPopularOptions(option) {
        if (option === menuEnums.popularMenu.TIMESREAD) {
            const book = await this.database.getMostReadBook()
            this.print.mostReadBook(book)
        } else if (option === menuEnums.popularMenu.TOTALSCORE) {
            const book = await this.database.getHighestTotalScore()
            this.print.highestTotalScore(book)
            this.run()
        } else if (option === menuEnums.popularMenu.AVGSCORE) {
            const book = await this.database.getPopularBookAvgScore()
            this.print.highestAvgScore(book)
        } else if (option === menuEnums.popularMenu.RETURN) {
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