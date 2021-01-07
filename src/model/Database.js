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
      });
  }

  getAllUsernames() {
    this.con.query("SELECT username FROM member", function (err, result) {
        if (err) throw err
        result.forEach(element => {
            console.log(element.username)
        })
    })
  }

  getUserInfo(username) {
    this.con.query("SELECT * FROM member", function (err, result) {
      if (err) throw err
        result.forEach(element => {
          if (element.username === username) {
            console.log('Age:', element.age + ',', 'Gender:', element.gender)
          }
      })
    })
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

  getAllBookTitles() {
    this.con.query("SELECT title FROM book", function (err, result) {
      if (err) throw err
      result.forEach(element => {
          console.log(element.title)
      })
  })
  }

  getBookInfo(title) {
    this.con.query("SELECT * FROM book", function (err, result) {
      if (err) throw err
        result.forEach(element => {
          if (element.title === title) {
            console.log('Author:', element.author + ',', 'Publisher:', element.publisher + ',', 'Year:', element.year)
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