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
    let prom = new Promise((resolve) => {
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

  async getAllAuthors() {
    const result = await this.doQuery("SELECT author FROM book")

    let authors = []
    result.forEach(element => {
            authors.push(element.author)
    })

    return authors
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

  async countMembers(gender) {
    const result = await this.doQuery("SELECT COUNT(*) AS count FROM member WHERE gender='" + gender + "'") 

    let count = {}
    result.forEach(element => {
        count = element.count
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

  async getAuthorsAndTimesRead() {
    const result = await this.doQuery("SELECT book.author, sum(review.timesRead) AS timesRead FROM book INNER JOIN review WHERE book.title = review.title AND book.author= review.author GROUP BY book.author ASC")
    
    let authors = []
    result.forEach(element => {
      authors.push({
        author: element.author,
        timesRead: element.timesRead
      })
    })

   return authors
  }

  async getMostReadBook() {
    const result = await this.doQuery("SELECT title, sum(timesRead) AS timesRead FROM review GROUP BY title ORDER BY timesRead DESC LIMIT 1")

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

  async getTitles(author) {
    const result = await this.doQuery("SELECT title FROM book WHERE author='" + author + "'")

    let titles = []
    result.forEach(element => {
      titles.push({
        title: element.title
      })
    })

    return titles
  }

  async getStatistics(title) {
    const result = await this.doQuery("SELECT DISTINCT (sum(score)/COUNT(*)) AS avgScore, sum(timesRead) AS timesRead FROM review WHERE review.title='" + title + "'")
    
    let statistics = {}
    result.forEach(element => {
        statistics = {
          avgScore: element.avgScore,
          timesRead: element.timesRead
        }
      })

    return statistics
  }

  async getTimesRead(title) {
    const result = await this.doQuery("SELECT sum(timesRead) AS sum FROM review WHERE title='" + title + "'")

    let times = {}
    result.forEach(element => {
        times = {
          sum: element.sum
        }
      })

    return times.sum
  }

  async getAvgScore(title) {
    const result = await this.doQuery("SELECT (sum(score)/COUNT(*)) AS score FROM review WHERE title='" + title + "'")
    
    let average = {}
    result.forEach(element => {
        average = {
          score: element.score
        }
      })

    return average.score
  }

  async getAgeTitleStatistics(age, title) {
    const result = await this.doQuery("SELECT DISTINCT count(review.username) AS sum FROM review INNER JOIN member WHERE review.username = member.username AND age<" + age +  " AND review.title='" + title + "'")
  
    let count = {}
    result.forEach(element => {
        count = {
          sum: element.sum
        }
      })

    return count.sum
  }

  async getGenderYearStatistics(gender, year) {
    await this.doQuery("DROP VIEW IF EXISTS newView")
    await this.doQuery("CREATE VIEW newView AS SELECT member.username, member.gender, review.title, review.score, book.author, book.year FROM member, review, book WHERE member.username = review.username AND review.title = book.title")
    const result = await this.doQuery("SELECT DISTINCT count(*) AS sum FROM newView WHERE gender='" + gender + "' AND year <" + year)
    
    let count = {}
    result.forEach(element => {
        count = {
          sum: element.sum
        }
      })

    return count.sum
  }
}

// Exports
module.exports = Database