const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class MemberStatistics {
  
  /**
   * Prints the member statistics menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.memberStatMenu.NAME,
        message: menuEnums.memberStatMenu.MESSAGE,
        choices: [menuEnums.memberStatMenu.MEMBERFEMALES, menuEnums.memberStatMenu.MEMBERMALES, 
          menuEnums.memberStatMenu.AGETITLE, menuEnums.memberStatMenu.GENDERYEAR, menuEnums.memberStatMenu.RETURN],
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