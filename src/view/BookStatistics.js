const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class BookStatistics {
  
  constructor() {
   this.controller = new BookController()

   this.mostPopularBook = 'Most Popular Book'
   this.searchAuthor = 'Search Book Titles by Author'
   this.searchTitle = 'Search Statistics by Book Title'
   this.authorListTimesRead = 'List all authors and their total times read'
   this.return = 'Return'
  }

  async getOptions() {
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.mostPopularBook, this.searchAuthor, this.searchTitle, this.authorListTimesRead, this.return],
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