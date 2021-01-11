const menuEnums = require('../view/menuEnums')
const BookStatistics = require('../view/BookStatistics')
const MemberStatistics = require('../view/MemberStatistics')
const startApp = require('./startApp')

class StatisticMenu {

    constructor() {
        this.memberStatistics = new MemberStatistics()
        this.bookStatistics = new BookStatistics()
    }

    async runStatistics(option) {
        if (option === menuEnums.statisticsMenu.BOOKSTAT) {
            const option = await this.bookStatistics.getOptions()
            this.runBookStatistics(option)
        } else if (option === menuEnums.statisticsMenu.MEMBERSTAT) {
            const option = await this.memberStatistics.getOptions()
            this.runMemberStatistics(option)
        } else if (option === menuEnums.statisticsMenu.RETURN) {
            startApp.startUp()
        }
    }

}

// Exports
module.exports = StatisticMenu