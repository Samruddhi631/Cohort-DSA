// String Methods

// let s="sheriyans"
// 1. length - returns length of String
// console.log(s.length);

// 2. slice(start,end); - extract Substring
// console.log(s.slice(3));
// console.log(s.slice(-4,-1));
// console.log(s.slice(3,8));

// 3. substring(start,end); - same as slicing without negative indexing.
// console.log(s.substring(3));
// console.log(s.substring(3,8));

// 4. toLowerCase() -converts to lowercase
// console.log(s.toLowerCase());

// 5.toUpperCase() -converts to uppercase
// console.log(s.toUpperCase());

// 6. concate() - concatenates string
// console.log(s.concat(" is"," located"," in"," bhopal"));

// 7.indexOf(substring) - Returns first index of substring 
// console.log(s.indexOf("ian"))
// 8. lastIndexOf(substring) - Returns last index of substring 
// console.log(s.lastIndexOf('ian'))
// 9. includes(substring) - Checks if substring exists 
// console.log(s.includes("ian"))
// 10. startsWith(substring) - Checks if string starts with substring 
// console.log(s.startsWith("ian"))
// 11. endsWith(substring) - Checks if string ends with substring 
// console.log(s.endsWith("ian"))
// 12. replace(old, new) - Replaces first occurrence of substring 
// console.log(s.replace("ian","ians"))
// 13. replaceAll(old, new) - Replaces all occurrences 
// console.log(s.replaceAll('s'.,'d'))
// 14. split(separator) - Splits string into an array 
// console.log()
// 15. charAt(index) - Returns character at index 
// console.log()
// 16. charCodeAt(index) - Returns Unicode value of character 
// console.log()
// 17. trim() - Removes spaces from both sides
// s="    Sheriyans   "
// console.log(s.trim())

// reverse a string

// let s="sheriyans"
// let ans=""
//     for(let i=s.length-1;i>=0;i--){
//         ans=ans+s.charAt(i)
//     }
// console.log(ans)

// check if the string is palindrome

// let str="malayalam"
// let i=0;
// let j=str.length-1;
// let isPalindrome=true
// while(i<j){
//     if(str[i]!=str[j]){
//         isPalindrome=false
//         break
//     }
//     i++
//     j--
// }
// if (isPalindrome) console.log(" The string is palindrome")
//     else console.log(" The string is not palindrome")

// Toogle case of the string
// let str="AAbcDsFRWE123"
// let ans=""
//     for (var i = 0; i < str.length; i++) {
//         let ch=str.charCodeAt(i)
//         if( ch>=65 && ch<=90){
//             ans=ans+String.fromCharCode(ch+32)
//         }
//         else if(ch>=97 && ch<=122){
//             ans=ans+String.fromCharCode(ch-32)
//         }
//         else{
//             ans=ans+String.fromCharCode(ch)
//         }
//     }
//     console.log(ans)

// capitalize first and last charcter of word in a string

// let str="hello bhai kya hal chal"
// let arr=str.split(" ")
// let ans=""
// for(let i=0;i<=arr.length-1;i++){
//     let word =arr[i];
//     if(word.length<=2) {
//         ans=ans+word.toUpperCase()+" ";
//     }
//     else{
//         ans=ans+word.charAt(0).toUpperCase()+
//         word.substring(1,word.length-1)+
//         word.charAt(word.length-1).toUpperCase()+" ";
//     }
// }
// console.log(ans)

// print the frequency of each character in a string

// let s="aabba a87645A bBBcdefg"
// let freqArr=new Array(123).fill(0);
// for(let i=0;i<=s.length-1;i++){
//     let asci=s.charCodeAt(i)
//     freqArr[asci]=freqArr[asci]+1;
// }
// for(let i=0;i<=freqArr.length-1;i++){
//     if(freqArr[i]>0){
//         console.log(String.fromCharCode(i)+"->"+freqArr[i])
//     }
// }

// check if two strings are anagram or not

// let str1="state";
// let str2="taste";
// let freqArr=new Array(123).fill(0);

// if(str1.length !=str2.length){
//     console.log("The two strings are not an Anagram");
// }
// else{
//     let isAnagram=true;
//     for (let i=0;i<=str1.length-1;i++){
//     let asci=str1.charCodeAt(i);
//     freqArr[asci]=freqArr[asci]+1;
// }
// for (let i=0;i<=str2.length-1;i++){
//     let asci=str2.charCodeAt(i);
//     freqArr[asci]=freqArr[asci]-1;
// }
// for(let i=0;i<=freqArr.length-1;i++){
//     if (freqArr[i]!=0){
//         isAnagram=false;
//         break;
//     }
// }
// if(isAnagram) console.log("The two strings are Anagram");
//     else console.log("The two strings are not Anagram");
// }