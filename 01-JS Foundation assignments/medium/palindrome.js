/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
/*
Example of Palindrome is madam which is an orginal string
even when we reverse it we get madam hence "madam" is an palindrome
*/

function isPalindrome(str) {
  // Following code is build using my logic
  // let reverseString=""
  // for(let i=str.length-1;i>=0;i--){
  //   reverseString=reverseString+str[i]
  // }
  // let a=str.toLowerCase();
  // let b=reverseString.toLowerCase();
  // if(a===b){
  //   return true
  // }
  // else{
  //   return false
  // }

  //Following code is build using reference logic
  let originalString=str.toLowerCase();
  originalString=originalString.replace(/[^a-z0-9]/g, ''); //replace():- removes all the punctuations,white spaces or other special character which helps to focus only on string
  let reverseString=originalString.split("").reverse().join("");
  if(originalString===reverseString){
    console.log("original String:-",str)
    console.log("Reverse String:-",reverseString)
    console.log(true)
    return true
  }
  else{
    console.log(false);
    return false
  }
}
isPalindrome("Able, was I ere I saw Elba!")

module.exports = isPalindrome;
