function reamurToCelcius(reamur) {
  if (typeof reamur !== "number" || isNaN(reamur)) {
    return "Input harus berupa angka";
  }

  const celcius = (reamur * 5) / 4;
  return celcius;
}
