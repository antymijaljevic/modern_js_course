let re;

//shorthand characters classes
re = /\w/;  //word character - alphanumeric or _
re = /\w+/; //one or more word characters
re = /\W/;  //non - word character 
re = /\d/; // match any digit
re = /\d+/; // match one or more digits
re = /\D/; // match any non digit
re = /\s/; //match whitespace
re = /\S/; //match non - whitespace
re = /Hell\b/i; //world boundary: isolate word from sequence

//assesrtions
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if NOT followed by y


// String to match
const str = 'Hello, welcome to Hellxt';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`)
    } else {
        console.log(`${str} does NOT matched ${re.source}`)
    }
}

reTest(re, str);