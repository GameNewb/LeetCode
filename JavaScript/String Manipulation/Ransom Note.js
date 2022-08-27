/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 */
var canConstruct = function(ransomNote, magazine) {
    // We are checking if ransomNote can be constructed by using letters from magazine
    // If ransomNote or magazine is empty, then we just return false 
    if (!ransomNote) return false;
    if (!magazine) return false;
    if (ransomNote.length > magazine.length) return false; 

    // Build the map
    var hashMap = {};

    for (var i = 0; i < magazine.length; i++) {
        let key = magazine[i];

        // Setup the hashmap
        if (!hashMap[key]) {
            hashMap[key] = 1;
        } else {
            hashMap[key]++;
        }
    }

    for (var item in hashMap) {
        console.log(item);
    }
};

var test1 = "aa";
var test2 = "aab";

canConstruct(test1, test2);