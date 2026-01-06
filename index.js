import { fahrenheitToKelvin } from "./fahrenheit-to-kelvin.js";

async function conversi() {
  try {
    const kelvin = await fahrenheitToKelvin(10);
    console.log("Hasil konversi fahrenheit ke kelvin:", kelvin);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

conversi();
