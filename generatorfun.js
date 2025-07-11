function* generatorFunction(){
    yield 'Hello';
    yield 'World';
    yield '!';
}

// Using the generator function
const iterator= generatorFunction();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// Generator function to generate square of numbers up to a limit
function* squareGenerator(limit){
    for(let i=1; i<=limit; i++){
        yield i*i; // Pause and return the square of i
    }
}

// Using the generator function
const squares= squareGenerator(5);

console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().done);
