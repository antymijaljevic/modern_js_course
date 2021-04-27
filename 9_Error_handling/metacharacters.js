let re;
// Literal Characters
re = /hello/;

//metacharacters
re = /^h/i; // must start with 'h'
re = /llo$/i; //must end with 'llo'
re = /^brad hello$/i; //must begin and end with
re = /h.llo/i; // matches any ONE character
re = /h*llo/i; // matches any, zero or more characters
re = /gra?e?y/i; //optional characther
re = /gray\?/; //escape character

// String to match
const str = 'gray?';

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