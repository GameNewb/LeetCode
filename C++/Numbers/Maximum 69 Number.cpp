// 1323 Maximum 69 Number
/*Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 
Example 1:

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666. 
The maximum number is 9969.

Constraints:

1 <= num <= 10^4
num's digits are 6 or 9.
*/

#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int maximum69Number (int num) {
    // Constraints of 10^4
    if (num == 9 || num == 99 || num == 999 || num == 9999) {
        return num;
    } else {
        string number = to_string(num); 
        const int numLength = number.size();
        int* numberArray = new int[numLength];

        int maxNumber = 0;
        for (int i = 0; i < numLength; i++){
            string tempNumber = number;

            // Iterate and replace each character
            if (number[i] == '6') {
                tempNumber[i] = '9';
            } else if (number[i] == '9') {
                tempNumber[i] = '6';
            }

            if (stoi(tempNumber) > maxNumber) {
                maxNumber = stoi(tempNumber);
            }
        }
        return maxNumber;
    }

}

// DOESNT WORK FOR 6669 - this will return 9669 which is not the highest
int maximum69NumberReplace6 (int num) {
    string s = to_string(num);
    for(int i = 0; i < s.size(); i++){
        if(s[i] == '6'){
            s[i] = '9';
            return stoi(s);
        }
    }
    return num;
}

int maximum69NumberFind (int num) {
	string s = to_string(num);
	int pos = s.find('6');
	if (pos != -1 ) {
		s[pos] = '9';
		return stoi(s);
	}
	return num;
}

int main() {
    int input = 9669;
    int input2 = 9996;
    int input3 = 9999;
    int input4 = 99;
    int input5 = 9;
    int input6 = 999;
    int input6 = 669;

    cout << maximum69Number(input) << endl;
    cout << maximum69Number(input2) << endl;
    cout << maximum69Number(input3) << endl;
    cout << maximum69NumberReplace6(input4) << endl;
    cout << maximum69NumberReplace6(input5) << endl;
    cout << maximum69NumberReplace6(input6) << endl;
}