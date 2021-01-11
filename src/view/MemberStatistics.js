const inquirer = require('inquirer') 
const BookController = require('../controller/BookController')
const menuEnums = require('./menuEnums') 

class MemberStatistics {
  
  constructor() {
   this.controller = new BookController()
  }

  async getOptions() {
    const start = [
      {
        type: 'list',
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