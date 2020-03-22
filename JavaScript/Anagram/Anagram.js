// Given two strings, write a function to determine if t is an anagram of s
// Not ALL lower case - see if candidate asks for this
// Follow up: what if it's null? what if it contains unicode characters?


var s1 = 'anagram';
var s2 = 'nagaram';
var s3 = 'car';
var s4 = 'rat';
var s5 = 'pots';
var s6 = 'kettles';
var s7 = 'cinema';
var s8 = 'iceman';

function isAnagram(word1, word2) {

    // If the lengths are not equal, we know it's not an anagram
    if (word1.length != word2.length) {
        return false;
    } else {

        // Break down each individual character and sort it
        let arr1 = word1.split('').sort();
        let arr2 = word2.split('').sort();

        // For each letter, compare them
        for (let i = 0; i < arr1.length; i++) {

            // If a letter is different, it's not an anagram
            if (arr1[i] != arr2[i]) {
                return false
            }
        }
    }

    return true;
}

function isAnagramHash(word1, word2) {

    var hash = {}

    // Store in a hash map
    for (let i = 0; i < word1.length; i++) {
        let key = word1[i];

        if(!hash[key]) {
            hash[key] = 1;
        } else {
            hash[key]++;
        }
    }

    for (let j = 0; j < word2.length; j++) {
        console.log(hash[word2[j]]);
        if (!hash[word2[j]]) {
            return false;
        }
    }

    return true;
}

function isAnagramSingleLine(word1, word2) {
    return word1.toLowerCase().split('').sort().join() === word2.toLowerCase().split('').sort().join();
}

console.log(isAnagram(s1, s2));
console.log(isAnagram(s3, s4));
console.log(isAnagram(s5, s6));
console.log(isAnagram(s7, s8));
console.log(isAnagramHash(s1, s2));
console.log(isAnagramSingleLine(s8, s7));