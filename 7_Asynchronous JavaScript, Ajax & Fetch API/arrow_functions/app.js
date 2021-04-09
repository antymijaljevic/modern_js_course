// const sayHello = function(){
//     console.log('Hello');
// };

// const sayHello = () =>{
//     console.log('Hello');
// };

//one line function doesn't need braces
// const sayHello = () => console.log('Hello');

//one line return
// const sayHello = () => 'Hello';


//same as above
// const sayHello = function(){
//     return 'Hello';
// };


//return object
// const sayHello = () => ({ msg: 'Hello'});


//single param doesn't need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (name, surname) => console.log(`Hello ${name} ${surname}`);

// sayHello('fuck', 'you');

const users = [
    'Nathan',
    'John',
    'Junior'
];

// const nameLengths = users.map(function(name){
//     return name.length;
// });


//shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });



//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);