//SETS - unquie values

const set1 = new Set();

//add values
set1.add(100);
set1.add('A string');
set1.add(true);
set1.add({name: 'John'});
set1.add(100);

const set2 = new Set([1, true, 'string']);

console.log(set1);

//get count
console.log(set1.size);

//check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name:'John'}));

//delete from the set
set1.delete(100);
console.log(set1);

//looping through set
for(let item of set1){
    console.log(item);
}

//set forEach
set1.forEach((value)=>{
    console.log(value);
})

//convert set to array
const setArray = Array.from(set1);
console.log(setArray);