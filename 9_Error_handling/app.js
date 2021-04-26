const user = {email: 'anty@gmail.com'};

try {
  //produce a referenceError
  // myFun();
  // Produce a TypeError
  // null.myFun();
  //will produce a syntax error
  // eval('Hello World');
  //will produce a URL Error
  // decodeURI('%');
  if(!user.name){
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(`User Error: ${e.message}`)
  // console.log("It's null stupid")
  // console.log(e)
  // console.log(e.message)
  // console.log(e.name)
  // console.log(e instanceof ReferenceError)
  // console.log(e instanceof TypeError)
} finally {
  console.log('Runs no matter about result')
}

// console.log('Program continues')