// there are errors
// 1. in src/lib/kelvin.js
// import { kelvinToCelcius } from "./kelvin-to-celcius";
// import { kelvinReamur as kelvinToReamur } from "./kelvin-to-reamur";
// import { kelvinToFahrenheit } from "./kelvin-to-fahrenheit";
// in kelvin.js there is node .js extension
// 2. in src/lib/kelvin-to-fahrenheit.js
// export default function kelvinToFahrenheit(kelvin) {
// provide default, it shouldn't provide default

import { rl, inputTemperature, inputStartTemp, inputGoalTemp} from "./src/lib/input.js";

import { fahrenheit } from "./src/lib/fahrenheit.js";
import { kelvinToCelcius, kelvinToFahrenheit, kelvinToReamur } from "./src/lib/kelvin.js";

async function main() {
  try {
    const startTemp = await inputStartTemp();
    const goalTemp = await inputGoalTemp(startTemp);
    const temp = await inputTemperature();
    if (startTemp === 2) {
      const converter = fahrenheit(temp);
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
