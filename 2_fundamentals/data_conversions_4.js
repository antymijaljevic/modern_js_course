let val;

//number to string
val = String(555);
val = String(4+4);

//Boolean to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4,5]);

//toString()
val = (5).toString();
val = (true).toString();

//strings to numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //Nan Not A Number
val = Number([1, 2, 3]);

val = parseInt('100'); //parse as integer
val = parseFloat('100.30') //parse as float

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed()); //The toFixed() method formats a number using fixed-point notation.


const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);