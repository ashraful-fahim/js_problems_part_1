// Inch to feet conversion:

function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchNumber = inch % 12;
    const height = feetNumber + ' Feet ' + inchNumber + ' inch.';
    return height;
}

const shuvoHeight = inchToFeet(78);
console.log(shuvoHeight);

// Miles to kilometers:

function milesToKm(miles){
    const km = miles * 1.609;
    const kmPart = parseInt(km);
    const milesPart = km % 1;
    const result = kmPart + ' KM ' + milesPart.toFixed(3) + ' miles.';
    return result;
}

const length = milesToKm(2);
console.log(length);