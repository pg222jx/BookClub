class InputChecker {

  /**
   * @param {string} input - User input.
   * @param {Object} menu - Values to check input against.
   * @returns {boolean} - If input is valid or not.
   */
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

  /**
   * @param {int} age
   * @returns {boolean} - If input is valid or not.
   */
  isValidAge(age) {
    if (isNaN(age) || age === '' || age < 0 || age > 100) {
        return false
    } else {
        return true
    }
  }

  /**
   * @param {int} year
   * @returns {boolean} - If input is valid or not.
   */
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