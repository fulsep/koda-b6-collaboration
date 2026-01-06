import { fahrenheitToCelcius } from "./fahrenheit-to-celcius";
import { fahrenheitToReamurs } from "./fahrenheit-to-reamur";
import { farenheitKelvin } from "./fahrenheit-to-kelvin";

export const fahrenheit = (num) => {
    return {
    toCelcius : fahrenheitToCelcius(num), 
    toReamur : fahrenheitToReamurs(num),
    toKelvin : farenheitKelvin(num) 
    }
} 
   