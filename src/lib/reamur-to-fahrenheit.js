export function reamurToFahrenheit(reamur) {
    try {
        if (typeof reamur !== 'number') {
            throw new Error(`${typeof reamur} ${reamur} not a number!`)
        }
        const fahrenheit = reamur * 1.8 + 32
        return fahrenheit
    } catch (err) {
        return err
    }
}
