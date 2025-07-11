let number=[1,2,3,4];
let sum= number.reduce((acc, num) => acc+num, 10);
console.log(sum);

/* How it works
10+1=11
11+2=13
13+3=16
16+4=20*/

let results=["pass", "fail", "pass"];
let passCount= results.reduce((acc, r) => r=== "pass" ? acc+1 : acc, 0);
console.log(passCount);

/* How it works(if-else condition)
If r equals pass then acc+1(incrment the value)
else it will be acc(no change)
And it starts from 0 */