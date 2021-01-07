const inquirer = require('inquirer') 

class Menu {
//   constructor () {
//   }
  sayhello() {
    console.log('Welcome to Book Club!')
    console.log('_________________________________\n')
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: ['Member Information', 'Member Reviews', 'List of Members', 'Book Information', 'Quit'],
        filter: function (val) {
          return val.toLowerCase()
        }
      }
    ]
  
    inquirer.prompt(start).then(answers => {
      if (answers.menu === 'member information') {
        console.log('MEMBER INFO')
        // Get member info
      } else if (answers.menu === 'member reviews') {
        console.log('MEMBER REVIEWS')
        // Get member reviews
      } else if (answers.menu === 'list of members') {
        console.log('LIST OF MEMBERS')
        // Get member list
      } else if (answers.menu === 'book information') {
        console.log('BOOK INFO')
        // Get book info
      } else if (answers.menu === 'quit') {
        console.log('\nWelcome back!\n')
        process.exit(0)
      }
    })
  }
}

module.exports = Menu;