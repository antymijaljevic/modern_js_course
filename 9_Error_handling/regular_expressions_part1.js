let re;

re = /hello/;

// console.log(re);
// console.log(re.source);

//exec() will return match in an array or null

// const res = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);

//test() returns true or false
// re = /hello/i; //makes it case insensitive
// re = /hello there/g; //global search 

// let result = re.test('index');
// console.log(result);

//match() will return result on null
// re = /hello there/i;
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() return index of the first match if not found returns -1
// re = /hello there/i;
// const str = 'Ante Hello there';
// const result = str.search(re);
// console.log(result);

//replace() will return new string with some or all matches of a pattern

re = /Ante/i;
const str = 'Ante je Uvijek tu';
const result = str.replace(re, 'Sime');
console.log(result);