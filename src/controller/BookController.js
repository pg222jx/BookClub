const Database = require('../model/Database') 
const Menu = require('../view/Menu')

class BookController {

  constructor() {
   this.database = new Database()
   this.database.connectToDatabase()
  }

  getAllBookTitles() {
      return this.database.getAllBookTitles()
  }

  getBookInfo(title) {
    return this.database.getBookInfo(title)
  }

  getBookReview(title) {
      return this.database.getBookReview(title)
  }

  returnToMenu() {
    const menu = new Menu()
    return menu.getOptions()
  }
}

// Exports
module.exports = BookController