//primitive and reference data types

//ECMAScript 6 [ES6]

//primitive data types
//string, number, boolean, null, undefined, symbols (ES6)

//string
const name = 'John Doe';
console.log(typeof name);
//number
const age = 32;
console.log(typeof age);
//boolean
const hasKids = true;
console.log(typeof hasKids);
//Null
const car = null;
console.log(typeof car);
//undefined
let test;
console.log(typeof test);
//Symbol
const sym = Symbol();
console.log(typeof sym);

//reference data types - Objects
//arrys, object literals, functions, dates, anything else

//array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);
//object literal
const address = {
    city: 'Boston',
    state: 'MA'
}

console.log(typeof address);

//dates
const today = new Date();
console.log(today);
console.log(typeof today);