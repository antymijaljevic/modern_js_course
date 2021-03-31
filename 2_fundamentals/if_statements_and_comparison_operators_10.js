//if_statements_and_comparison_operators_10.js
if (something) {
    do something;
} else {
    do something else
}

const id = 100;

// //equal to
if (id == 100) {
    console.log('correct')
} else {
    console.log('incorrect')
}

// //not equal to
if (id != 100) {
    console.log('correct')
} else {
    console.log('incorrect')
}

// //equal to value and type
if (id === 100) {
    console.log('correct')
} else {
    console.log('incorrect')
}

// //not equal
if (id !== 100) {
    console.log('correct')
} else {
    console.log('incorrect')
}


//test if undefined
if (typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log(`no ID`)
}

// greater or less than
if (id >= 100) {
    console.log('correct')
} else {
    console.log('incorrect')
}

if (id <= 100) {
    console.log('correct')
} else {
    console.log('incorrect')
}

// //if else
const color = 'yellow';

if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('Color is blue');
} else{
    console.log('Color is not red or blue');
}

//logical operators
const name = 'Steve';
const age = 74;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`{name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// //or ||
if(age > 16 || age > 65){
    console.log(`${name} can not run in race`);
} else{
    console.log(`${name} is registrated for the race`)
}

//ternary operator
console.log(id  === 100 ? 'Correct': 'Incorrect');
if(id > 3 && id < 101 ? alert('Fuck!'):'hm');

//without braces (not suggested)
if(id === 100)
    console.log('Correct');
else
    console.log('Incorrect');