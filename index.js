class ThirteenMonthsDate {
	constructor(...args) {
	  this.monthNames = [
		"January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December", "Undecember", "Intercalary"
	  ];
  
	  if (args.length === 0) {
		this._date = new Date();
	  } else if (args.length === 1) {
		this._date = new Date(args[0]);
	  } else {
		const [year, month, day, hour = 0, minute = 0, second = 0, ms = 0] = args;
		const adjustedMonth = month > 11 ? 11 : month;
		this._date = new Date(year, adjustedMonth, day, hour, minute, second, ms);
	  }
	}
  
	_adjustForThirteenMonths(date, isUTC = false) {
		const year = isUTC ? date.getUTCFullYear() : date.getFullYear();
		const startOfYear = new Date(Date.UTC(year, 0, 1));
		const diff = (isUTC ? date : new Date(date.getTime() - date.getTimezoneOffset() * 60000)).getTime() - startOfYear.getTime();
		const dayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000)) + 1;
		const isLeapYear = this._isLeapYear(year);
		const leapDay = 169; // 18 June is the 169th day of the year (17 June is the 168th)
	  
		let month, day;
	  
		if (isLeapYear && dayOfYear > leapDay) {
		  const adjustedDay = dayOfYear - 1;
		  month = Math.floor((adjustedDay - 1) / 28);
		  day = ((adjustedDay - 1) % 28) + 1;
		} else if (isLeapYear && dayOfYear === leapDay) {
		  month = 13;
		  day = 0; // 18 june = day 0, 31 dec = day 1
		} else {
		  month = Math.floor((dayOfYear - 1) / 28);
		  day = ((dayOfYear - 1) % 28) + 1;
		}
	  
		return { year, month, day };
	  }
  
	_isLeapYear(year) {
	  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
	}
  
	_getUTCDate() {
	  return new Date(this._date.getTime() /* + (this._date.getTimezoneOffset() * 60000)*/);
	}

	_getDayOfYear(date) {
		const start = new Date(date.getFullYear(), 0, 0);
		const diff = date - start;
		return Math.floor(diff / (1000 * 60 * 60 * 24));
	}

	_getSystemDateFormat() {
		const date = new Date(2000, 0, 2); // January 2, 2000
		const dateString = date.toLocaleDateString();
	
		// Check for common separators
		let separator = '-';
		if (dateString.includes('/')) separator = '/';
		else if (dateString.includes('.')) separator = '.';
	
		const parts = dateString.split(separator);
	
		// Determine the order of day, month, and year
		let format = '';
		for (const part of parts) {
			if (part.length === 4) format += 'yyyy';
			else if (part === '2') format += 'dd';
			else if (part === '1') format += 'mm';
			else format += part;
			format += separator;
		}
	
		// Remove the trailing separator
		return format.slice(0, -1);
	}

	getGregorianDateString() {
		return this._date.toString();
	}

	getGregorianUTCDateString() {
		return this._date.toUTCString();
	}
  
	getDate() { 
	  const { day } = this._adjustForThirteenMonths(this._date);
	  return day;
	}
  
	getUTCDate() { 
	  const { day } = this._adjustForThirteenMonths(this._getUTCDate(), true);
	  return day;
	}
  
	getDay() {
	  const dayOfYear = this._getDayOfYear(this._date);
	  return (dayOfYear - 1) % 7;
	}
  
	getUTCDay() {
	  const dayOfYear = this._getDayOfYear(this._getUTCDate());
	  return (dayOfYear - 1) % 7;
	}
  
	getFullYear() {
	  return this._date.getFullYear();
	}
  
	getUTCFullYear() {
	  return this._getUTCDate().getUTCFullYear();
	}
  
	getHours() {
	  return this._date.getHours();
	}
  
	getUTCHours() {
	  return this._getUTCDate().getUTCHours();
	}
  
	getMilliseconds() {
	  return this._date.getMilliseconds();
	}
  
	getUTCMilliseconds() {
	  return this._getUTCDate().getUTCMilliseconds();
	}
  
	getMinutes() {
	  return this._date.getMinutes();
	}
  
	getUTCMinutes() {
	  return this._getUTCDate().getUTCMinutes();
	}
  
	getMonth() { 
	  const { month } = this._adjustForThirteenMonths(this._date);
	  return month;
	}
  
	getUTCMonth() { 
	  const { month } = this._adjustForThirteenMonths(this._getUTCDate(), true);
	  return month;
	}
  
	getSeconds() {
	  return this._date.getSeconds();
	}
  
	getUTCSeconds() {
	  return this._getUTCDate().getUTCSeconds();
	}
  
	getTime() {
	  return this._date.getTime();
	}
  
	getTimezoneOffset() {
	  return this._date.getTimezoneOffset();
	}
  
	getYear() {
	  return this._date.getYear();
	}
  
	getMonthName() {
	  const { month } = this._adjustForThirteenMonths(this._date);
	  return this.monthNames[month];
	}
  
	getUTCMonthName() {
	  const { month } = this._adjustForThirteenMonths(this._getUTCDate(), true);
	  return this.monthNames[month];
	}
  
	isIntercalaryDay() {
	  const { month } = this._adjustForThirteenMonths(this._date);
	  return month === 13;
	}
  
	isUTCIntercalaryDay() {
	  const { month } = this._adjustForThirteenMonths(this._getUTCDate(), true);
	  return month === 13;
	}
  
	setDate(date) {
	  this._date.setDate(date);
	  return this.getTime();
	}
  
	setFullYear(year, month, date) {
	  this._date.setFullYear(year, month, date);
	  return this.getTime();
	}
  
	setHours(hours, min, sec, ms) {
	  this._date.setHours(hours, min, sec, ms);
	  return this.getTime();
	}
  
	setMilliseconds(ms) {
	  this._date.setMilliseconds(ms);
	  return this.getTime();
	}
  
	setMinutes(min, sec, ms) {
	  this._date.setMinutes(min, sec, ms);
	  return this.getTime();
	}
  
	setMonth(month, date) {
	  this._date.setMonth(month, date);
	  return this.getTime();
	}
  
	setSeconds(sec, ms) {
	  this._date.setSeconds(sec, ms);
	  return this.getTime();
	}
  
	setTime(time) {
	  this._date.setTime(time);
	  return this.getTime();
	}
  
	setYear(year) {
	  this._date.setYear(year);
	  return this.getTime();
	}
  
	toDateString() {
	  const { year, month, day } = this._adjustForThirteenMonths(this._date);
	  const gregorianDateString = this._date.toDateString();
	  // [day name] [month name] [day of month] [year]
	  return `${gregorianDateString.split(' ')[0]} ${this.monthNames[month].substring(0,3)} ${day} ${year}`;
	}
  
	toISOString() {
		const { year, month, day } = this._adjustForThirteenMonths(this._date);
		return `${year}-${(month+1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${this._date.toISOString().substring(11, 24)}`;
	}
  
	toLocaleDateString() {
		const dateFormat = this._getSystemDateFormat();
		const { year, month, day } = this._adjustForThirteenMonths(this._date);
		// Replace the format placeholders with actual values
		return dateFormat
			.replace('yyyy', year)
			.replace('mm', (month+1).toString().padStart(2, '0'))
			.replace('dd', day.toString().padStart(2, '0'));
	}
  
	toLocaleString() {
	  return `${this.toLocaleDateString()}, ${this._date.toLocaleTimeString()}`;
	}
  
	toLocaleTimeString() {
	  return this._date.toLocaleTimeString();
	}
  
	toString() {
		return `${this.toDateString()} ${this._date.toTimeString()}`;
	}
  
	toTimeString() {
	  return this._date.toTimeString();
	}
  
	toUTCString() {
	  const utcDate = this._getUTCDate();
	  const { year, month, day } = this._adjustForThirteenMonths(utcDate, true);
	  const timeString = utcDate.toUTCString().split(' ').slice(4).join(' ');
	  return `${utcDate.toUTCString().split(' ')[0]} ${day} ${this.monthNames[month].substring(0,3)} ${year} ${timeString}`;
	}
  
	valueOf() {
	  return this._date.valueOf();
	}
  
	// Static methods
	static now() {
	  return Date.now();
	}
  }
  
  module.exports = ThirteenMonthsDate;