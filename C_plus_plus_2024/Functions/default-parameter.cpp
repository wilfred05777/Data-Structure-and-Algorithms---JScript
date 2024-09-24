
// https://www.w3schools.com/cpp/cpp_function_default.asp

#include<iostream>
#include<string>
using namespace std;

void myFunction(string country = "Sweden"){
    cout << country << "\n";

}


int main(){
    myFunction("Norway");
    myFunction("Peru");
    myFunction(); // default string example
    myFunction("Ukraine");

    return 0;
}