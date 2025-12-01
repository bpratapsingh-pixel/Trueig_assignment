const arr = [1,1,2,2,2,4,4,4,3,3,3,4,5,5,5];

let map = new Map();
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    }else{
        map.set(arr[i],1);
    }
}
console.log("Element Frequencys:" ,map);

for(let [key,value] of map){
    console.log(`Element: ${key}, Frequency: ${value}`);
}