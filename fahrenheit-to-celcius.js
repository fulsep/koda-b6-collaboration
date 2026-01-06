function fahrenheitToCelcius(num) {
  if (typeof num !== "number" || num !== num) {
    console.log("Input harus berupa angka");
  }

  let k = (5 / 9) * (num - 32) + 273.15;
  return k;
}
