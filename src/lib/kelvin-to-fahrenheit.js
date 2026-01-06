export default function kelvinToFahrenheit(kelvin) {
    try{
        if (typeof kelvin !== "number") {
            throw new Error(`${typeof kelvin} ${kelvin} is not a number!`)
        }else{
            return (kelvin - 273.15) * 9/5 + 32
        }
    }catch(err){
        return err
    }
}