export function kelvinToCelcius(kelvin) {
    try {
        if (typeof kelvin !== "number") {
            throw new Error(`${typeof kelvin} ${kelvin} is not a number!`)
        } else {
            let toKelvin = kelvin - 273
            return toKelvin
        }
    } catch (err) {
        return (err)
    }
}