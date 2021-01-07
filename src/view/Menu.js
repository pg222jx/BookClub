const inquirer = require('inquirer') 
const Database = require('../model/Database') 

class Menu {

  constructor() {
   this.database = new Database()
   this.database.connectToDatabase();

   this.memberL = 'List all Members'
   this.memberI = 'Member Information'
   this.memberS = 'Member Statistics'
   this.bookL = 'List all Books'
   this.bookI = 'Book Information'
   this.bookS = 'Book Statistics'
   this.quit = 'Quit'
  }

  getOptions() {

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
  
    inquirer.prompt(start).then(answers => {
      if (answers.menu === this.memberL) {
        this.database.getAllUsernames()
      } else if (answers.menu === this.memberI) {
        console.log('MEMBER INFO + MEMBER REVIEWS')
      } else if (answers.menu === this.memberS) {
        console.log('MEMBER STATISTICS')
      } else if (answers.menu === this.bookL) {
        this.database.getAllBookTitles()
      } else if (answers.menu === this.bookI) {
        console.log('BOOK INFO')
      } else if (answers.menu === this.bookS) {
        console.log('BOOK STATISTICS')
      } else if (answers.menu === this.quit) {
        console.log('\nWelcome back!\n')
        process.exit(0)
      }
    })
  }
}

module.exports = Menu