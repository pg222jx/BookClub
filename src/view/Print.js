class Print {

    welcomeMessage() {
        console.log('\nWelcome to Book Club!')
        console.log('_________________________________\n')
    }

    fromArray(array) {
        array.forEach(element => {
            console.log(element)
        })
        console.log()
        console.log('_______________________________')
    }

    singleValue(value) {
        console.log(value)
        console.log()
        console.log('_______________________________')
    }

    memberInfo(user) {
        console.log('Age: ' + user.age + ',' + ' Gender: ' + user.gender)
        console.log()
        console.log('_______________________________')
    }

    bookInfo(book) {
        console.log('Author: ' + book.author + ',' + ' Publisher: ' + book.publisher + ',' + ' Year: ' + book.year)
        console.log()
        console.log('_______________________________')
    }

    userReviews(reviews) {
        reviews.forEach(review => {
            console.log('Title: ' + review.title + ',' + ' Author: ' + review.author + ',' + ' Score: ' + review.score + ',' + ' Times Read: ' + review.timesRead)
        })
        console.log()
        console.log('_______________________________')
    }

    bookReviews(reviews) {
        reviews.forEach(review => {
            console.log('Username: ' + review.username + ',' + ' Score: ' + review.score + ',' + ' Times Read: ' + review.timesRead)
        })
        console.log()
        console.log('_______________________________')
    }

    exitMessage() {
        console.log('\nWelcome back!\n')
    } 

    reviewedBooks(list) {
        console.log('Title: ' + list.title + ', ' + 'Average Score: ' + list.avgScore + ', ' + 'Number of Reviews: ' + list.reviewsAmount)
        console.log()
        console.log('_______________________________')
    }

    highestAvgScore(book) {
        console.log('Title: ' + book.title + ', ' + 'Average Score: ' + book.avgScore)
        console.log()
        console.log('_______________________________')
    }

    authorList(info) {
        console.log('Author: ' + info.author + ', ' + 'Times Read: ' + info.timesRead)
        console.log()
        console.log('_______________________________')
    }

    mostReadBook(book) {
        console.log('Title: ' + book.title + ', ' + 'Times Read: ' + book.timesRead)
        console.log()
        console.log('_______________________________')
    }

    highestTotalScore(book) {
        console.log('Title: ' + book.title + ', ' + 'Total Score: ' + book.score)
        console.log()
        console.log('_______________________________')
    }

    statistics(title) {
        console.log('Average Score: ' + title.avgScore + ', ' + 'Times Read: ' + title.timesRead)
        console.log()
        console.log('_______________________________')
    }

    notValidInput() {
        console.log('\nNot a valid input, please try again...\n')
        console.log()
        console.log('_______________________________')
    }

    clearConsole() {
        console.clear()
    }
}

// Exports
module.exports = Print