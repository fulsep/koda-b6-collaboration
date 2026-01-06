function reamurToKelvin(reamur) {
  try {
    if (typeof reamur !== "number" || isNaN(reamur)) {
      throw new Error("Input harus berupa angka");
    }

    const kelvin = (reamur * 5) / 4 + 273.15;
    return kelvin;
  } catch (error) {
    return error.message;
  }
}

const suhuReamur = 20;
const hasil = reamurToKelvin(suhuReamur);

console.log(`${suhuReamur}°Re = ${hasil} K`);
