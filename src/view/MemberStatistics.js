const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class MemberStatistics {
  
  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: 'menu',
        message: 'Menu',
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