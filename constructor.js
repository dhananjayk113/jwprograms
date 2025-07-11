function Person(name, age){
    this.name= name; // this refer to the new object created
    this.age= age;
}

//Creating Object using the Constructor function
const Person1= new Person('John', 30);
const Person2= new Person('Jane', 25);

console.log(Person1.name);
console.log(Person2.age);