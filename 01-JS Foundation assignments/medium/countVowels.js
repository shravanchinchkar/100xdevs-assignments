/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here

  // Following below is code of my own logic
  // let vowelCount = 0;
  // let mainString = str.split("");
  // for (let i = 0; i < mainString.length; i++) {
  //   if (
  //     mainString[i] === "a" ||
  //     mainString[i] === "e" ||
  //     mainString[i] === "i" ||
  //     mainString[i] === "o" ||
  //     mainString[i] === "u" ||
  //     mainString[i] === "A" ||
  //     mainString[i] === "E" ||
  //     mainString[i] === "I" ||
  //     mainString[i] === "O" ||
  //     mainString[i] === "U"
  //   ) {
  //     vowelCount++;
  //   }
  // }
  // console.log("Total vowles present in " + str + " are ", vowelCount);


  //Following below code is of chatgpt logic, which I understood
  let vowlesCount=str.match(/[aeiouAEIOU]/g);
  if(vowlesCount!==null){
    console.log("Total count of vowles present in ",str," is",vowlesCount.length)
    return vowlesCount.length;
  }
  else{
    console.log("No vowles present")
    return 0;
  }
}

module.exports = countVowels;
