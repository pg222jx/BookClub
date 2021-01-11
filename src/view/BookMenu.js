const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class BookMenu {
  
  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.memberAndBookMenu.NAME,
        message: menuEnums.memberAndBookMenu.MESSAGE,
        choices: [menuEnums.memberAndBookMenu.INFO, menuEnums.memberAndBookMenu.REVIEWS, menuEnums.memberAndBookMenu.RETURN],
        filter: function (val) {
          return val
        }
      }
    ]
  
    let answer = await inquirer.prompt(start)
    return answer.menu
  }

  async getTitleInput() {
    const input = [
      {
        type: menuEnums.inquirerType.INPUT,
        name: menuEnums.bookTitle.NAME,
        message: menuEnums.bookTitle.MESSAGE
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.title
  }

  async getYearInput() {
    const input = [
      {
        type: menuEnums.inquirerType.INPUT,
        name: menuEnums.bookYear.NAME,
        message: menuEnums.bookYear.MESSAGE
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.year
  }

  async getAuthorInput() {
    const input = [
      {
        type: menuEnums.inquirerType.INPUT,
        name: menuEnums.bookAuthor.NAME,
        message: menuEnums.bookAuthor.MESSAGE
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.author
  }

  async getPopularOptions() {
    const options = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.popularMenu.NAME,
        message: menuEnums.popularMenu.MESSAGE,
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