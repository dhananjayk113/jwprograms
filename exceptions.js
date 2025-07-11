/*let user;
console.log(username);  ReferenceError: username is not defined 
console.log(username;    // SyntaxError: missing ) after argument list
 null.toString(); // TypeError: Cannot read properties of null (reading 'toString')*/

try{
   let user;
console.log(username); 
}
catch(error) {
    console.error("Error Caught:", error.message);
   // throw new Error("Custom error");
}
/*finally{
    console.log("cleanup code always run.")
}*/