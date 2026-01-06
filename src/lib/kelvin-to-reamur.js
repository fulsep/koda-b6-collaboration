export function celciusFarenheit(kelvin) {
    try {
        if (typeof kelvin !== "number") {
            throw new Error(`${typeof kelvin} ${kelvin} is not a number!`)
        } else {
            const res = (kelvin - 273) * (8 / 10)
            return res
        }
    }
    catch (err) {
        return err.message
    }
}