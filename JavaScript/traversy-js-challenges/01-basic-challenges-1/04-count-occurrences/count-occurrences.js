/**
 * This is a program that
 * Identify a certain phrases words of how many times a letter has repeatedly  appeared
 */

// function countOccurrences(str, char) {
//    let count = 0;

//    for (let i = 0; i < str.length; i++) {
//       // console.log([str[i]])
//          if (str[i] === char) {
//          count++;
//       }
//    }

//    // for (let i = 0; i < structuredClone.length; i++) {
//    //    if (str[i] === char) {
//    //       count++;
//    //    }
//    // }

//    return count;
// }


// another method and shorthand style

const countOccurrences = (str, char) => {
   // console.log(str.split(''))
   // console.log(str.split(char)) /// gi split kung unsay unsay naa na lower letter l sa char
   // console.log(str.split(char).length) /// pag abot sa .length apil ang zero 
   // console.log(str.split(char).length - 1) /// minus -1 kay remove ang index 0 para dili ma apil sa pag count
   
   return str.split(char).length - 1;
};

module.exports = countOccurrences;
