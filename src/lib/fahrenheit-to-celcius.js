export function fahrenheitToCelcius(num) {
  if (typeof num !== "number" || num !== num) {
    console.log("Input harus berupa angka");
  }

  let c = (5 / 9) * (num - 32);
  return c;
}
