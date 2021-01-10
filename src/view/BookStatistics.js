const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class BookStatistics {
  
  constructor() {
   this.controller = new BookController()

   this.reviewedBooks = 'List of reviewed books'
   this.avgScore = 'Most popular book by average score'
   this.authorListTimesRead = 'List all authors and their total times read'
   this.mostRead = 'Book read most times'
   this.highestTotScore = 'Book with highest total score'
   this.searchAuthor = 'Search for author to see book titles'
   this.timesRead = 'Search times read by book title'
   this.searchAvgScore = 'Search average score by book title'
   this.agesTitleStatistics = 'How many users under { age } has read { book title }?'
   this.genderYearStatistics = 'How many { gender } members has read a book written before { year }?'
   this.return = 'Return'
   this.quit = 'Quit'
  }

  async getOptions() {
    console.log('Choose an option')
    console.log('_________________________________\n')
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.reviewedBooks, this.avgScore, this.authorListTimesRead, this.mostRead, this.highestTotScore, this.searchAuthor,
                this.timesRead, this.searchAvgScore, this.agesTitleStatistics, this.genderYearStatistics, this.return, this.quit],
        filter: function (val) {
          return val
        }
      }
    ]
  
    let answer = await inquirer.prompt(start)
    return answer.menu
  }
}

// Exports
module.exports = BookStatistics