// function tryCatch(){
//     let result
//     try{
//         result=x/10
//         console.log("this statement is after the error in try")
//     }
//     catch(error){
//         console.log(error.message)
//     }
//     finally{
//         console.log("will always get executed")
//     }
// }
// tryCatch()

// CUSTOM ERRORS
function throwError(){
    try{
        attemptDIv()
    }catch(error){
        console.log(`${error.message}: Error Type: ${error.name}`)
    }
}
function attemptDIv(){
    let result
    try{
        result=x/10
    }catch(error){
        throw{
            "message":"Throw a message for attemptDIv method which is not defined " + error.message,
            "name": "My custom Error"
        }
    }
}
throwError()