/*
Checking an array of strings or number if they are having any duplicate elements in them
*/

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const str = ['fahim', 'tarek', 'zakuan','fahim','aman', 'antor', 'jony','aman'];
const num = [23,12,3,4,23,12,2,4,5,4,3,23,56];

const check_str = noDuplicate(str);
const check_num = noDuplicate(num);
console.log(check_str);
console.log(check_num);