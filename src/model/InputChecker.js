class InputChecker {

  isValidInput(input, menu) {
    for (let prop in menu) {
        menu[prop] = menu[prop].toLowerCase()
    }
    input = input.toLowerCase()

    if(Object.values(menu).includes(input)) {
       return true
    } else {
        return false
    }
  }

  isValidAge(age) {
    if (isNaN(age) || age === '' || age < 0 || age > 100) {
        return false
    } else {
        return true
    }
  }

  isValidYear(year) {
    if (isNaN(year) || year === '' || year < 0 || year > 2500) {
      return false
    } else {
      return true
    }
  }
}

// Exports
module.exports = InputChecker