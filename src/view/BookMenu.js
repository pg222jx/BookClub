const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')
const StartMenu = require('../controller/StartMenu')

class BookMenu {
  constructor() {
   this.controller = new BookController()

   this.info = 'Information'
   this.review = 'Reviews'
   this.return = 'Return'
   this.quit = 'Quit'
  }

  getOptions(title) {
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
  
    inquirer.prompt(start).then(answers => {
      if (answers.menu === this.info) {
        this.controller.getBookInfo(title)
      } else if (answers.menu === this.review) {
        this.controller.getBookReview(title)
      } else if (answers.menu === this.return) {
        StartMenu.run()
      } else if (answers.menu === this.quit) {
        console.log('\nWelcome back!\n')
        process.exit(0)
      }
    })
  }

  getInput() {
    const input = [
      {
        type: 'input',
        name: 'title',
        message: 'Which book title do you want to search for?'
      }
    ]

    inquirer.prompt(input).then(answers => {
      this.getOptions(answers.title)
    })
  }
}

// Exports
module.exports = BookMenu