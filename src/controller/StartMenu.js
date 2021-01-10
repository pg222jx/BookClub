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

            if (answer === 'Book Information') {
                const input = await this.bookMenu.getInput()
                if (this.inputChecker(input)) {
                    this.run()
                } else {
                const option = await this.bookMenu.getOptions()
                this.runBookMenu(option, input)
                }
            } else if (answer === 'Member Information') {
                const input = await this.memberMenu.getInput()
                if (this.inputChecker(input)) {
                    this.run()
                } else {
                    const option = await this.memberMenu.getOptions()
                    this.runMemberMenu(option, input)
                }
            } else if (answer === 'Statistics') {
                const option = await this.menuView.getStatisticsOptions()
                this.runStatistics(option)
            } else if (answer === 'Lists') {
                const option = await this.menuView.getListOptions()
                this.runLists(option)
            } else if (answer === 'Quit') {
                this.print.exitMessage()
                process.exit(0)
            } 
        } catch (e) {
            console.log(e)
        }
    }

    async runStatistics(option) {
        if (option === 'Book Statistics') {
            const option = await this.bookStatistics.getOptions()
            this.runBookStatistics(option)
        } else if (option === 'Member Statistics') {
            const option = await this.memberStatistics.getOptions()
            this.runMemberStatistics(option)
        }
    }

    async runLists(option) {
        if (option === 'List all Authors') {
            const authors = await this.database.getAllAuthors()
            this.print.fromArray(authors)
        } else if (option === 'List Authors and Times Read') {
            const info = await this.database.getAuthorsAndTimesRead()
            for (let i = 0; i < info.length; i++) {
                this.print.authorList(info[i])
            }
        } else if (option === 'List all Book Titles') {
            const titles = await this.database.getAllBookTitles()
            this.print.fromArray(titles)
        } else if (option === 'List Reviewed Books') {
            const books = await this.database.getReviewedBooks()
            for (let i = 0; i < books.length;i++) {
                this.print.reviewedBooks(books[i])
            }
        } else if (option === 'List all Members') {
            const usernames = await this.database.getAllUsernames()
            this.print.fromArray(usernames)
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
        let result
        if (option === 'How Many Members are Females?') {
            gender = 'female'
            result = await this.database.countMembers(gender)
        } else if (option === 'How Many Members are Males?') {
            gender = 'male'
            result = await this.database.countMembers(gender)
        } else if (option === 'How Many Members Under { choose age } Has Read { choose title }?') {
            const age = await this.memberMenu.getAgeInput()
            const title = await this.bookMenu.getTitleInput()
            result = await this.database.getAgeTitleStatistics(age, title)
     
        } else if (option === 'How Many { choose gender } Members Has Read a Book Written Before { choose year }?') {
            const gender = await this.memberMenu.getGenderOptions()
            const year = await this.bookMenu.getYearInput()
            result = await this.database.getGenderYearStatistics(gender, year)
        }
        
        this.print.singleValue(result)
    }

    async runBookStatistics(option) {
        if (option === 'Most Popular Book') {
            const option = await this.bookMenu.getPopularOptions()
            this.runPopularOptions(option)
        } else if (option === 'Search Book Titles by Author') {
            const author = await this.bookMenu.getAuthorInput() 
            const titles = await this.database.getTitles(author)
            for (let i = 0; i < titles.length; i++) {
                this.print.singleValue(titles[i].title)
            }
        } else if (option === 'Search Statistics by Book Title') {
            const title = await this.bookMenu.getInput()
            const info = await this.database.getStatistics(title)
            this.print.statistics(info)
        } else if (option === 'List all authors and their total times read') {
            const info = await this.database.getAuthorsAndTimesRead()
            for (let i = 0; i < info.length; i++) {
                this.print.authorList(info[i])
            }
        } 
    }

    async runPopularOptions(option) {
        if (option === 'Most Popular Book Seen by Times Read') {
            const book = await this.database.getMostReadBook()
            this.print.mostReadBook(book)
        } else if (option === 'Most Popular Book Seen by Total Score') {
            const book = await this.database.getHighestTotalScore()
            this.print.highestTotalScore(book)
        } else if (option === 'Most Popular Book Seen by Average Score') {
            const book = await this.database.getPopularBookAvgScore()
            this.print.highestAvgScore(book)
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