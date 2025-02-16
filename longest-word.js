/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function longestWord(sentence){
    const arr = [];
    const separated = sentence.split(' ');
    for(let sep of separated){
        const len = sep.length;
        arr.push(len);
        // console.log(arr);
    }
    const arr_asc = [...arr].sort(function (a, b) { return a - b });
    const highest = arr_asc[arr_asc.length-1];
    return highest;

}

const sentence = "Although her mining industries have been the longest and most widely known, the principal source of Peru's wealth is agriculture.";
const longest = longestWord(sentence);
console.log('The longest word consists of', longest,'letters.');