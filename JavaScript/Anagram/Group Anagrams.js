// Given an array of strings, group anagrams together
// Inputs: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output
// ["ate", "eat", "tea"];
// ["nat", "tan"],
// ["bat"];

var inputs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(str) {
    str = str.sort();
    var mapping = {};

    for (let i = 0; i < str.length; i++) {
        // Get current word
        var currentWord = str[i];

        // Sort the individual letters to use as a key for the hashmap
        var sortedWord = currentWord.split('').sort().join('');
        console.log(sortedWord);

        // If it doesn't exist in the map, store it
        // Else just add the individual string as a value
        if (mapping[sortedWord] === undefined) {
            // Need square brackets to initialize an array value
            mapping[sortedWord] = [currentWord];
        } else {
            // Add the current word to the array
            mapping[sortedWord].push(currentWord);
        }
    }

    var output = [];

    for (var keys in mapping) {
        output.push(mapping[keys]);
    }
    return output;
}

console.log(groupAnagrams(inputs));
//console.log(groupAnagramsSimple(inputs));