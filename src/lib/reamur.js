import { reamurToKelvin } from "./reamur-to-kelvin.js";
import { reamurToCelcius } from "./reamur-to-celcius.js";
import { reamurToFahrenheit } from "./reamure-to-fahrenheit.js";

export function reamur(temp){
    if(typeof temp !== "number"){
        const err = new Error("Input is not a number")
        throw err
    }
    try{
        const rk = reamurToKelvin(temp);
        const rc = reamurToCelcius(temp);
        const rf = reamurToFahrenheit(temp);

        console.log(`Reamur :${temp} to Kelvin      : ${rk}`)
        console.log(`Reamur :${temp} to Celcius     : ${rc}`)
        console.log(`Reamur :${temp} to Fahrenheit  : ${rf}`)
    }catch(err){
        console.log(err)
    }
    
}


reamur(20)