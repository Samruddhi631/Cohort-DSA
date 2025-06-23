// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){ 
//         process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log();
// }

// sum of diagonal

// let arr=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]
// let leftSum=0;
// let rightSum=0;
// for(let i=0;i<=arr.length-1;i++){
//     for(let j=0;j<=arr[i].length;j++){
//         if(i===j) rightSum+=arr[i][j];
//         else if(i+j===arr.length-1) leftSum += arr[i][j]
//     }
// }
// console.log("sum of Right diagnal is:"+ rightSum);
// console.log(" sum of Left diagnal is:"+ leftSum);

// create multi dimensinal array of zers in one line

// let arr=Array.from({length:3},()=> Array(4).fill(0));
// console.log(arr);

// transpose matrix

// let matrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]
//  let ans= Array.from({length:matrix[0].length},()=> Array(matrix.length))
//     for (let i=0;i<ans.length;i++){
//         for(let j=0;j<ans[i].length;j++){
//             ans[i][j]=matrix[j][i]
//         }
//     }
//     console.log(ans);

// Image Rotation

let arr=[
    [1,2,3],
    [5,6,7],
    [9,10,11]
]
for(let i=0;i<=arr.length-1;i++){
    for(let j=i;j<=arr.length-1;j++){
        let temp=arr[i][j]
        arr[i][j]=arr[j][i]
        arr[j][i]=temp
    }
}
for(let i=0;i<=arr.length-1;i++){
    let k=0;
    let j=arr[0].length-1;
    while(k<j){
        let temp=arr[i][k];
        arr[i][k]=arr[i][j];
        arr[i][j]=temp
        k++
        j--
    }
}
console.log(arr)