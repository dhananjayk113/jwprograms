/*function orderCoffee(callback){
    setTimeout(()=>{
        callback("Coffee is Ready!")
    }, 1000
    );
}
 
orderCoffee((coffee)=> {
    console.log(coffee);
});*/

function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}


console.log("FUNCTION 1: Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("FUNCTION 2: End (callback)");
});
console.log("FUNCTION 3: This runs immediately after async call");

