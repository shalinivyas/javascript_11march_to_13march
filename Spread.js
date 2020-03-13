// function stringToArr(){
//     let prodCode = "Log-MO-500-A"
//     let values = [...prodCode]
//     console.log(values)
// }
// stringToArr() // it converts the string into array

// function copyArr(){
//     let oldArr = [1,2,3,4,5]
//     let newArr = [...oldArr,true,false,6,7,8]
//     let newArr1 = [true,false,...oldArr,"a","b","c"]
//     console.log(newArr)
//     console.log(newArr1)
//     console.log(oldArr)
// }
// copyArr()

// COPY ARRAY WITH OBJECTS

// let products = [
//     {
//         pId: 100,
//         pName: "natraj",
//         cost: 35
//     },
//     {
//         pId: 101,
//         pName: "Apsara",
//         cost: 45
//     }
// ]

// function copyObjectArrays(){
   
//     let diff = [...products]
//     diff[0].pName = "Dome"
//     diff[0].cost = 6767
//     console.log(`${products[0].cost} and Name is ${products[0].pName}`)
//     console.log(`${diff[0].cost} and Name is ${diff[0].pName}`)
// }
// copyObjectArrays()

//spread operator to concetenate
// let allProducts = products.concat(productsNew)

// let allProductsSpread = [...ProductsNew, ...products]
// console.log(allProductsSpread.length)

// let dt = new Date(2020,5,7)
// console.log(dt)
// let x = [2020,11,31]
// let holiday = new Date(...x)
// console.log(holiday)

// console.log("-----spread in function parameters-----")
// function funParams(){
//     multipleParams(1,2,3)
//     let args = [1,2,3]
//     multipleParams(...args)
// }

// function multipleParams(arg1,arg2,arg3){
//     console.log(`functions parameters are ${arg1}, ${arg2}, ${arg3}`)
//     console.log("")
// }
// funParams()

console.log("---spread to shallow copy objects----")
function objLiteral() {
    let orxy = {
        aId:100,
        aName: "Shalini",
        aCost: 456
    }

    let orxy2 = {...orxy}
    console.log(orxy2)
    console.log(orxy)
}
objLiteral()