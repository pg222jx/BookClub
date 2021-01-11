const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class MemberMenu {

  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: 'menu',
        message: 'Menu',
        choices: [menuEnums.memberAndBookMenu.INFO, menuEnums.memberAndBookMenu.REVIEWS, menuEnums.memberAndBookMenu.RETURN],
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
        type: menuEnums.inquirerType.INPUT,
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
        type: menuEnums.inquirerType.INPUT,
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
        type: menuEnums.inquirerType.LIST,
        name: 'gender',
        message: 'Choose gender',
        choices: [menuEnums.genderMenu.FEMALE, menuEnums.genderMenu.MALE],
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