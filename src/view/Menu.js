const inquirer = require('inquirer') 

class Menu {


  constructor() {
   this.memberI = 'Member Information'
   this.memberR = 'Member Reviews'
   this.memberL = 'List of Members'
   this.bookI = 'Book Information'
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
        choices: [this.memberI, this.memberR, this.memberL, this.bookI, this.quit],
        filter: function (val) {
          return val
        }
      }
    ]
  
    inquirer.prompt(start).then(answers => {
      if (answers.menu === this.memberI) {
        console.log('MEMBER INFO')
        // Get member info
      } else if (answers.menu === this.memberR) {
        console.log('MEMBER REVIEWS')
        // Get member reviews
      } else if (answers.menu === this.memberL) {
        console.log('LIST OF MEMBERS')
        // Get member list
      } else if (answers.menu === this.bookI) {
        console.log('BOOK INFO')
        // Get book info
      } else if (answers.menu === this.quit) {
        console.log('\nWelcome back!\n')
        process.exit(0)
      }
    })
  }
}

module.exports = Menu