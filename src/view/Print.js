class Print {

    printFromArray(array) {
        array.forEach(element => {
            console.log(element)
        })
    }

    printUser(user) {
        console.log('Age: ' + user.age + ',' + ' Gender: ' + user.gender)
    }

    printBook(book) {
        console.log('Author: ' + book.author + ',' + ' Publisher: ' + book.publisher + ',' + ' Year: ' + book.year)
    }

    printReviews(reviews) {
        reviews.forEach(review => {
            console.log('Title: ' + review.title + ' Author: ' + review.author + ' Score: ' + review.score + ' Times Read: ' + review.timesRead)
        })
        
    }

    printExitMessage() {
        console.log('\nWelcome back!\n')
    }
    
}

// Exports
module.exports = Print