// 242 Valid Anagram
/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

function isAnagramSlow(s, t) {

    // Must be same length to be anagram
    if(s.length != t.length) return false;

    let sortedS = s.split('').sort().join();
    let sortedT = t.split('').sort().join();

    for (let i = 0; i < sortedS.length; i++) {
        // After sorting, if the letters are not the same, then it's not an anagram
        if (sortedS[i] != sortedT[i]) {
            return false;
        }
    }

    return true;
}

function isAnagram(s, t) {
    // Must be same length to be anagram
    if(s.length != t.length) return false;

    // Store in map object
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        // Subtract from the map value
        // If it's not found anymore, it's not an anagram
        if(map[t[i]]) {
            map[t[i]]--;
        } else {
            return false;
        }
    }

    return true;
}

var s = "ratt", t = "car";
var s1 = "anagram", t1 = "nagaram";
console.log(isAnagram(s,t));
console.log(isAnagram(s1,t1));