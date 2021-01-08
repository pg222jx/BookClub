const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')
const Database = require('../model/Database') 
const BookMenu = require('./BookMenu')
const MemberMenu = require('./MemberMenu') 

class Menu {
  constructor() {
   this.memberL = 'List all Members'
   this.memberI = 'Member Information'
   this.memberS = 'Member Statistics'
   this.bookL = 'List all Books'
   this.bookI = 'Book Information'
   this.bookS = 'Book Statistics'
   this.quit = 'Quit'
  }

  async getOptions() {
    console.log('Welcome to Book Club!')
    console.log('_________________________________\n')
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.memberL, this.memberI, this.memberS, this.bookL, this.bookI, this.bookS, this.quit],
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
module.exports = Menu