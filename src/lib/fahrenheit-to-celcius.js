export function fahrenheitToCelcius(fahrenheit) {
    try {
        if (typeof fahrenheit !== "number" || fahrenheit !== fahrenheit) {
            throw new Error(`${typeof fahrenheit} ${fahrenheit} is not a number!`)
        }
        let c = (5 / 9) * (fahrenheit - 32)
        return c
    } catch (error) {
        return error
    }
}