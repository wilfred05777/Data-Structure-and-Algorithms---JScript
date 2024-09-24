// https://www.w3schools.com/cpp/trycpp.asp?filename=demo_functions_param_multi

#include<iostream>
#include<string>
using namespace std;

//              multiple parameter example
void myFunction(string fname, int age){
    cout << fname << " Bancairen." << age << " years old. \n";
}


int main(){

    myFunction("Wilfred Erdo", 38);
    myFunction("Rowena", 31);
    myFunction("Julian Manuel", 7);
    myFunction("Amari Zera", 10);

    return 0;
}