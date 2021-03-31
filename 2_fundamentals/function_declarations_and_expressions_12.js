//FUNCTION DECLARATIONS

//old way
function greet(firstName, lastName){
    //default values for parameters
    if(typeof firstName === 'undefined'){firstName = 'John';}
    if(typeof lastName === 'undefined'){lastName = 'Doe';}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}
//greet();
console.log(greet('Ante', 'Mijaljevic'));


//new way for defaults
function greet(firstName ='Andela', lastName = 'Mijaljevic'){
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

//function expressions
const square = function(x = 8){
    return x * x;
};

console.log(square());

//IFI > immidiately invokable function expression
(function(){
    console.log('IIFE ran...');
})();

(function(name){
    console.log('Hello ' + name);
})('Ante');

//property methods
const todo = {
    add: function(){console.log('Add todo ...');},
    edit: function(id){console.log(`Edit todo ${id}`);},
}

//add to object
todo.delete = function(){console.log('Delete todo...');}

todo.add();
todo.edit(23);
todo.delete();