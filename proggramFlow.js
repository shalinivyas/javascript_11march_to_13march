'use strict'
//IF
// if(5===5){
//     console.log(true)
// }
// if(5<10){
//  console.log(false)
// }
// if(5){
//     console.log(true)
// }
//if always return truthy

// if(5){
//     let x =20
//     x = x+1
//     console.log(x)
// }
// console.log(x)//let has block level scope

 //let desgnation = "Manager"
// if(desgnation){
//     console.log('avail company car')
// }
// else{
//     console.log("use public transport")
// }
// //or
// let transport = (!desgnation)?"avail company car":"use public transport"
// console.log(transport)

//truthy examples
// if(''){
//     Console.log("yes for empty string")
// }
// else{
//     console.log("no for empty string")
// }
// if(' '){
//     console.log("yes for empty string")
// }
// else{
//     console.log("no for empty string")
// }
// if(null){
//     Console.log("yes for null")
// }
// else{
//     console.log("no for null")
// }
// if(0){
//     Console.log("yes for zero")
// }
// else{
//     console.log("no for zero")
// }

//FOR

// var nums =  [2,5,6,9,0,1]
// for(let i=0;i<nums.length;i++){
//     console.log(nums[i])
// }

// console.log("FOR IN..............")
// for(let n in nums)
// console.log(n)//it gives index

// console.log("FOR OF..............")
// for(let n of nums)
// console.log(n)//it gives value an in angular we use this

// //use for in when working with objects
// //use for of when working with enumerables

// var per = {
//     id : '01',
//     name : "shalini"
// }

// for(let p in per){
//     console.log(p)
// }

// //WHILE LOOP

// let count = 0
// while(count<=10){
//     console.log(count)
//     count++
// }


//CONFUSIon
//  var per = {
//      id : '01',
//      name : "shalini"
// }

//  for(let p in per){
//      console.log(`${p}`=`${per=id}`)
// }