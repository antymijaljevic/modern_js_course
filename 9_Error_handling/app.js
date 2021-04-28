let re;

//shorthand characters classes




// String to match
const str = '3x3x3x3x';

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