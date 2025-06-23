// Right side Right angle triangle

// let n=5
//   for(let i=1;i<=n;i++){
//         for(let j=1;j<=n-i;j++){
//             process.stdout.write("  ")
//         }
//         for(let j=1;j<=i;j++){
//             process.stdout.write(" *")
//         }

//         console.log();
//     }

// x pattern 

//   let n=4;
//   for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             if(i===j||i+j===n+1){
//                 process.stdout.write("* ")
//             }else  process.stdout.write("  ")
//     }
//     console.log()
//     }

// v pattern 

// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i===j||i+j===n*2){
//             process.stdout.write("*")
//         }else process.stdout.write(" ")
//     }
//     console.log()
// }

// inverted v pattern

// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i+j===n+1||j===n-1+i){
//             process.stdout.write("*")
//         }else process.stdout.write(" ")
//     }
//     console.log();
// }

// Butterfly 

// let n=4;
// for (let i = 1; i <= n; i++) {
//         // Left wing
//         for (let j = 1; j <= i; j++) {
//             if (j === 1 || j === i) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }

//         // Middle spaces
//         for (let j = 1; j <= 2 * (n - i); j++) {
//             process.stdout.write(" ");
//         }

//         // Right wing
//         for (let j = 1; j <= i; j++) {
//             if (j === 1 || j === i) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }

//         console.log();
//     }

//     // Bottom Half
//     for (let i = n; i >= 1; i--) {
//         // Left wing
//         for (let j = 1; j <= i; j++) {
//             if (j === 1 || j === i) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }

//         // Middle spaces
//         for (let j = 1; j <= 2 * (n - i); j++) {
//             process.stdout.write(" ");
//         }

//         // Right wing
//         for (let j = 1; j <= i; j++) {
//             if (j === 1 || j === i) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }

//        console.log();
//     }