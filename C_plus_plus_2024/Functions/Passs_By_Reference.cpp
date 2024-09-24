// https://www.w3schools.com/cpp/cpp_function_reference.asp

// https://www.w3schools.com/cpp/trycpp.asp?filename=demo_functions_ref

#include<iostream>
using namespace std;

void swapNum(int &x, int &y){
    int z = x;
    x = y;
    y = z;
}

int main(){

    int firstNumber = 10;
    int secondNumber = 20;

    cout << "Before swap: " << "\n";
    cout << firstNumber << secondNumber << "\n";

    swapNums(firstNumber, secondNumber);

    cout << "After swap: " << "\n";
    cout << firstNumber << secondNumber << "\n";

    return 0;
}

// output 
// Before swap:
// 1020
// After swap:
// 2010