const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class BookMenu {
  
  constructor() {
   this.controller = new BookController()

   this.info = 'Information'
   this.review = 'Reviews'
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
        choices: [this.info, this.review, this.return, this.quit],
        filter: function (val) {
          return val
        }
      }
    ]
  
    let answer = await inquirer.prompt(start)
    return answer.menu
  }

  async getInput() {
    const input = [
      {
        type: 'input',
        name: 'title',
        message: 'Which book title do you want to search for?'
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.title
  }
}

// Exports
module.exports = BookMenu