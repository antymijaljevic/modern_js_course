let re;

//brackets [] character sets
re = /gr[ae]y/i; //must be a or e
re = /[Gg]ray/i
re = /[^GF]ray/i  //match everything except a G or F
re = /[A-Z]ray/i; //match any upper case letter
re = /[A-Za-z]ray/; //match any upper and lower case letters
re = /[0-9]ray/; // match any digit
re = /[0-9][0-9]ray/; // match any digit

//braces {} - Quantifiers
re = /Hello/i;
re = /Hel{2}o/i; //set braces at front of letter
re = /Hel{2,8}o/i;
re = /Hel{2,}o/i; //must occur at least two times

//paretheses () grouping
re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;

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