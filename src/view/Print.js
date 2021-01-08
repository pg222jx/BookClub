class Print {

    fromArray(array) {
        array.forEach(element => {
            console.log(element)
        })
    }

    memberInfo(user) {
        console.log('Age: ' + user.age + ',' + ' Gender: ' + user.gender)
    }

    bookInfo(book) {
        console.log('Author: ' + book.author + ',' + ' Publisher: ' + book.publisher + ',' + ' Year: ' + book.year)
    }

    userReviews(reviews) {
        reviews.forEach(review => {
            console.log('Title: ' + review.title + ',' + ' Author: ' + review.author + ',' + ' Score: ' + review.score + ',' + ' Times Read: ' + review.timesRead)
        })
    }

    bookReviews(reviews) {
        reviews.forEach(review => {
            console.log('Username: ' + review.username + ',' + ' Score: ' + review.score + ',' + ' Times Read: ' + review.timesRead)
        })
    }

    exitMessage() {
        console.log('\nWelcome back!\n')
    } 

    members(count) {
        console.log(count)
    }

    popBookAvgScore(book) {
        console.log('Title: ' + book.title + ', ' + 'Average Score: ' + book.avgScore)
    }

    mostReadBook(book) {
        console.log('Title: ' + book.title + ', ' + 'Times Read: ' + book.timesRead)
    }
}

// Exports
module.exports = Print