//imported
const fetch = require('node-fetch');
const fs = require('fs');

console.log('START');

//set timeout
// setTimeout(() => {
//     console.log('waited 1 sec...')
// }, 1000);





//nested timeouts
// setTimeout(()=>{
//     console.log(3);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(1);
//         }, 1000);
//     }, 1000);
// }, 1000);





//error first callback
// fs.readFile('./algo.txt', {encoding: 'utf-8'}, (err, data)=>{
//     if(err){
//         console.error('ERROR');
//         console.error(err);
//     } else{
//         console.error('GOT DATA');
//         console.log(data);
//     }
// });




//create a promise
// const myPromise = new Promise((resolve, reject)=>{
//     const rand = Math.floor(Math.random() * 2);
//     if (rand === 0){
//         resolve();
//     } else {
//         reject();
//     }
// });





// myPromise
//     .then(()=>console.log('Success'))
//     .catch(()=>console.error('Something went wrong'));




//fs read file with promise
// fs.promises
//     .readFile('./algo.txt', {encoding:'utf-8'})
    // .then(data => console.log(data))
    // .catch(err => console.error(err));



//fetch with promises
// fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));




//load file with async/await
// const loadFile = async ()=>{
//     const data = await fs.promises.readFile('./algo.txt', {
//         encoding: 'utf-8'
//     });
//     console.log(data);
// };

// loadFile();


//load file with async/await with error catch
// const loadFile = async ()=>{
//     try {
//         const data = await fs.promises.readFile('./algo.txt', {
//             encoding: 'utf-8'
//         });
//         console.log(data); 
//     } catch (error) {
//         console.error(error);
//     }
// };
// loadFile();



//fetch pokemon file with async/await without error catch
// const fetchPokemon = async (id) => {
//     const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await res.json();
//     console.log(data);
// }

// fetchPokemon(3);





//fetch pokemon file with async/await without error catch
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchPokemon();

console.log('FINISH');
