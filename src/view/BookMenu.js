const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')
const menuEnums = require('./menuEnums') 

class BookMenu {
  
  constructor() {
   this.controller = new BookController()
  }

  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: 'menu',
        message: 'Menu',
        choices: [menuEnums.memberAndBookMenu.INFO, menuEnums.memberAndBookMenu.REVIEWS, menuEnums.memberAndBookMenu.RETURN],
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
        type: menuEnums.inquirerType.INPUT,
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
        type: menuEnums.inquirerType.INPUT,
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
        type: menuEnums.inquirerType.INPUT,
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
        type: menuEnums.inquirerType.INPUT,
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
        type: menuEnums.inquirerType.LIST,
        name: 'options',
        message: 'Please choose an option',
        choices: [menuEnums.popularMenu.TIMESREAD, menuEnums.popularMenu.TOTALSCORE, menuEnums.popularMenu.AVGSCORE, menuEnums.popularMenu.RETURN],
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