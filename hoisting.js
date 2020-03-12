// console.log(productId)
// var productId = 1234 // undefined

// var productId = 456
// console.log(productId)
// let productId = 1234 //identifier 'productId' has already been declared

//calling the function before declaration
// showProductId()
// function showProductId(){
//     let productId = 1234
//     console.log(productId)
// }                           // no error will come it will print the value with respect to variables

function addNums(a,b){
    return a+b
}
console.log(addNums(4,5) + " (both number)")
console.log(addNums("lets","break") + " (both strings)")
console.log(addNums(4) + " (only one number)")
console.log(addNums("lets",2) + " (one string one number)")
console.log(addNums() + " (no parameter)")


// REDUCING THE SCOPE OF GLOBAL VARIABLES
const vars = {
    num1:10,
    str:"Hello"
}

// //"use strict"
// let res = 100            //CONFUSION IN USING DELETE
// delete res
// res=res+1
// console.log(res)