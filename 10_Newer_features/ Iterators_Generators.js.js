// //itiration example
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false } :
//             { done: true}
//         }
//     }
// }

// //create an arrays of names
// const  namesArr = ['Pero', 'Mate', 'Sime'];

// //init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// generator example
function* sayNames(){
    yield 'Pero';
    yield 'Ante';
    yield 'Mate';
}

const name = sayNames();

console.log(name.next());
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

//ID creator
function* createIds(){
    let index = 1;

    while(true){
        yield index ++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);