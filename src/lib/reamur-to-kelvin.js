export function reamurToKelvin(reamur){
    if(typeof reamur !== "number"){
        const err = new Error("Input reamur bukan number")
        throw err
    }
    try{
        return (reamur * (5/4)) + 273
    }catch(err){
        console.log(err)
    }
    
}
