const Database = require('../model/Database') 
const Menu = require('../view/Menu')

class MemberController {

  constructor() {
   this.database = new Database()
   this.database.connectToDatabase()
  }

  getUserInfo(username) {
    return this.database.getUserInfo(username)
  }

  getUserReview(username) {
    return this.database.getUserReview(username)
  }

  returnToMenu() {
    const menu = new Menu()
    return menu.getOptions()
  }
}

// Exports
module.exports = MemberController