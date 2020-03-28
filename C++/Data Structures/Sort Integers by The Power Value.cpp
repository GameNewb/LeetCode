// 1387. Sort Integers by The Power Value
/*
The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

if x is even then x = x / 2
if x is odd then x = 3 * x + 1
For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

Return the k-th integer in the range [lo, hi] sorted by the power value.

Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in 32 bit signed integer.

Input: lo = 12, hi = 15, k = 2
Output: 13
Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
The power of 13 is 9
The power of 14 is 17
The power of 15 is 17
The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.

1 <= lo <= hi <= 1000
1 <= k <= hi - lo + 1
*/
#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
#include <map>
#include <numeric>
using namespace std;

/*
Original solution... wasn't too far off, just couldn't figure out how to sort it
// Keep track of index, steps, and the kth integer in the range based on the K provided
int getKth(int lo, int hi, int k) {
    map<int, pair<int,int>> hashMap;
    int kthPower = 1;

    // Get the range of steps
    for (int i = lo; i <= hi; i++) {
        // Per index, store it's value and then the steps needed to make it 1
        hashMap[kthPower].first = i; // The actual power
        hashMap[kthPower].second = getSteps(i); // Stores steps as second

        kthPower++;
    }

    // Sort the created hashmap by its steps (hashMap[kthPower].second)
    // Couldn't really figure out how to sort the second value...
    // Maybe vector? not sure how to properly use it

    return hashMap[k].first;
}*/

// Solution 1
// Use vector and only compute what is passed from k
vector<pair<int,int>> vectorPair;
int getSteps(int num) {
    if (num == 1) return 0;

    int steps;
    
    while (num != 1) {
        if (num % 2 == 0) {
            num = (num /2);
        } else {
            num = (3 * num + 1);
        }
        steps++;
    }

    return steps;
}

int getKthElement(int lo, int hi, int k) {
    // Set the pairs for step and value
    for (int i = lo; i <= hi; i++) {
        vectorPair.push_back(make_pair(getSteps(i), i));
    }

    sort(vectorPair.begin(), vectorPair.end());
    return vectorPair[k-1].second;
}
//////////////////////////////////////////////////////////////////////////////////

/*
// Solution 2
// With this solution, we precompute the steps needed for all n that's <= 1000 (Constraint)
static vector<int> comp;
int precompute(int num) {
    if (num < 2) {
        return 0;
    } 
    else {
        // Recursively return steps
        return 1 + (num % 2 ? precompute(num * 3 + 1) : precompute(num / 2)); 
    }
}


int getKthPrecompute(int lo, int hi, int k) {
    // Start precompute
    if (comp.empty()) {
        for (int i = 0; i <= 1000; ++i) {
            // Push all the steps in the vector for each possible i
            comp.push_back(precompute(i));
        }
    }

    vector<int> sorted(hi - lo + 1);
    iota(begin(sorted), end(sorted), lo);
    nth_element(begin(sorted), begin(sorted) + k - 1, end(sorted), [](int i, int j) {
        return comp[i] == comp[j] ? i < j : comp[i] < comp[j]; });
    return sorted[k - 1];
}*/
/////////////////////////////////////////////////

int main() {
    int lo = 12, hi = 15, k = 2;
    int lo2 = 1, hi2 = 1, k2 = 1;
    int lo3 = 7, hi3 = 11, k3 = 4;
    int lo4 = 1, hi4 = 1000, k4 = 777;

    cout << getKthElement(lo, hi, k) << endl;
    
    cout << getKthElement(lo2, hi2, k2) << endl;
    
    cout << getKthElement(lo3, hi3, k3) << endl;

    cout << getKthElement(lo4, hi4, k4) << endl;
}