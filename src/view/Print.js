class Print {

    printFromArray(array) {
        array.forEach(element => {
            console.log(element)
        })
    }

    printSingleValue(info) {
        console.log(info)
    }

    printExitMessage() {
        console.log('\nWelcome back!\n')
    }
    
}


module.exports = Print