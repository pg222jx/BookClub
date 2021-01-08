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
        console.log('Age: ' + user.age + ' Gender: ' + user.gender)
    }

    printBook(book) {
        console.log()
    }

    printExitMessage() {
        console.log('\nWelcome back!\n')
    }
    
}


module.exports = Print