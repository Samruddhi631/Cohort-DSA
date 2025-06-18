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

//  let n=5
//   for(let i=1;i<=n;i++){
//         for(let j=1;j<=n-i;j++){
//             process.stdout.write("  ")
//         }
//         for(let j=1;j<=i;j++){
//             process.stdout.write(" *")
//         }

//         console.log();
//     }
  
//   let n=4;
//   for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             if(i===j||i+j===n+1){
//                 process.stdout.write("* ")
//             }else  process.stdout.write("  ")
//     }
//     console.log()
//     }
    
// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i===j||i+j===n*2){
//             process.stdout.write("*")
//         }else process.stdout.write(" ")
//     }
//     console.log()
// }

// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i+j===n+1||j===n-1+i){
//             process.stdout.write("*")
//         }else process.stdout.write(" ")
//     }
//     console.log();
// }

// let n=5;
//   for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             if(i===j||i+j===n+1||j==1||j==5){
//                 process.stdout.write("*")
//             }else  process.stdout.write("  ")
//     }
//     console.log()
//     }

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

// let arr=[0,1,1,0,0,1,0]
// let i=0
// let j=arr.length-1
// while(i<=arr.length-1){
//     if(arr[i]==0){
//         let temp= arr[j]
//         arr[j]=arr[i]
//         arr[i]=temp
//         j++
//     }
//     i++
// }
// console.log(arr)

let arr=[1,2,3,4,5,6]
let cp=arr[0]
for (let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1]=cp
console.log(arr)