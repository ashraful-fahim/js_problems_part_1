/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5
*/

const numbers = [5, 6, 11, 12, 98, 5, 234, 56, 32, 4, 5, 5, 5, 5, 5, 24];
const need = 5;
const unit = [];
for (num of numbers) {
    if (num === need) {
        unit.push(num);
    }
}
const len = unit.length;
console.log('The number is repeated', len, 'times');


