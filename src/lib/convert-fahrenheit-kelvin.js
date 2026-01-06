export function farenheitKelvin(fahrenheit) {
    try {
        if (typeof fahrenheit !== "number") {
            throw new Error(`${typeof fahrenheit} ${fahrenheit} is not a number!`)
        } else {
            const res = (fahrenheit - 32) * (5 / 9) + 273.15
            return res
        }
    } catch (err) {
        return err
    }
}