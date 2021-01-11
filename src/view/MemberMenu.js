const inquirer = require('inquirer') 
const MemberController = require('../controller/MemberController')

class MemberMenu {

  constructor() {
   this.controller = new MemberController()

   this.info = 'Information'
   this.review = 'Reviews'
   this.return = 'Return'
  }

  async getOptions() {
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.info, this.review, this.return],
        filter: function (val) {
          return val
        }
      }
    ]

    let answer = await inquirer.prompt(start)
    return answer.menu
  }

  async getInput() {
    const input = [
      {
        type: 'input',
        name: 'username',
        message: 'Which member do you want to search for?'
      }
    ]

    let answer = await inquirer.prompt(input)
    return answer.username
  }

  async getAgeInput() {
    const input = [
      {
        type: 'input',
        name: 'age',
        message: 'Under what age limit?'
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.age
  }

  async getGenderOptions() {
    const choose = [
      {
        type: 'list',
        name: 'gender',
        message: 'Choose gender',
        choices: ['Female', 'Male'],
        filter: function (val) {
          return val
        }
      }
    ]

    let answer = await inquirer.prompt(choose)
    return answer.gender
  }
}

// Exports
module.exports = MemberMenu