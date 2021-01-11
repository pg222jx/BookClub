const startMenu = {
	NAME: 'menu',
	MESSAGE: 'Menu',
	BOOKINFO: 'Book Information',
	MEMBERINFO: 'Member Information',
	STATISTICS: 'Statistics',
    LISTS: 'Lists',
    QUIT: 'Quit'
}

const statisticsMenu = {
	NAME: 'choices',
	MESSAGE: 'Please make a choice',
	BOOKSTAT: 'Book Statistics',
	MEMBERSTAT: 'Member Statistics',
	RETURN: 'Return'
}

const listMenu = {
	AUTHORLIST: 'List all Authors',
	AUTHORTIMESREAD: 'List Authors and Times Read',
	BOOKTITLES: 'List all Book Titles',
    REVIEWEDBOOKS: 'List Reviewed Books',
    MEMBERS: 'List all Members',
    RETURN: 'Return'
}

const memberAndBookMenu = {
	INFO: 'Information',
	REVIEWS: 'Reviews',
    RETURN: 'Return'
}

const memberStatMenu = {
	MEMBERFEMALES: 'How Many Members are Females?',
	MEMBERMALES: 'How Many Members are Males?',
	AGETITLE: 'How Many Members Under { choose age } Has Read { choose title }?',
    GENDERYEAR: 'How Many { choose gender } Members Has Read a Book Written Before { choose year }?',
    RETURN: 'Return'
}

const genderMenu = {
	FEMALE: 'Female',
	MALE: 'Male',
}

const bookStatMenu = {
	MOSTPOP: 'Most Popular Book',
	SEARCHAUTH: 'Search Book Titles by Author',
	SEARCHTITLE: 'Search Statistics by Book Title',
    AUTHORTIMESREAD: 'List all authors and their total times read',
    RETURN: 'Return'
}

const popularMenu = {
	TIMESREAD: 'Most Popular Book Seen by Times Read',
	TOTALSCORE: 'Most Popular Book Seen by Total Score',
	AVGSCORE: 'Most Popular Book Seen by Average Score',
    RETURN: 'Return'
}

const inquirerType = {
	LIST: 'list',
	INPUT: 'input'
}

// EXPORTS
exports.startMenu = startMenu
exports.statisticsMenu = statisticsMenu
exports.listMenu = listMenu
exports.memberAndBookMenu = memberAndBookMenu
exports.memberStatMenu = memberStatMenu
exports.genderMenu = genderMenu
exports.bookStatMenu = bookStatMenu
exports.popularMenu = popularMenu
exports.inquirerType = inquirerType