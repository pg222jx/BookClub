class Print {

    welcomeMessage() {
        console.log('\nWelcome to Book Club!')
        console.log('_________________________________\n')
    }

    fromArray(array) {
        array.forEach(element => {
            console.log(element)
        })
    }

    singleValue(value) {
        console.log(value)
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

    reviewedBooks(list) {
        console.log('Title: ' + list.title + ', ' + 'Average Score: ' + list.avgScore + ', ' + 'Number of Reviews: ' + list.reviewsAmount)
    }

    highestAvgScore(book) {
        console.log('Title: ' + book.title + ', ' + 'Average Score: ' + book.avgScore)
    }

    authorList(info) {
        console.log('Author: ' + info.author + ', ' + 'Times Read: ' + info.timesRead)
    }

    mostReadBook(book) {
        console.log('Title: ' + book.title + ', ' + 'Times Read: ' + book.timesRead)
    }

    highestTotalScore(book) {
        console.log('Title: ' + book.title + ', ' + 'Total Score: ' + book.score)
    }

    statistics(title) {
        console.log('Average Score: ' + title.avgScore + ', ' + 'Times Read: ' + title.timesRead)
    }

    notValidInput() {
        console.log('\nNot a valid input, please try again...\n')
    }
}

// Exports
module.exports = Print