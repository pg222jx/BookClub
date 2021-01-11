const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class BookStatistics {
  
  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.bookStatMenu.NAME,
        message: menuEnums.bookStatMenu.MESSAGE,
        choices: [menuEnums.bookStatMenu.MOSTPOP, menuEnums.bookStatMenu.SEARCHAUTH, menuEnums.bookStatMenu.SEARCHTITLE,
          menuEnums.bookStatMenu.AUTHORTIMESREAD, menuEnums.bookStatMenu.RETURN],
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
module.exports = BookStatistics