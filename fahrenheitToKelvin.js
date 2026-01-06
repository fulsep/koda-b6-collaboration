export async function fahrenheitToKelvin(num) {
  try {
    if (typeof num !== "number" || num !== num) {
      throw new Error("Input harus berupa angka");
    }

    let k = (5 / 9) * (num - 32) + 273.15;
    return k;
  } catch (error) {
    throw error;
  }
}
