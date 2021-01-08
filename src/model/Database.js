const mysql = require('mysql')
require('dotenv').config()

class Database {
  constructor() {
    this.con = undefined
  }

  connectToDatabase () {
    this.con = mysql.createConnection({
      host:  process.env.HOST,
      user:  process.env.USER,
      password:  process.env.PASSWORD,
      database:  process.env.DB
    })

    this.con.connect(function(err) {
        if (err) throw err
      })
  }

  async doQuery(queryToGet) {
    let prom = new Promise((resolve, reject) => {
      this.con.query(queryToGet, (err, result) => {
        if (err) throw err
        resolve(result)
      })
    })
    
    const value = prom.then((val) => {
      return val
    })

    return value
  }

  async getAllUsernames() {
    const result = await this.doQuery("SELECT username FROM member")

    let usernames = []
    result.forEach(element => {
            usernames.push(element.username)
    })

    return usernames
  }

  
  async getUserInfo(username) {

    const result = await this.doQuery("SELECT * FROM member")

    let user
    result.forEach(element => {
      if (element.username === username) {
        user = 'Age:', element.age + ',', 'Gender:', element.gender
      }
    })

    return user
  }

  async getAllBookTitles() {
    const result = await this.doQuery("SELECT title FROM book")

    let titles = []
    result.forEach(element => {
            titles.push(element.title)
    })

    return titles
  }

  async getBookInfo(title) {
    const result = await this.doQuery("SELECT * FROM book")

    let book
    result.forEach(element => {
      if (element.title === title) {
        book = 'Author:', element.author + ',', 'Publisher:', element.publisher + ',', 'Year:', element.year
      }
    })

    return book

  }

  getUserReview(username) {
    this.con.query("SELECT * FROM review", function (err, result) {
      if (err) throw err
        result.forEach(element => {
          if (element.username === username) {
            console.log('Title:', element.title + ',', 'Author:', element.author + ',', 'Score:', element.score + ',', 'Times Read:', element.timesRead)
          }
        })
    })
  }

  getBookReview(title) {
    this.con.query("SELECT * FROM review", function (err, result) {
      if (err) throw err
        result.forEach(element => {
          if (element.title === title) {
            console.log('Username:', element.username + ',', 'Score:', element.score + ',', 'Times Read:', element.timesRead)
          }
        })
    })
  }
}

// Exports
module.exports = Database