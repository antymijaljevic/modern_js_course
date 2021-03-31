const firstName = "william";
const lastName = "Johnson";
const age = 32;
const str = "Hello there my name is Ante";

let val;

val = firstName + lastName;

//concatenation
val = firstName + ' ' + lastName;

//append
val = "Ante ";
val += "Mijaljevic";

val = "Hello, my name is " + firstName + " and I am " + age;

//escaping
val = "That's awsome, I can't wait";
val = "That\'s awsome, I can\'t wait";

//length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//string slicing
val = firstName[0];
val = firstName[2];

// index
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//chartAt()
val = firstName.charAt('2');

//get last character
val = firstName.charAt(firstName.length -1);

//substrings
val = firstName.substring(0,2);

//slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split
val = str.split(' ');

//replace
val = str.replace('Ante', 'Jack');

//include
val = str.includes('Hello');
val = str.includes('Foo');

console.log(val);