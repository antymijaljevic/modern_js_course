//MAPS = key-value pairs, can use any type as a key or a value
const map1 = new Map();

//set keys
const key1 = 'some string',
    key2 = {},
    key3 = function(){};

//set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//count values
// console.log(map1.size);

//iterating MAPS

// for(let [key, value] of map1){
//     console.log(`${key} = ${value}`);
// }

// //iterate keys only
// for(let key of map1.keys()){
//     console.log(key);
// }

// //iterate values only
// for(let value of map1.values()){
//     console.log(value);
// }

// //loop with forEach
// map1.forEach(function(value, key){
//     console.log(`${key} = ${value}`)
// });

//convert to arrays

// //create an array of key-value pairs
// const keyValueArray = Array.from(map1);
// console.log(keyValueArray);

// //create an array of key-value pairs
// const valArr = Array.from(map1.values());
// console.log(valArr);

//create an array of key-value pairs
const keyArr = Array.from(map1.keys());
console.log(keyArr);