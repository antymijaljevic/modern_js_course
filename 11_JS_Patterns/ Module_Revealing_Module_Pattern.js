//basic structure

// (function(){
//     //declare private vars and functions


//     return{
//         //declare private vars and functions

//     }
// })();


//standard module pattern
// const UICtrl = (function(){
//     let text = 'Hello World';

//     const textChange = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return{
//         callChangeText : function(){
//             textChange();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
// // UICtrl.textChange(); //can't access private

// console.log(UICtrl.text);


//revealing module pattern
const itemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item added ...');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return{
        add: add,
        // get: get
    }
})();


itemCtrl.add({id:1, name: 'John'});
itemCtrl.add({id:2, name: 'Mark'});
console.log(itemCtrl.get(2));