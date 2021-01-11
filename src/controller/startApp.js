const StartMenu = require('./StartMenu')

/**
* Starts the main menu.
*
*/
function startUp() {
    const startMenu = new StartMenu()
    startMenu.run()
    }

module.exports.startUp = startUp