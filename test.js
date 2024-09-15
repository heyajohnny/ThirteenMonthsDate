const ThirteenMonthsDate = require('./index.js');

// Test dates
const dates = [
	new ThirteenMonthsDate(2023, 5, 16),  		// 16 juni 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(2023, 5, 17),  		// 17 juni 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(2023, 5, 18),  		// 18 juni 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(2024, 5, 16),  		// 16 juni 2024 (schrikkeljaar)
	new ThirteenMonthsDate(2024, 5, 17),  		// 17 juni 2024 (schrikkeljaar, intercalaire dag)
	new ThirteenMonthsDate(2024, 5, 18),  		// 18 juni 2024 (schrikkeljaar)
	new ThirteenMonthsDate(2023, 9, 28, 1),  	// 28 okt 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(1625097600000), 		// 1 jul 2021
	new ThirteenMonthsDate(), 					// Now
	new ThirteenMonthsDate("2023-12-30"),
	new ThirteenMonthsDate("2023-12-31"),
	new ThirteenMonthsDate("2023-12-31:00:30"),
];
  
dates.forEach(date => {
	console.log('--- THIRTEEN MONTHS DATE ---')
	console.log('getDate:', date.getDate());
	console.log('getUTCDate:', date.getUTCDate());
	console.log('getTimezoneOffset:', date.getTimezoneOffset());
	console.log('getTime:', date.getTime());
	console.log('getFullYear:', date.getFullYear());
	console.log('getUTCFullYear:', date.getUTCFullYear());
	console.log('getMonth:', date.getMonth());
	console.log('getUTCMonth:', date.getUTCMonth());
	console.log('getDay:', date.getDay());
	console.log('getUTCDay:', date.getUTCDay());
	console.log('getHours:', date.getHours());
	console.log('getUTCHours:', date.getUTCHours());
	console.log('getMinutes:', date.getMinutes());
	console.log('getUTCMinutes:', date.getUTCMinutes());
	console.log('getSeconds:', date.getSeconds());
	console.log('getUTCSeconds:', date.getUTCSeconds());
	console.log('getMilliseconds:', date.getMilliseconds());
	console.log('getUTCMilliseconds:', date.getUTCMilliseconds());
	console.log('InputDate: getGregorianDateString', date.getGregorianDateString());
	console.log('InputUTCDate: getGregorianUTCDateString', date.getGregorianUTCDateString());
	console.log('getMonthName:', date.getMonthName());
	console.log('getUTCMonthName:', date.getUTCMonthName());
	console.log('isIntercalaryDay:', date.isIntercalaryDay());
	console.log('isUTCIntercalaryDay:', date.isUTCIntercalaryDay());
	console.log('_isLeapYear:', date._isLeapYear());
	// console.log('toJSON:', date.toJSON());
	console.log('toDateString:', date.toDateString());
	console.log('toISOString:', date.toISOString());
	console.log('toLocaleDateString:', date.toLocaleDateString());
	console.log('toLocaleString:', date.toLocaleString());
	console.log('toLocaleTimeString:', date.toLocaleTimeString()); 
	console.log('toString:', date.toString());
	console.log('toUTCString:', date.toUTCString());
	// console.log('ThirteenMonthsDate.UTC', ThirteenMonthsDate.UTC(2024, 13, 28, 0, 0, 0, 0));
	// console.log('ThirteenMonthsDate.parse', ThirteenMonthsDate.parse("2023-13-28:00:30"));
	console.log('ThirteenMonthsDate.now', ThirteenMonthsDate.now());
	console.log('---');
});

const date = new Date("2023-12-31:00:30");
console.log('--- GREGORIAN DATE ---')
console.log('getDate:', date.getDate());
console.log('getUTCDate:', date.getUTCDate());
console.log('getTimezoneOffset:', date.getTimezoneOffset());
console.log('getTime:', date.getTime());
console.log('getFullYear:', date.getFullYear());
console.log('getUTCFullYear:', date.getUTCFullYear());
console.log('getMonth:', date.getMonth());
console.log('getUTCMonth:', date.getUTCMonth());
console.log('getDay:', date.getDay());
console.log('getUTCDay:', date.getUTCDay());
console.log('getHours:', date.getHours());
console.log('getUTCHours:', date.getUTCHours());
console.log('getMinutes:', date.getMinutes());
console.log('getUTCMinutes:', date.getUTCMinutes());
console.log('getSeconds:', date.getSeconds());
console.log('getUTCSeconds:', date.getUTCSeconds());
console.log('getMilliseconds:', date.getMilliseconds());
console.log('getUTCMilliseconds:', date.getUTCMilliseconds());
// console.log('toJSON:', date.toJSON());
console.log('toDateString:', date.toDateString());
console.log('toISOString:', date.toISOString());
console.log('toLocaleDateString:', date.toLocaleDateString());
console.log('toLocaleString:', date.toLocaleString());
console.log('toLocaleTimeString:', date.toLocaleTimeString());
console.log('toString:', date.toString());
console.log('toUTCString:', date.toUTCString());
console.log('---');
