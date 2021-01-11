const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class Menu {

  /**
   * Prints the start menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.startMenu.NAME,
        message: menuEnums.startMenu.MESSAGE,
        choices: [menuEnums.startMenu.BOOKINFO, menuEnums.startMenu.MEMBERINFO, 
          menuEnums.startMenu.STATISTICS, menuEnums.startMenu.LISTS, menuEnums.startMenu.QUIT],
        filter: function (val) {
          return val
        }
      }
    ]

    let answer = await inquirer.prompt(start)
    return answer.menu
  }

  /**
   * Prints the statistics menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getStatisticsOptions() {
    const choices = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.statisticsMenu.NAME,
        message: menuEnums.statisticsMenu.MESSAGE,
        choices: [menuEnums.statisticsMenu.BOOKSTAT, menuEnums.statisticsMenu.MEMBERSTAT, 
          menuEnums.statisticsMenu.RETURN],
        filter: function (val) {
          return val
        }
      }
    ]

    let answer = await inquirer.prompt(choices)
    return answer.choices
  }

  /**
   * Prints the list menu to the console.
   * 
   * @returns {string} - The users input from the menu.
   */
  async getListOptions() {
    const choices = [
      {
        type: menuEnums.inquirerType.LIST,
        name: menuEnums.listMenu.NAME,
        message: menuEnums.listMenu.MESSAGE,
        choices: [menuEnums.listMenu.AUTHORLIST, menuEnums.listMenu.AUTHORTIMESREAD, 
          menuEnums.listMenu.BOOKTITLES, menuEnums.listMenu.REVIEWEDBOOKS,menuEnums.listMenu.MEMBERS, 
          menuEnums.listMenu.RETURN],
        filter: function (val) {
          return val
        }
      }
    ]

    let answer = await inquirer.prompt(choices)
    return answer.choices
  }
}

// Exports
module.exports = Menu