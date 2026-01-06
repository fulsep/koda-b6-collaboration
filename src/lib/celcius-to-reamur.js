export function celciusToReamur(celcius){
    if(typeof celcius !== "number"){
        const err = new Error("Input celcius bukan number")
        throw err
    }
    try{
        return celcius * (4/5)
    }catch(err){
        console.log(err)
    }
    
}