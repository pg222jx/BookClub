const inquirer = require('inquirer') 

class MemberMenu {

  constructor() {
   this.info = 'Information'
   this.review = 'Reviews'
   this.return = 'Return'
   this.quit = 'Quit'
  }

  getOptions() {
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
        console.log('info')
      } else if (answers.menu === this.review) {
        console.log('REVIEWS')
      } else if (answers.menu === this.return) {
        console.log('return to main menu')
      } else if (answers.menu === this.quit) {
        console.log('\nWelcome back!\n')
        process.exit(0)
      }
    })
  }
}

module.exports = MemberMenu