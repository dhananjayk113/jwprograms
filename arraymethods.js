let fruits = ["apple", "banana"];
fruits.push("orange"); // Add element at the last 
console.log(fruits);  

let removefruit=fruits.pop();//  Removes the last element
console.log(removefruit);
console.log(fruits);

let firstfruit= fruits.shift(); // Removes the first element from the Array
console.log(firstfruit);
console.log(fruits);

fruits.unshift("Apple"); // Add element at the first 
console.log(fruits);

fruits.splice(0,0,"Kiwi"); // Remove oth element from 0th position and Kiwi in 1st Position
console.log(fruits);

let fruits_new= ["Apple", "Banana","Orange","Kiwi"];
let citrus= fruits_new.slice(1, 3); // Returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included)
console.log(fruits_new);
console.log(citrus);

let exotic=["Dragon fruit","Avacardo"];
let morefruits= fruits_new.concat(exotic);// Merges two or more arrays and returns a new array.
console.log(morefruits);

let index=fruits_new.indexOf("Orange");// index of element, -1 if element is missing
console.log(index);
let index_1=fruits_new.indexOf("Oranges");
console.log(index_1);

let hasAvacardo=exotic.includes("Avacardo");// Determines whether an array includes a certain value among its entries, returning true or false.
console.log(hasAvacardo);

exotic.reverse(); // Reverse the Array
console.log(exotic);

