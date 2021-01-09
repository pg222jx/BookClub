const Menu = require('../view/Menu')
const MemberMenu = require('../view/MemberMenu')
const BookMenu = require('../view/BookMenu')
const MemberStatistics = require('../view/MemberStatistics')
const BookStatistics = require('../view/BookStatistics')
const Print = require('../view/Print')
const Database = require('../model/Database') 

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
    }

    async run() {
        try {
            const answer = await this.menuView.getOptions()

            if (answer === 'List all Members') {
                const usernames = await this.database.getAllUsernames()
                this.print.fromArray(usernames)
            } else if (answer === 'Member Information') {
                const input = await this.memberMenu.getInput()
                const option = await this.memberMenu.getOptions()
                this.runMemberMenu(option, input)
            } else if (answer === 'Member Statistics') {
                const option = await this.memberStatistics.getOptions()
                this.runMemberStatistics(option)
            } else if (answer === 'List all Books') {
                const titles = await this.database.getAllBookTitles()
                this.print.fromArray(titles)
            } else if (answer === 'Book Information') {
                const input = await this.bookMenu.getInput()
                const option = await this.bookMenu.getOptions()
                this.runBookMenu(option, input)
            } else if (answer === 'Book Statistics') {
                const option = await this.bookStatistics.getOptions()
                this.runBookStatistics(option)
            } else if (answer === 'Quit') {
                this.print.exitMessage()
                process.exit(0)
            } 
        } catch (e) {
            console.log(e)
        }
    }

    async runMemberMenu(answer, username) {
        if (answer === 'Information') {
            const user = await this.database.getUserInfo(username)
            this.print.memberInfo(user)
        } else if (answer === 'Reviews') {
            const reviews = await this.database.getUserReviews(username)
            this.print.userReviews(reviews)
        } else if (answer === 'Return') {
            this.run()
        } else if (answer === 'Quit') {
            this.print.exitMessage()
            process.exit(0)
        } 
    }

    async runBookMenu(answer, title) {
        if (answer === 'Information') {
            const book = await this.database.getBookInfo(title)
            this.print.bookInfo(book)
        } else if (answer === 'Reviews') {
            const reviews = await this.database.getBookReviews(title)
            this.print.bookReviews(reviews)
        } else if (answer === 'Return') {
            this.run()
        } else if (answer === 'Quit') {
            this.print.exitMessage()
            process.exit(0)
        } 
    }

    async runMemberStatistics(option) {
        let gender
        if (option === 'How many members are females?') {
            gender = 'female'
        } else if (option === 'How many members are males?') {
            gender = 'male'
        }

        const count = await this.database.countMembers(gender)
        this.print.singleValue(count)
    }

    async runBookStatistics(option) {
        if (option === 'List of reviewed books') {
            const list = await this.database.getReviewedBooks()
            for (let i = 0; i < list.length;i++) {
                this.print.reviewedBooks(list[i])
            }
        } else if (option === 'Most popular book by average score') {
            const book = await this.database.getPopularBookAvgScore()
            this.print.highestAvgScore(book)
        } else if (option === 'Book read most times') {
            const book = await this.database.getMostReadBook()
            this.print.mostRead(book)
        } else if (option === 'Book with highest total score') {
            const book = await this.database.getHighestTotalScore()
            this.print.highestTotalScore(book)
        } else if (option === 'Search times read by book title') {
            const title = await this.bookMenu.getInput()
            const sum = await this.database.getTimesRead(title)
            this.print.singleValue(sum)
        } else if (option === 'How many users under { age } has read { book title }?') {
            const age = await this.bookMenu.getAgeInput()
            const title = await this.bookMenu.getTitleInput()
            const result = await this.database.getAgeTitleStatistics(age, title)
            this.print.singleValue(result)
        }
    }
}

// Exports
module.exports = StartMenu