const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')
const Database = require('../model/Database') 
const BookMenu = require('./BookMenu')
const MemberMenu = require('./MemberMenu') 

class Menu {
  constructor() {
   this.database = new Database()
   this.database.connectToDatabase()

   this.memberMenu = new MemberMenu()
   this.bookMenu = new BookMenu()
   this.bookController = new BookController()

   this.memberL = 'List all Members'
   this.memberI = 'Member Information'
   this.memberS = 'Member Statistics'
   this.bookL = 'List all Books'
   this.bookI = 'Book Information'
   this.bookS = 'Book Statistics'
   this.quit = 'Quit'

   this.answer = undefined
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
    // .then(answers => { return answers.menu })

    // inquirer.prompt(start).then(answers => {
    //   if (answers.menu === this.memberL) {
    //     this.database.getAllUsernames()
    //   } else if (answers.menu === this.memberI) {
    //     this.memberMenu.getInput()
    //   } else if (answers.menu === this.memberS) {
    //     console.log('MEMBER STATISTICS')
    //   } else if (answers.menu === this.bookL) {
    //     this.bookController.getAllBookTitles()
    //   } else if (answers.menu === this.bookI) {
    //     this.bookMenu.getInput()
    //   } else if (answers.menu === this.bookS) {
    //     console.log('BOOK STATISTICS')
    //   } else if (answers.menu === this.quit) {
    //     console.log('\nWelcome back!\n')
    //     process.exit(0)
    //   }
    // })
  }
}

// Exports
module.exports = Menu