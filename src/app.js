const StartMenu = require('./controller/StartMenu')
const Print = require('./view/Print')

const print = new Print()
print.welcomeMessage()

startMenu = new StartMenu()
startMenu.run()