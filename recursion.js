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

let n=12;
let first=0,second=1;
process.stdout.write(first+" "+second+" ")
// for(let i=1;i<=n-2;i++){
//     if (n==0||n==1) break;
//     let third=first+second;
//     process.stdout.write(third+" ");
//     first=second;
//     second=third
// }
function fibonnaci(n,first,second){
    if(n==0) return
    let third=first+second
    process.stdout.write(third+" ")
    fibonnaci(n-1,second,third)
}
fibonnaci(n-2,first,second)