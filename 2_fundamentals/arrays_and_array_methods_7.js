//create some arrays
//first way
const numbers = [3, 2, 232, 11, 233, 22, 21, 5];
//second way
const numbers2 = new Array(22, 45, 223, 11, 22, 33);

const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

//get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);

//get single value
val = numbers[2];
val = numbers[0];
//insert into array
numbers[2] = 1000;
//find index of value
val = numbers.indexOf(22);

//mutating arrays
//add on to end
numbers.push(250);
//add to front
numbers.unshift(130);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values (1 where we start, 1 where we end)
numbers.splice(1, 1);
//reverse array
numbers.reverse();

//concatinate arrays
val = numbers.concat(numbers2);

// sort arrays
val = fruit.sort();
val = numbers.sort();

//use the "compare function"
val = numbers.sort(function(x, y) { return x - y});

var numbers = [50, 100, 2, 0];


console.log("With a compare function:");
numbers.sort((a, b) => a - b);
console.log(numbers);

//reverse sort
val = numbers.sort(function(x, y) { return y - x});

//find
function under50(num){
    return num < 4;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);