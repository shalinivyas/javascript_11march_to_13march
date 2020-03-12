"use strict"
//named function
var message = "HEllo there"
function greet(){
    return message
}
console.log(greet(message));

//anonymous function
let output = function(num1,num2){
    let result = num1+num2
    return result
}
console.log(output(34,34));

//IIFE(immidiately invoked function expression)
(function(a,b){
    console.log(a+b)

})("learning"," function")

//ARROW FUNCTION INTRODUCED IN ES6
let add = (num1,num2) => {
    console.log("multiple lines")
    return num1+num2
}
console.log(add(4,5))

//arrow function with one parameter
let add1 = (a) => a+5
console.log(add1(10))
//or we can write like
//let add = a => a+5

//arrow function with one paeameter

let add3 = () => console.log("no parameters")

