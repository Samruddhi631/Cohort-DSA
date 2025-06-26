// check id the given sentence is a panagram

// let sentence="thequickbrownfoxjumpsoverthelazydog"
// let set=new Set();
// for(let i=0;i<=sentence.length-1;i++){
//     let ch=sentence.charAt(i);
//     set.add(ch)
// }
// if (set.size==26) console.log("The sentence is a Panagram")
//     else console.log("The set is not a Panagram")

// you are given two strings named jewels and stones you have to find out how many stones are jewels

// let jewel="aA"
// let stones="aaAbbA"
// let set=new Set();
// for (let i=0;i<=jewel.length-1;i++){
//     set.add(jewel.charAt(i))
// }
// let count =0
// for (let i=0;i<=stones.length-1;i++){
//     let ch=stones.charAt(i)
//     if(set.has(ch)){
//         count++
//     }
// }
// console.log(count)

// check if number is a Happy number

// let happy=function isHappy(n){
//     let set=new Set();
//     while(true){
//     let sum=0;
//     while(n>0){
//     let rem=n%10;
//     sum=sum+(rem*rem);
//     n=Math.floor(n/10);
// }
// if(sum==1) return true;
// if(set.has(sum)) return false;
// else set.add(sum);
// n=sum;
// }
// }
// if (happy(19)) console.log("yes")
//     else console.log("No")

// count the frequency of a number in array using map

// let arr=[1,2,3,4,2,2,5,3,6,7,7,7,8,1]
// let map=new Map()
// for(let i=0;i<=arr.length-1;i++){
//     if (map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }
//     else{
//         map.set(arr[i],1);
//     }
// }
//  console.log(map)

// count  the frequency of character in a string

// let s="malyalam";
// let map= new Map();
// for(let i=0;i<=s.length-1;i++){
//     let ch=s.charAt(i)
//     if(map.has(ch)){
//         map.set(ch,map.get(ch)+1);
//     }
//     else{
//         map.set(ch,1)
//     }
// }
// console.log(map)

// 2 sum brute force

// let nums=[2,15,5,7];
// let target=9;
// for(let i=0;i<=nums.length-1;i++){
//     for(let j=i+1;j<=nums.length-1;j++){
//         if(nums[i]+nums[j]==target){
//             console.log(i,j)
//         }
//     }
// }

//  two sum using 

// let nums=[2,15,5,7];
// let target=9;
// let map=new Map()
// for(let i=0;i<=nums.length-1;i++){
//     if(map.has(target-nums[i])){
//         console.log(map.get(target-nums[i]),i)
//     }
//     else{
//         map.set(nums[i],i)
//     }
// }

// first letter appear twice

// let s="ssaanbz"
// function istwice(s){
//     let map=new Map();
// for(let i=s.length-1;i>=0;i--){
//     let ch=s.charAt(i);
//     if(map.has(ch)){
//         map.set(ch,map.get(ch)+1);
//         if(map.get(ch)==2) return ch
//     }
//     else{
//         map.set(ch,1)
//     }
// }

// }
// console.log(istwice(s))

// sort the people by height in decending order

let names=["bob","alice","chroma"]
let heights=[165,180,175]
let map=new Map();
    for(let i=0;i<=names.length-1;i++){
        map.set(heights[i],names[i])
    }
    heights.sort((a,b)=>b-a);
    let ans=new Array(names.length);
    for(let i=0;i<=heights.length-1;i++){
        ans[i]=map.get(heights[i])
    }
    console.log(ans)