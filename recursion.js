// print hello using recursion

// fun(n)
//     function fun(n){
//         if(n==0) return;
//         console.log("Hello")
//         fun(n-1)
//     }

// print natural number from n to 1
// let n=5
// fun (n)
//     function fun(n){
//         if (n==0) return
//         process.stdout.write(n+" ")
//         fun(n-1)
//     }

// print natural number from 1 to n

// fun(5,1)
// function fun (n,current){
//         if (current>n){
//             return;
//         }
//         process.stdout.write(current+" ")
//         fun(n,current+1)
//     }

    // fun (5)
    // function fun(n){
    //     if (n==0) return
    //     fun(n-1)
    //     process.stdout.write(n+" ")
    // }

// sum upto n 

// console.log(fun(5))
// function fun(n){
//     if(n==1) return 1;
//     return n+fun(n-1)
// }

// fctorial of n

// console.log(fun(5))
// function fun(n){
//     if(n==1||n==0) return 1;
//     return n*fun(n-1)
// }

// fibonnaci series in iterative way 

// for(let i=1;i<=n-2;i++){
//     if (n==0||n==1) break;
//     let third=first+second;
//     process.stdout.write(third+" ");
//     first=second;
//     second=third
// }

// fibonacci series using recursion

    // let n=10
    // if (n <= 0) {
    //     console.log("Invalid input")
    //     return;
    // }
    // let first = 0, second = 1;
    // if (n === 1) {
    //     process.stdout.write(first + " ");
    //     return;
    // }
    // process.stdout.write(first + " " + second + " ");
    // function fibonacci(count, a, b) {
    //     if (count <= 2) return; // already printed 2 numbers
    //     let next = a + b;
    //     process.stdout.write(next + " ");
    //     fibonacci(count - 1, b, next);
    // }
    // fibonacci(n, first, second);

// sum of fibnacci series

// function fibo(n){
//     if(n==0) return 0;
//     if (n==1) return 1;
//     return fibo(n-1)+fibo(n-2)
// }
// let n=10
// console.log(fibo(n))

// sum of digits of number

// function sumOfDigits(n){
//     if(n<10) return n
//     // let rem=n%10
//     return (n%10)+sumOfDigits(Math.floor(n/10))
// }
// console.log(sumOfDigits(34298))

// reverse the number

// function reverseDigits(n) {

//     let numStr = String(n);
//   let sign = '';
//   if (numStr.startsWith('-')) {
//     sign = '-';
//     numStr = numStr.substring(1); // Remove the '-' for reversal
//   }
//    function revNum(n,rev){
//     if (n===0) return rev
//     return revNum(Math.floor(n/10),rev*10+(n%10))
// }
//   return sign+revNum(numStr,0)
// }
// console.log(reverseDigits(-134))

// find the gcd

// 20=1,2,4,5,10,20
// 32=1,2,4,8,16,32
// let fact
// let a=20,b=32;
// for(let i=(Math.min(a,b));i>=1;i--){
//     if (a%i==0&&b%i==0){
//        console.log(i)
//    break;
//     }
// }


// function gcd(a,b){
//     if(a===b) return a;
//     if(a>b) return gcd(a-b,b);
//     return gcd(a,b-a)
// }

// let a=20,b=32;
// console.log(gcd(a,b))

// function gcd(a,b){
//     if(b==0) return a
//     return gcd(b,a%b);
// }

// find the power of n to p 

// function power(n, p) {
//     if (p === 0) return 1;               
//     if (p < 0) return 1 / power(n, -p);  

//     return n * power(n, p - 1);        
// }
// console.log(power(2.1, 3).toFixed(5));       
// console.log(power(-2.0, 5).toFixed(5));

// more optimized way 

//  function power(n, p) {
//      if (p === 0) return 1;
//     if (p < 0) return 1 / power(n, -p);

//     let half = power(n, Math.floor(p / 2));

//     if (p % 2 === 0) {
//         return half * half;
//     } else {
//         return n * half * half;
//     }
// }

// console.log(power(n,p).toFixed(5))