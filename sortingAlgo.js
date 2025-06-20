// Bubble sort

// let arr=[2,4,1,5,8,10,3,5,25];
// let n=arr.length;
// for(let i=0;i<=n-1;i++){
//     for(let j=0;j<=n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j+1];
//             arr[j+1]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)

// selection sort

// let arr=[2,4,1,5,8,10,3,5,25];
// let n=arr.length;
// for(let i=0;i<=n-1;i++){
//     let small=i
//     for(let j=i+1;j<=n-1;j++){
//         if(arr[j]<arr[small]){
//             small=j
//         }
//     }
//     if(small!=i){
//         let temp=arr[i]
//         arr[i]=arr[small]
//         arr[small]=temp 
//     }
// }
// console.log(arr)

// Insertin srot

// let arr =[5,4,10,1,6,2];
// let n=arr.length
// for(let i=1;i<=n-1;i++){
//     let key=arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>key){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=key
//     }
//     console.log(arr)
