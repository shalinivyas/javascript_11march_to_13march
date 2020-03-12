let str = "this is immutable"
let res = str + "hello"
console.log(res)

let num = 10
num = num+1
console.log(num)

let nums = [1,2,3,4,5]
let arr = new Array(6,7,8)
let arrs = Array.of(19,20,21)
console.log(arrs)

// nums[2]=67
// nums.push(3)
// console.log(nums) // using push an pop we lose the orignal so not recommended

let Arr1 = ["a","b","c","d","e","f"]
let newVAlues = Arr1.slice(2,5) // index 2 se index 5 k ek pehle leta hai
console.log(newVAlues)
let newValues1 = Arr1.slice() // sari values leta h
console.log(newValues1)
let newValues2 = Arr1.slice(1) // zero index pr jo hota h use chod kr sb leta h
console.log(newValues2)

let Arr2 = ["ab","cd","ef","gh","ik","asd","dfs"]
let value1 = Arr2.splice(1,4)// pehla no kitni vale rkhni islye use hota hai or dusra kitne dlte krne h uskliye
console.log(Arr2)
let value2 = Arr2.splice(1,1)
console.log(value2)