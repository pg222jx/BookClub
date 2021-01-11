const inquirer = require('inquirer') 
const menuEnums = require('./menuEnums') 

class Menu {

  async getOptions() {
    const start = [
      {
        type: menuEnums.inquirerType.LIST,
        name: 'menu',
        message: 'Menu',
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

  async getStatisticsOptions() {
    const choices = [
      {
        type: menuEnums.inquirerType.LIST,
        name: 'choices',
        message: 'Please make a choice',
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

  async getListOptions() {
    const choices = [
      {
        type: menuEnums.inquirerType.LIST,
        name: 'choices',
        message: 'Please make a choice',
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