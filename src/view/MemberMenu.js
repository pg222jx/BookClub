const inquirer = require('inquirer') 
const MemberController = require('../controller/MemberController')
const StartMenu = require('../controller/StartMenu')

class MemberMenu {
  constructor() {
   this.controller = new MemberController()

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
        this.controller.getUserInfo(username)
      } else if (answers.menu === this.review) {
        this.controller.getUserReview(username)
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
        name: 'username',
        message: 'Which member do you want to search for?'
      }
    ]

    inquirer.prompt(input).then(answers => {
      this.getOptions(answers.username)
    })
  }
}

// Exports
module.exports = MemberMenu