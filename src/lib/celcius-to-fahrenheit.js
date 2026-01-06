export function celciusFarenheit(celcius) {
    try {
        if (typeof celcius !== "number") {
            throw new Error(`${typeof celcius} ${celcius} is not a number!`)
        }else{
            const res = (celcius * (9 / 5)) + 32
            return res
        }
    }
    catch (err) {
        return err
    }
}