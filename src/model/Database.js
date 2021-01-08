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

    let user = {}
    result.forEach(element => {
      if (element.username === username) {
        user = {
          age: element.age,
          gender: element.gender
        }
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

    let book = {}
    result.forEach(element => {
      if (element.title === title) {
        book = {
          author: element.author,
          publisher: element.publisher,
          year: element.year
        }
      }
    })

    return book
  }

  async getUserReviews(username) {
    const result = await this.doQuery("SELECT * FROM review")

    let reviews = []
    result.forEach(element => {
      if (element.username === username) {
        reviews.push({
          title: element.title,
          author: element.author,
          score: element.score,
          timesRead: element.timesRead
        })
      }
    })

    return reviews
  }

  async getBookReviews(title) {
    const result = await this.doQuery("SELECT * FROM review") 

    let reviews = []
    result.forEach(element => {
      if (element.title === title) {
        reviews.push({
          username: element.username,
          score: element.score,
          timesRead: element.timesRead
        })
      }
    })

    return reviews
  }


  async getBookInfo(title) {
    const result = await this.doQuery("SELECT * FROM book")

    let book = {}
    result.forEach(element => {
      if (element.title === title) {
        book = {
          author: element.author,
          publisher: element.publisher,
          year: element.year
        }
      }
    })

    return book
  }

  async getFemaleMembers() {
    const result = await this.doQuery("SELECT * FROM member WHERE gender = 'female'") 

    return result.length
  }
}

// Exports
module.exports = Database