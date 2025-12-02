// const arr = [1,1,2,[2,4,6],2,2,4,4,4,[7,8,[4,5],4],3,3,3,4,5,5,5];

// let map = new Map();
// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }else{
//         map.set(arr[i],1);
//     }
// }
// console.log("Element Frequencys:" ,map);

// for(let [key,value] of map){
//     console.log(`Element: ${key}, Frequency: ${value}`);
// }

// let faltArr = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i] instanceof Array){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j] instanceof Array){
//                 for(let k=0;k<arr[i][j].length;k++){
//                     faltArr.push(arr[i][j][k]);
//                 }
//             }else{
//                 faltArr.push(arr[i][j]);
//             }
//         }
//     }
//     else{
//         faltArr.push(arr[i]);
//     }
// }
// console.log("Flattened Array:", faltArr);
// let index = 0;
// let newArr =[];
// function helper(arr){
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             helper(arr[i]);
//         }
//         else{
//             newArr[index] = arr[i];
//             index++;
//         }
//     }
// }
// helper(arr);
// console.log(newArr);

const arr = [
  1, 1, 2, 2, 4, 6, 2, 2,
  4, 4, 4, 7, 8, 4, 5, 4,
  3, 3, 3, 4, 5, 5, 5
];

let freq = {};
for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]===undefined){
        freq[arr[i]] = 1;
    }else{
        freq[arr[i]]++
    }
}
console.log(freq);