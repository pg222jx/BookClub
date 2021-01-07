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
    this.con.query("SELECT username FROM member", function (err, result, fields) {
        if (err) throw err;
        result.forEach(element => {
            console.log(element.username);
        })
        
    })
  }
}

module.exports = Database