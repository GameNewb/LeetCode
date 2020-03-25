// 387 First Unique Character in a String
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
*/

#include <iostream>
#include <string>
#include <cstring>
#include <unordered_map>
#include <algorithm>
using namespace std;

int firstUniqChar(string s) {
    unordered_map<char,int> strmap;
    int length = s.size();

    if (length != 0) {
        // Store in a hashmap
        for (auto i: s) {
            strmap[i]++;
        }

        // Best case O(1), worst case O(n)
        for (int i = 0; i < length; i++) {
            if(strmap[s[i]] == 1) {
                return i;
            }
        }
    }
        
    return -1;
}

int firstUniqCharCleaner(string s) {
    // Store the Key (Character) and both Index and Count
    unordered_map<char, pair<int, int>> strmap;
    int index = s.size();

    for (int i = 0; i < s.size(); i++) {
        // Store the count first, then its index
        strmap[s[i]].first++;
        strmap[s[i]].second = i;
    }

    for (auto &number : strmap) {
        // Check for the lowest index and set it
        if (number.second.first == 1) {
            index = min(index, number.second.second);
            cout << "Index is: " << index << endl;

        }
    }

    return index == s.size() ? -1 : index;
}


int main() {
    string s = "leetcode";
    string s2 = "loveleetcode";

    cout << firstUniqChar(s) << endl;
    cout << firstUniqChar(s2) << endl;
    cout << firstUniqCharCleaner(s2) << endl;
}