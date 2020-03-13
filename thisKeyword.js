"use strict"
// var let = 20
// var x = 10
// console.log(let) // wrong practise

// console.log(this)

// let person = {
//     fname: "Kelly",
//     lname: "Desai",
//     fullName: function(){
//         return this.fname+ " " +this.lname
//     }
    
// }
// console.log(person.fullName())

//CONSTRUCTOR FUNCTION

// function Emp(empId, empName) {
//     this.empId = empId
//     this.empName = empName
// }

// let e1 = new Emp(100, "abc")
// console.log("using call")
// console.log(person.fullName.call())

//USING CALL()
// function callEg(a,b){
//     a="para1"
//     b="para2"
//     console.log(a + " " + b)
// }
// callEg.call("para1","para1")

//13 March call bind and apply

// var stud = {
//     rollNo: 200,
//     fNAme: "Kelly",
//     lNAme: "Desai",
//     getStudName: function(){
//         return this.fNAme + " "+this.lNAme
//     }
// }

//1st way
// var logName = function(lang1, lang2){
//     console.log(`Logged : ${this.getStudName()}`)
// }
// //logName()

// let logStudName = logName.bind(stud)
// console.log(logStudName())

// // OR 2nd way
// let logName = function(lang1,lang2){
//     console.log(`Logged: ${this.getStudName()}`)
// }.bind(stud)
// logName()

// OR 3rd way
// let logName = function(lang1,lang2){
//     console.log(`Logged: ${this.getStudName()}`)
//     console.log(`Arguments: ${lang1} and ${lang2}`)
// }.bind(stud)
// logName("shalini","vyas")

// logName.call(stud,"Shalini","Vyas") // using Call
// logName.apply(stud,["Shalini","Vyas"]) //using apply

// //function Borrowing

// var stud2 = {
//     rollNo: 102,
//     fNAme: "john",
//     lNAme: "sinha"
// }
// let newName = stud.getStudName.apply(stud2)
// console.log(newName)

// //function Currying

// function multiply(a,b){
//     return a*b
// }
// var multiplyByTwo = multiply.bind(this,2)

// console.log(multiplyByTwo(2))


// ---------------Arguments objects-----------
// behaves like an array******

function add(){
    var sum = 0
    for(let i = 0; i<arguments.length; i++){
        sum = sum + arguments[i]
    }
    console.log(sum)
}
add(1,2,3)

