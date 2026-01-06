import { fahrenheitToCelcius } from "./fahrenheit-to-celcius.js";
import { fahrenheitToReamurs } from "./fahrenheit-to-reamur.js";
import { farenheitKelvin } from "./fahrenheit-to-kelvin.js";

export const fahrenheit = (num) => {
    return {
    toCelcius : fahrenheitToCelcius(num), 
    toReamur : fahrenheitToReamurs(num),
    toKelvin : farenheitKelvin(num) 
    }
} 
   