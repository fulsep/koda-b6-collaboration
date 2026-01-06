import { rl, inputTemperature, inputStartTemp, inputGoalTemp } from "./src/lib/input.js"; 
import { celciusFarenheit, celciusToKelvin, celciusToReamur } from "./src/lib/celcius.js";
import { fahrenheit } from "./src/lib/fahrenheit.js";
import { reamur } from "./src/lib/reamur.js";
import { kelvinToCelcius, kelvinToReamur, kelvinToFahrenheit } from "./src/lib/kelvin.js";

async function main() {
    try {
        const startTemp = await inputStartTemp();
        const goalTemp = await inputGoalTemp(startTemp);
        const temp = await inputTemperature();

        if (startTemp === 1){
            let converter
            if (goalTemp === 2){ // celcius to fahrenheit
                const fahrenheit = celciusFarenheit(temp)
                console.log(`Nilai dalam Fahrenheit adalah ${fahrenheit}`)
            } else if (goalTemp === 3){ // celcius to reamur
                const reamur = celciusToReamur(temp)
                console.log(`Nilai dalam Reamur adalah ${reamur}`)
            } else if (goalTemp === 4){ // celcius to kelvin
                const kelvin = celciusToKelvin(temp)
                console.log(`Nilai dalam Kelvin adalah ${kelvin}`)
            }
        } else if (startTemp === 2) {
            const converter =  fahrenheit(temp);
            if (goalTemp === 1) {
                const celcius = converter.toCelcius;
                console.log(`Nilai dalam celcius adalah ${celcius}`);
            } else if (goalTemp === 3) {
                const reamur = converter.toReamur;
                console.log(`Nilai dalam Reamur adalah ${reamur}`);
            } else if (goalTemp === 4) {
                const kelvin = converter.toKelvin;
                console.log(`Nilai dalam Kelvin adalah ${kelvin}`);
            }
        }else if(startTemp === 3){
            const converter = reamur(temp);
            if (goalTemp === 1) {
                const celcius = converter.toCelcius;
                console.log(`Nilai dalam celcius adalah ${celcius}`);
            } else if (goalTemp === 2) {
                const fahrenheit = converter.toFahrenheit;
                console.log(`Nilai dalam Fahrenheit adalah ${fahrenheit}`);
            } else if (goalTemp === 4) {
                const kelvin = converter.toKelvin;
                console.log(`Nilai dalam Kelvin adalah ${kelvin}`);
            }
        }

    } catch (error) {
        console.error(error.message); 
    } finally {
        rl.close(); 
    }
}

async function kelvinConverter() {
  try {
    const startTemp = await inputStartTemp();
    const goalTemp = await inputGoalTemp(startTemp);
    const temp = await inputTemperature();
    if (startTemp === 4) {
      if (goalTemp === 1) {
        let celcius = kelvinToCelcius(12);
        console.log(`Nilai dalam celcius adalah ${celcius}`);
      } else if (goalTemp === 2) {
        const fahrenheit = kelvinToFahrenheit(12);
        console.log(`Nilai dalam fahrenheit adalah ${fahrenheit}`);
      } else if (goalTemp === 3) {
        const reamure = kelvinToReamur(12)
        console.log(`Nilai dalam reamure adalah ${reamure}`);
      }
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
}


main();
kelvinConverter();