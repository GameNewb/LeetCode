// 1108 Defanging an IP Address
/*
* Given a valid (IPv4) IP address, return a defanged version of that IP address.
  A defanged IP address replaces every period "." with "[.]".

  Example 1:

  Input: address = "1.1.1.1"
  Output: "1[.]1[.]1[.]1"
  Example 2:

  Input: address = "255.100.50.0"
  Output: "255[.]100[.]50[.]0"
*
*/


#include <iostream>
#include <string>
#include <regex>
using namespace std;

string defangIPaddrLoop(string address) {
    // Create new output string
    string defangedAddress("");
    for(char c : address) {
        if(c == '.') {
            defangedAddress+= "[.]";    
        } else {
            defangedAddress+= c;
        }
    }

    return defangedAddress;
}

string defangIPaddrRegex(string address) {
    return regex_replace(address, regex("[.]"), "[.]");
}

int main() {
    string address = "1.1.1.1";
    string address2 = "255.100.50.0";

    cout << defangIPaddrLoop(address2) << endl;
    cout << defangIPaddrRegex(address) << endl;
}