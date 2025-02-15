function oddAverage(numbers) {
    const odd = [];
    for (number of numbers) {
        if (number % 2 !== 0) {
            odd.push(number);
        }
    }
    let sum = 0;
    for (num of odd) {
        sum = sum + num;
    }
    const len = odd.length;
    const avg = sum / len;
    return avg;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15];
const avg = oddAverage(numbers);
console.log('The average of the given odd number array is', avg);