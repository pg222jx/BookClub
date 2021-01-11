const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class BookMenu {
  
  constructor() {
   this.controller = new BookController()

   this.info = 'Information'
   this.review = 'Reviews'
   this.return = 'Return'
  }

  async getOptions() {
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.info, this.review, this.return],
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

  async getTitleInput() {
    const input = [
      {
        type: 'input',
        name: 'title',
        message: 'Which title?'
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.title
  }

  async getYearInput() {
    const input = [
      {
        type: 'input',
        name: 'year',
        message: 'Before which year?'
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.year
  }

  async getAuthorInput() {
    const input = [
      {
        type: 'input',
        name: 'author',
        message: 'Which author?'
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.author
  }

  async getPopularOptions() {
    const options = [
      {
        type: 'list',
        name: 'options',
        message: 'Please choose an option',
        choices: ['Most Popular Book Seen by Times Read', 'Most Popular Book Seen by Total Score', 'Most Popular Book Seen by Average Score'],
        filter: function (val) {
          return val
        }
      }
    ]
  
    let answer = await inquirer.prompt(options)
    return answer.options
  }
}

// Exports
module.exports = BookMenu