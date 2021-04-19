//callStack

//sync code example

// console.log('Start');

// function otherFunction(){
//     console.log('We are in another function');
//     console.log('do some stuff');
// }

// otherFunction();

// console.log('End');

//async code example

// console.log('Start');

// setTimeout(() => {
//     console.log('We are in the timeOut!');
// }, 2000);

// items = [1,2,3,4,5]
// items.forEach(item => {
//     console.log(item);
// });

// console.log('End');

//In a synchronous processing workflow, the Return statement tends to indicates the end of a given function's execution. In an asynchronous processing workflow, callbacks are more generally used to indicate the desired end of a given function's execution

console.log('Start');

function LoginUser(email, password, callback){
    setTimeout(() => {
        console.log('Now we get the data');
        callback({userEmail: email});
    }, 5000);
};

function getUserVideos(email, callback){
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 2000);
};

function videoDetails(){
    setTimeout(() => {
        callback('Title of the video');
    }, 2000);
};


const user = LoginUser('anty@google.com', 123456, user => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        });
    });
});


console.log('End');