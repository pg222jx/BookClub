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
    const result = await this.doQuery("SELECT * FROM member WHERE username='" + username + "'")

    let user = {}
    result.forEach(element => {
        user = {
          age: element.age,
          gender: element.gender
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
    const result = await this.doQuery("SELECT * FROM book WHERE title='" + title + "'")

    let book = {}
    result.forEach(element => {
        book = {
          author: element.author,
          publisher: element.publisher,
          year: element.year
        }
    })

    return book
  }

  async getUserReviews(username) {
    const result = await this.doQuery("SELECT * FROM review WHERE username='" + username + "'")

    let reviews = []
    result.forEach(element => {
        reviews.push({
          title: element.title,
          author: element.author,
          score: element.score,
          timesRead: element.timesRead
        })
    })

    return reviews
  }

  async getBookReviews(title) {
    const result = await this.doQuery("SELECT * FROM review WHERE title='" + title + "'") 

    let reviews = []
    result.forEach(element => {
        reviews.push({
          username: element.username,
          score: element.score,
          timesRead: element.timesRead
        })
    })

    return reviews
  }

  async getBookInfo(title) {
    const result = await this.doQuery("SELECT * FROM book WHERE title='" + title + "'")

    let book = {}
    result.forEach(element => {
        book = {
          author: element.author,
          publisher: element.publisher,
          year: element.year
        }
    })

    return book
  }

  async getFemaleMembers() {
    const result = await this.doQuery("SELECT COUNT(*) AS female FROM member WHERE gender = 'female'") 
    
    let count = {}
    result.forEach(element => {
        count = element.female
    })

    return count
  }

  async getMaleMembers() {
    const result = await this.doQuery("SELECT COUNT(*) AS male FROM member WHERE gender = 'male'") 

    let count = {}
    result.forEach(element => {
        count = element.male
    })

    return count
  }

  async getReviewedBooks() {
    const result = await this.doQuery("SELECT title, (sum(score)/COUNT(*)) AS avgScore, COUNT(*) AS reviewsAmount FROM review GROUP BY title")

    let books = []
    result.forEach(element => {
      books.push({
        title: element.title,
        avgScore: element.avgScore,
        reviewsAmount: element.reviewsAmount
      })
    })

   return books
  }

  async getPopularBookAvgScore() {
    const result = await this.doQuery("SELECT title, (sum(score)/COUNT(*)) AS avgScore FROM review GROUP BY title ORDER BY avgScore DESC LIMIT 1")

    let book = {}
    result.forEach(element => {
        book = {
          title: element.title,
          avgScore: element.avgScore
        }
      })

    return book
  }

  async getMostReadBook() {
    const result = await this.doQuery("SELECT DISTINCT book.title, review.timesRead FROM book INNER JOIN review WHERE book.title = review.title ORDER BY timesRead DESC LIMIT 1")

    let book = {}
    result.forEach(element => {
        book = {
          title: element.title,
          timesRead: element.timesRead
        }
      })

    return book
  }

  async getHighestTotalScore() {
    const result = await this.doQuery("SELECT title, (sum(score)) AS score FROM review GROUP BY title ASC LIMIT 1")

    let book = {}
    result.forEach(element => {
        book = {
          title: element.title,
          score: element.score
        }
      })

    return book
  }
}

// Exports
module.exports = Database