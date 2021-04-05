document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //create XHR Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);

    // console.log('READY STATE', xhr.readyState);

    //Optional used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READY STATE', xhr.readyState);
    };

    //check status 200
    xhr.onload = function (){
        console.log('READY STATE', xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText)
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`
        } 
    };

    //old check status
    // xhr.onreadystatechange = function(){
    //     console.log('READY STATE', xhr.readyState);
    //     if(this.status == 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     };
    // };

    //if something goes wrong
    xhr.onerror = function(){
        console.log('Request error ...');
    };

    //send request
    xhr.send();

    //readyState Values
    // 0: request not initalized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
};