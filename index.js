
import { rl, inputTemperature, inputStartTemp, inputGoalTemp } from "./src/lib/input.js"; 

import { fahrenheit } from "./src/lib/fahrenheit.js";


async function main() {
   
    try {

        const startTemp = await inputStartTemp();

        const goalTemp = await inputGoalTemp(startTemp);

        const temp = await inputTemperature();

        if (startTemp === 2) {
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
        }

    } catch (error) {
        console.error(error.message); 
    } finally {
        rl.close(); 
    }
}


main();