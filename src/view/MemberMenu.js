const inquirer = require('inquirer') 
const Database = require('../model/Database') 

class MemberMenu {

  constructor() {
   this.database = new Database()
   this.database.connectToDatabase()

   this.info = 'Information'
   this.review = 'Reviews'
   this.return = 'Return'
   this.quit = 'Quit'
  }

  getOptions(username) {
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
        this.database.getUserInfo(username)
      } else if (answers.menu === this.review) {
        this.database.getUserReview(username)
      } else if (answers.menu === this.return) {
        console.log('return to main menu')
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
        name: 'username',
        message: 'Which member do you want to search for?'
      }
    ]

    inquirer.prompt(input).then(answers => {
      this.getOptions(answers.username)
    })
  }
}

module.exports = MemberMenu