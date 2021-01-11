const startApp = require('./controller/startApp')
const Print = require('./view/Print')

const print = new Print()
print.welcomeMessage()

startApp.startUp()