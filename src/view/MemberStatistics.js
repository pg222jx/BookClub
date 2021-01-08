const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class MemberStatistics {
  
  constructor() {
   this.controller = new BookController()

   this.memberFemales = 'How many members are females?'
   this.memberMales = 'How many members are males?'
   this.return = 'Return'
   this.quit = 'Quit'
  }

  async getOptions() {
    console.log('Choose an option')
    console.log('_________________________________\n')
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.memberFemales, this.memberMales, this.return, this.quit],
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
module.exports = MemberStatistics