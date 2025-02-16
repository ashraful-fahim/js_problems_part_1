/* Write a function to convert temperature from Celsius to Fahrenheit. */

function toFahrenheight(celsius){
    fahrenheight = celsius * (9/5) + 32;
    return fahrenheight;
}

const celsius = 100;
const tempConversion = toFahrenheight(celsius);
console.log(celsius, 'degree Celsius to Fahrenheight is',tempConversion);