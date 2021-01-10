const inquirer = require('inquirer') 

class Menu {

  constructor() {
   this.bookI = 'Book Information'
   this.memberI = 'Member Information'
   this.statistics = 'Statistics'
   this.lists = 'Lists'
   this.quit = 'Quit'
  }

  async getOptions() {
    console.log('Welcome to Book Club!')
    console.log('_________________________________\n')
    const start = [
      {
        type: 'list',
        name: 'menu',
        message: 'Menu',
        choices: [this.bookI, this.memberI, this.statistics, this.lists, this.quit],
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
        type: 'list',
        name: 'choices',
        message: 'Please make a choice',
        choices: ['Book Statistics', 'Member Statistics'],
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
        type: 'list',
        name: 'choices',
        message: 'Please make a choice',
        choices: ['List all Authors', 'List Authors and Times Read', 'List all Book Titles', 'List Reviewed Books','List all Members'],
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