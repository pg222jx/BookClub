const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')

class MemberStatistics {
  
  constructor() {
   this.controller = new BookController()

   this.memberFemales = 'How Many Members are Females?'
   this.memberMales = 'How Many Members are Males?'
   this.agesTitleStatistics = 'How Many Members Under { choose age } Has Read { choose title }?'
   this.genderYearStatistics = 'How Many { choose gender } Members Has Read a Book Written Before { choose year }?'
   this.return = 'Return'
  }

  async getOptions() {
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.memberFemales, this.memberMales, this.agesTitleStatistics, this.genderYearStatistics, this.return],
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