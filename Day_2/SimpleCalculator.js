// history, callback

const calculator = {
    history:[],

    log(operation, x,y,res){
        this.history.push({
            operation,
            intput:[x,y],
            res
        })
    },

    add(x,y,callback){
        let ans = x+y;
        this.log("Addition",x,y,ans);
        callback(ans);
   },

  subtract(x,y,callback){
        let ans = x-y;
        this.log("Subtraction",x,y,ans);
        callback(ans);
   },

 multiply(x,y,callback){
        let ans = x*y;
        this.log("Multiply",x,y,ans);
        callback(ans);
   },

 divide(x,y,callback){
        let ans = x/y;
        this.log("Addition",x,y,ans);
        callback(ans);
   },
}

const display = (ans) =>{
    console.log(ans);
}

calculator.add(10,20,display);
calculator.subtract(50,23,display);
calculator.multiply(32,34,display);
calculator.divide(32,16,display);

console.log("User History:")
console.log(calculator.history);