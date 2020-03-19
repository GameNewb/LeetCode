// 771 Jewels and Stones
// Given string J, which represents the type of stones that are jewels
// And S representing the stones you have
// Each character in S is a type of stone you have. Yo uwant to know how many of the stones you have are also jewels
// Letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive so "a" is considered different from "A"


var J = "aA", S = "aAAbbbb";
var T = "z", V = "ZZ";


function numberOfJewels(jewelType, stones) {
    
    // Transform to Array the individual Jewel type
    const jewelCategory = Array.from(jewelType, String);
    let jewels = {};

    // Initialize the key-value pair
    for (let i = 0; i < jewelCategory.length; i++) {
        
        // If the jewels isn't in the map yet, add it to the map
        if (!jewels[jewelCategory[i]]) {
            jewels[jewelCategory[i]] = 0;
        }
    }

    for (let j = 0; j < stones.length; j++) {

        // If we find a jewel in the stone, increment count
        if (jewels[stones[j]] != null) {
            jewels[stones[j]] += 1;
        }
    }

    return Object.keys(jewels).reduce((sum, key) => sum + parseInt(jewels[key]),0);
}


function numberOfJewelsInStones(J, S) {
    // Create new Set
    const jewels = new Set(J)

    // Split the Stone characters first
    // Then iterate over it and check if there are jewels
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
}

console.log(numberOfJewelsInStones(J,S));
console.log(numberOfJewels(T,V));