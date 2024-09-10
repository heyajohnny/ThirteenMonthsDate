# ThirteenMonthsDate

## Description

`ThirteenMonthsDate` is a JavaScript class that implements a 13-month calendar system. This calendar system divides the year into 13 months of 28 days each, with an additional "Intercalary Day" added to leap years. The class provides functionality similar to the native JavaScript `Date` object, but adjusted for the 13-month calendar system (International Fixed Calendar).

## Features

- Implements a 13-month calendar system
- Handles leap years with an Intercalary Day
- Provides methods similar to the native JavaScript `Date` object
- Supports both local and UTC time operations

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v9/commands/npm-install) to install thirteen-months-date.

```npm
npm install thirteen-months-date
```

## Usage

### Creating a ThirteenMonthsDate Object

You can create a `ThirteenMonthsDate` object in several ways:

```javascript
// Current date and time
const date1 = new ThirteenMonthsDate();

// From a timestamp
const date2 = new ThirteenMonthsDate(1632145200000);

// From a date(time) string
const date3 = new ThirteenMonthsDate("2023-12-31");

// From year, month, day, hour, minute, second, millisecond
const date4 = new ThirteenMonthsDate(2023, 5, 15, 12, 30, 0, 0);
```

### Methods

The `ThirteenMonthsDate` class provides methods similar to the native `Date` object, including:

- `getDate()`, `getUTCDate()`
- `getDay()`, `getUTCDay()`
- `getFullYear()`, `getUTCFullYear()`
- `getHours()`, `getUTCHours()`
- `getMilliseconds()`, `getUTCMilliseconds()`
- `getMinutes()`, `getUTCMinutes()`
- `getMonth()`, `getUTCMonth()`
- `getSeconds()`, `getUTCSeconds()`
- `getTime()`, `getTimezoneOffset()`, `getYear()`
- `setDate()`, `setFullYear()`, `setHours()`, `setMilliseconds()`, `setMinutes()`, `setMonth()`, `setSeconds()`, `setTime()`, `setYear()`

Additionally, it provides some unique methods:

- `getMonthName()`, `getUTCMonthName()`: Get the name of the month
- `isIntercalaryDay()`, `isUTCIntercalaryDay()`: Check if the date is an Intercalary Day

### Formatting Methods

The class includes various methods for formatting the date:

- `toDateString()`
- `toISOString()`
- `toJSON()`
- `toLocaleDateString()`
- `toLocaleString()`
- `toLocaleTimeString()`
- `toString()`
- `toTimeString()`
- `toUTCString()`

### Static Methods

- `ThirteenMonthsDate.now()`: Returns the current timestamp
- `ThirteenMonthsDate.parse(dateString)`: Parses a date string and returns the timestamp
- `ThirteenMonthsDate.UTC(year, month, date, hrs, min, sec, ms)`: Returns the timestamp for the given UTC date and time

## Examples

```javascript

import ThirteenMonthsDate from 'thirteen-months-date';

let date = new ThirteenMonthsDate(2023, 5, 16);

console.log('InputDate (getGregorianDateString)', date.getGregorianDateString());
// Output: InputDate (getGregorianDateString) Fri Jun 16 2023 00:00:00 GMT+0200 (Central European Summer Time)

console.log('InputUTCDate (getGregorianUTCDateString)', date.getGregorianUTCDateString());
// Output: InputUTCDate (getGregorianUTCDateString) Thu, 15 Jun 2023 22:00:00 GMT

console.log('Local Date:', date.getDate());
// Output: Local Date: 27

console.log('UTC Date:', date.getUTCDate());
// Output: UTC Date: 26

console.log('Local Month:', date.getMonth(), date.getMonthName());
// Output: Local Month: 5 June

console.log('UTC Month:', date.getUTCMonth(), date.monthNames[date.getUTCMonth()]);
// Output: UTC Month: 5 June

console.log('ToString:', date.toString());
// Output: ToString: June 27, 2023 00:00:00 GMT+0200 (Central European Summer Time)

console.log('ToUTCString:', date.toUTCString());
// Output: ToUTCString: June 26, 2023 22:00:00 GMT


date = new ThirteenMonthsDate("2023-12-31:00:30");

console.log('InputDate (getGregorianDateString)', date.getGregorianDateString());
// Output: InputDate (getGregorianDateString) Sun Dec 31 2023 00:30:00 GMT+0100 (Central European Standard Time)

console.log('InputUTCDate (getGregorianUTCDateString)', date.getGregorianUTCDateString());
// Output: InputUTCDate (getGregorianUTCDateString) Sat, 30 Dec 2023 23:30:00 GMT

console.log('Local Date:', date.getDate());
// Output: Local Date: 1

console.log('UTC Date:', date.getUTCDate());
// Output: UTC Date: 28

console.log('Local Month:', date.getMonth(), date.getMonthName());
// Output: Local Month: 13 Intercalary

console.log('UTC Month:', date.getUTCMonth(), date.monthNames[date.getUTCMonth()]);
// Output: UTC Month: 12 Undecember

console.log('ToString:', date.toString());
// Output: ToString: Intercalary Day, 2023 00:30:00 GMT+0100 (Central European Standard Time)

console.log('ToUTCString:', date.toUTCString());
// Output: ToUTCString: Undecember 28, 2023 23:30:00 GMT
```

## Note

This implementation assumes that the Intercalary Day is added as the 169th day of a leap year (June 18th in the Gregorian calendar). The behavior of this class may differ from standard calendar implementations, especially around leap years and date calculations.

For more information about the theory behind this calendar, see this [Wikipedia page](https://en.wikipedia.org/wiki/International_Fixed_Calendar)