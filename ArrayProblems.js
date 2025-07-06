// print s
//     else{
//         oddSumum of even  and odd number seperately

// let evenSum=0
// let oddSum=0
// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         evenSum +=i
//     } +=i
//     }
// }
// console.log(evenSum,oddSum)

// print all factors of a number

// let num=Number(prompt("Enter a number"));
// for(let i=0;i<=num/2;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }
// console.log(num)

//  check if the number is prime

// let n=Number(prompt("Enter a number"));
// let isPrime=true;
// for(let i=2;i<=n/2;i++){
//     if(n%2==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log('number is Prime')
// }
// else {
//     console.log('number is not Prime')
// }

// more optimized way
// let n=Number(prompt("Enter a number"));
// if (isPrime(n)) console.log("number is prime");
// else console.log("Number is not prime");

// function isPrime(n){
//     if (n<=1) return false;
//     if(n===2) return true;
//     if(n%2==0) return false;
//     for(let i=3;i<=Math.sqrt(n);i++){
//         if(n%i==0) return false
//     }
//     return true
// }

// check if the number is anthomorphic
// let n=Number(prompt('Enter the number'));
// let copy=n;
// let square=n*n;
// let count=0
// while(n!=0){
//     count++;
//     n=Math.floor(n/10)
// }
// if(square%Math.pow(10,count)===copy){
//     console.log("is Anthomorphic")
// }
// else{
//     console.log('not anthomorphic')
// }

// guess the number game

// let com=Math.floor(Math.random()*100);
//  let input;
// do{
//    input=Number(prompt("Guess the number between 1 to 100"))
//    if(isNaN(input)||input<0||input>100){
//     console.log("Please provide valid input")
//     continue;
//    }
//    if (input>com) console.log("Number too high try again!");
//    else if(input<com) console.log("Number too low try agaim!");
//    else console.log("Congratulation !corect guess ")
// }
// while(com!==input)

// Indian curency note breakdown

// function noteCount(amount){
// let  denomination=[2000,500,200,100,50,20,10,5,2,1]
// let result=[]
//    for(let i=0;i<=denomination.length-1;i++){
//       const note=denomination[i];
//       const count=Math.floor(amount/note)
//       result.push(`${note}X${count}`)
//       amount=amount%note
// }
//     return result.join('\n')
// }
// console.log(noteCount(4327));

// let arr=[10,20,30,40,50];
// arr.push(100);
// arr.unshift(100);
// arr.pop();
// arr.shift();
// console.log(arr);
 
// minimum number in 

// let arr=[10,20,48,69,70,44,23];
// let min=arr[0]
// for (let i=1;i<=arr.length-1;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log(min)

// second minimum number

// let arr=[45,60,48,90,32,15,16]
// let min=Math.min(arr[0],arr[1])
// let sMin=Math.max(arr[0],arr[1])
// for(let i=2;i<=arr.length-1;i++){
//     if(arr[i]<min){
//         sMin=min;
//         min=arr[i];
//     }else if(arr[i]>min&&arr[i]<sMin&&arr[i]!=min){
//         sMin=arr[i];
//     }
// }
// console.log(sMin)

// reverse the array

// let arr=[1,2,3,4,5,6]
// let cp=new Array(arr.length)
// let i=0
// for(let j=arr.length-1;j>=0;j--){
//     cp[i]=arr[j]
//     i++
// }
// console.log(cp)

// scond approach to reverse the 

// let arr=[1,2,3,4,5,6]
// let i=0;
// let j=arr.length-1
// console.log(arr)
// while(i<j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++
//     j--
// }
// console.log(arr)

// all zeros to left and all ones's to right

// let arr=[0,1,1,0,0,1,0]
// let i=0
// let j=0
// while(i<arr.length){
//     if(arr[i]==0){
//         let temp= arr[j]
//         arr[j]=arr[i]
//         arr[i]=temp
//         j++
//     }
//     i++
// }
// console.log(arr)

// shif array element to left by 1

// let arr=[1,2,3,4,5,6]
// let cp=arr[0]
// for (let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=cp
// console.log(arr)

// shif array element to right by 1

// let arr=[1,2,3,4,5,6]
// let cp=arr[arr.length-1]
// for(let i=arr.length-1;i>=1;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=cp
// console.log(arr)

// shift array elemet to left by 2

// let arr=[1,2,3,4,5,6]
// let k=7
// k=k%arr.length
// for(let j=1;j<=k;j++)
//     {let cp=arr[0]
// for (let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=cp
// }
// console.log(arr)

// second approach to shift array element to left by 2 with On

// let arr=[1,2,3,4,5,6];
// let temp=new Array(arr.length);
// let k=2
// for(let i=0;i<=arr.length-1;i++){
//     temp[i]=arr[(i+k)%arr.length];
// }
// console.log(temp)

// third approach to shift array element to left by 2 without extra space
// let prompt=require("prompt-sync")()
// let arr=[1,2,3,4,5,6,];
// let k=Number(prompt('Enter number:'))
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1)
// reverse(arr,0,arr.length-1)
// console.log(arr)
// function reverse(arr,i,j){
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++;
//         j--;
//     }
// }
// in array of 0's and 1's move all 0's in an array at the end

    // let arr=[0,1,1,0,1,1,0]
    // let cp=[]
    // for(let i=0;i<=arr.length;i++){
    //     if(arr[i]==1){
    //        cp.push(1)
    //     }
    // }
    // for(let i=cp.length;i<arr.length;i++){
    //    cp.push(0)
    // }
    // console.log(cp);

// move all 0's in an array without using extra space
    // let arr=[0,1,0,1,1,0]
    // let i=0;
    // let j=0;
    // while(j<=arr.length-1){
    //     if(arr[j]==1){
    //         let temp=arr[j];
    //         arr[j]=arr[i];
    //         arr[i]=temp;
    //         i++
    //     }
    //     j++
    // }
    // console.log (arr)

    
// linear search

// let arr=[24,56,78,9,10]
// let target=78;
// let index=-1;
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]==target){
//             index=i
//             break;
//         }
//     }
//     if (index==-1) console.log('Element not found')
//     else console.log("element found at index:"+index)

// Binary search

// let arr=[10,45,69,84,100,150,200]
// let target=150;
// let found=binarySearch(arr,target)
// if(found==-1) console.log("Element not found")
// else console.log("Element found at index:",found)
// function binarySearch(arr,target){
//     let s=0;
//     let e= arr.length-1;
//     while(s<=e){
//         let mid=s+(e-s)/2;
//         if(arr[mid]==target) {
//             return mid;
//             break;
//         }
//         else if(arr[mid]>target) {
//             e=mid-1;
//         }
//         else {
//             s=mid+1;
//         }
//     }
//     return -1
// }

// merge two sorted arrays

// let arr1=[2,4,5]
// let arr2=[1,4,7]
// let ans=new Array(arr1.length+arr2.length);
// let i=0,j=0,k=0;
// while(i<arr1.length&&j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         ans[k++]=arr1[i++]
//     }
//     else{
//         ans[k++]=arr2[j++]
//     }
// }
// while(i<arr1.length){
//     ans[k++]=arr1[i++]
// }
// while(j<arr2.length){
//     ans[k++]=arr2[j++]
// }
// console.log(ans)

// merging to sorted arrays without using another array

// let arr1=[1,2,3,0,0,0]
// let arr2=[2,5,6]
// let n=3,m=3
// let i=n-1,j=m-1,k=arr1.length-1
// while(i>=0 && j>=0){
//     if(arr1[i]>arr2[j]){
//         arr1[k--]=arr1[i--]
//     }
//     else{
//         arr1[k--]=arr2[j--]
//     }
// }
// while(j>=0){
// arr1[k--]=arr2[j--]
// }
// console.log(arr1)

// remove duplicate elements from a sorted array

// let arr=[0,0,1,1,1,2,2,3,3,4]
// let j=1;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i+1]!=arr[i]){
//         arr[j]=arr[i+1];
//         j++;
//     }
// }
// console.log(j)

// Duplicate zeroes:[1,0,2,3,0,4,5]->[1,0,0,2,3,0,0]
let arr=[1,0,2,3,0,4,5];
let zeros=0;
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]==0){
        zeros++
    }
}
i=arr.length-1;
j=(arr.length-1)+zeros;
while(i>=j){
    if(j<arr.length){
        arr[j]=arr[i]
    }
    j--
    if(arr[i]==0){
        if(j<arr.length){
            arr[j]=arr[i]
        }
        j--
    }
    i--
}
console.log(arr)