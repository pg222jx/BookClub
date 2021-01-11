const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class BookStatistics {

  /**
   * Prints the book statistics menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
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