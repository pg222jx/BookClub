const menuEnums = require('../view/menuEnums')
const BookStatistics = require('../view/BookStatistics')
const MemberStatistics = require('../view/MemberStatistics')

class StatisticMenu {

    constructor() {

    }

    async runStatistics(option) {
        if (option === menuEnums.statisticsMenu.BOOKSTAT) {
            const option = await this.bookStatistics.getOptions()
            this.runBookStatistics(option)
        } else if (option === menuEnums.statisticsMenu.MEMBERSTAT) {
            const option = await this.memberStatistics.getOptions()
            this.runMemberStatistics(option)
        } else if (option === menuEnums.statisticsMenu.RETURN) {
            this.run()
        }
    }

}

// Exports
module.exports = StatisticMenu