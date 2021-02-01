//Functional Programming - функции можно передавать другим функциям.

const { render } = require("pug");

//First-Сlass Function - функции первого классаю
//В JS -функции - это объекты. 

function greeting(){
    console.log('Hello world');
}

greeting();

//Check if function is an object?
// let car ={
//     color: 'red',
// }
// console.log(car.color);
// car.weight = 900;
// console.log(car.weight);

greeting.lang = 'English';
console.log(greeting.lang);

//Функции можно передавать как параметры другим функциям
//Обычно такие функции выступают в роли функций обратного вызова - callback function
//function expression
const square = function(x){
    return x*x;
}

let val = square(5);
console.log(val);

// ==== Practice ===

function greet(){
    console.log('Hello');
}

function bye(){
    console.log('Goodbye');
}

//function are first-class
function logGreetings(fn){
    fn();
}

logGreetings(greet);
logGreetings(bye);

// Можем передать несколько функций
 function formalGreet(){
     console.log('How are you?');
 }

 function casualGreet(){
    console.log ('What\'s up?');
 }

 function anyGreet(type, greetFormal, greetUnformal){
     if(type === 'formal'){
         greetFormal();
     }
     else if(type === 'casual'){
        greetUnformal();
     }
 }

 // 'formal' or 'casual'
 anyGreet('casual',formalGreet,casualGreet);
