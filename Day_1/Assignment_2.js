let nums = [10,20,30,40,50];

console.log("Original Array:", nums);
console.log("Reversed Array:", nums.reverse());

nums.push(60);
console.log("After Pushing 60:", nums);

nums.pop();
console.log("After Popping an element:", nums);

let maxi = Math.max(...nums);
console.log("Maximum Element:", maxi);

let mini = Math.min(...nums);
console.log("Minimum Element:", mini);

console.log("Length of the Array:", nums.length);

for(let i=0;i<nums.length;i++){
    console.log(`Element at index ${i}:`,nums[i]);
}
for(let key in nums){
    console.log(`Key: ${key}, Value: ${nums[key]}`);
}
for(let value of nums){
    console.log("Value:", value);
}

nums.forEach((value,index)=>{
    if(index%2==0){
        console.log(`Even Index ${index}, Value: ${value}`);
    }
})
