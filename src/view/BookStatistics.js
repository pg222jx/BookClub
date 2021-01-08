const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class BookStatistics {
  
  constructor() {
   this.controller = new BookController()

   this.avgScore = 'Most popular book by average score'
   this.mostRead = 'Book read most times'
   this.highestTotScore = 'Book with highest total score'
   this.popularFemales = 'Most popular book according to females'
   this.popularMales = 'Most popular book according to males'
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
        choices: [this.avgScore, this.mostRead, this.highestTotScore, this.popularFemales, this.popularMales, this.return, this.quit],
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