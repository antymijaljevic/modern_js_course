//date_and_times_9.js

let val;
const today = new Date();
let birthday = new Date('9-10-1988 11:25:00')
birthday = new Date('September 10 1988')
birthday = new Date('9/10/2081')

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(22);
birthday.setMilliseconds(222);

console.log(birthday);