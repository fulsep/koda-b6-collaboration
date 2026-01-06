export function celciusToReamur(celcius) {
    try {
        if (typeof celcius !== "number") {
            throw new Error(`${typeof celcius} ${celcius} is not a number!`)
        }else{
            return celcius * (4 / 5)
        }
    } catch (err) {
        return err
    }
}