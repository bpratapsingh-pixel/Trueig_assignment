function delay(time){
    return new Promise((res,rej)=>setTimeout(()=>{
        res("resolved")
    },time))
}

console.log("call 1");

// setTimeout(()=>{
//     console.log("call 2");
// },3000)

// console.log("call 3");

await delay(3000);

console.log("call 4");


// let timer = setTimeout(()=>{
//  console.log("call 5");
// },1000000)

// clearTimeout(timer);

// console.log("call 6");

// let interval = setInterval(()=>{
//     console.log("call 7");
// },1000)

// setTimeout(()=>{
//     clearInterval(interval)
// },10000)