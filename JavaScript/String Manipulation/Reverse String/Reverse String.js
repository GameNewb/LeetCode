// Write a function that reverses a string
// The input is an array of characters
// For example: var chars = ["H", "e", "l", "l", "o"];
// Output: ["o", "l", "l", "e", "H"]
// DONT USE ANOTHER ARRAY
// MODIFY INPLACE
// Check if candidates checks for NULL arguments


var charInput = ['H', 'e', 'l', 'l', 'o'];
var stringInput = 'Hello';
console.log(stringInput.split(''));
console.log(stringInput.split('').reverse(''));
console.log(stringInput.split('').reverse('').join(''));

function reverseString(str) {
    if (str) {
        return str.split('').reverse('').join('');
    }
}

var reverseChar = function(str) {
    if (str) {
        return str.join('').split('').reverse('');
    }
};

var inPlaceReverseChar = function(str) {

    // In place movement
    if(str) {
        let rightCharacter = str.length - 1;;
        let leftCharacter = 0;

        for(let i = rightCharacter; rightCharacter > leftCharacter; --rightCharacter) {
            let temp = str[leftCharacter];
            str[leftCharacter] = str[rightCharacter];
            str[rightCharacter] = temp;
            leftCharacter++;
        }

        /*
        while (leftCharacter < rightCharacter) {
            let temp = str[leftCharacter];
            str[leftCharacter] = str[rightCharacter];
            str[rightCharacter] = temp;
            leftCharacter++;
            --rightCharacter;
        }*/

        return str;
    }

};

console.log(reverseString(stringInput));
console.log(reverseString('test'));

console.log(reverseChar(charInput));

console.log(inPlaceReverseChar(charInput));
