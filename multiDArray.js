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

// let arr=[
//     [1,2,3],
//     [5,6,7],
//     [9,10,11]
// ]
// for(let i=0;i<=arr.length-1;i++){
//     for(let j=i;j<=arr.length-1;j++){
//         let temp=arr[i][j]
//         arr[i][j]=arr[j][i]
//         arr[j][i]=temp
//     }
// }
// for(let i=0;i<=arr.length-1;i++){
//     let k=0;
//     let j=arr[0].length-1;
//     while(k<j){
//         let temp=arr[i][k];
//         arr[i][k]=arr[i][j];
//         arr[i][j]=temp
//         k++
//         j--
//     }
// }
// console.log(arr)

// Spiral Matrix

// let arr=[
//     [1,2,3],
//     [5,6,7],
//     [9,10,11]
// ]

// let total=arr.length*arr[0].length
// let ans=[];
// let minc=0
// let maxc=arr[0].length-1
// let minr=0
// let maxr=arr.length-1;
// while(minr<=maxr&&minc<=maxc){
//     for(let i=minc;i<=maxc;i++){
//         ans.push(arr[minr][i])
//     }
//     minr++;
//     for (let i=minr;i<=maxr;i++){
//         ans.push(arr[i][maxc])
//     }
//     maxc--;
//     for(let i=maxc;i>=minc;i--){
//         ans.push(arr[maxr][i])
//     }
//     maxr--;
//     for(let i=maxr;i>=minr;i--){
//         ans.push(arr[i][minc])
//     }
//     minc++;
// }
// console.log(ans)

// Flipping  image

let arr=[
    [0,1,0],
    [1,1,0],
    [0,1,1]
]
for (let i=0;i<=arr.length-1;i++){
    let k=0;
    let j=arr[0].length-1;
    while(k<j){
        let temp=arr[i][k]
        arr[i][k]=arr[i][j]
        arr[i][j]=temp
        k++
        j--
    }
    for(let j=0;j<arr[0].length;j++){
        if (arr[i][j] === 0) {
            arr[i][j] = 1;
        } 
        else {
            arr[i][j] = 0;
        }
    }
}
console.log(arr)