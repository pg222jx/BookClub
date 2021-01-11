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
	NAME: 'choices',
	MESSAGE: 'Menu',
	AUTHORLIST: 'List all Authors',
	AUTHORTIMESREAD: 'List Authors and Times Read',
	BOOKTITLES: 'List all Book Titles',
    REVIEWEDBOOKS: 'List Reviewed Books',
    MEMBERS: 'List all Members',
    RETURN: 'Return'
}

const memberAndBookMenu = {
	NAME: 'menu',
	MESSAGE: 'Menu',
	INFO: 'Information',
	REVIEWS: 'Reviews',
    RETURN: 'Return'
}

const memberStatMenu = {
	NAME: 'menu',
	MESSAGE: 'Menu',
	MEMBERFEMALES: 'How Many Members are Females?',
	MEMBERMALES: 'How Many Members are Males?',
	AGETITLE: 'How Many Members Under { choose age } Has Read { choose title }?',
    GENDERYEAR: 'How Many { choose gender } Members Has Read a Book Written Before { choose year }?',
    RETURN: 'Return'
}

const genderMenu = {
	NAME: 'gender',
	MESSAGE: 'Choose gender',
	FEMALE: 'Female',
	MALE: 'Male',
}

const bookStatMenu = {
	NAME: 'menu',
	MESSAGE: 'Menu',
	MOSTPOP: 'Most Popular Book',
	SEARCHAUTH: 'Search Book Titles by Author',
	SEARCHTITLE: 'Search Statistics by Book Title',
    AUTHORTIMESREAD: 'List all authors and their total times read',
    RETURN: 'Return'
}

const popularMenu = {
	NAME: 'options',
	MESSAGE: 'Please choose an option',
	TIMESREAD: 'Most Popular Book Seen by Times Read',
	TOTALSCORE: 'Most Popular Book Seen by Total Score',
	AVGSCORE: 'Most Popular Book Seen by Average Score',
    RETURN: 'Return'
}

const bookTitle = {
	NAME: 'title',
	MESSAGE: 'Which book title do you want to search for?',
}

const bookYear = {
	NAME: 'year',
	MESSAGE: 'Before which year?',
}

const bookAuthor = {
	NAME: 'author',
	MESSAGE: 'Which author?',
}

const memberName = {
	NAME: 'username',
	MESSAGE: 'Which member do you want to search for?',
}


const memberAge = {
	NAME: 'age',
	MESSAGE: 'Under what age limit?',
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
exports.bookTitle = bookTitle
exports.bookYear = bookYear
exports.bookAuthor = bookAuthor
exports.memberName = memberName
exports.memberAge = memberAge
exports.inquirerType = inquirerType