const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')
const menuEnums = require('./menuEnums') 

class BookStatistics {
  
  constructor() {
   this.controller = new BookController()
  }

  async getOptions() {
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [menuEnums.bookStatMenu.MOSTPOP, menuEnums.bookStatMenu.SEARCHAUTH, menuEnums.bookStatMenu.SEARCHTITLE,
          menuEnums.bookStatMenu.AUTHORTIMESREAD, menuEnums.bookStatMenu.RETURN],
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