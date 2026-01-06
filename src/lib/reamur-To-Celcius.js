function reamurToKelvin(reamur) {
  if (typeof reamur !== "number" || isNaN(reamur)) {
    return "Input harus berupa angka";
  }

  const kelvin = (reamur * 5) / 4 + 273.15;
  return kelvin;
}

const suhuReamur = 20;
const hasil = reamurToKelvin(suhuReamur);

console.log(`${suhuReamur}°Re = ${hasil} K`);
