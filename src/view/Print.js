class Print {

    printFromArray(array) {
        array.forEach(element => {
            console.log(element)
        })
    }

    // printSingleValue(info) {
    //     console.log(info)
    // }

    printUser(user) {
        console.log('Age: ' + user.age + ',' + ' Gender: ' + user.gender)
    }

    printBook(book) {
        console.log('Author: ' + book.author + ',' + ' Publisher: ' + book.publisher + ',' + ' Year: ' + book.year)
    }

    printExitMessage() {
        console.log('\nWelcome back!\n')
    }
    
}

// Exports
module.exports = Print