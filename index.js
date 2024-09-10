class ThirteenMonthsDate {
	constructor(...args) {
	  this.monthNames = [
		"January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December", "Tridecember", "Intercalary"
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
		  day = 1;
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
	  return `${this.monthNames[month]} ${day}, ${year}`;
	}
  
	toISOString() {
	  return this._getUTCDate().toISOString();
	}
  
	toJSON() {
	  return this._getUTCDate().toJSON();
	}
  
	toLocaleDateString() {
	  return this.toDateString();
	}
  
	toLocaleString() {
	  return `${this.toDateString()} ${this._date.toLocaleTimeString()}`;
	}
  
	toLocaleTimeString() {
	  return this._date.toLocaleTimeString();
	}
  
	toString() {
	  const { year, month, day } = this._adjustForThirteenMonths(this._date);
	  if (month === 13) {
		return `Intercalary Day, ${year} ${this._date.toTimeString()}`;
	  }
	  return `${this.monthNames[month]} ${day}, ${year} ${this._date.toTimeString()}`;
	}
  
	toTimeString() {
	  return this._date.toTimeString();
	}
  
	toUTCString() {
	  const utcDate = this._getUTCDate();
	  const { year, month, day } = this._adjustForThirteenMonths(utcDate, true);
	  const timeString = utcDate.toUTCString().split(' ').slice(4).join(' ');
	  if (month === 13) {
		return `Intercalary Day, ${year} ${timeString}`;
	  }
	  return `${this.monthNames[month]} ${day}, ${year} ${timeString}`;
	}
  
	valueOf() {
	  return this._date.valueOf();
	}
  
	// Static methods
	static now() {
	  return Date.now();
	}
  
	static parse(dateString) {
	  return Date.parse(dateString);
	}
  
	static UTC(year, month, date, hrs, min, sec, ms) {
	  return Date.UTC(year, month, date, hrs, min, sec, ms);
	}
  }
  
  module.exports = ThirteenMonthsDate;