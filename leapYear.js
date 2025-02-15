/*
The condition of a year to be a leap year is-
1) If the year is not divisible by 100 and divisible by 4.
2) If the year is divisible both by 100 and 400.
*/

function isLeap(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const year1 = isLeap(1900);
const year2 = isLeap(2000);
const year3 = isLeap(2100);
const year4 = isLeap(2024);
console.log(year1, year2, year3, year4);