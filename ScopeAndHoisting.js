function testScope()
{
    if(true)
    {
    var oldVar="I am a Var"; // function scope
    let newLet="I am a let"; //block scope
    const constant= "I am a const"; //block scope
}
console.log(oldVar); 
//console.log(newLet);
//console.log(constant);
}
testScope();