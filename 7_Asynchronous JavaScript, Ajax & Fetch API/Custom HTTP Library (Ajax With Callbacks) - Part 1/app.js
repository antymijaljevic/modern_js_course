const http = new easyHTTP;

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts)
//     }
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts)
//     }
// });

// Crate Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }  
// });

//Create PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }  
// });

// DELETE Post
http.delete('https://jsonplaceholder.typicode.com/posts/2', function(err, response){
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});