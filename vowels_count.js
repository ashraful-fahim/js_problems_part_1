function countingVowels(str) {
    let box = [];
    for (vowels of str) {
        if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
            box.push(vowels);
        }
    }
    const len = box.length;
    return len;
}
    const sen = 'aeiousad fahagahasghieopdfghgjklaerrrr';
    const sentence = countingVowels(sen);
    console.log(sentence);