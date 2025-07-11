let number=[1,2,3,4,5,6];
let evenNumber= number.filter(num=> num%2 === 0);
console.log(evenNumber);

let results=[{testcaseid: 1, status: "Fail"}, {testcaseid: 2, status: "Pass"}];
let passedCase= results.filter(r => r.status === "Pass");
console.log(passedCase);