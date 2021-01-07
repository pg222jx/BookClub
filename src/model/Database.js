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

  getAllMembers() {
    this.con.query("SELECT * FROM member", function (err, result, fields) {
        if (err) throw err
        result.forEach(element => {
            console.log('Username:', element.username, 'Age:', element.age, 'Gender:', element.gender)
        })
    })
  }

  getAllBooks() {
    this.con.query("SELECT * FROM book", function (err, result, fields) {
      if (err) throw err
      result.forEach(element => {
          console.log('Title:', element.title, 'Author:', element.author, 'Publisher:', element.publisher, 'Year:', element.year)
      })
  })
  }
}

module.exports = Database