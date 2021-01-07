const Menu = require('../view/Menu')

function run() {
    const menu = new Menu()
    menu.getOptions()
}

// Exports
module.exports.run = run