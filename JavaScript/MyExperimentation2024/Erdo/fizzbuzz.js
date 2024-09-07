let numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11,12];

for (let o = 0; o < numbers.length; o++) {
   if (o % 3 == 0 && o % 5 == 0) {
      console.log("fizzbuzz");
   } else if (o % 3 == 0) {
      console.log("fizz");
   } else if (o % 5 == 0) {
      console.log("buzz");
   } else console.log(o);
}
