const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class MemberMenu {

  /**
   * Prints the member menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.memberAndBookMenu.NAME,
        message: menuEnums.memberAndBookMenu.MESSAGE,
        choices: [menuEnums.memberAndBookMenu.INFO, menuEnums.memberAndBookMenu.REVIEWS, menuEnums.memberAndBookMenu.RETURN],
        filter: function (val) {
          return val
        }
      }
    ]

    let answer = await inquirer.prompt(start)
    return answer.menu
  }

  /**
   * Tells user to write a username.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getInput() {
    const input = [
      {
        type: menuEnums.inquirerType.INPUT,
        name: menuEnums.memberName.NAME,
        message: menuEnums.memberName.MESSAGE
      }
    ]

    let answer = await inquirer.prompt(input)
    return answer.username
  }

  /**
   * Tells user to write an age.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getAgeInput() {
    const input = [
      {
        type: menuEnums.inquirerType.INPUT,
        name: menuEnums.memberAge.NAME,
        message: menuEnums.memberAge.MESSAGE
      }
    ]

    let answer = await inquirer.prompt(input)
      return answer.age
  }

  /**
   * Prints the gender menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getGenderOptions() {
    const choose = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.genderMenu.NAME,
        message: menuEnums.genderMenu.MESSAGE,
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