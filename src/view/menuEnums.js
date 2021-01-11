const startMenu = {
	BOOKINFO: 'Book Information',
	MEMBERINFO: 'Member Information',
	STATISTICS: 'Statistics',
    LISTS: 'Lists',
    QUIT: 'Quit'
}

const statisticsMenu = {
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

const memberMenu = {
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

// EXPORTS
exports.startMenu = startMenu
exports.statisticsMenu = statisticsMenu
exports.listMenu = listMenu
exports.memberMenu = memberMenu
exports.memberStatMenu = memberStatMenu
exports.genderMenu = genderMenu