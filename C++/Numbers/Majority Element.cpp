// 169 Majority Element
/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3
*/

#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <string>
using namespace std;

int majorityElementMap(vector<int>& nums) {
    unordered_map<int, int> numberMap;

    for (int num: nums) {
        // First element to appear that's > than num.size/2 is the majority element
        if(++numberMap[num] > (nums.size()/2)) {
            return num;
        }
    }

    return 0;
}

int majorityElementSort(vector<int>& nums) {
    // Start from beginning of array, grab the nth element from n.size()/2
    nth_element(nums.begin(), nums.begin() + nums.size() / 2, nums.end());
    return nums[nums.size() / 2];
}

int main() {
    vector<int> input = {3,2,3};
    vector<int> input2 = {2,2,1,1,1,2,2};

    std::cout << majorityElementMap(input) << std::endl;
    std::cout << majorityElementSort(input2) << std::endl;
}
