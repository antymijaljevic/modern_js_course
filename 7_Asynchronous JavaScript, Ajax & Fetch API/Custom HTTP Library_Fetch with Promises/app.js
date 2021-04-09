const http = new EasyHTTP;

// Get Users
const users = http.get('https://api.github.com/users').then(data => console.log(data)).catch(err => console.log(err));