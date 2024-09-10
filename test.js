const ThirteenMonthsDate = require('./index.js');

// Test verschillende datums
const dates = [
	new ThirteenMonthsDate(2023, 5, 16),  // 16 juni 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(2023, 5, 17),  // 17 juni 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(2023, 5, 18),  // 18 juni 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(2024, 5, 16),  // 16 juni 2024 (schrikkeljaar)
	new ThirteenMonthsDate(2024, 5, 17),  // 17 juni 2024 (schrikkeljaar, intercalaire dag)
	new ThirteenMonthsDate(2024, 5, 18),  // 18 juni 2024 (schrikkeljaar)
	new ThirteenMonthsDate(2023, 9, 28, 1),  // 28 okt 2023 (geen schrikkeljaar)
	new ThirteenMonthsDate(1625097600000),// 1 jul 2021
	new ThirteenMonthsDate("2023-12-30"),
	new ThirteenMonthsDate("2023-12-31"),
	new ThirteenMonthsDate("2023-12-31:00:30"),
	// new Date("2023-11-28"),
	// new Date("2023-03-28"),
	new ThirteenMonthsDate(), // Nu
];
  
dates.forEach(date => {
	console.log('InputDate (getGregorianDateString)', date.getGregorianDateString());
	console.log('InputUTCDate (getGregorianUTCDateString)', date.getGregorianUTCDateString());
	console.log('Local Date:', date.getDate());
	console.log('UTC Date:', date.getUTCDate());
	console.log('Local Month:', date.getMonth(), date.getMonthName());
	console.log('UTC Month:', date.getUTCMonth(), date.monthNames[date.getUTCMonth()]);
	console.log('ToString:', date.toString());
	console.log('ToUTCString:', date.toUTCString());
	console.log(date.getTimezoneOffset());
	console.log(ThirteenMonthsDate.UTC(2024, 11, 8, 0, 0, 0, 0));
	// console.log(date);
	// console.log('Is Intercalary:', date.isIntercalaryDay());
	// console.log('Is UTCIntercalary:', date.isUTCIntercalaryDay());
	console.log('---');
});