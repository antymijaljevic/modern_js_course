//var, let, const

var name1 = 'John Doe';
console.log(name1);
name1 = 'Steve Smith'
console.log(name1)

//init var

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, numbers, _, $
//can't start with number
//Multi word vars
var firstName = 'John' //Camel case
var first_name = 'Sarah'; // Underscore
var FirstName = 'Tom'; // Pascal case

//Let
let name;
let name1 = 'John Doe';
console.log(name1);
name1 = 'Steve Smith'
console.log(name1)

//Const
const name = 'John';
console.log(name);
// can't reassign
name = 'Ante';
// have to assign a value
const greeting;

//object
const person = {
    name: 'John',
    age: 30,
}

//reassign
person.name = 'Ante';
person.age = 32;
console.log(person);

//array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
