// 1295 Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits
/*
*Input: nums = [12,345,2,6,7896]
 Output: 2
 Explanation: 
 12 contains 2 digits (even number of digits). 
 345 contains 3 digits (odd number of digits). 
 2 contains 1 digit (odd number of digits). 
 6 contains 1 digit (odd number of digits). 
 7896 contains 4 digits (even number of digits). 
 Therefore only 12 and 7896 contain an even number of digits.

 Constraints:

 1 <= nums.length <= 500
 1 <= nums[i] <= 10^5
*/

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int findEvenNumbers(vector<int>& numbers) {
    int count = 0;

    for(int i = 0; i < numbers.size(); i++) {
        // Change number to string
        string currentNumber = to_string(numbers[i]);

        // If the length of each number is even, add to the counter
        if (currentNumber.size() % 2 == 0) {
            count++;
        }
    }

    return count;
}

int main() {
    vector<int> input = {12,345,2,6,7896};
    vector<int> input2 = {555,901,482,1771};

    std::cout << findEvenNumbers(input) << std::endl;
    std::cout << findEvenNumbers(input2) << std::endl;
}
