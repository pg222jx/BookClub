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
    this.con.query("SELECT username FROM member", function (err, result, fields) {
        if (err) throw err
        result.forEach(element => {
            console.log(element.username)
        })
    })
  }

  getUserInfo(username) {
    this.con.query("SELECT * FROM member", function (err, result, fields) {
      if (err) throw err
      result.forEach(element => {
          if (element.username === username) {
            console.log('Age:', element.age + ', ', 'Gender:', element.gender)
          }
      })
     
  })
  }

  getAllBookTitles() {
    this.con.query("SELECT title FROM book", function (err, result, fields) {
      if (err) throw err
      result.forEach(element => {
          console.log(element.title)
      })
  })
  }
}

module.exports = Database