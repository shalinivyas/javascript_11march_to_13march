// let productId = 1234//global scope
// function showProductId(){
//     let productId=4567//function scope
//     console.log(`productId in showProduct() is: ${productId}`)
// }
// showProductId()
// console.log(`productId after showProduct() is: ${productId}`)

//CLOSURES
//1ST EXAMPLE
// let greeting = (function(){
//     let message = "Hello"
//     let getMessage = function(){
//         return message
//     }
//     return{
//         getMessage
//     }
// })()
// console.log(greeting.getMessage());

//2ND EXAMPLE
// let a=10
// function outer(b){
//     b=80
//     function middle(c){
        
//         function inner(){
//             console.log(`${a},${b},${c}`)
//         }
//         inner()
//     }
//     middle(30)
// }
// outer(20)

//Increment counter example using closures
// function incCounter(){ //global scope avoide 
//     let count = 0        //but counter does not incremented
//     return ++count
// }

// var incCounter=(function(){
//     let count = 0
//     return function(){
//         return ++count
//     }
// })()

