function reamurToCelcius(reamur) {
  if (typeof reamur !== "number" || isNaN(reamur)) {
    return "Input harus berupa angka";
  }

  const celcius = (reamur * 5) / 4;
  return celcius;
}


const suhuReamur = 20;
const hasil = reamurToCelcius(suhuReamur);

console.log(`${suhuReamur}°Re = ${hasil}°C`);
