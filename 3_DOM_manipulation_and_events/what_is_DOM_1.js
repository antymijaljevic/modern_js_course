//get element by id
// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id)

// console.log(document.getElementById('task-title').className)

// const taskTitle = document.getElementById('task-title');

// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// //change the content

// taskTitle.textContent = 'fuck you';
// taskTitle.innerText = 'lol';
// taskTitle.innerHTML = '<span style="color:red"> Task List </span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));


document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'green';
document.querySelector('li:nth-child(odd)').style.background = 'lightblue';