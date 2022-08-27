function groupThePeople(groupSizes) {
    var hashMap = {};
    var result = [];

    // Create HashMap
    for (index in groupSizes) {
        
        // Take the supposed size based on the input
        // E.g. [2,1,3,3,3,2] 
        // groupSize[0] = 2, this means that it fits in an array size of 2
        // groupSize[1] = 1, this means that it fits in an array size of 1
        // groupSize[2] = 3, this means that it fits in an array size of 3
        var size = groupSizes[index];

        // Add it to hashmap
        if(!hashMap[size]) {
            // Using the size as the key and index as the value
            hashMap[size] = [index];
        } else {
            hashMap[size].push(index);
        }

        // If the current length of the group is equal to the max group size, 
        // then we push it to the result and create a new partition
        if (hashMap[size].length === size) {
            result.push(hashMap[size]);
            hashMap[size] = [];
        }
    }

    return result.sort(function(a, b) { return a.length - b.length ; });
}

var people = [2,1,3,3,3,2];
var people2 = [3,3,3,3,3,1,3];
console.log(groupThePeople(people));
//console.log(groupThePeople(people2));
