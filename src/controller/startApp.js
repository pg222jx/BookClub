const StartMenu = require('./StartMenu')

function startUp() {
    const startMenu = new StartMenu()
    startMenu.run()
    }

module.exports.startUp = startUp