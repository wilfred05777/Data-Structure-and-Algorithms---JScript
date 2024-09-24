#include<stdio.h>
#include<iostream>
using namespace std;


void myFunction(string fname){
    cout << fname << " Refsnes\n";
}

int main(){
    myFunction("Liam");
    myFunction("Rowena");
    myFunction("Amari Zera");

    return 0;
}