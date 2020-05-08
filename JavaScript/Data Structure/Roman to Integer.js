// 13. Roman to Integer
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

function romantoInt(s) {

    if(!s) return 0;

    var romanNumeral = {};
    romanNumeral['I'] = 1;
    romanNumeral['V'] = 5;
    romanNumeral['X'] = 10;
    romanNumeral['L'] = 50;
    romanNumeral['C'] = 100;
    romanNumeral['D'] = 500;
    romanNumeral['M'] = 1000;

    let result = romanNumeral[s[s.length-1]];;

    // Start from the end of the roman numeral to slowly add into the result
    for (let i = s.length - 1; i > 0; i--) {
        let current = romanNumeral[s[i]];
        let previous = romanNumeral[s[i-1]];

        // Subtract the previous numeral from the current one to get the correct result
        if (previous >= current) {
            result += previous;
        } else {
            result -= previous;
        }
    }

    return result;
}

var input = 'MCMXCIV';
console.log(romantoInt(input));